import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { CircleCheck as CheckCircle, Package, ArrowRight } from 'lucide-react';
import { supabase, type Order } from '../lib/supabase';

export default function OrderSuccess() {
  const [params] = useSearchParams();
  const ref = params.get('ref');
  const [order, setOrder] = useState<Order | null>(null);

  useEffect(() => {
    if (!ref) return;
    supabase.from('orders').select('*').eq('order_ref', ref).maybeSingle()
      .then(({ data }) => setOrder(data as Order));
  }, [ref]);

  return (
    <div style={{ paddingTop: 'var(--nav-height)', minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ textAlign: 'center', maxWidth: '560px', padding: '48px 24px', animation: 'fadeInUp 0.5s ease' }}>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '24px' }}>
          <CheckCircle size={64} style={{ color: 'var(--color-success-500)' }} />
        </div>

        <p style={{ fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-success-500)', marginBottom: '12px' }}>
          Order Confirmed
        </p>
        <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '16px' }}>
          Thank You!
        </h1>
        <p style={{ color: 'var(--color-primary-600)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '32px' }}>
          Your order has been placed successfully. We'll send you a confirmation email shortly with details about your delivery.
        </p>

        {order && (
          <div style={{ background: 'var(--color-primary-50)', padding: '24px', marginBottom: '32px', textAlign: 'left' }}>
            <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '16px' }}>
              <Package size={18} style={{ color: 'var(--color-primary-500)', marginTop: '2px' }} />
              <div>
                <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', marginBottom: '4px' }}>Order Reference</p>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', letterSpacing: '0.05em' }}>{order.order_ref}</p>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { label: 'Customer', value: order.customer_name },
                { label: 'Email', value: order.customer_email },
                { label: 'Total', value: `£${order.total.toLocaleString()}` },
                { label: 'Payment', value: order.payment_gateway },
              ].map(({ label, value }) => (
                <div key={label}>
                  <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', marginBottom: '2px' }}>{label}</p>
                  <p style={{ fontSize: '0.8rem', color: 'var(--color-primary-800)', fontWeight: 500 }}>{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/shop" className="btn btn-primary" style={{ gap: '8px' }}>
            Continue Shopping <ArrowRight size={14} />
          </Link>
          <Link to="/contact" className="btn btn-outline">
            Need Help?
          </Link>
        </div>
      </div>
    </div>
  );
}
