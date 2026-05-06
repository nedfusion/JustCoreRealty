import { Link } from 'react-router-dom';
import { ArrowRight, Wifi, Shield, Car, Dumbbell, Trees, Waves } from 'lucide-react';

const amenities = [
  { icon: Shield, title: '24/7 Security', desc: 'Round-the-clock security personnel, CCTV surveillance, and biometric access control.' },
  { icon: Car, title: 'Ample Parking', desc: 'Secure parking spaces with EV charging points and dedicated visitor parking areas.' },
  { icon: Dumbbell, title: 'Fitness Centre', desc: 'State-of-the-art gymnasium equipped with the latest machines and personal training services.' },
  { icon: Waves, title: 'Swimming Pool', desc: 'Olympic-standard pool with dedicated children\'s shallow area and poolside lounge.' },
  { icon: Wifi, title: 'Smart Home Tech', desc: 'Integrated smart home systems with automated lighting, climate control, and security.' },
  { icon: Trees, title: 'Landscaped Gardens', desc: 'Beautifully maintained communal gardens and green spaces designed by landscape architects.' },
];

export default function Amenities() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '55vh', minHeight: '380px', overflow: 'hidden' }}>
        <img src="https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Amenities" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
        <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
              Property Features
            </p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#fff' }}>
              World-Class Amenities
            </h1>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section style={{ padding: '80px 0', background: 'var(--color-primary-50)' }}>
        <div className="container" style={{ maxWidth: '800px', textAlign: 'center' }}>
          <p className="section-label">Premium Living</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, marginBottom: '24px' }}>
            Every Detail Thoughtfully Considered
          </h2>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--color-primary-600)' }}>
            Our properties are designed to offer the very best in modern living. From state-of-the-art fitness facilities to lush green spaces, every amenity is carefully selected to enhance your quality of life and add value to your investment.
          </p>
        </div>
      </section>

      {/* Amenities grid */}
      <section style={{ padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px' }}>
            {amenities.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ padding: '40px', border: '1px solid var(--color-primary-200)', transition: 'all 0.3s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--color-primary-900)'; e.currentTarget.style.background = 'var(--color-primary-50)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--color-primary-200)'; e.currentTarget.style.background = '#fff'; }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--color-primary-950)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Icon size={24} style={{ color: '#fff' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--color-primary-600)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section style={{ padding: '80px 0 0', background: 'var(--color-primary-50)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="section-label">Gallery</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
              Glimpse Inside Our Properties
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '16px' }}>
            {[
              'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1080696/pexels-photo-1080696.jpeg?auto=compress&cs=tinysrgb&w=800',
              'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg?auto=compress&cs=tinysrgb&w=800',
            ].map((img, i) => (
              <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-primary-200)' }}>
                <img src={img} alt={`Property ${i + 1}`} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '96px 0', textAlign: 'center', background: 'var(--color-primary-50)' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '24px' }}>
            Experience Premium Living
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-primary-600)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
            Explore our available properties and discover the lifestyle you deserve.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/portfolio" className="btn btn-primary" style={{ gap: '8px' }}>View Properties <ArrowRight size={14} /></Link>
            <Link to="/contact" className="btn btn-outline">Book a Viewing</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
