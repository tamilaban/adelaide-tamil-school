import { useState } from 'react';
import { ChevronDown, Users, UserCog } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import AboutIntro from '../components/AboutIntro';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import EnrolCTA from '../components/EnrolCTA';
import { teachers, committee, faq } from '../data/site';

function People({ id, icon: Icon, eyebrow, title, accent, people }) {
  return (
    <section id={id} className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading eyebrow={eyebrow} title={title} titleAccent={accent} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {people.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 0.07}>
              <div className="glass-card rounded-2xl p-6 bg-white border border-slate-200 h-full">
                <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 text-[#CB8315] flex items-center justify-center mb-4">
                  <Icon size={20} />
                </div>
                <h3 className="font-display font-bold text-slate-900">{p.name}</h3>
                <p className="text-sm text-slate-500 font-normal mt-1 leading-relaxed">{p.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="py-20 sm:py-24 bg-[#F8F9FA]">
      <div className="max-w-3xl mx-auto px-4 md:px-8">
        <SectionHeading eyebrow="FAQ" eyebrowTa="கேள்வி பதில்" title="Frequently asked" titleAccent="questions" center />
        <div className="mt-10 space-y-3">
          {faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? -1 : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 text-left"
                >
                  <span className="font-bold text-slate-900 text-sm">{f.q}</span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-slate-400 transition-transform ${open === i ? 'rotate-180 text-[#CB8315]' : ''}`}
                  />
                </button>
                {open === i && (
                  <p className="px-5 pb-5 -mt-1 text-sm text-slate-600 font-normal leading-relaxed">{f.a}</p>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <PageHeader eyebrow="About" title="About Adelaide Tamil School" titleTa="எங்களை பற்றி">
        A community-run school teaching Tamil language and culture across South Australia since 1988.
      </PageHeader>
      <AboutIntro withLink={false} />
      <People id="teachers" icon={Users} eyebrow="Our Teachers" title="A team of trained" accent="volunteer teachers" people={teachers} />
      <People id="committee" icon={UserCog} eyebrow="Current Committee" title="The people who" accent="run the school" people={committee} />
      <Faq />
      <EnrolCTA />
    </>
  );
}
