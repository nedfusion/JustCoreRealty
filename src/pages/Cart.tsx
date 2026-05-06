import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/cart';

export default function Cart() {
  const { items, count, total, loading, updateItem, removeItem } = useCart();

  if (loading) return (
    <div style={{ paddingTop: 'var(--nav-height)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '40px', height: '40px', border: '2px solid var(--color-primary-200)', borderTopColor: 'var(--color-primary-900)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );

  return (
    <div style={{ paddingTop: 'var(--nav-height)', minHeight: '80vh' }}>
      <div style={{ background: 'var(--color-primary-50)', padding: '48px 0', marginBottom: '48px' }}>
        <div className="container">
          <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
            Your Cart
          </h1>
          <p style={{ color: 'var(--color-primary-500)', marginTop: '8px', fontSize: '0.85rem' }}>
            {count} {count === 1 ? 'item' : 'items'}
          </p>
        </div>
      </div>

      <div className="container" style={{ paddingBottom: '80px' }}>
        {items.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <ShoppingBag size={48} style={{ color: 'var(--color-primary-300)', margin: '0 auto 16px' }} />
            <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', color: 'var(--color-primary-400)', marginBottom: '16px' }}>
              Your cart is empty
            </p>
            <p style={{ color: 'var(--color-primary-500)', fontSize: '0.85rem', marginBottom: '32px' }}>
              Discover our curated collection of luxury furniture and home accessories.
            </p>
            <Link to="/shop" className="btn btn-primary">Start Shopping</Link>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '48px', alignItems: 'start' }}>
            {/* Items */}
            <div style={{ flex: 2 }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
                {items.map((item, i) => {
                  const p = item.product;
                  if (!p) return null;
                  return (
                    <div key={item.id} style={{
                      display: 'flex', gap: '20px', padding: '24px 0',
                      borderBottom: '1px solid var(--color-primary-200)',
                      animation: `fadeInUp 0.3s ease ${i * 0.05}s both`,
                    }}>
                      <Link to={`/product/${p.slug}`} style={{ flexShrink: 0 }}>
                        <div style={{ width: '88px', height: '110px', background: 'var(--color-primary-100)', overflow: 'hidden' }}>
                          <img src={p.images?.[0] || 'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg'}
                            alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </div>
                      </Link>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', marginBottom: '4px' }}>
                          {p.brand}
                        </p>
                        <Link to={`/product/${p.slug}`} style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 400, display: 'block', marginBottom: '8px', lineHeight: 1.3 }}>
                          {p.name}
                        </Link>
                        <p style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--color-primary-900)', marginBottom: '16px' }}>
                          {formatPrice(p, 'GBP')}
                        </p>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-primary-200)' }}>
                            <button onClick={() => updateItem(item.id, item.quantity - 1)}
                              style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
                              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-100)')}
                              onMouseLeave={e => (e.currentTarget.style.background = '')}>
                              <Minus size={12} />
                            </button>
                            <span style={{ width: '32px', textAlign: 'center', fontSize: '0.8rem', fontWeight: 600 }}>{item.quantity}</span>
                            <button onClick={() => updateItem(item.id, item.quantity + 1)}
                              style={{ width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'background 0.2s' }}
                              onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-100)')}
                              onMouseLeave={e => (e.currentTarget.style.background = '')}>
                              <Plus size={12} />
                            </button>
                          </div>
                          <button onClick={() => removeItem(item.id)}
                            style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: 'var(--color-primary-400)', cursor: 'pointer', transition: 'color 0.2s' }}
                            onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-error-500)')}
                            onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-400)')}>
                            <Trash2 size={12} /> Remove
                          </button>
                        </div>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.1rem' }}>
                          £{((p.price_min ?? 0) * item.quantity).toLocaleString()}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Summary */}
            <div style={{ background: 'var(--color-primary-50)', padding: '32px', position: 'sticky', top: 'calc(var(--nav-height) + 24px)' }}>
              <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '24px' }}>
                Order Summary
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--color-primary-600)' }}>Subtotal</span>
                  <span>£{total.toLocaleString()}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                  <span style={{ color: 'var(--color-primary-600)' }}>Shipping</span>
                  <span style={{ color: 'var(--color-success-500)', fontWeight: 600 }}>Calculated at checkout</span>
                </div>
              </div>
              <div style={{ borderTop: '1px solid var(--color-primary-200)', paddingTop: '16px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontWeight: 700, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Total</span>
                <span style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem' }}>£{total.toLocaleString()}</span>
              </div>
              <Link to="/checkout" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '8px', padding: '16px' }}>
                Proceed to Checkout <ArrowRight size={14} />
              </Link>
              <Link to="/shop" style={{ display: 'block', textAlign: 'center', marginTop: '16px', fontSize: '0.75rem', color: 'var(--color-primary-500)', letterSpacing: '0.05em', textDecoration: 'underline' }}>
                Continue Shopping
              </Link>

              {/* Payment badges */}
              <div style={{ marginTop: '24px', borderTop: '1px solid var(--color-primary-200)', paddingTop: '16px' }}>
                <p style={{ fontSize: '0.65rem', color: 'var(--color-primary-500)', textAlign: 'center', marginBottom: '8px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                  Secure Payment
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', gap: '8px', flexWrap: 'wrap' }}>
                  {['Paystack', 'Flutterwave', 'Bank Transfer'].map(gateway => (
                    <span key={gateway} style={{
                      fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      padding: '4px 8px', border: '1px solid var(--color-primary-300)', color: 'var(--color-primary-600)',
                    }}>
                      {gateway}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
