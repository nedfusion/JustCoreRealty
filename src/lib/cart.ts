import { supabase, type CartItem, type Product } from './supabase';

const SESSION_KEY = 'shop_session_id';

export function getSessionId(): string {
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = crypto.randomUUID();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export async function getCart(): Promise<CartItem[]> {
  const sessionId = getSessionId();
  const { data, error } = await supabase
    .from('cart_items')
    .select('*, product:products(*, product_categories(name, slug))')
    .eq('session_id', sessionId);
  if (error) throw error;
  return data as CartItem[];
}

export async function addToCart(product: Product, quantity = 1): Promise<void> {
  const sessionId = getSessionId();
  const { data: existing } = await supabase
    .from('cart_items')
    .select('id, quantity')
    .eq('session_id', sessionId)
    .eq('product_id', product.id)
    .maybeSingle();

  if (existing) {
    await supabase
      .from('cart_items')
      .update({ quantity: existing.quantity + quantity, updated_at: new Date().toISOString() })
      .eq('id', existing.id);
  } else {
    await supabase
      .from('cart_items')
      .insert({ session_id: sessionId, product_id: product.id, quantity });
  }
}

export async function updateCartQuantity(itemId: string, quantity: number): Promise<void> {
  if (quantity <= 0) {
    await removeFromCart(itemId);
    return;
  }
  await supabase.from('cart_items').update({ quantity, updated_at: new Date().toISOString() }).eq('id', itemId);
}

export async function removeFromCart(itemId: string): Promise<void> {
  await supabase.from('cart_items').delete().eq('id', itemId);
}

export async function clearCart(): Promise<void> {
  const sessionId = getSessionId();
  await supabase.from('cart_items').delete().eq('session_id', sessionId);
}

export function formatPrice(product: Product, currency = 'NGN'): string {
  if (product.price_on_request || (!product.price_min && !product.price_max)) {
    return 'Price on Request';
  }
  const price = product.price_min ?? 0;
  if (currency === 'NGN') {
    const ngnPrice = price * 2050; // approximate GBP to NGN
    return `₦${ngnPrice.toLocaleString()}`;
  }
  const symbol = currency === 'GBP' ? '£' : currency === 'USD' ? '$' : '₦';
  const hasRange = product.price_max && product.price_max !== product.price_min;
  if (hasRange) {
    return `From ${symbol}${price.toLocaleString()}`;
  }
  return `${symbol}${price.toLocaleString()}`;
}
