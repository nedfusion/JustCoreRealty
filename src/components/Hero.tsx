import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } }
};

const itemUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
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
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${heroImages[currentIndex]})`
            }}
          />
        </motion.div>
      </AnimatePresence>

      <img
        src={heroImages[0]}
        alt="Hero 1"
        style={{ display: 'none' }}
        loading="eager"
      />


      <div className="absolute inset-0 bg-black/40 z-[5]" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative z-10 w-full flex justify-start pl-8 md:pl-12 lg:pl-16"
      >
        <div className="text-left max-w-xl">
          <motion.h1
            variants={itemUp}
            className="text-xl md:text-2xl lg:text-3xl font-bold mb-3 leading-tight"
          >
            Welcome to a World of Architectural Precision, Timeless Luxury.
          </motion.h1>
          <motion.p
            variants={itemUp}
            className="text-sm md:text-base text-white/90"
          >
            Premium real estate development and interior excellence
          </motion.p>
        </div>
      </motion.div>
    </section>
  );
}
