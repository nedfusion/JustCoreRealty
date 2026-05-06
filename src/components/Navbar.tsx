import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, ChevronDown } from 'lucide-react';
import { useCart } from '../context/CartContext';

const shopCategories = [
  { name: 'New In', slug: 'new-in' },
  { name: 'Furniture', slug: 'furniture' },
  { name: 'Sofas', slug: 'sofas' },
  { name: 'Dining Tables', slug: 'dining-tables' },
  { name: 'Chairs', slug: 'chairs' },
  { name: 'Coffee Tables', slug: 'coffee-tables' },
  { name: 'Lighting', slug: 'lighting' },
  { name: 'Rugs', slug: 'rugs' },
  { name: 'Vases', slug: 'vases' },
  { name: 'Mirrors', slug: 'mirrors' },
  { name: 'Storage', slug: 'storage' },
  { name: 'Home Decor', slug: 'home-decor' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [shopOpen, setShopOpen] = useState(false);
  const { count } = useCart();
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setShopOpen(false);
  }, [location.pathname]);

  const transparent = isHome && !scrolled && !menuOpen;

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      height: 'var(--nav-height)',
      background: transparent ? 'transparent' : '#fff',
      borderBottom: transparent ? 'none' : '1px solid var(--color-primary-200)',
      transition: 'background 0.4s ease, border-color 0.4s ease',
    }}>
      <div className="container" style={{
        height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '24px'
      }}>
        {/* Logo */}
        <Link to="/" style={{
          fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, letterSpacing: '0.04em',
          color: transparent ? '#fff' : 'var(--color-primary-900)', transition: 'color 0.4s ease', whiteSpace: 'nowrap'
        }}>
          JUSTCORE REALTY
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flex: 1, justifyContent: 'center' }}
          className="desktop-nav">
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Portfolio', to: '/portfolio' },
            { label: 'Amenities', to: '/amenities' },
            { label: 'Contact', to: '/contact' },
          ].map(({ label, to }) => (
            <Link key={to} to={to} style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: transparent ? 'rgba(255,255,255,0.9)' : 'var(--color-primary-700)',
              transition: 'color 0.3s',
              borderBottom: location.pathname === to ? '1px solid currentColor' : 'none',
              paddingBottom: '2px',
            }}>
              {label}
            </Link>
          ))}

          {/* Shop dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setShopOpen(true)}
            onMouseLeave={() => setShopOpen(false)}>
            <Link to="/shop" style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: transparent ? 'rgba(255,255,255,0.9)' : 'var(--color-primary-700)',
              display: 'flex', alignItems: 'center', gap: '4px',
              borderBottom: location.pathname.startsWith('/shop') ? '1px solid currentColor' : 'none',
              paddingBottom: '2px',
            }}>
              Shop <ChevronDown size={12} />
            </Link>
            {shopOpen && (
              <div style={{
                position: 'absolute', top: '100%', left: '-16px', marginTop: '16px',
                background: '#fff', border: '1px solid var(--color-primary-200)',
                boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '4px',
                padding: '20px', minWidth: '280px', animation: 'fadeIn 0.2s ease',
              }}>
                <Link to="/shop" style={{
                  gridColumn: '1/-1', fontSize: '0.65rem', fontWeight: 700,
                  letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'var(--color-primary-500)', paddingBottom: '12px',
                  borderBottom: '1px solid var(--color-primary-200)', marginBottom: '8px',
                }}>
                  All Products
                </Link>
                {shopCategories.map(cat => (
                  <Link key={cat.slug} to={`/shop/${cat.slug}`} style={{
                    fontSize: '0.72rem', color: 'var(--color-primary-700)',
                    padding: '6px 8px', transition: 'color 0.2s',
                    letterSpacing: '0.02em',
                  }}
                    onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary-900)')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-700)')}
                  >
                    {cat.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Cart + Menu */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link to="/cart" style={{ position: 'relative' }}>
            <ShoppingBag size={20} color={transparent ? '#fff' : 'var(--color-primary-900)'} strokeWidth={1.5} />
            {count > 0 && (
              <span style={{
                position: 'absolute', top: '-8px', right: '-8px',
                background: 'var(--color-primary-900)', color: '#fff',
                width: '18px', height: '18px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.6rem', fontWeight: 700,
              }}>
                {count}
              </span>
            )}
          </Link>
          <button onClick={() => setMenuOpen(m => !m)} style={{ display: 'flex', alignItems: 'center' }}
            className="mobile-menu-btn">
            {menuOpen
              ? <X size={22} color={transparent ? '#fff' : 'var(--color-primary-900)'} />
              : <Menu size={22} color={transparent ? '#fff' : 'var(--color-primary-900)'} />
            }
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: '#fff', borderTop: '1px solid var(--color-primary-200)',
          padding: '24px', display: 'flex', flexDirection: 'column', gap: '0',
          boxShadow: '0 8px 32px rgba(0,0,0,0.12)',
        }}>
          {[
            { label: 'Home', to: '/' },
            { label: 'About', to: '/about' },
            { label: 'Services', to: '/services' },
            { label: 'Portfolio', to: '/portfolio' },
            { label: 'Amenities', to: '/amenities' },
            { label: 'Contact', to: '/contact' },
            { label: 'Shop', to: '/shop' },
            { label: 'Cart', to: '/cart' },
          ].map(({ label, to }) => (
            <Link key={to} to={to} style={{
              fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase',
              color: 'var(--color-primary-700)', padding: '14px 0',
              borderBottom: '1px solid var(--color-primary-100)',
            }}>
              {label}
            </Link>
          ))}
          <div style={{ paddingTop: '16px' }}>
            <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-primary-400)', marginBottom: '12px' }}>
              Shop by category
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
              {shopCategories.map(cat => (
                <Link key={cat.slug} to={`/shop/${cat.slug}`} style={{
                  fontSize: '0.72rem', color: 'var(--color-primary-600)', padding: '4px 0',
                }}>
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <style>{`
        @media (min-width: 1024px) { .mobile-menu-btn { display: none !important; } }
        @media (max-width: 1023px) { .desktop-nav { display: none !important; } }
      `}</style>
    </nav>
  );
}
