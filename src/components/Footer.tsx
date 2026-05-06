import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{
      background: 'var(--color-primary-950)',
      color: 'var(--color-primary-400)',
      paddingTop: '64px', paddingBottom: '40px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          marginBottom: '48px',
        }}>
          {/* Brand */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400,
              color: '#fff', marginBottom: '16px', letterSpacing: '0.04em',
            }}>
              JUSTCORE REALTY
            </h3>
            <p style={{ fontSize: '0.8rem', lineHeight: 1.7, marginBottom: '24px' }}>
              Premium real estate and luxury design services. We create spaces that reflect your vision and elevate your lifestyle.
            </p>
            <div style={{ display: 'flex', gap: '12px' }}>
              {['IG', 'FB', 'X'].map((label, i) => (
                <a key={i} href="#" style={{
                  width: '36px', height: '36px', border: '1px solid var(--color-primary-700)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '0.6rem', fontWeight: 700, color: 'var(--color-primary-400)',
                  transition: 'all 0.3s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-primary-700)'; e.currentTarget.style.color = 'var(--color-primary-400)'; }}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'Home', to: '/' },
                { label: 'About Us', to: '/about' },
                { label: 'Services', to: '/services' },
                { label: 'Portfolio', to: '/portfolio' },
                { label: 'Amenities', to: '/amenities' },
                { label: 'Contact', to: '/contact' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} style={{ fontSize: '0.8rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-400)')}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Shop */}
          <div>
            <h4 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px' }}>
              Shop
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { label: 'All Products', to: '/shop' },
                { label: 'New In', to: '/shop/new-in' },
                { label: 'Furniture', to: '/shop/furniture' },
                { label: 'Lighting', to: '/shop/lighting' },
                { label: 'Rugs', to: '/shop/rugs' },
                { label: 'Home Decor', to: '/shop/home-decor' },
              ].map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} style={{ fontSize: '0.8rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-400)')}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#fff', marginBottom: '20px' }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { Icon: MapPin, text: 'Lagos, Nigeria' },
                { Icon: Phone, text: '+234 800 000 0000' },
                { Icon: Mail, text: 'info@justcorerealty.com' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <Icon size={14} style={{ marginTop: '2px', flexShrink: 0, color: 'var(--color-accent-400)' }} />
                  <span style={{ fontSize: '0.8rem' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{
          borderTop: '1px solid var(--color-primary-800)',
          paddingTop: '24px',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px',
        }}>
          <p style={{ fontSize: '0.7rem' }}>© 2026 Justcore Realty. All rights reserved.</p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {['Privacy Policy', 'Terms of Service'].map(t => (
              <a key={t} href="#" style={{ fontSize: '0.7rem', transition: 'color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.color = '#fff')}
                onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-400)')}>
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
