import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const heroImages = [
  '/jcore1.jpg',
  '/jcore2.jpg',
  '/jcore3.jpg',
  '/jcore4.jpg'
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <AnimatePresence mode="sync">
        <motion.div
          key={currentIndex}
          className="absolute inset-0 w-full h-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
          <motion.div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImages[currentIndex]})`
            }}
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 5, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>

      {heroImages.map((img, i) => (
        <img
          key={i}
          src={img}
          alt={`Hero ${i + 1}`}
          style={{ display: 'none' }}
          loading="eager"
          fetchPriority={i === 0 ? 'high' : 'low'}
        />
      ))}


      <div className="absolute inset-0 bg-black/40 z-[5]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 max-w-7xl mx-auto px-6 w-full flex justify-end"
      >
        <div className="text-right max-w-2xl">
          <motion.h1
            variants={itemUp}
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            Welcome to a World of Architectural Precision, Timeless Luxury.
          </motion.h1>
          <motion.p
            variants={itemUp}
            className="text-xl md:text-2xl text-white/90"
          >
            Premium real estate development and interior excellence
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
