import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft, ChevronLeft, ChevronRight, Package, Clock, Ruler, Heart } from 'lucide-react';
import { supabase, type Product } from '../lib/supabase';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/cart';
import ProductCard from '../components/ProductCard';

export default function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [related, setRelated] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [imgIdx, setImgIdx] = useState(0);
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);
  const { addItem } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    supabase.from('products').select('*, product_categories(name, slug)')
      .eq('slug', slug).maybeSingle()
      .then(({ data }) => {
        setProduct(data as Product);
        setLoading(false);
        if (data) {
          supabase.from('products').select('*, product_categories(name, slug)')
            .eq('category_id', (data as Product).category_id)
            .neq('id', (data as Product).id)
            .limit(4).then(({ data: rel }) => setRelated((rel as Product[]) ?? []));
        }
      });
  }, [slug]);

  async function handleAddToCart() {
    if (!product) return;
    await addItem(product, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  }

  if (loading) return (
    <div style={{ paddingTop: 'var(--nav-height)', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '40px', height: '40px', border: '2px solid var(--color-primary-200)', borderTopColor: 'var(--color-primary-900)', borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
      <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
    </div>
  );

  if (!product) return (
    <div style={{ paddingTop: 'var(--nav-height)', minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '16px' }}>
      <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', color: 'var(--color-primary-400)' }}>Product not found</p>
      <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
    </div>
  );

  const images = product.images?.length > 0 ? product.images : ['https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg'];

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      <div className="container" style={{ padding: '32px 24px' }}>
        {/* Breadcrumb */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '32px' }}>
          <button onClick={() => navigate(-1)} style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '0.7rem', color: 'var(--color-primary-500)', cursor: 'pointer' }}>
            <ArrowLeft size={14} /> Back
          </button>
          <span style={{ color: 'var(--color-primary-300)' }}>/</span>
          <Link to="/shop" style={{ fontSize: '0.7rem', color: 'var(--color-primary-500)' }}>Shop</Link>
          {product.product_categories && (
            <>
              <span style={{ color: 'var(--color-primary-300)' }}>/</span>
              <Link to={`/shop/${product.product_categories.slug}`} style={{ fontSize: '0.7rem', color: 'var(--color-primary-500)' }}>
                {product.product_categories.name}
              </Link>
            </>
          )}
          <span style={{ color: 'var(--color-primary-300)' }}>/</span>
          <span style={{ fontSize: '0.7rem', color: 'var(--color-primary-700)' }}>{product.name}</span>
        </div>

        {/* Main content */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '64px', alignItems: 'start' }}>
          {/* Images */}
          <div>
            <div style={{ position: 'relative', aspectRatio: '4/5', background: 'var(--color-primary-100)', marginBottom: '12px', overflow: 'hidden' }}>
              <img src={images[imgIdx]} alt={product.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              {images.length > 1 && (
                <>
                  <button onClick={() => setImgIdx(i => (i - 1 + images.length) % images.length)}
                    style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', background: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ChevronLeft size={16} />
                  </button>
                  <button onClick={() => setImgIdx(i => (i + 1) % images.length)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', width: '36px', height: '36px', background: '#fff', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ChevronRight size={16} />
                  </button>
                </>
              )}
              {product.is_new_in && (
                <span style={{ position: 'absolute', top: '16px', left: '16px', background: 'var(--color-primary-900)', color: '#fff', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 12px' }}>
                  New In
                </span>
              )}
            </div>
            {images.length > 1 && (
              <div style={{ display: 'flex', gap: '8px', overflowX: 'auto' }}>
                {images.map((img, i) => (
                  <button key={i} onClick={() => setImgIdx(i)} style={{
                    width: '72px', height: '88px', flexShrink: 0, border: imgIdx === i ? '2px solid var(--color-primary-900)' : '2px solid transparent',
                    cursor: 'pointer', overflow: 'hidden', background: 'var(--color-primary-100)',
                  }}>
                    <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product info */}
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-accent-500)', marginBottom: '8px' }}>
              {product.brand}
            </p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 400, marginBottom: '8px' }}>
              {product.name}
            </h1>
            {product.designer && (
              <p style={{ fontSize: '0.8rem', color: 'var(--color-primary-500)', marginBottom: '20px' }}>
                Designed by {product.designer}
              </p>
            )}

            <div style={{ borderTop: '1px solid var(--color-primary-200)', borderBottom: '1px solid var(--color-primary-200)', padding: '20px 0', marginBottom: '24px' }}>
              <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.75rem', fontWeight: 400, color: 'var(--color-primary-900)' }}>
                {formatPrice(product, 'GBP')}
              </p>
              {!product.price_on_request && (
                <p style={{ fontSize: '0.75rem', color: 'var(--color-primary-500)', marginTop: '4px' }}>
                  ≈ {formatPrice(product, 'NGN')} (NGN)
                </p>
              )}
            </div>

            {product.description && (
              <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--color-primary-600)', marginBottom: '28px' }}>
                {product.description}
              </p>
            )}

            {/* Details */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '32px' }}>
              {product.materials && (
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Package size={14} style={{ color: 'var(--color-primary-400)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', display: 'block', marginBottom: '2px' }}>Materials</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-700)' }}>{product.materials}</span>
                  </div>
                </div>
              )}
              {product.lead_time && (
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Clock size={14} style={{ color: 'var(--color-primary-400)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', display: 'block', marginBottom: '2px' }}>Lead Time</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-700)' }}>{product.lead_time} (made to order)</span>
                  </div>
                </div>
              )}
              {product.dimensions && (
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Ruler size={14} style={{ color: 'var(--color-primary-400)', marginTop: '2px', flexShrink: 0 }} />
                  <div>
                    <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', display: 'block', marginBottom: '2px' }}>Dimensions</span>
                    <span style={{ fontSize: '0.8rem', color: 'var(--color-primary-700)' }}>{product.dimensions}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Add to cart */}
            {product.price_on_request ? (
              <div>
                <p style={{ fontSize: '0.8rem', color: 'var(--color-primary-500)', marginBottom: '16px' }}>
                  This product is priced on request. Contact us for a quote.
                </p>
                <Link to="/contact" className="btn btn-primary" style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  Enquire Now
                </Link>
              </div>
            ) : (
              <div>
                <div style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'center' }}>
                  <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--color-primary-300)' }}>
                    <button onClick={() => setQty(q => Math.max(1, q - 1))} style={{ width: '40px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-100)')}
                      onMouseLeave={e => (e.currentTarget.style.background = '')}>
                      −
                    </button>
                    <span style={{ width: '48px', textAlign: 'center', fontSize: '0.85rem', fontWeight: 600 }}>{qty}</span>
                    <button onClick={() => setQty(q => q + 1)} style={{ width: '40px', height: '48px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', cursor: 'pointer', transition: 'background 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-100)')}
                      onMouseLeave={e => (e.currentTarget.style.background = '')}>
                      +
                    </button>
                  </div>
                  <button onClick={handleAddToCart} className="btn btn-primary" style={{ flex: 1, gap: '8px' }}>
                    <ShoppingBag size={15} />
                    {added ? 'Added!' : 'Add to Cart'}
                  </button>
                  <button style={{ width: '48px', height: '48px', border: '1px solid var(--color-primary-300)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.background = 'var(--color-primary-900)'; (e.currentTarget.querySelector('svg') as SVGElement).style.color = '#fff'; }}
                    onMouseLeave={e => { e.currentTarget.style.background = ''; (e.currentTarget.querySelector('svg') as SVGElement).style.color = 'var(--color-primary-700)'; }}>
                    <Heart size={16} style={{ color: 'var(--color-primary-700)' }} />
                  </button>
                </div>
                <Link to="/cart" className="btn btn-outline" style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '8px' }}>
                  View Cart
                </Link>
              </div>
            )}

            {/* Trust badges */}
            <div style={{ marginTop: '32px', padding: '20px', background: 'var(--color-primary-50)', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Made to order — crafted with care',
                'Free shipping on orders over £500',
                'Secure payment via Paystack & Flutterwave',
              ].map(t => (
                <p key={t} style={{ fontSize: '0.75rem', color: 'var(--color-primary-600)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: 'var(--color-success-500)', fontWeight: 700 }}>✓</span> {t}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <section style={{ padding: '80px 0', borderTop: '1px solid var(--color-primary-200)' }}>
          <div className="container">
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: '2rem', fontWeight: 300, marginBottom: '40px', textAlign: 'center' }}>
              You May Also Like
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '32px' }}>
              {related.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
