import { ArrowRight, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { school } from '../data/site';

export default function EnrolCTA() {
  return (
    <section className="py-16 bg-[#0a172a] relative overflow-hidden">
      <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-[#15355E]/40 blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 right-1/4 w-96 h-96 rounded-full bg-[#CB8315]/10 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center relative z-10">
        <Reveal>
          <h2 className="font-display text-2xl sm:text-3xl font-black text-white tracking-tight">
            Join Adelaide Tamil School
          </h2>
          <p className="font-tamil text-lg text-[#E9B872] font-semibold mt-1">பள்ளியில் இணையுங்கள்</p>
          <p className="text-slate-300 text-sm sm:text-base font-medium mt-4 max-w-xl mx-auto leading-relaxed">
            Enrolments for new and returning students are completed online through the Community Languages Schools SA portal.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mt-7">
            <a
              href={school.enrolUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group px-6 py-3 rounded-xl bg-gradient-to-r from-[#CB8315] to-[#E59E27] font-bold text-white text-sm shadow-lg shadow-amber-600/25 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              Enrol Now
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <Link
              to="/contact"
              className="px-6 py-3 rounded-xl bg-white/10 border border-white/25 text-sm font-bold text-white hover:bg-white/20 transition-all flex items-center gap-2"
            >
              <Phone size={15} /> Talk to us
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
