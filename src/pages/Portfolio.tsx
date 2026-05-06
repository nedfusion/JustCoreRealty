import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const projects = [
  { id: 1, title: 'Lekki Phase 1 Luxury Villa', category: 'Residential', location: 'Lagos', img: 'https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800', price: '₦450M', desc: '5-bedroom luxury villa with pool, home cinema, and smart home technology.' },
  { id: 2, title: 'Victoria Island Office Complex', category: 'Commercial', location: 'Lagos', img: 'https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=800', price: '₦1.2B', desc: 'Grade-A office complex with 24,000 sqft of premium workspace across 8 floors.' },
  { id: 3, title: 'Ikoyi Penthouse', category: 'Residential', location: 'Lagos', img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', price: '₦680M', desc: 'Full-floor penthouse with panoramic views, private elevator, and bespoke interior design.' },
  { id: 4, title: 'Abuja Retail Mall', category: 'Commercial', location: 'Abuja', img: 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=800', price: '₦3.5B', desc: 'Modern retail mall with 85 shops, food court, cinema, and ample parking.' },
  { id: 5, title: 'Banana Island Estate', category: 'Land', location: 'Lagos', img: 'https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=800', price: '₦850M', desc: '2-acre development parcel on Banana Island with all government approvals in place.' },
  { id: 6, title: 'Chevron Drive Apartments', category: 'Residential', location: 'Lagos', img: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800', price: '₦120M per unit', desc: 'Contemporary 3-bedroom apartments in a gated estate with excellent amenities.' },
];

const categories = ['All', 'Residential', 'Commercial', 'Land'];

export default function Portfolio() {
  const [active, setActive] = useState('All');

  const filtered = active === 'All' ? projects : projects.filter(p => p.category === active);

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '55vh', minHeight: '380px', overflow: 'hidden' }}>
        <img src="https://images.pexels.com/photos/1438832/pexels-photo-1438832.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Portfolio" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Our Work</p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#fff' }}>
              Portfolio
            </h1>
          </div>
        </div>
      </section>

      {/* Filter */}
      <div style={{ borderBottom: '1px solid var(--color-primary-200)', background: '#fff' }}>
        <div className="container" style={{ display: 'flex', gap: '0', overflowX: 'auto' }}>
          {categories.map(cat => (
            <button key={cat} onClick={() => setActive(cat)} style={{
              padding: '16px 24px', fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em',
              textTransform: 'uppercase', cursor: 'pointer', border: 'none', background: 'none',
              color: active === cat ? 'var(--color-primary-900)' : 'var(--color-primary-500)',
              borderBottom: active === cat ? '2px solid var(--color-primary-900)' : '2px solid transparent',
              transition: 'all 0.2s', whiteSpace: 'nowrap',
            }}>
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <section style={{ padding: '64px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
            {filtered.map(project => (
              <div key={project.id} style={{ cursor: 'pointer' }}
                onMouseEnter={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  if (img) img.style.transform = 'scale(1.04)';
                }}
                onMouseLeave={e => {
                  const img = e.currentTarget.querySelector('img') as HTMLImageElement;
                  if (img) img.style.transform = 'scale(1)';
                }}>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', background: 'var(--color-primary-100)', marginBottom: '20px' }}>
                  <img src={project.img} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }} />
                  <div style={{ position: 'absolute', top: '16px', left: '16px' }}>
                    <span style={{ background: 'var(--color-primary-900)', color: '#fff', fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '5px 12px' }}>
                      {project.category}
                    </span>
                  </div>
                  <div style={{ position: 'absolute', bottom: '16px', right: '16px' }}>
                    <span style={{ background: 'rgba(0,0,0,0.7)', color: '#fff', fontSize: '0.75rem', fontWeight: 600, padding: '6px 14px' }}>
                      {project.price}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 400, flex: 1, lineHeight: 1.3 }}>{project.title}</h3>
                </div>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', marginBottom: '8px' }}>
                  {project.location}
                </p>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.7, color: 'var(--color-primary-600)' }}>{project.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-primary-50)', padding: '80px 0', textAlign: 'center' }}>
        <div className="container">
          <p className="section-label">Work With Us</p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, marginBottom: '24px' }}>
            Let's Find Your Next Property
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-primary-600)', marginBottom: '36px', maxWidth: '480px', margin: '0 auto 36px' }}>
            Whether you're buying, selling, or investing — our team is ready to deliver exceptional results.
          </p>
          <Link to="/contact" className="btn btn-primary" style={{ gap: '8px' }}>
            Talk to an Agent <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
