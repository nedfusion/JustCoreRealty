import { motion } from 'framer-motion';
import { Building2, PaintBucket, Home, Briefcase, Lightbulb, Sofa } from 'lucide-react';

export default function Services() {
  const realEstateServices = [
    'Luxury residential developments',
    'Commercial and mixed-use developments',
    'Land acquisition and feasibility studies',
    'Property development advisory',
    'Project management and execution',
    'Investment-focused developments'
  ];

  const interiorServices = [
    'Residential interior design (luxury apartments, villas, private homes)',
    'Corporate and commercial interiors',
    'Hospitality interiors (hotels, serviced apartments)',
    'Space planning and interior architecture',
    'Custom furniture, finishes, and lighting design',
    'Turnkey interior fit-out and execution'
  ];

  const mainServices = [
    {
      icon: Building2,
      title: 'Real Estate Development',
      description: 'End-to-end real estate development solutions, from concept to completion. We deliver developments that combine architectural clarity, market relevance, and sustainable value appreciation.',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: realEstateServices
    },
    {
      icon: PaintBucket,
      title: 'Interior Design & Fit-Out',
      description: 'Bespoke interior environments that reflect sophistication, comfort, and functional excellence. Each project is tailored to the client\'s lifestyle, brand identity, and functional needs.',
      image: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800',
      services: interiorServices
    }
  ];

  const features = [
    {
      icon: Home,
      title: 'Luxury with Purpose',
      description: 'Our approach to luxury balances elegance, comfort, and long-term value'
    },
    {
      icon: Briefcase,
      title: 'Professional Excellence',
      description: 'Rigorous planning, careful material selection, and meticulous execution'
    },
    {
      icon: Lightbulb,
      title: 'Innovative Solutions',
      description: 'Modern design principles and construction techniques for contemporary needs'
    },
    {
      icon: Sofa,
      title: 'Timeless Design',
      description: 'Spaces that are functional, durable, and emotionally engaging'
    }
  ];

  return (
    <section id="services" className="py-28 lg:py-32 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="h-0.5 w-20 bg-[#C9A24D] mb-8 mx-auto" />
          <h2 className="text-4xl sm:text-5xl lg:text-6xl mb-6">
            Our Services
          </h2>
          <p className="text-lg text-white/70 max-w-2xl mx-auto leading-relaxed">
            Comprehensive real estate development and interior design solutions that meet global standards and exceed expectations
          </p>
        </motion.div>

        <div className="space-y-32 mb-32">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                <div className={`${isEven ? 'order-2 lg:order-1' : 'order-2'}`}>
                  <div className="relative h-[500px]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                </div>

                <div className={`space-y-8 ${isEven ? 'order-1 lg:order-2' : 'order-1'}`}>
                  <div className="w-16 h-16 bg-[#C9A24D]/10 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-[#C9A24D]" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl">
                    {service.title}
                  </h3>
                  <p className="text-lg text-white/70 leading-relaxed">
                    {service.description}
                  </p>
                  <div className="space-y-3">
                    {service.services.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-[#C9A24D] mt-2 flex-shrink-0" />
                        <span className="text-white/80">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h3 className="text-3xl md:text-4xl mb-12 text-center">What Sets Us Apart</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 hover:border-[#C9A24D]/50 transition-colors"
                >
                  <div className="w-14 h-14 bg-[#C9A24D]/10 flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-[#C9A24D]" />
                  </div>
                  <h4 className="text-xl mb-3">{feature.title}</h4>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
