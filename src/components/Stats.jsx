import Counter from './Counter';
import Reveal from './Reveal';
import { stats } from '../data/site';

export default function Stats() {
  return (
    <section className="bg-white border-y border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.08} className="text-center">
              <div className="font-display text-3xl sm:text-4xl font-black text-[#15355E]">
                <Counter value={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#CB8315] mt-1">
                {s.label}
                <span className="font-tamil block text-[10px] text-slate-400 tracking-normal normal-case">{s.labelTa}</span>
              </div>
              <p className="text-xs text-slate-500 font-normal mt-2 leading-relaxed">{s.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
