import { useState } from 'react';
import { supabase } from '../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    residenceType: '',
    priceRange: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const { error } = await supabase
        .from('contact_inquiries')
        .insert([
          {
            name: `${formData.firstName} ${formData.lastName}`,
            email: formData.email,
            phone: formData.phone,
            inquiry_type: `${formData.residenceType} - ${formData.priceRange}`,
            message: formData.message || 'Property inquiry'
          }
        ]);

      if (error) throw error;

      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        residenceType: '',
        priceRange: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-28 lg:py-32 bg-soft-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="h-0.5 w-20 bg-gold mb-8 mx-auto"></div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h2>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            Complete the form below and our team will contact you to discuss how we can support your objectives.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 lg:p-12 shadow-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-gray-900 mb-3 font-medium text-sm tracking-wide">
                FIRST NAME *
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gold transition-colors bg-white text-gray-900"
                placeholder="John"
              />
            </div>

            <div>
              <label htmlFor="lastName" className="block text-gray-900 mb-3 font-medium text-sm tracking-wide">
                LAST NAME *
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gold transition-colors bg-white text-gray-900"
                placeholder="Doe"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-gray-900 mb-3 font-medium text-sm tracking-wide">
              EMAIL ADDRESS *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gold transition-colors bg-white text-gray-900"
              placeholder="john.doe@example.com"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-gray-900 mb-3 font-medium text-sm tracking-wide">
              PHONE NUMBER *
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gold transition-colors bg-white text-gray-900"
              placeholder="+2348142995133"
            />
          </div>

          <div>
            <label htmlFor="residenceType" className="block text-gray-900 mb-3 font-medium text-sm tracking-wide">
              RESIDENCE TYPE *
            </label>
            <select
              id="residenceType"
              name="residenceType"
              required
              value={formData.residenceType}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gold transition-colors bg-white text-gray-900"
            >
              <option value="">Select residence type</option>
              <option value="apartment">Luxury Apartment</option>
              <option value="penthouse">Penthouse</option>
              <option value="sky-residence">Sky Residence</option>
              <option value="villa">Villa</option>
            </select>
          </div>

          <div>
            <label htmlFor="priceRange" className="block text-gray-900 mb-3 font-medium text-sm tracking-wide">
              PRICE RANGE *
            </label>
            <select
              id="priceRange"
              name="priceRange"
              required
              value={formData.priceRange}
              onChange={handleChange}
              className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gold transition-colors bg-white text-gray-900"
            >
              <option value="">Select price range</option>
              <option value="500k-1m">$500,000 - $1,000,000</option>
              <option value="1m-2m">$1,000,000 - $2,000,000</option>
              <option value="2m-5m">$2,000,000 - $5,000,000</option>
              <option value="5m+">$5,000,000+</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-gray-900 mb-3 font-medium text-sm tracking-wide">
              ADDITIONAL NOTES
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full px-4 py-4 border border-gray-300 focus:outline-none focus:border-gold transition-colors bg-white text-gray-900 resize-none"
              placeholder="Tell us about your preferences..."
            ></textarea>
          </div>

          {submitStatus === 'success' && (
            <div className="bg-green-50 border-l-4 border-green-500 text-green-800 px-6 py-4">
              Thank you for your inquiry. Our team will contact you shortly.
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="bg-red-50 border-l-4 border-red-500 text-red-800 px-6 py-4">
              Something went wrong. Please try again or contact us directly.
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gold hover:bg-gold-hover disabled:bg-opacity-60 text-black px-12 py-5 text-base font-semibold tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
          </button>
        </form>
      </div>
    </section>
  );
}
