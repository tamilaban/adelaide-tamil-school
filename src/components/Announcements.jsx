import { Megaphone } from 'lucide-react';
import Reveal from './Reveal';
import { announcements } from '../data/site';
import { longDate } from '../utils/format';

const PRIORITY = {
  high: 'border-l-[#CB8315] bg-amber-50/60',
  medium: 'border-l-[#15355E] bg-blue-50/50',
  low: 'border-l-slate-300 bg-slate-50',
};

export default function Announcements({ limit }) {
  const items = limit ? announcements.slice(0, limit) : announcements;

  return (
    <div id="announcements">
      <div className="flex items-center gap-2 mb-5">
        <Megaphone size={18} className="text-[#CB8315]" />
        <h3 className="font-display text-lg font-extrabold text-slate-900">
          Announcements <span className="font-tamil text-[#CB8315] text-sm">· அறிவிப்புகள்</span>
        </h3>
      </div>
      <div className="space-y-3">
        {items.map((a, i) => (
          <Reveal key={a.id} delay={i * 0.06}>
            <article className={`rounded-xl border-l-4 ${PRIORITY[a.priority] || PRIORITY.low} border border-slate-200/70 p-4`}>
              <div className="flex items-baseline justify-between gap-3">
                <h4 className="font-bold text-slate-900 text-sm">{a.title}</h4>
                <span className="text-[11px] text-slate-400 font-semibold shrink-0">{longDate(a.date)}</span>
              </div>
              <p className="font-tamil text-[#15355E] text-sm font-semibold mt-0.5">{a.titleTa}</p>
              <p className="text-slate-600 text-sm font-normal mt-1.5 leading-relaxed">{a.body}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
