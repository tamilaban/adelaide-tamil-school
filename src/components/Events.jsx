import { CalendarDays, Clock, MapPin } from 'lucide-react';
import Reveal from './Reveal';
import { events } from '../data/site';
import { splitDate } from '../utils/format';

export default function Events({ limit }) {
  const items = limit ? events.slice(0, limit) : events;

  return (
    <div id="events">
      <div className="flex items-center gap-2 mb-5">
        <CalendarDays size={18} className="text-[#15355E]" />
        <h3 className="font-display text-lg font-extrabold text-slate-900">
          Upcoming events <span className="font-tamil text-[#CB8315] text-sm">· வரவிருக்கும் நிகழ்வுகள்</span>
        </h3>
      </div>
      <div className="space-y-3">
        {items.map((e, i) => {
          const { day, month } = splitDate(e.date);
          return (
            <Reveal key={e.id} delay={i * 0.06}>
              <article className="flex gap-4 rounded-xl border border-slate-200/70 bg-white p-4 hover:border-[#15355E]/30 hover:shadow-md transition-all">
                <div className="shrink-0 w-14 text-center rounded-lg bg-[#15355E] text-white py-2">
                  <div className="font-display text-xl font-black leading-none">{day}</div>
                  <div className="text-[10px] font-bold uppercase tracking-wider mt-0.5">{month}</div>
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{e.title}</h4>
                  <div className="flex flex-wrap gap-x-4 gap-y-1 mt-1.5 text-[11px] text-slate-500 font-semibold">
                    <span className="flex items-center gap-1"><Clock size={12} /> {e.time}</span>
                    <span className="flex items-center gap-1"><MapPin size={12} /> {e.location}</span>
                  </div>
                  <p className="text-slate-600 text-sm font-normal mt-1.5 leading-relaxed">{e.description}</p>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </div>
  );
}
