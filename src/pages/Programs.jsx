import { GraduationCap, ClipboardCheck, BookMarked } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import EnrolCTA from '../components/EnrolCTA';
import { levels, approach, assessmentInfo } from '../data/site';

export default function Programs() {
  return (
    <>
      <PageHeader eyebrow="Lesson Plan" title="Levels & Curriculum" titleTa="பாடத்திட்டம்">
        A graded Tamil pathway from the alphabet through to senior literature, aligned with South Australian
        community languages guidelines.
      </PageHeader>

      {/* Levels */}
      <section id="levels" className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Curriculum" title="Seven graded" titleAccent="levels" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {levels.map((l, i) => (
              <Reveal key={l.code} delay={(i % 3) * 0.06}>
                <div className="glass-card rounded-2xl p-6 bg-white border border-slate-200 h-full">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-10 h-10 rounded-xl bg-[#15355E] text-white font-display font-black text-sm flex items-center justify-center">
                      {l.code}
                    </span>
                    <h3 className="font-display font-bold text-slate-900 text-sm">{l.name}</h3>
                  </div>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">{l.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Approach */}
      <section id="approach" className="py-20 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Learning Approach" eyebrowTa="கற்றல் முறை" title="How we" titleAccent="teach" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {approach.map((a, i) => (
              <Reveal key={a.title} delay={(i % 4) * 0.06}>
                <div className="rounded-2xl p-6 bg-white border border-slate-200 h-full">
                  <GraduationCap size={22} className="text-[#CB8315] mb-3" />
                  <h3 className="font-display font-bold text-slate-900 text-sm mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section id="assessment" className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Assessment & Rules" title="Assessment &" titleAccent="school rules" />
          <Reveal className="mt-8">
            <div className="flex gap-3 items-start rounded-2xl bg-blue-50/60 border border-blue-100 p-5">
              <ClipboardCheck size={20} className="text-[#15355E] shrink-0 mt-0.5" />
              <p className="text-sm text-slate-700 font-normal leading-relaxed">{assessmentInfo.intro}</p>
            </div>
          </Reveal>
          <Reveal className="mt-6">
            <ul className="space-y-3">
              {assessmentInfo.rules.map((r, i) => (
                <li key={i} className="flex gap-3 rounded-xl border border-slate-200 bg-white p-4">
                  <BookMarked size={16} className="text-[#CB8315] shrink-0 mt-0.5" />
                  <span className="text-sm text-slate-600 font-normal leading-relaxed">{r}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <EnrolCTA />
    </>
  );
}
