import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase.from('contact_inquiries').insert([
        {
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          inquiry_type: 'General Inquiry',
          message: formData.message
        }
      ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-5xl md:text-6xl mb-6">Get In Touch</h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto">
              Let us help you find your dream property or answer any questions you may have
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-12">
                <h2 className="text-3xl mb-8">Contact Information</h2>

                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-[#C9A24D]" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Address</h3>
                      <p className="text-white/70 leading-relaxed">
                        Pinnock Estate, Lekki<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-[#C9A24D]" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Email</h3>
                      <a
                        href="mailto:info@justcorerealty.com"
                        className="text-white/70 hover:text-[#C9A24D] transition-colors"
                      >
                        info@justcorerealty.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-[#C9A24D]" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-2">Phone</h3>
                      <a
                        href="tel:+2438142995133"
                        className="text-white/70 hover:text-[#C9A24D] transition-colors"
                      >
                        +243 814 299 5133
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative h-80">
                <img
                  src="/img_0391.jpg"
                  alt="Luxury Property"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="bg-white/5 border border-white/10 p-8">
                <h2 className="text-3xl mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#C9A24D] transition-colors text-white placeholder:text-white/40"
                      placeholder="Your Name"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#C9A24D] transition-colors text-white placeholder:text-white/40"
                      placeholder="Your Email"
                    />
                  </div>

                  <div>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#C9A24D] transition-colors text-white placeholder:text-white/40"
                      placeholder="Your Phone Number"
                    />
                  </div>

                  <div>
                    <textarea
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full bg-white/5 border border-white/10 p-4 focus:outline-none focus:border-[#C9A24D] transition-colors resize-none text-white placeholder:text-white/40"
                      placeholder="Your Message"
                    />
                  </div>

                  {submitStatus === 'success' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-green-900/30 border border-green-500/50 text-green-300 px-4 py-3"
                    >
                      Thank you for your message. We'll be in touch shortly.
                    </motion.div>
                  )}

                  {submitStatus === 'error' && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-red-900/30 border border-red-500/50 text-red-300 px-4 py-3"
                    >
                      Something went wrong. Please try again.
                    </motion.div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-[#C9A24D] text-black px-8 py-4 font-semibold hover:bg-[#B89240] disabled:opacity-60 transition-colors w-full"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full"
          >
            <h2 className="text-3xl mb-8 text-center">Visit Our Location</h2>
            <div className="w-full h-[500px] border border-white/10 overflow-hidden">
              <iframe
                src="https://www.google.com/maps?q=Pinnock+Beach+Estate,+Lekki,+Lagos,+Nigeria&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Pinnock Estate Location"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
