import { motion } from 'framer-motion';

/** Compact banner at the top of interior pages. */
export default function PageHeader({ eyebrow, title, titleTa, children }) {
  return (
    <section className="relative bg-[#0a172a] overflow-hidden">
      <div className="absolute -top-24 right-[-8%] w-96 h-96 rounded-full bg-[#CB8315]/10 blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_70%_60%_at_30%_50%,#000_60%,transparent_100%)]" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-14 sm:py-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow && (
            <p className="text-[#E9B872] tracking-[0.16em] text-[11px] font-extrabold uppercase mb-3">{eyebrow}</p>
          )}
          <h1 className="font-display text-3xl sm:text-4xl font-black text-white tracking-tight">{title}</h1>
          {titleTa && <p className="font-tamil text-lg sm:text-xl text-white/85 font-semibold mt-1">{titleTa}</p>}
          {children && <p className="text-slate-300 text-sm sm:text-base font-medium leading-relaxed mt-4 max-w-2xl">{children}</p>}
        </motion.div>
      </div>
    </section>
  );
}
