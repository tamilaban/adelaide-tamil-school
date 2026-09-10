import SectionHeading from './SectionHeading';
import Reveal from './Reveal';
import { handleImageError } from '../utils/imageHelper';
import { gallery } from '../data/site';

export default function Gallery() {
  return (
    <section className="py-20 sm:py-24 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionHeading eyebrow="Gallery" eyebrowTa="படத்தொகுப்பு" title="Life at the" titleAccent="school" center />

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
          {gallery.map((g, i) => (
            <Reveal key={g.id} delay={(i % 3) * 0.08}>
              <figure className="group relative rounded-2xl overflow-hidden aspect-[4/3] border border-slate-200 shadow-sm">
                <img
                  src={g.image}
                  alt={g.caption}
                  onError={(e) => handleImageError(e)}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <figcaption className="absolute inset-x-0 bottom-0 p-3 text-xs font-semibold text-white bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  {g.caption}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
