import { motion } from 'framer-motion';
import { Building2, PaintBucket, Home, Briefcase, Lightbulb, Sofa, CheckCircle } from 'lucide-react';

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
    'European interior fit-out and execution'
  ];

  const mainServices = [
    {
      icon: Building2,
      title: 'Real Estate Development',
      description: 'End-to-end real estate development solutions, from concept to completion. We deliver developments that combine architectural clarity, market relevance, and sustainable value appreciation.',
      image: '/side_view.jpeg',
      services: realEstateServices
    },
    {
      icon: PaintBucket,
      title: 'Interior Design & Fit-Out',
      description: 'Bespoke interior environments that reflect sophistication, comfort, and functional excellence. Each project is tailored to the client\'s lifestyle, brand identity, and functional needs.',
      image: '/img_0380.jpg',
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

  const processSteps = [
    {
      number: '01',
      title: 'Consultation & Discovery',
      description: 'We begin by understanding your vision, requirements, budget, and timeline through detailed consultation sessions.'
    },
    {
      number: '02',
      title: 'Concept Development',
      description: 'Our team develops comprehensive design concepts that align with your goals and present them for your review and feedback.'
    },
    {
      number: '03',
      title: 'Design & Planning',
      description: 'We create detailed architectural plans, 3D renderings, and material specifications to bring the vision to life.'
    },
    {
      number: '04',
      title: 'Execution & Management',
      description: 'Our experienced project managers oversee every aspect of construction and implementation, ensuring quality and timelines.'
    },
    {
      number: '05',
      title: 'Delivery & Support',
      description: 'We complete the project to your satisfaction and provide ongoing support to ensure your continued satisfaction.'
    }
  ];

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
            <div className="h-0.5 w-20 bg-[#C9A24D] mb-8 mx-auto" />
            <h1 className="text-5xl md:text-6xl mb-6">Our Services</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
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
                  animate={{ opacity: 1, y: 0 }}
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
                    <h2 className="text-3xl sm:text-4xl">
                      {service.title}
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-3">
                      {service.services.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#C9A24D] mt-0.5 flex-shrink-0" />
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-32"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-center">What Sets Us Apart</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-12">
              Our commitment to excellence is reflected in every aspect of our work
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    className="bg-white/5 border border-white/10 p-8 hover:border-[#C9A24D]/50 transition-colors"
                  >
                    <div className="w-14 h-14 bg-[#C9A24D]/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#C9A24D]" />
                    </div>
                    <h3 className="text-xl mb-3">{feature.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-32"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-center">Our Process</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
              A structured approach that ensures exceptional results at every stage
            </p>
            <div className="space-y-8">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 border border-white/10 p-8 hover:border-[#C9A24D]/50 transition-colors"
                >
                  <div className="flex items-start gap-6">
                    <div className="text-5xl font-bold text-[#C9A24D]/20">{step.number}</div>
                    <div className="flex-1">
                      <h3 className="text-2xl mb-3">{step.title}</h3>
                      <p className="text-white/70 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="bg-[#C9A24D] text-black p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Ready to Get Started?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Let us help you bring your vision to life with our comprehensive development and design services
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-10 py-4 text-lg font-semibold hover:bg-black/90 transition-colors"
            >
              Contact Us Today
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
