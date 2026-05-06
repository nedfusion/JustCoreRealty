import { Link } from 'react-router-dom';
import { ArrowRight, Home, Building2, BarChart3, Paintbrush, Key, MapPin } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Sales',
    desc: 'From apartments to villas and estates — we connect buyers with their dream homes. Our agents have deep knowledge of the best residential areas across Nigeria.',
    features: ['Market appraisal', 'Property listing', 'Buyer matching', 'Negotiation support'],
  },
  {
    icon: Building2,
    title: 'Commercial Real Estate',
    desc: 'Office spaces, retail locations, warehouses, and industrial properties. We help businesses find spaces that drive growth and productivity.',
    features: ['Commercial leasing', 'Investment properties', 'Due diligence', 'Lease management'],
  },
  {
    icon: Key,
    title: 'Property Management',
    desc: 'Comprehensive management of residential and commercial properties, ensuring maximum returns for landlords while providing quality service to tenants.',
    features: ['Rent collection', 'Maintenance coordination', 'Tenant screening', 'Monthly reporting'],
  },
  {
    icon: BarChart3,
    title: 'Real Estate Investment',
    desc: 'Strategic real estate investment advisory — from land banking to portfolio development. We help investors maximize returns in Nigeria\'s growing property market.',
    features: ['Investment analysis', 'Portfolio management', 'ROI projections', 'Market research'],
  },
  {
    icon: Paintbrush,
    title: 'Interior Design & Furnishing',
    desc: 'Transform your space with our curated interior design service. Our team works with world-class designers and furniture brands to create exceptional interiors.',
    features: ['Space planning', 'Designer furniture', 'Project management', 'Turnkey delivery'],
  },
  {
    icon: MapPin,
    title: 'Land Sales & Development',
    desc: 'Premium land in strategic locations across Lagos and beyond. From residential plots to large development parcels — all with verified titles and clear documentation.',
    features: ['Verified titles', 'Development parcels', 'Surveying', 'Title documentation'],
  },
];

export default function Services() {
  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '55vh', minHeight: '380px', overflow: 'hidden' }}>
        <img src="https://images.pexels.com/photos/1732414/pexels-photo-1732414.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Services" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>What We Offer</p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#fff' }}>
              Our Services
            </h1>
          </div>
        </div>
      </section>

      {/* Services grid */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="section-label">Comprehensive Solutions</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, maxWidth: '600px', margin: '0 auto' }}>
              Everything You Need in Real Estate
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2px', background: 'var(--color-primary-200)' }}>
            {services.map(({ icon: Icon, title, desc, features }) => (
              <div key={title} style={{ background: '#fff', padding: '40px', transition: 'background 0.3s' }}
                onMouseEnter={e => (e.currentTarget.style.background = 'var(--color-primary-50)')}
                onMouseLeave={e => (e.currentTarget.style.background = '#fff')}>
                <div style={{ width: '48px', height: '48px', background: 'var(--color-primary-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                  <Icon size={22} style={{ color: 'var(--color-primary-700)' }} />
                </div>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '0.85rem', lineHeight: 1.8, color: 'var(--color-primary-600)', marginBottom: '20px' }}>{desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {features.map(f => (
                    <li key={f} style={{ fontSize: '0.75rem', color: 'var(--color-primary-600)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ width: '16px', height: '1px', background: 'var(--color-primary-400)', flexShrink: 0 }} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section style={{ background: 'var(--color-primary-50)', padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p className="section-label">How We Work</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>Our Process</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px' }}>
            {[
              { step: '01', title: 'Consultation', desc: 'We listen to your needs, goals, and budget to understand exactly what you\'re looking for.' },
              { step: '02', title: 'Search & Match', desc: 'Our team scours the market to find properties that match your specific requirements.' },
              { step: '03', title: 'Viewing', desc: 'We arrange and accompany you on property viewings, providing expert insights throughout.' },
              { step: '04', title: 'Transaction', desc: 'We handle all documentation, negotiation, and legal processes to ensure a smooth closing.' },
            ].map(({ step, title, desc }) => (
              <div key={step} style={{ textAlign: 'center' }}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '3rem', fontWeight: 300, color: 'var(--color-primary-200)', marginBottom: '12px', lineHeight: 1 }}>{step}</p>
                <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.25rem', fontWeight: 400, marginBottom: '12px' }}>{title}</h3>
                <p style={{ fontSize: '0.82rem', lineHeight: 1.8, color: 'var(--color-primary-600)' }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--color-primary-950)', padding: '96px 0', textAlign: 'center' }}>
        <div className="container">
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300, color: '#fff', marginBottom: '20px' }}>
            Ready to Find Your Perfect Space?
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-primary-400)', marginBottom: '40px', maxWidth: '500px', margin: '0 auto 40px' }}>
            Contact our team today and let us help you navigate Nigeria's real estate market with confidence.
          </p>
          <Link to="/contact" className="btn" style={{ background: '#fff', color: 'var(--color-primary-900)', padding: '16px 40px', gap: '8px' }}>
            Start the Conversation <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </div>
  );
}
