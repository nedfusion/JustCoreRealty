import { useNavigate } from 'react-router-dom';
import { ShoppingBag, Eye } from 'lucide-react';
import { type Product } from '../lib/supabase';
import { useCart } from '../context/CartContext';
import { formatPrice } from '../lib/cart';

type Props = { product: Product };

const FALLBACK_IMAGES: Record<string, string> = {
  'lighting': 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg',
  'rugs': 'https://images.pexels.com/photos/1079215/pexels-photo-1079215.jpeg',
  'vases': 'https://images.pexels.com/photos/1407304/pexels-photo-1407304.jpeg',
  'mirrors': 'https://images.pexels.com/photos/1454806/pexels-photo-1454806.jpeg',
  'sofas': 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg',
  'chairs': 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg',
  'dining-tables': 'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
  'coffee-tables': 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg',
  'storage': 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg',
  'default': 'https://images.pexels.com/photos/1125136/pexels-photo-1125136.jpeg',
};

function getImage(product: Product): string {
  if (product.images && product.images.length > 0 && product.images[0]) {
    return product.images[0];
  }
  const catSlug = product.product_categories?.slug ?? 'default';
  return FALLBACK_IMAGES[catSlug] || FALLBACK_IMAGES['default'];
}

export default function ProductCard({ product }: Props) {
  const navigate = useNavigate();
  const { addItem } = useCart();

  return (
    <div className="product-card" style={{ position: 'relative' }}>
      {/* Image */}
      <div className="product-card-img" style={{ position: 'relative' }}
        onClick={() => navigate(`/product/${product.slug}`)}>
        <img src={getImage(product)} alt={product.name} loading="lazy" />

        {/* Overlays */}
        {product.is_new_in && (
          <span style={{
            position: 'absolute', top: '12px', left: '12px',
            background: 'var(--color-primary-900)', color: '#fff',
            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em',
            textTransform: 'uppercase', padding: '4px 10px',
          }}>New In</span>
        )}
        {product.price_on_request && (
          <span style={{
            position: 'absolute', top: '12px', right: '12px',
            background: 'var(--color-accent-500)', color: '#fff',
            fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', padding: '4px 10px',
          }}>POA</span>
        )}

        {/* Hover actions */}
        <div style={{
          position: 'absolute', bottom: '12px', left: '12px', right: '12px',
          display: 'flex', gap: '8px', opacity: 0, transition: 'opacity 0.3s',
        }} className="card-actions">
          <button
            onClick={e => { e.stopPropagation(); navigate(`/product/${product.slug}`); }}
            style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
              background: '#fff', color: 'var(--color-primary-900)',
              border: '1px solid var(--color-primary-900)',
              padding: '10px', fontSize: '0.65rem', fontWeight: 600,
              letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
              transition: 'all 0.2s',
            }}>
            <Eye size={12} /> View
          </button>
          {!product.price_on_request && (
            <button
              onClick={e => { e.stopPropagation(); addItem(product); }}
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                background: 'var(--color-primary-900)', color: '#fff',
                padding: '10px', fontSize: '0.65rem', fontWeight: 600,
                letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                border: 'none', transition: 'all 0.2s',
              }}>
              <ShoppingBag size={12} /> Add
            </button>
          )}
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: '14px 0 0' }} onClick={() => navigate(`/product/${product.slug}`)}>
        <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', marginBottom: '4px' }}>
          {product.brand}
        </p>
        <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1rem', fontWeight: 400, marginBottom: '6px', lineHeight: 1.3 }}>
          {product.name}
        </h3>
        <p style={{ fontSize: '0.8rem', color: 'var(--color-primary-700)', fontWeight: 500 }}>
          {formatPrice(product)}
        </p>
      </div>

      <style>{`.product-card:hover .card-actions { opacity: 1 !important; }`}</style>
    </div>
  );
}
