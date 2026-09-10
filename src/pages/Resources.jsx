import { Music, Download, FileText } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Media from '../components/Media';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import EnrolCTA from '../components/EnrolCTA';
import { downloads } from '../data/site';

export default function Resources() {
  return (
    <>
      <PageHeader eyebrow="Resources" title="Resources & Downloads" titleTa="வளங்கள்">
        Concert magazines, the school anthem, and printable material for students and parents.
      </PageHeader>

      <Media />

      {/* Anthem */}
      <section id="anthem" className="py-20 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Anthem & Song" eyebrowTa="பாடல்" title="Tamil anthem &" titleAccent="school song" />
          <Reveal className="mt-8">
            <div className="flex gap-4 items-start rounded-2xl border border-slate-200 bg-white p-6">
              <div className="w-11 h-11 rounded-xl bg-amber-50 border border-amber-100 text-[#CB8315] flex items-center justify-center shrink-0">
                <Music size={20} />
              </div>
              <div>
                <p className="font-tamil text-lg text-[#15355E] font-bold leading-relaxed">
                  தமிழ்த்தாய் வாழ்த்து
                </p>
                <p className="text-sm text-slate-600 font-normal mt-2 leading-relaxed">
                  Students open each Saturday with the Tamil Thai Vaazhthu (invocation to Mother Tamil) and the
                  school song. Words, transliteration and a recording are available in the downloads below.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Downloads */}
      <section id="downloads" className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Downloads" eyebrowTa="பதிவிறக்கங்கள்" title="Printable" titleAccent="material" />
          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {downloads.map((d, i) => (
              <Reveal key={d.name} delay={(i % 2) * 0.06}>
                <a
                  href="#"
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-[#15355E]/30 hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-[#15355E] flex items-center justify-center shrink-0">
                    <FileText size={18} />
                  </div>
                  <div className="flex-grow">
                    <p className="font-bold text-slate-900 text-sm">{d.name}</p>
                    <p className="text-xs text-slate-500 font-normal mt-0.5">{d.note}</p>
                  </div>
                  <Download size={16} className="text-slate-400 group-hover:text-[#CB8315] transition-colors shrink-0" />
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <EnrolCTA />
    </>
  );
}
