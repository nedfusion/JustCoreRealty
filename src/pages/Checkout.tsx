import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { CreditCard, Building2, Smartphone } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabase';

declare global {
  interface Window {
    FlutterwaveCheckout?: (config: Record<string, unknown>) => void;
    PaystackPop?: { setup: (config: Record<string, unknown>) => { openIframe: () => void } };
  }
}

const FLUTTERWAVE_KEY = import.meta.env.VITE_FLUTTERWAVE_PUBLIC_KEY as string;
const PAYSTACK_KEY = import.meta.env.VITE_PAYSTACK_PUBLIC_KEY as string;

type Gateway = 'paystack' | 'flutterwave' | 'bank';

export default function Checkout() {
  const { items, total, emptyCart } = useCart();
  const navigate = useNavigate();
  const [gateway, setGateway] = useState<Gateway>('paystack');
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', address: '', city: '', notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  if (items.length === 0) {
    return (
      <div style={{ paddingTop: 'var(--nav-height)', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-primary-400)' }}>Your cart is empty</p>
        <Link to="/shop" className="btn btn-primary">Go Shopping</Link>
      </div>
    );
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required';
    if (!form.phone.trim()) e.phone = 'Phone is required';
    if (!form.address.trim()) e.address = 'Address is required';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function createOrder(paymentRef: string, payGateway: string): Promise<string> {
    const { data: order, error } = await supabase.from('orders').insert({
      customer_name: form.name,
      customer_email: form.email,
      customer_phone: form.phone,
      shipping_address: `${form.address}, ${form.city}`,
      subtotal: total,
      total: total,
      currency: 'GBP',
      payment_gateway: payGateway,
      payment_reference: paymentRef,
      payment_status: 'paid',
      order_status: 'confirmed',
      notes: form.notes,
    }).select('id, order_ref').single();

    if (error) throw error;

    await supabase.from('order_items').insert(
      items.map(item => ({
        order_id: order.id,
        product_id: item.product_id,
        product_name: item.product?.name ?? '',
        product_brand: item.product?.brand ?? '',
        price: item.product?.price_min ?? 0,
        quantity: item.quantity,
      }))
    );

    return order.order_ref;
  }

  function loadPaystackScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.PaystackPop) { resolve(); return; }
      const s = document.createElement('script');
      s.src = 'https://js.paystack.co/v1/inline.js';
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load Paystack'));
      document.head.appendChild(s);
    });
  }

  function loadFlutterwaveScript(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (window.FlutterwaveCheckout) { resolve(); return; }
      const s = document.createElement('script');
      s.src = 'https://checkout.flutterwave.com/v3.js';
      s.onload = () => resolve();
      s.onerror = () => reject(new Error('Failed to load Flutterwave'));
      document.head.appendChild(s);
    });
  }

  async function handlePaystack() {
    await loadPaystackScript();
    const amountKobo = Math.round(total * 2050 * 100); // GBP to NGN to kobo
    const handler = window.PaystackPop!.setup({
      key: PAYSTACK_KEY,
      email: form.email,
      amount: amountKobo,
      currency: 'NGN',
      ref: `JCR-${Date.now()}`,
      metadata: { name: form.name, phone: form.phone },
      callback: async (response: { reference: string }) => {
        setLoading(true);
        const ref = await createOrder(response.reference, 'paystack');
        await emptyCart();
        navigate(`/order-success?ref=${ref}`);
      },
      onClose: () => setLoading(false),
    });
    handler.openIframe();
  }

  async function handleFlutterwave() {
    await loadFlutterwaveScript();
    const amountNGN = Math.round(total * 2050);
    window.FlutterwaveCheckout!({
      public_key: FLUTTERWAVE_KEY,
      tx_ref: `JCR-FLW-${Date.now()}`,
      amount: amountNGN,
      currency: 'NGN',
      customer: { email: form.email, phone_number: form.phone, name: form.name },
      customizations: { title: 'Justcore Realty Shop', description: `Order of ${items.length} item(s)`, logo: '' },
      callback: async (data: { transaction_id: string; tx_ref: string }) => {
        setLoading(true);
        const ref = await createOrder(data.tx_ref, 'flutterwave');
        await emptyCart();
        navigate(`/order-success?ref=${ref}`);
      },
      onclose: () => setLoading(false),
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    try {
      if (gateway === 'paystack') {
        setLoading(false);
        await handlePaystack();
      } else if (gateway === 'flutterwave') {
        setLoading(false);
        await handleFlutterwave();
      } else {
        const ref = await createOrder(`BANK-${Date.now()}`, 'bank');
        await emptyCart();
        navigate(`/order-success?ref=${ref}`);
      }
    } catch (err) {
      console.error(err);
      alert('Payment failed. Please try again.');
      setLoading(false);
    }
  }

  const field = (key: keyof typeof form, label: string, type = 'text', placeholder = '') => (
    <div>
      <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-700)', display: 'block', marginBottom: '8px' }}>
        {label}
      </label>
      <input
        type={type} value={form[key]} placeholder={placeholder}
        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
        style={{
          width: '100%', padding: '12px 16px', border: `1px solid ${errors[key] ? 'var(--color-error-500)' : 'var(--color-primary-300)'}`,
          fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.2s',
          background: '#fff', color: 'var(--color-primary-900)',
        }}
        onFocus={e => (e.target.style.borderColor = 'var(--color-primary-900)')}
        onBlur={e => (e.target.style.borderColor = errors[key] ? 'var(--color-error-500)' : 'var(--color-primary-300)')}
      />
      {errors[key] && <p style={{ fontSize: '0.7rem', color: 'var(--color-error-500)', marginTop: '4px' }}>{errors[key]}</p>}
    </div>
  );

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <div style={{ background: 'var(--color-primary-50)', padding: '48px 0', marginBottom: '48px' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>Checkout</h1>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '80px' }}>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
            {/* Form */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
              {/* Contact */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--color-primary-200)' }}>
                  Contact Information
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {field('name', 'Full Name', 'text', 'John Doe')}
                  {field('email', 'Email Address', 'email', 'john@example.com')}
                  {field('phone', 'Phone Number', 'tel', '+234 800 000 0000')}
                </div>
              </div>

              {/* Shipping */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--color-primary-200)' }}>
                  Shipping Address
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {field('address', 'Street Address', 'text', '123 Victoria Island')}
                  {field('city', 'City / State', 'text', 'Lagos, Nigeria')}
                </div>
              </div>

              {/* Notes */}
              <div>
                <label style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-700)', display: 'block', marginBottom: '8px' }}>
                  Order Notes (optional)
                </label>
                <textarea value={form.notes} onChange={e => setForm(f => ({ ...f, notes: e.target.value }))}
                  rows={3} placeholder="Special delivery instructions or requests..."
                  style={{ width: '100%', padding: '12px 16px', border: '1px solid var(--color-primary-300)', fontSize: '0.85rem', outline: 'none', resize: 'vertical', background: '#fff' }}
                  onFocus={e => (e.target.style.borderColor = 'var(--color-primary-900)')}
                  onBlur={e => (e.target.style.borderColor = 'var(--color-primary-300)')} />
              </div>

              {/* Payment */}
              <div>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '24px', paddingBottom: '12px', borderBottom: '1px solid var(--color-primary-200)' }}>
                  Payment Method
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {([
                    { id: 'paystack' as Gateway, icon: Smartphone, label: 'Paystack', desc: 'Pay with card, bank transfer, or USSD via Paystack' },
                    { id: 'flutterwave' as Gateway, icon: CreditCard, label: 'Flutterwave', desc: 'Pay with card or mobile money via Flutterwave' },
                    { id: 'bank' as Gateway, icon: Building2, label: 'Bank Transfer', desc: 'Direct bank transfer — we\'ll send you account details' },
                  ] as const).map(({ id, icon: Icon, label, desc }) => (
                    <label key={id} style={{
                      display: 'flex', alignItems: 'flex-start', gap: '12px', padding: '16px',
                      border: `2px solid ${gateway === id ? 'var(--color-primary-900)' : 'var(--color-primary-200)'}`,
                      cursor: 'pointer', transition: 'border-color 0.2s', background: gateway === id ? 'var(--color-primary-50)' : '#fff',
                    }}>
                      <input type="radio" name="gateway" value={id} checked={gateway === id} onChange={() => setGateway(id)} style={{ marginTop: '2px', accentColor: 'var(--color-primary-900)' }} />
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', flex: 1 }}>
                        <Icon size={18} style={{ color: 'var(--color-primary-700)', marginTop: '1px', flexShrink: 0 }} />
                        <div>
                          <p style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '4px' }}>{label}</p>
                          <p style={{ fontSize: '0.75rem', color: 'var(--color-primary-500)' }}>{desc}</p>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>

            {/* Order summary */}
            <div style={{ background: 'var(--color-primary-50)', padding: '32px', position: 'sticky', top: 'calc(var(--nav-height) + 24px)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '24px' }}>
                Order Summary
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '24px' }}>
                {items.map(item => {
                  const p = item.product;
                  if (!p) return null;
                  return (
                    <div key={item.id} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                      <div style={{ width: '56px', height: '70px', background: 'var(--color-primary-200)', flexShrink: 0, overflow: 'hidden' }}>
                        <img src={p.images?.[0] || ''} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <p style={{ fontSize: '0.75rem', fontWeight: 600, color: 'var(--color-primary-500)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{p.brand}</p>
                        <p style={{ fontSize: '0.8rem', lineHeight: 1.3, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{p.name}</p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--color-primary-500)' }}>Qty: {item.quantity}</p>
                      </div>
                      <p style={{ fontSize: '0.8rem', fontWeight: 600, flexShrink: 0 }}>
                        £{((p.price_min ?? 0) * item.quantity).toLocaleString()}
                      </p>
                    </div>
                  );
                })}
              </div>
              <div style={{ borderTop: '1px solid var(--color-primary-200)', paddingTop: '16px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--color-primary-600)' }}>Subtotal (GBP)</span>
                  <span>£{total.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--color-primary-600)' }}>Approx. (NGN)</span>
                  <span>₦{(total * 2050).toLocaleString()}</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--color-primary-300)', paddingTop: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</span>
                <div style={{ textAlign: 'right' }}>
                  <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', display: 'block' }}>£{total.toLocaleString()}</span>
                  <span style={{ fontSize: '0.7rem', color: 'var(--color-primary-500)' }}>≈ ₦{(total * 2050).toLocaleString()}</span>
                </div>
              </div>

              <button type="submit" className="btn btn-primary" disabled={loading}
                style={{ width: '100%', padding: '18px', fontSize: '0.8rem', justifyContent: 'center', opacity: loading ? 0.7 : 1, cursor: loading ? 'not-allowed' : 'pointer' }}>
                {loading ? 'Processing...' : `Pay with ${gateway === 'paystack' ? 'Paystack' : gateway === 'flutterwave' ? 'Flutterwave' : 'Bank Transfer'}`}
              </button>
              <p style={{ fontSize: '0.65rem', color: 'var(--color-primary-400)', textAlign: 'center', marginTop: '12px' }}>
                🔒 Your payment information is secure and encrypted
              </p>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
