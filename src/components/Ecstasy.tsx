import { motion } from 'framer-motion';
import { Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

export default function Ecstasy() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="relative py-40 bg-black text-white overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <div className="text-center mb-16">
          <div className="h-0.5 w-20 bg-[#C9A24D] mx-auto mb-8" />
          <h2 className="text-4xl md:text-6xl mb-6 font-light tracking-wide">Ecstasy</h2>
          <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
            Experience the artistry and precision of our craftsmanship through motion
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative group"
        >
          <div className="relative overflow-hidden rounded-sm shadow-2xl">
            <video
              ref={videoRef}
              className="w-full h-auto"
              loop
              playsInline
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            >
              <source src="/ecstasy-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <motion.button
              onClick={togglePlay}
              className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-all duration-300"
              initial={{ opacity: 1 }}
              animate={{ opacity: isPlaying ? 0 : 1 }}
              whileHover={{ opacity: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-20 h-20 rounded-full bg-[#C9A24D] flex items-center justify-center shadow-2xl cursor-pointer"
              >
                {isPlaying ? (
                  <Pause className="w-10 h-10 text-black" fill="black" />
                ) : (
                  <Play className="w-10 h-10 text-black ml-1" fill="black" />
                )}
              </motion.div>
            </motion.button>

            <div className="absolute inset-0 pointer-events-none border-2 border-white/10 rounded-sm" />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="mt-8 text-center"
          >
            <p className="text-white/60 italic text-lg">
              Where vision meets execution, excellence becomes inevitable
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A24D] to-transparent" />
    </section>
  );
}
