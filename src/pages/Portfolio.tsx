import { motion } from 'framer-motion';
import { useState } from 'react';

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    { id: 1, image: '/img_0162.jpg', category: 'residential', title: 'Luxury Villa', location: 'Lekki, Lagos' },
    { id: 2, image: '/img_0370.jpg', category: 'residential', title: 'Modern Residence', location: 'Ikoyi, Lagos' },
    { id: 3, image: '/img_0375.jpg', category: 'interior', title: 'Contemporary Living Space', location: 'Victoria Island, Lagos' },
    { id: 4, image: '/img_0380.jpg', category: 'interior', title: 'Elegant Interior Design', location: 'Abuja' },
    { id: 5, image: '/img_0381.jpg', category: 'residential', title: 'Premium Development', location: 'Lekki, Lagos' },
    { id: 6, image: '/img_0388.jpg', category: 'commercial', title: 'Corporate Office Space', location: 'Victoria Island, Lagos' },
    { id: 7, image: '/img_0389.jpg', category: 'interior', title: 'Bespoke Interior', location: 'Ikoyi, Lagos' },
    { id: 8, image: '/img_0391.jpg', category: 'residential', title: 'Luxury Apartment', location: 'Lekki Phase 1, Lagos' },
    { id: 9, image: '/img_0394.jpg', category: 'residential', title: 'Executive Home', location: 'Asaba' },
    { id: 10, image: '/img_0395.jpg', category: 'interior', title: 'Modern Interior Fit-Out', location: 'Port Harcourt' },
    { id: 11, image: '/img_0400.jpg', category: 'residential', title: 'Contemporary Villa', location: 'Lekki, Lagos' },
    { id: 12, image: '/img_0402.jpg', category: 'residential', title: 'Signature Property', location: 'Abuja' },
    { id: 13, image: '/img_0416.jpg', category: 'commercial', title: 'Mixed-Use Development', location: 'Victoria Island, Lagos' },
    { id: 14, image: '/img_0419.jpg', category: 'residential', title: 'Premium Residence', location: 'Ikoyi, Lagos' },
    { id: 15, image: '/img_0420.jpg', category: 'interior', title: 'Luxury Interior', location: 'Lekki, Lagos' },
    { id: 16, image: '/img_0428.jpg', category: 'residential', title: 'Modern Estate', location: 'Aba' },
    { id: 17, image: '/img_0437.jpg', category: 'residential', title: 'Executive Development', location: 'Abuja' },
    { id: 18, image: '/img_0438.jpg', category: 'interior', title: 'Contemporary Interior', location: 'Lagos' },
    { id: 19, image: '/img_0575.jpg', category: 'residential', title: 'Luxury Home', location: 'Lekki, Lagos' },
    { id: 20, image: '/img_0577.jpg', category: 'residential', title: 'Premium Villa', location: 'Ikoyi, Lagos' },
    { id: 21, image: '/img_0581.jpg', category: 'interior', title: 'Designer Interior', location: 'Victoria Island, Lagos' },
    { id: 22, image: '/img_0583.jpg', category: 'residential', title: 'Modern Home', location: 'Lekki, Lagos' },
    { id: 23, image: '/img_0584.jpg', category: 'residential', title: 'Signature Development', location: 'Abuja' },
    { id: 24, image: '/img_0591.jpg', category: 'interior', title: 'Elegant Interior', location: 'Port Harcourt' },
    { id: 25, image: '/img_0592.jpg', category: 'residential', title: 'Contemporary Estate', location: 'Asaba' },
    { id: 26, image: '/img_0596.jpg', category: 'interior', title: 'Luxury Fit-Out', location: 'Lagos' },
    { id: 27, image: '/img_0597.jpg', category: 'residential', title: 'Premium Property', location: 'Lekki, Lagos' },
    { id: 28, image: '/img_0598.jpg', category: 'interior', title: 'Modern Interior Design', location: 'Abuja' }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'residential', label: 'Residential' },
    { id: 'commercial', label: 'Commercial' },
    { id: 'interior', label: 'Interior Design' }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="bg-black text-white min-h-screen">
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="h-0.5 w-20 bg-[#C9A24D] mb-8 mx-auto" />
            <h1 className="text-5xl md:text-6xl mb-6">Our Portfolio</h1>
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              A showcase of our commitment to architectural excellence, refined aesthetics, and exceptional craftsmanship
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`px-8 py-3 text-sm font-semibold tracking-wide transition-all ${
                  activeFilter === category.id
                    ? 'bg-[#C9A24D] text-black'
                    : 'bg-white/5 text-white border border-white/10 hover:border-[#C9A24D]/50'
                }`}
              >
                {category.label}
              </button>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group relative h-[400px] overflow-hidden cursor-pointer"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-white/70 text-sm">{project.location}</p>
                  <div className="mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-[#C9A24D] text-xs uppercase tracking-wider">
                      {categories.find(c => c.id === project.category)?.label}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-32 bg-[#C9A24D] text-black p-12 text-center"
          >
            <h2 className="text-3xl md:text-4xl mb-6">Start Your Project</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Ready to create something exceptional? Let us bring your vision to life with the same dedication and excellence shown in our portfolio
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-10 py-4 text-lg font-semibold hover:bg-black/90 transition-colors"
            >
              Get In Touch
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
