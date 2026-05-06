import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { type CartItem, type Product } from '../lib/supabase';
import { getCart, addToCart, updateCartQuantity, removeFromCart, clearCart } from '../lib/cart';

type CartContextType = {
  items: CartItem[];
  count: number;
  total: number;
  loading: boolean;
  addItem: (product: Product, quantity?: number) => Promise<void>;
  updateItem: (itemId: string, quantity: number) => Promise<void>;
  removeItem: (itemId: string) => Promise<void>;
  emptyCart: () => Promise<void>;
  refresh: () => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);

  const refresh = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getCart();
      setItems(data);
    } catch {
      // silently fail
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    refresh();
  }, [refresh]);

  const addItem = async (product: Product, quantity = 1) => {
    await addToCart(product, quantity);
    await refresh();
  };

  const updateItem = async (itemId: string, quantity: number) => {
    await updateCartQuantity(itemId, quantity);
    await refresh();
  };

  const removeItem = async (itemId: string) => {
    await removeFromCart(itemId);
    await refresh();
  };

  const emptyCart = async () => {
    await clearCart();
    setItems([]);
  };

  const count = items.reduce((acc, i) => acc + i.quantity, 0);
  const total = items.reduce((acc, i) => {
    const price = i.product?.price_min ?? 0;
    return acc + price * i.quantity;
  }, 0);

  return (
    <CartContext.Provider value={{ items, count, total, loading, addItem, updateItem, removeItem, emptyCart, refresh }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error('useCart must be used within CartProvider');
  return ctx;
}
