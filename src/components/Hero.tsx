import { motion } from 'framer-motion';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const itemUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <motion.div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-gray-900"
        style={{
          backgroundImage:
            'url(/front_view.jpeg)'
        }}
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      />
      <img
        src="/front_view.jpeg"
        alt="Hero background"
        style={{ display: 'none' }}
        loading="eager"
        fetchPriority="high"
      />

      <motion.div
        className="relative z-10 px-6"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <motion.h1
          variants={itemUp}
          className="text-5xl md:text-7xl font-light tracking-wide mb-6"
        >
          Architectural Precision.
          <br />
          Timeless Luxury.
        </motion.h1>
        <motion.p variants={itemUp} className="max-w-2xl mx-auto text-lg opacity-80">
          Premium real estate development and interior excellence.
        </motion.p>
      </motion.div>

      <div className="absolute inset-0 bg-black/40" />
    </section>
  );
}
