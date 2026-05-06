import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Hop as Home, TrendingUp } from 'lucide-react';

export default function About() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '60vh', minHeight: '400px', overflow: 'hidden' }}>
        <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="About" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.5)' }} />
        <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>Who We Are</p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#fff' }}>
              About Justcore Realty
            </h1>
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <div>
              <p className="section-label">Our Story</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, marginBottom: '24px' }}>
                Built on Trust, Driven by Excellence
              </h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--color-primary-600)', marginBottom: '20px' }}>
                Justcore Realty was founded with a singular vision: to redefine the real estate experience in Nigeria by combining world-class service with a deep understanding of our clients' needs.
              </p>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--color-primary-600)', marginBottom: '32px' }}>
                Over the years, we have helped hundreds of families and businesses find their perfect space — from luxurious residential properties to premier commercial real estate. Our commitment to integrity, innovation, and client satisfaction drives everything we do.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ gap: '8px' }}>
                Get in Touch <ArrowRight size={14} />
              </Link>
            </div>
            <div style={{ position: 'relative' }}>
              <img src="https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Our office" style={{ width: '100%', aspectRatio: '4/5', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: '-24px', right: '-24px', background: 'var(--color-primary-900)', color: '#fff', padding: '32px', width: '200px' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, lineHeight: 1 }}>12+</p>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '8px', color: 'var(--color-primary-400)' }}>Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: 'var(--color-primary-950)', padding: '80px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { icon: Home, num: '500+', label: 'Properties Sold' },
              { icon: Users, num: '1,200+', label: 'Happy Clients' },
              { icon: Award, num: '15+', label: 'Awards Won' },
              { icon: TrendingUp, num: '98%', label: 'Client Retention' },
            ].map(({ icon: Icon, num, label }) => (
              <div key={label}>
                <Icon size={28} style={{ color: 'var(--color-accent-400)', margin: '0 auto 12px' }} />
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, color: '#fff', marginBottom: '8px' }}>{num}</p>
                <p style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label">The People Behind Justcore</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
              Our Leadership Team
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '32px' }}>
            {[
              { name: 'Adebayo Johnson', role: 'CEO & Founder', img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Chidinma Okafor', role: 'Head of Sales', img: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Emeka Nwachukwu', role: 'Property Manager', img: 'https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=400' },
              { name: 'Fatima Aliyu', role: 'Interior Design Lead', img: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400' },
            ].map(({ name, role, img }) => (
              <div key={name} style={{ textAlign: 'center' }}>
                <div style={{ aspectRatio: '1/1', marginBottom: '16px', overflow: 'hidden' }}>
                  <img src={img} alt={name} style={{ width: '100%', aspectRatio: '1/1', objectFit: 'cover', objectPosition: 'top', transition: 'transform 0.5s' }}
                    onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                    onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.2rem', fontWeight: 400, marginBottom: '4px' }}>{name}</h3>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)' }}>{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: 'var(--color-primary-50)', padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p className="section-label">What Drives Us</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '32px' }}>
            {[
              { title: 'Integrity', desc: 'We operate with complete transparency and honesty in every transaction, building lasting relationships based on trust.' },
              { title: 'Excellence', desc: 'We pursue the highest standards in all we do — from property curation to client service and after-sales support.' },
              { title: 'Innovation', desc: 'We leverage technology and design thinking to deliver smarter, better real estate solutions for our clients.' },
              { title: 'Community', desc: 'We invest in the communities we serve, supporting sustainable development and quality living for all.' },
            ].map(({ title, desc }) => (
              <div key={title} style={{ padding: '32px', background: '#fff', borderTop: '3px solid var(--color-primary-900)' }}>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--color-primary-600)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
