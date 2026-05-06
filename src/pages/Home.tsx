import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { supabase, type Product } from '../lib/supabase';
import ProductCard from '../components/ProductCard';

const heroSlides = [
  {
    image: 'https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1600',
    label: 'Luxury Furniture & Design',
    title: 'Curated Living\nFor Discerning Tastes',
    subtitle: 'Discover an extraordinary collection of designer furniture, lighting, rugs and home accessories from the world\'s leading design houses.',
    cta: 'Shop Collection',
    ctaLink: '/shop',
  },
  {
    image: 'https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1600',
    label: 'New In',
    title: 'The Latest\nArrivals',
    subtitle: 'Freshly arrived from the studios of Europe\'s most coveted designers — be the first to own the latest pieces.',
    cta: 'Explore New In',
    ctaLink: '/shop/new-in',
  },
  {
    image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1600',
    label: 'Premium Real Estate',
    title: 'Properties That\nInspire',
    subtitle: 'Justcore Realty connects you with exceptional residential and commercial properties in the most desirable locations.',
    cta: 'View Services',
    ctaLink: '/services',
  },
];

const categories = [
  { name: 'Furniture', slug: 'furniture', image: 'https://images.pexels.com/photos/1148955/pexels-photo-1148955.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Lighting', slug: 'lighting', image: 'https://images.pexels.com/photos/1123262/pexels-photo-1123262.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Rugs', slug: 'rugs', image: 'https://images.pexels.com/photos/1079215/pexels-photo-1079215.jpeg?auto=compress&cs=tinysrgb&w=800' },
  { name: 'Home Decor', slug: 'home-decor', image: 'https://images.pexels.com/photos/1407304/pexels-photo-1407304.jpeg?auto=compress&cs=tinysrgb&w=800' },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [featured, setFeatured] = useState<Product[]>([]);
  const [newIn, setNewIn] = useState<Product[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setInterval(() => setSlide(s => (s + 1) % heroSlides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    supabase.from('products').select('*, product_categories(name, slug)')
      .eq('is_featured', true).limit(8).then(({ data }) => setFeatured((data as Product[]) ?? []));
    supabase.from('products').select('*, product_categories(name, slug)')
      .eq('is_new_in', true).limit(8).then(({ data }) => setNewIn((data as Product[]) ?? []));
  }, []);

  const cur = heroSlides[slide];

  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', height: '100vh', minHeight: '600px', overflow: 'hidden' }}>
        {heroSlides.map((s, i) => (
          <div key={i} style={{
            position: 'absolute', inset: 0, transition: 'opacity 0.8s ease',
            opacity: i === slide ? 1 : 0,
          }}>
            <img src={s.image} alt={s.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.2) 60%, transparent 100%)' }} />
          </div>
        ))}

        <div className="container" style={{ position: 'relative', zIndex: 2, height: '100%', display: 'flex', alignItems: 'center' }}>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '16px' }}>
              {cur.label}
            </p>
            <h1 style={{
              fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 300, color: '#fff', lineHeight: 1.1, marginBottom: '24px',
              whiteSpace: 'pre-line',
            }}>
              {cur.title}
            </h1>
            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.8, marginBottom: '36px', maxWidth: '480px' }}>
              {cur.subtitle}
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to={cur.ctaLink} className="btn btn-primary" style={{ background: '#fff', color: 'var(--color-primary-900)' }}>
                {cur.cta} <ArrowRight size={14} />
              </Link>
              <Link to="/contact" className="btn" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.6)' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Slide controls */}
        <div style={{ position: 'absolute', bottom: '32px', right: '32px', zIndex: 2, display: 'flex', gap: '8px' }}>
          <button onClick={() => setSlide(s => (s - 1 + heroSlides.length) % heroSlides.length)}
            style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
            <ChevronLeft size={16} />
          </button>
          <button onClick={() => setSlide(s => (s + 1) % heroSlides.length)}
            style={{ width: '40px', height: '40px', border: '1px solid rgba(255,255,255,0.5)', background: 'rgba(0,0,0,0.2)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.2s' }}>
            <ChevronRight size={16} />
          </button>
        </div>

        {/* Slide dots */}
        <div style={{ position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)', zIndex: 2, display: 'flex', gap: '8px' }}>
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => setSlide(i)} style={{
              width: i === slide ? '24px' : '8px', height: '8px',
              background: i === slide ? '#fff' : 'rgba(255,255,255,0.5)',
              border: 'none', cursor: 'pointer', transition: 'all 0.3s', borderRadius: '4px',
            }} />
          ))}
        </div>
      </section>

      {/* Category grid */}
      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p className="section-label">Browse by Category</p>
            <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
              Find Your Style
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '16px' }}>
            {categories.map(cat => (
              <Link key={cat.slug} to={`/shop/${cat.slug}`} style={{
                position: 'relative', overflow: 'hidden', aspectRatio: '1/1.2', display: 'block',
              }}>
                <img src={cat.image} alt={cat.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.6), transparent 50%)' }} />
                <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.4rem', fontWeight: 400, color: '#fff', marginBottom: '4px' }}>
                    {cat.name}
                  </h3>
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
                    Shop Now →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      {featured.length > 0 && (
        <section style={{ padding: '0 0 96px', background: 'var(--color-primary-50)' }}>
          <div className="container" style={{ paddingTop: '96px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p className="section-label">Handpicked Selection</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
                  Featured Pieces
                </h2>
              </div>
              <Link to="/shop" style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
                View All <ArrowRight size={12} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px' }}>
              {featured.map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* New In */}
      {newIn.length > 0 && (
        <section style={{ padding: '96px 0' }}>
          <div className="container">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '16px' }}>
              <div>
                <p className="section-label">Latest Arrivals</p>
                <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 300 }}>
                  New In
                </h2>
              </div>
              <Link to="/shop/new-in" style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '6px', borderBottom: '1px solid currentColor', paddingBottom: '2px' }}>
                View All <ArrowRight size={12} />
              </Link>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '32px' }}>
              {newIn.slice(0, 4).map(p => <ProductCard key={p.id} product={p} />)}
            </div>
          </div>
        </section>
      )}

      {/* Real Estate CTA */}
      <section style={{
        position: 'relative', padding: '120px 0', overflow: 'hidden',
        background: 'var(--color-primary-950)',
      }}>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--color-accent-400)', marginBottom: '16px' }}>
            Premium Real Estate
          </p>
          <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2rem, 5vw, 4rem)', fontWeight: 300, color: '#fff', lineHeight: 1.2, marginBottom: '24px', maxWidth: '700px', margin: '0 auto 24px' }}>
            Find Your Dream Property With Justcore Realty
          </h2>
          <p style={{ fontSize: '0.9rem', color: 'var(--color-primary-400)', lineHeight: 1.8, maxWidth: '550px', margin: '0 auto 40px' }}>
            From luxury apartments to commercial spaces, our team of expert agents helps you find, buy, and sell with confidence.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/services" className="btn" style={{ background: '#fff', color: 'var(--color-primary-900)', padding: '16px 40px' }}>
              Our Services <ArrowRight size={14} />
            </Link>
            <Link to="/contact" className="btn" style={{ background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.3)', padding: '16px 40px' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ padding: '80px 0', borderBottom: '1px solid var(--color-primary-200)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px', textAlign: 'center' }}>
            {[
              { num: '500+', label: 'Properties Sold' },
              { num: '12+', label: 'Years Experience' },
              { num: '98%', label: 'Client Satisfaction' },
              { num: '50+', label: 'Design Brands' },
            ].map(({ num, label }) => (
              <div key={label}>
                <p style={{ fontFamily: 'var(--font-serif)', fontSize: '2.5rem', fontWeight: 300, color: 'var(--color-primary-900)', marginBottom: '8px' }}>{num}</p>
                <p style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands marquee */}
      <section style={{ padding: '48px 0', overflow: 'hidden', background: 'var(--color-primary-50)' }}>
        <div style={{ display: 'flex', gap: '64px', animation: 'marquee 30s linear infinite', whiteSpace: 'nowrap' }}>
          {['CC-Tapis', 'Baxter', 'Orior', 'Bocci', 'Nanimarquina', 'Paul Matter', 'Collection Particulière', 'Dusty Deco', 'Living Divani', 'Pierre Frey', 'Nube', 'Lambert & Fils', 'CC-Tapis', 'Baxter', 'Orior', 'Bocci'].map((brand, i) => (
            <span key={i} onClick={() => navigate(`/shop?brand=${brand}`)} style={{
              fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase',
              color: 'var(--color-primary-500)', cursor: 'pointer', transition: 'color 0.2s', flexShrink: 0,
            }}
              onMouseEnter={e => (e.currentTarget.style.color = 'var(--color-primary-900)')}
              onMouseLeave={e => (e.currentTarget.style.color = 'var(--color-primary-500)')}>
              {brand}
            </span>
          ))}
        </div>
        <style>{`
          @keyframes marquee {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
        `}</style>
      </section>
    </div>
  );
}
