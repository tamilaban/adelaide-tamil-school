import Hero from '../components/Hero';
import Stats from '../components/Stats';
import AboutIntro from '../components/AboutIntro';
import Announcements from '../components/Announcements';
import Events from '../components/Events';
import Media from '../components/Media';
import Gallery from '../components/Gallery';
import EnrolCTA from '../components/EnrolCTA';
import SectionHeading from '../components/SectionHeading';
import Reveal from '../components/Reveal';
import { Link } from 'react-router-dom';
import { handleImageError } from '../utils/imageHelper';
import { posterImage } from '../data/site';

export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutIntro />

      {/* Poster */}
      <section className="py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 md:px-8">
          <Reveal className="flex justify-center">
            <img
              src={posterImage}
              alt="Kalai Vizha 2025 poster"
              onError={(e) => handleImageError(e)}
              className="w-full max-w-xl rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200"
            />
          </Reveal>
        </div>
      </section>

      {/* News preview */}
      <section className="py-20 sm:py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <SectionHeading eyebrow="News" eyebrowTa="செய்திகள்" title="Latest from the" titleAccent="school" />
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 mt-10">
            <Announcements limit={3} />
            <Events limit={3} />
          </div>
          <Reveal className="mt-10">
            <Link
              to="/news"
              className="inline-flex px-5 py-2.5 rounded-lg border border-[#15355E]/25 text-[#15355E] font-bold text-sm hover:border-[#15355E] hover:bg-[#15355E]/5 transition-all"
            >
              All news & calendar
            </Link>
          </Reveal>
        </div>
      </section>

      <Media />
      <Gallery />
      <EnrolCTA />
    </>
  );
}
