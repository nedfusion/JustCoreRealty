import { motion } from 'framer-motion';
import { Target, Award, Globe, Users } from 'lucide-react';

export default function About() {
  const coreValues = [
    {
      icon: Award,
      title: 'Integrity',
      description: 'We conduct every aspect of our business with transparency, accountability, and ethical discipline. Trust is the foundation of our relationships.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We pursue the highest standards in design, materials, workmanship, and service delivery.'
    },
    {
      icon: Globe,
      title: 'Innovation',
      description: 'We continuously adopt modern design principles, construction techniques, and materials to remain relevant in a dynamic global market.'
    },
    {
      icon: Users,
      title: 'Client-Centricity',
      description: 'Every project begins with a clear understanding of our client\'s vision and ends with results that exceed expectations.'
    }
  ];

  const locations = [
    'Lagos', 'Abuja', 'Port Harcourt', 'Asaba', 'Aba'
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
            <h1 className="text-5xl md:text-6xl mb-6">About Just Core</h1>
            <div className="h-0.5 w-20 bg-[#C9A24D] mx-auto mb-8" />
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
              Built on Integrity. Defined by Excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid lg:grid-cols-2 gap-16 mb-32 items-center"
          >
            <div>
              <h2 className="text-3xl md:text-4xl mb-6">Company Overview</h2>
              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>
                  Just Core Realty and Interiors is a premium real estate development and interior design company committed to delivering architecturally refined, aesthetically compelling, and commercially viable spaces across Nigeria.
                </p>
                <p>
                  With a strong presence in major urban centers, we operate at the intersection of luxury, functionality, and integrity. Our work is guided by a clear philosophy: to create enduring value through disciplined design, meticulous execution, and uncompromising ethical standards.
                </p>
                <p>
                  Every project undertaken by Just Core is a reflection of our commitment to quality, professionalism, and long-term client satisfaction.
                </p>
              </div>
            </div>

            <div className="relative h-[500px] overflow-hidden">
              <img
                src="/au2a0097.jpg"
                alt="Just Core Realty"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mb-32"
          >
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-white/5 border border-white/10 p-10">
                <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center mb-6">
                  <Target className="w-6 h-6 text-[#C9A24D]" />
                </div>
                <h3 className="text-2xl mb-4">Vision</h3>
                <p className="text-white/70 leading-relaxed">
                  To be a leading real estate and interior design firm in Africa, recognized internationally for delivering luxury developments and interior solutions defined by integrity, architectural excellence, and timeless value.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 p-10">
                <div className="w-12 h-12 bg-[#C9A24D]/10 flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-[#C9A24D]" />
                </div>
                <h3 className="text-2xl mb-4">Mission</h3>
                <p className="text-white/70 leading-relaxed">
                  To develop, design, and deliver high-quality real estate and interior spaces that meet global standards, enhance lifestyles, and provide sustainable value—while upholding the highest principles of integrity, professionalism, and client-centric service.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-32"
          >
            <h2 className="text-3xl md:text-4xl mb-12 text-center">Core Values</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                    className="bg-white/5 border border-white/10 p-8 hover:border-[#C9A24D]/50 transition-colors"
                  >
                    <div className="w-14 h-14 bg-[#C9A24D]/10 flex items-center justify-center mb-6">
                      <Icon className="w-7 h-7 text-[#C9A24D]" />
                    </div>
                    <h3 className="text-xl mb-3">{value.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">
                      {value.description}
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
            <h2 className="text-3xl md:text-4xl mb-8 text-center">Design Philosophy</h2>
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/5 border border-white/10 p-10">
                <p className="text-white/70 leading-relaxed mb-6">
                  Our design philosophy is rooted in architectural discipline, spatial harmony, and timeless aesthetics. We believe that great spaces are not only visually impressive but also functional, durable, and emotionally engaging.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#C9A24D]" />
                      <span className="text-white/80">Clean architectural lines</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#C9A24D]" />
                      <span className="text-white/80">Balanced spatial planning</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#C9A24D]" />
                      <span className="text-white/80">Premium materials and finishes</span>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#C9A24D]" />
                      <span className="text-white/80">Natural light optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#C9A24D]" />
                      <span className="text-white/80">Context-sensitive design</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 bg-[#C9A24D]" />
                      <span className="text-white/80">Timeless aesthetics</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid lg:grid-cols-2 gap-16 items-center"
          >
            <div className="relative h-[500px] overflow-hidden order-2 lg:order-1">
              <img
                src="/au2a0113.jpg"
                alt="Geographic Coverage"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl mb-6">Geographic Coverage</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Just Core Realty and Interiors operates across Nigeria's major economic and lifestyle hubs, delivering excellence in every location.
              </p>
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 px-6 py-4"
                  >
                    <div className="w-2 h-2 bg-[#C9A24D]" />
                    <span className="text-lg">{location}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
