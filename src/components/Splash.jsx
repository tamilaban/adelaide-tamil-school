import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { handleImageError } from '../utils/imageHelper';
import { school } from '../data/site';
import logoImg from '../assets/logo.png';

/**
 * Brief branded intro, ported in spirit from the Skyrin splash: a logo reveal
 * over a deep-navy field with a progress read-out, auto-dismissing after ~3.2s.
 */
export default function Splash({ onComplete }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const timer = setInterval(() => {
      setProgress((p) => (p >= 100 ? 100 : p + 2));
    }, 30);
    const exit = setTimeout(onComplete, 3200);
    return () => {
      clearInterval(timer);
      clearTimeout(exit);
      document.body.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.7, ease: 'easeInOut' }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0a172a] overflow-hidden select-none"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(21,53,94,0.55),transparent_60%)] pointer-events-none" />
      <div className="absolute -top-24 right-[-10%] w-96 h-96 rounded-full bg-[#CB8315]/10 blur-[120px] pointer-events-none" />

      <div className="relative flex flex-col items-center gap-6 px-6">
        <motion.div
          initial={{ scale: 0.6, opacity: 0, y: 12 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ type: 'spring', stiffness: 90, damping: 14 }}
          className="w-28 h-28 rounded-3xl bg-white/95 border border-white/40 shadow-2xl flex items-center justify-center p-3"
        >
          <img
            src={logoImg}
            alt={school.name}
            onError={(e) => handleImageError(e)}
            className="w-full h-full object-contain"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-col items-center gap-1 text-center"
        >
          <span className="font-display text-white font-extrabold text-lg tracking-tight">
            {school.name}
          </span>
          <span className="font-tamil text-[#E9B872] text-sm">{school.nameTa}</span>
        </motion.div>

        <span className="text-[9px] tracking-[0.3em] text-slate-400 font-extrabold uppercase mt-2">
          {progress}%
        </span>
      </div>
    </motion.div>
  );
}
