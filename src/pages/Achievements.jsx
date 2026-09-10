import { Award, Trophy } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import EnrolCTA from '../components/EnrolCTA';
import { achievements } from '../data/site';

export default function Achievements() {
  return (
    <>
      <PageHeader eyebrow="Achievements" title="Awards & Recognition" titleTa="சாதனைகள்">
        How the school recognises student excellence in Tamil and the service of its volunteer teachers.
      </PageHeader>

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Recognition" title="Our" titleAccent="awards" />
          <div className="grid sm:grid-cols-2 gap-6 mt-10">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={(i % 2) * 0.08}>
                <div className="glass-card rounded-2xl p-7 bg-white border border-slate-200 h-full">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 text-[#CB8315] flex items-center justify-center mb-4">
                    {i % 2 === 0 ? <Award size={22} /> : <Trophy size={22} />}
                  </div>
                  <h3 className="font-display font-bold text-slate-900 mb-2">{a.title}</h3>
                  <p className="text-sm text-slate-600 font-normal leading-relaxed">{a.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrolCTA />
    </>
  );
}
