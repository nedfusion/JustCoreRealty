import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import Services from '../components/Services';
import OptimizedImage from '../components/OptimizedImage';

function SplitContent({ title, text, image, reverse }: { title: string; text: string; image: string; reverse?: boolean }) {
  return (
    <section className="py-32 bg-white text-black">
      <div className={`max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className={reverse ? 'order-1' : 'order-2 md:order-1'}
        >
          <h2 className="text-4xl mb-6">{title}</h2>
          <p className="opacity-70 leading-relaxed text-lg">{text}</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className={`w-full h-[600px] bg-gray-200 relative ${reverse ? 'order-2' : 'order-1 md:order-2'}`}
        >
          <OptimizedImage
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-10" />
        </motion.div>
      </div>
    </section>
  );
}

function MediaSection() {
  return (
    <section className="relative py-40 bg-black text-white">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <div className="h-0.5 w-20 bg-[#C9A24D] mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl mb-6">Signature Projects</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            A showcase of our commitment to architectural excellence and refined aesthetics
          </p>
        </div>
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[
            '/au2a0050.jpg',
            '/au2a0077.jpg',
            '/au2a0091.jpg',
            '/au2a0095.jpg',
            '/au2a0097.jpg',
            '/au2a0145_2.jpg',
            '/front_view.jpeg',
            '/side_view.jpeg',
            '/jcore1.jpg',
            '/jcore2.jpg',
            '/jcore3.jpg',
            '/jcore4.jpg'
          ].map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10, scale: 1.02 }}
              transition={{ duration: 0.4 }}
              className="h-[350px] bg-cover bg-center relative group cursor-pointer"
            >
              <OptimizedImage
                src={img}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300" />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-32 bg-[#C9A24D] text-black">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl mb-6">Ready to Begin?</h2>
        <p className="text-xl mb-10 opacity-90 leading-relaxed">
          Let us help you create spaces that reflect your vision and exceed your expectations
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            to="/contact"
            className="bg-black text-white px-10 py-4 text-lg font-semibold hover:bg-black/90 transition-colors inline-block"
          >
            Get In Touch
          </Link>
          <Link
            to="/about"
            className="bg-white text-black px-10 py-4 text-lg font-semibold hover:bg-white/90 transition-colors inline-block border-2 border-black"
          >
            Learn More
          </Link>
        </div>
      </motion.div>
    </section>
  );
}

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Hero />
      <SplitContent
        title="Built on Integrity. Defined by Excellence."
        text="Just Core Realty and Interiors is a premium real estate development and interior design company committed to delivering architecturally refined, aesthetically compelling, and commercially viable spaces across Nigeria. We operate at the intersection of luxury, functionality, and integrity, creating enduring value through disciplined design and meticulous execution."
        image="/jcore4.jpg"
      />
      <SplitContent
        title="Comprehensive Solutions"
        text="From luxury residential developments to bespoke interior design, we deliver end-to-end solutions that meet global standards. Our work spans across Lagos, Abuja, Port Harcourt, Asaba, and Aba, bringing world-class expertise to Nigeria's major urban centers. Every project reflects our commitment to quality, professionalism, and long-term client satisfaction."
        image="/jcore3.jpg"
        reverse
      />
      <Services />
      <MediaSection />
      <CTASection />
    </main>
  );
}
