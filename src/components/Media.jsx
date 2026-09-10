import { BookOpen, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { handleImageError } from '../utils/imageHelper';
import { magazines, video } from '../data/site';

export default function Media() {
  return (
    <section id="magazines" className="py-20 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading
          eyebrow="Resources"
          eyebrowTa="இதழ்கள்"
          title="Cultural event"
          titleAccent="magazines & media"
        >
          Every year the school publishes a concert souvenir magazine (Malar) with student writing, artwork and photographs.
        </SectionHeading>

        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          {/* Magazines */}
          <div className="grid sm:grid-cols-3 gap-5">
            {magazines.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.08}>
                <a
                  href={m.link}
                  className="group block rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={m.image}
                      alt={m.title}
                      onError={(e) => handleImageError(e)}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-xs font-bold text-slate-900 leading-tight">{m.title}</p>
                    <p className="text-[11px] text-slate-400 font-semibold mt-1 flex items-center gap-1">
                      <BookOpen size={11} /> {m.year}
                    </p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          {/* Video */}
          <Reveal delay={0.1}>
            <div className="rounded-2xl overflow-hidden border border-slate-200 bg-slate-950 shadow-lg">
              <div className="aspect-video">
                <iframe
                  src={video.youtube}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-white">{video.title}</p>
                <ExternalLink size={15} className="text-slate-500 shrink-0" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
