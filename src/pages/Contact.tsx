import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '', inquiry_type: 'general' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    setError('');
    const { error: dbError } = await supabase.from('contact_inquiries').insert({
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
      inquiry_type: form.inquiry_type,
    });
    setLoading(false);
    if (dbError) {
      setError('Failed to send your message. Please try again.');
    } else {
      setSuccess(true);
      setForm({ name: '', email: '', phone: '', message: '', inquiry_type: 'general' });
    }
  }

  const inputStyle = {
    width: '100%', padding: '12px 16px', border: '1px solid var(--color-primary-300)',
    fontSize: '0.85rem', outline: 'none', transition: 'border-color 0.2s', background: '#fff', color: 'var(--color-primary-900)',
  };

  return (
    <div style={{ paddingTop: 'var(--nav-height)' }}>
      {/* Hero */}
      <section style={{ position: 'relative', height: '50vh', minHeight: '320px', overflow: 'hidden' }}>
        <img src="https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1600"
          alt="Contact" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.55)' }} />
        <div className="container" style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', zIndex: 1 }}>
          <div>
            <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: '12px' }}>
              Reach Out
            </p>
            <h1 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 300, color: '#fff' }}>
              Contact Us
            </h1>
          </div>
        </div>
      </section>

      <section style={{ padding: '96px 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'start' }}>
            {/* Contact info */}
            <div>
              <p className="section-label">Get in Touch</p>
              <h2 style={{ fontFamily: 'var(--font-serif)', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)', fontWeight: 300, marginBottom: '24px' }}>
                We'd Love to Hear From You
              </h2>
              <p style={{ fontSize: '0.9rem', lineHeight: 1.9, color: 'var(--color-primary-600)', marginBottom: '40px' }}>
                Whether you have a question about a property, need a valuation, or want to explore our interior design services — our team is always ready to help.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                {[
                  { icon: MapPin, label: 'Office Address', value: '14 Adeola Odeku Street, Victoria Island, Lagos, Nigeria' },
                  { icon: Phone, label: 'Phone', value: '+234 800 000 0000' },
                  { icon: Mail, label: 'Email', value: 'info@justcorerealty.com' },
                  { icon: Clock, label: 'Business Hours', value: 'Mon – Fri: 9am – 6pm\nSat: 10am – 4pm' },
                ].map(({ icon: Icon, label, value }) => (
                  <div key={label} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ width: '40px', height: '40px', background: 'var(--color-primary-100)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon size={16} style={{ color: 'var(--color-primary-700)' }} />
                    </div>
                    <div>
                      <p style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-500)', marginBottom: '4px' }}>{label}</p>
                      <p style={{ fontSize: '0.85rem', color: 'var(--color-primary-700)', whiteSpace: 'pre-line', lineHeight: 1.6 }}>{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ background: 'var(--color-primary-50)', padding: '40px' }}>
              {success ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✓</div>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '12px' }}>Message Sent!</h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--color-primary-600)', lineHeight: 1.7 }}>
                    Thank you for reaching out. We'll get back to you within 1 business day.
                  </p>
                  <button onClick={() => setSuccess(false)} className="btn btn-outline" style={{ marginTop: '24px' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <h3 style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '8px' }}>Send a Message</h3>

                  {error && <p style={{ fontSize: '0.8rem', color: 'var(--color-error-500)', padding: '10px 16px', background: '#fef2f2', border: '1px solid #fecaca' }}>{error}</p>}

                  <div>
                    <label style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-700)', display: 'block', marginBottom: '6px' }}>Inquiry Type</label>
                    <select value={form.inquiry_type} onChange={e => setForm(f => ({ ...f, inquiry_type: e.target.value }))} style={{ ...inputStyle, cursor: 'pointer' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--color-primary-900)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--color-primary-300)')}>
                      <option value="general">General Inquiry</option>
                      <option value="buy">Buying a Property</option>
                      <option value="sell">Selling a Property</option>
                      <option value="rent">Rental Inquiry</option>
                      <option value="design">Interior Design</option>
                      <option value="investment">Investment Advisory</option>
                    </select>
                  </div>

                  {[
                    { key: 'name', label: 'Full Name *', type: 'text' },
                    { key: 'email', label: 'Email Address *', type: 'email' },
                    { key: 'phone', label: 'Phone Number', type: 'tel' },
                  ].map(({ key, label, type }) => (
                    <div key={key}>
                      <label style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-700)', display: 'block', marginBottom: '6px' }}>{label}</label>
                      <input type={type} value={form[key as keyof typeof form]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = 'var(--color-primary-900)')}
                        onBlur={e => (e.target.style.borderColor = 'var(--color-primary-300)')} />
                    </div>
                  ))}

                  <div>
                    <label style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--color-primary-700)', display: 'block', marginBottom: '6px' }}>Message *</label>
                    <textarea value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      rows={5} placeholder="Tell us what you're looking for..."
                      style={{ ...inputStyle, resize: 'vertical' }}
                      onFocus={e => (e.target.style.borderColor = 'var(--color-primary-900)')}
                      onBlur={e => (e.target.style.borderColor = 'var(--color-primary-300)')} />
                  </div>

                  <button type="submit" className="btn btn-primary" disabled={loading}
                    style={{ width: '100%', justifyContent: 'center', opacity: loading ? 0.7 : 1 }}>
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
