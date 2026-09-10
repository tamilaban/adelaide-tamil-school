import { CheckCircle2, MapPin, Phone, Mail, CalendarClock } from 'lucide-react';
import { Link } from 'react-router-dom';
import Reveal from './Reveal';
import { handleImageError } from '../utils/imageHelper';
import { aboutIntro, school } from '../data/site';

export default function AboutIntro({ showImage = true, withLink = true }) {
  return (
    <section id="about-us" className="py-20 sm:py-24 bg-[#F8F9FA] relative overflow-hidden">
      <div className="absolute -left-48 top-1/4 w-96 h-96 rounded-full bg-[#15355E]/5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-48 bottom-1/4 w-96 h-96 rounded-full bg-[#CB8315]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="text-xs font-extrabold uppercase tracking-widest text-[#15355E] mb-2">
                {aboutIntro.eyebrow}
                <span className="font-tamil text-[#CB8315] ml-2 normal-case tracking-normal">· {aboutIntro.eyebrowTa}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug mb-2">
                {aboutIntro.heading}
              </h2>
              <p className="font-tamil text-base sm:text-lg text-[#15355E] font-semibold mb-5">{aboutIntro.headingTa}</p>

              {aboutIntro.paragraphs.map((p, i) => (
                <p key={i} className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-4">{p}</p>
              ))}
              <p className="font-tamil text-slate-500 text-sm leading-relaxed mb-6">{aboutIntro.paragraphsTa[0]}</p>

              <ul className="space-y-3 mb-7">
                {aboutIntro.points.map((pt, i) => (
                  <li key={i} className="flex gap-3">
                    <CheckCircle2 size={18} className="text-[#CB8315] shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700 font-medium">
                      {pt.en} <span className="font-tamil text-slate-400">— {pt.ta}</span>
                    </span>
                  </li>
                ))}
              </ul>

              {withLink && (
                <Link
                  to="/about"
                  className="inline-flex px-5 py-2.5 rounded-lg border border-[#15355E]/25 text-[#15355E] font-bold text-sm hover:border-[#15355E] hover:bg-[#15355E]/5 transition-all"
                >
                  More about the school
                </Link>
              )}
            </Reveal>
          </div>

          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              {showImage && (
                <div className="rounded-3xl overflow-hidden shadow-xl shadow-slate-900/10 mb-5 aspect-[4/3]">
                  <img
                    src={aboutIntro.image}
                    alt="Adelaide Tamil School students"
                    onError={(e) => handleImageError(e)}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="glass-card rounded-2xl p-6 bg-white border border-slate-200">
                <h3 className="font-display font-bold text-slate-900 mb-4">Campus & timetable</h3>
                <ul className="space-y-3 text-sm text-slate-600">
                  <li className="flex gap-3">
                    <MapPin size={16} className="text-[#CB8315] shrink-0 mt-0.5" />
                    <span>{school.address.line1}, {school.address.suburb}, {school.address.state} {school.address.postcode}</span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <CalendarClock size={16} className="text-[#15355E] shrink-0" />
                    <span>{school.classTime}<span className="font-tamil text-slate-400"> · {school.classTimeTa}</span></span>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Phone size={16} className="text-[#CB8315] shrink-0" />
                    <a href={`tel:${school.phoneIntl}`} className="hover:text-[#15355E]">{school.phone}</a>
                  </li>
                  <li className="flex gap-3 items-center">
                    <Mail size={16} className="text-[#15355E] shrink-0" />
                    <a href={`mailto:${school.email}`} className="hover:text-[#15355E]">{school.email}</a>
                  </li>
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
