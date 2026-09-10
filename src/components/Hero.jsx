import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleImageError } from '../utils/imageHelper';
import { useParallax } from '../hooks/use3d';
import { heroSlides } from '../data/site';

export default function Hero() {
  const [index, setIndex] = useState(0);
  const { ref, nx, ny } = useParallax();
  const bgX = useTransform(nx, (v) => v * -16);
  const bgY = useTransform(ny, (v) => v * -12);

  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % heroSlides.length), 6500);
    return () => clearInterval(t);
  }, []);

  const slide = heroSlides[index];
  const isExternal = /^https?:\/\//i.test(slide.ctaHref);

  return (
    <section
      ref={ref}
      className="relative min-h-[calc(100vh-8rem)] flex items-center overflow-hidden bg-[#0a172a]"
    >
      {/* Background image layers */}
      <AnimatePresence mode="sync">
        <motion.div
          key={slide.id}
          className="absolute inset-0 z-0"
          style={{ x: bgX, y: bgY }}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={{ opacity: 1, scale: 1.12 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: 'easeInOut' }}
        >
          <img
            src={slide.image}
            alt=""
            onError={(e) => handleImageError(e)}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0a172a] via-[#0a172a]/85 to-[#0a172a]/30" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-[#0a172a] via-transparent to-transparent" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full py-16">
        <div className="max-w-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[#E9B872] tracking-[0.16em] text-[11px] sm:text-xs font-extrabold uppercase mb-3">
                {slide.eyebrow}
                <span className="font-tamil ml-2 normal-case tracking-normal">· {slide.eyebrowTa}</span>
              </p>
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.1] mb-3">
                {slide.title}
              </h1>
              <p className="font-tamil text-xl sm:text-2xl text-white/90 font-semibold mb-4">{slide.titleTa}</p>
              <p className="text-slate-200 text-sm sm:text-base font-medium leading-relaxed mb-7 max-w-xl">
                {slide.body}
              </p>
              <div className="flex flex-wrap gap-3">
                {isExternal ? (
                  <a
                    href={slide.ctaHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group px-5 py-3 rounded-xl bg-gradient-to-r from-[#CB8315] to-[#E59E27] font-bold text-white text-sm tracking-wide shadow-lg shadow-amber-600/25 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    {slide.ctaText}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                ) : (
                  <Link
                    to={slide.ctaHref}
                    className="group px-5 py-3 rounded-xl bg-gradient-to-r from-[#CB8315] to-[#E59E27] font-bold text-white text-sm tracking-wide shadow-lg shadow-amber-600/25 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                  >
                    {slide.ctaText}
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
                <Link
                  to="/contact"
                  className="px-5 py-3 rounded-xl bg-white/10 border border-white/25 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/20 transition-all flex items-center"
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Slide indicators */}
          <div className="flex gap-2 mt-9">
            {heroSlides.map((s, i) => (
              <button
                key={s.id}
                onClick={() => setIndex(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  i === index ? 'w-8 bg-[#CB8315]' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
