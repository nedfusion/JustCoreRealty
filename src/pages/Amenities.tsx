import { motion } from 'framer-motion';
import {
  Waves,
  Dumbbell,
  ShieldCheck,
  Zap,
  Wifi,
  Car,
  Trees,
  Sun,
  Wind,
  Home,
  Tv,
  Sparkles,
  Clock,
  Users,
  Baby,
  Trophy
} from 'lucide-react';

export default function Amenities() {
  const amenityCategories = [
    {
      title: 'Recreation & Wellness',
      icon: Dumbbell,
      amenities: [
        { icon: Waves, name: 'Swimming Pool', description: 'Olympic-sized swimming pool with dedicated lanes' },
        { icon: Dumbbell, name: 'Fitness Center', description: 'State-of-the-art gym with modern equipment' },
        { icon: Trophy, name: 'Sports Facilities', description: 'Tennis courts, basketball court, and recreational areas' },
        { icon: Trees, name: 'Landscaped Gardens', description: 'Beautifully maintained green spaces and gardens' }
      ]
    },
    {
      title: 'Security & Safety',
      icon: ShieldCheck,
      amenities: [
        { icon: ShieldCheck, name: '24/7 Security', description: 'Round-the-clock security personnel and monitoring' },
        { icon: Tv, name: 'CCTV Surveillance', description: 'Comprehensive camera coverage throughout the estate' },
        { icon: ShieldCheck, name: 'Gated Community', description: 'Controlled access with advanced security systems' },
        { icon: Clock, name: 'Emergency Response', description: 'Rapid response team for all emergencies' }
      ]
    },
    {
      title: 'Infrastructure & Utilities',
      icon: Zap,
      amenities: [
        { icon: Zap, name: '24-Hour Power Supply', description: 'Uninterrupted power with backup generators' },
        { icon: Wifi, name: 'High-Speed Internet', description: 'Fiber-optic internet connectivity' },
        { icon: Wind, name: 'Central Air Conditioning', description: 'Climate control in all units' },
        { icon: Sun, name: 'Solar Power Integration', description: 'Eco-friendly solar energy systems' }
      ]
    },
    {
      title: 'Convenience & Lifestyle',
      icon: Home,
      amenities: [
        { icon: Car, name: 'Ample Parking', description: 'Secure parking spaces for residents and guests' },
        { icon: Users, name: 'Community Center', description: 'Multipurpose space for events and gatherings' },
        { icon: Baby, name: 'Children\'s Playground', description: 'Safe and modern play areas for kids' },
        { icon: Sparkles, name: 'Concierge Services', description: 'Professional concierge and property management' }
      ]
    }
  ];

  const propertyFeatures = [
    {
      title: 'Premium Finishes',
      description: 'High-quality materials and finishes throughout all properties',
      image: '/img_0380.jpg'
    },
    {
      title: 'Modern Architecture',
      description: 'Contemporary designs with clean lines and functional spaces',
      image: '/img_0419.jpg'
    },
    {
      title: 'Smart Home Integration',
      description: 'Advanced home automation systems for convenience and security',
      image: '/img_0400.jpg'
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
            <h1 className="text-5xl md:text-6xl mb-6">Amenities & Features</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Experience luxury living with world-class amenities designed for comfort, convenience, and elevated lifestyle
            </p>
          </motion.div>

          <div className="space-y-24 mb-32">
            {amenityCategories.map((category, categoryIndex) => {
              const CategoryIcon = category.icon;
              return (
                <motion.div
                  key={categoryIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                >
                  <div className="flex items-center gap-4 mb-10">
                    <div className="w-14 h-14 bg-[#C9A24D]/10 flex items-center justify-center">
                      <CategoryIcon className="w-7 h-7 text-[#C9A24D]" />
                    </div>
                    <h2 className="text-3xl md:text-4xl">{category.title}</h2>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.amenities.map((amenity, index) => {
                      const AmenityIcon = amenity.icon;
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.6, delay: categoryIndex * 0.1 + index * 0.05 }}
                          className="bg-white/5 border border-white/10 p-6 hover:border-[#C9A24D]/50 transition-colors group"
                        >
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#C9A24D]/20 transition-colors">
                              <AmenityIcon className="w-6 h-6 text-[#C9A24D]" />
                            </div>
                            <div>
                              <h3 className="text-xl mb-2">{amenity.name}</h3>
                              <p className="text-white/60 text-sm leading-relaxed">{amenity.description}</p>
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mb-32"
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-center">Property Features</h2>
            <p className="text-white/60 text-center max-w-2xl mx-auto mb-16">
              Every detail carefully considered for exceptional living
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              {propertyFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="group relative h-[400px] overflow-hidden"
                >
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
                    <p className="text-white/80 leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="bg-white/5 border border-white/10 p-12"
          >
            <h2 className="text-3xl md:text-4xl mb-6 text-center">The Just Core Difference</h2>
            <p className="text-white/70 leading-relaxed max-w-4xl mx-auto text-center mb-10">
              At Just Core Realty and Interiors, we believe that luxury is not just about opulence—it's about
              creating environments that enhance your quality of life. Our properties combine premium amenities with
              thoughtful design, ensuring that every resident enjoys an exceptional living experience. From state-of-the-art
              fitness facilities to comprehensive security systems, every amenity is carefully selected and maintained to the
              highest standards.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mt-10">
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A24D] mb-2">100%</div>
                <p className="text-white/60">Power Availability</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A24D] mb-2">24/7</div>
                <p className="text-white/60">Security & Support</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-[#C9A24D] mb-2">World-Class</div>
                <p className="text-white/60">Facilities</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-32 bg-[#C9A24D] text-black p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Experience Luxury Living</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Schedule a tour to experience our world-class amenities and exceptional properties firsthand
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-10 py-4 text-lg font-semibold hover:bg-black/90 transition-colors"
            >
              Schedule a Tour
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
