import Reveal from './Reveal';

/** Eyebrow + heading block used at the top of most sections. */
export default function SectionHeading({ eyebrow, eyebrowTa, title, titleAccent, center = false, children }) {
  return (
    <Reveal className={center ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'}>
      <div className="text-xs font-extrabold uppercase tracking-widest text-[#15355E] mb-2">
        {eyebrow}
        {eyebrowTa && <span className="font-tamil text-[#CB8315] ml-2 normal-case tracking-normal">· {eyebrowTa}</span>}
      </div>
      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
        {title} {titleAccent && <span className="text-gradient-primary">{titleAccent}</span>}
      </h2>
      {children && <p className="mt-3 text-slate-600 text-sm sm:text-base font-normal leading-relaxed">{children}</p>}
    </Reveal>
  );
}
