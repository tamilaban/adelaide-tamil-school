import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Announcements from '../components/Announcements';
import Events from '../components/Events';
import Reveal from '../components/Reveal';
import EnrolCTA from '../components/EnrolCTA';
import { events } from '../data/site';
import { longDate } from '../utils/format';

export default function News() {
  const calendar = [...events].sort((a, b) => a.date.localeCompare(b.date));

  return (
    <>
      <PageHeader eyebrow="News" title="News, Events & Calendar" titleTa="செய்திகள் & நிகழ்வுகள்">
        Announcements, upcoming events and key dates for the current school year.
      </PageHeader>

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-10 lg:gap-14">
          <Announcements />
          <Events />
        </div>
      </section>

      <section id="calendar" className="py-20 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="Calendar" eyebrowTa="நாட்காட்டி" title="Key dates" center />
          <div className="mt-10 rounded-2xl border border-slate-200 bg-white divide-y divide-slate-100">
            {calendar.map((e, i) => (
              <Reveal key={e.id} delay={i * 0.04}>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{e.title}</p>
                    <p className="text-xs text-slate-500 font-semibold mt-0.5">{e.time} · {e.location}</p>
                  </div>
                  <span className="text-xs font-bold text-[#15355E] shrink-0">{longDate(e.date)}</span>
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
