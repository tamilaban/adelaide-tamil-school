import { ChevronUp, Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { handleImageError } from '../utils/imageHelper';
import { school, nav } from '../data/site';
import logoImg from '../assets/logo.png';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900 pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12 pb-12 border-b border-slate-900 items-start">
          {/* Brand */}
          <div className="lg:col-span-4 flex flex-col">
            <Link to="/" className="flex items-center gap-3 mb-4 group">
              <img
                src={logoImg}
                alt={school.name}
                onError={(e) => handleImageError(e)}
                className="h-12 w-auto object-contain brightness-110 transition-transform group-hover:scale-105"
              />
              <span className="font-display font-extrabold text-white text-sm leading-tight">
                {school.name}
                <span className="block font-tamil text-[#E9B872] text-xs font-semibold">{school.nameTa}</span>
              </span>
            </Link>
            <p className="text-[#E9B872] tracking-[0.18em] text-[10px] font-extrabold uppercase mb-3">
              Established {school.founded}
            </p>
            <p className="text-xs text-slate-400 leading-relaxed pr-2">
              We thrive to give the highest level of education along with our cultural values to students —
              weekly Tamil language and culture classes for every age across South Australia.
            </p>
          </div>

          {/* Explore */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">Explore</h4>
            <ul className="space-y-2.5 text-xs">
              {nav.map((item) => (
                <li key={item.name}>
                  <Link to={item.href} className="hover:text-white transition-colors">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div className="lg:col-span-2 flex flex-col">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">Learn</h4>
            <ul className="space-y-2.5 text-xs text-slate-500 font-medium">
              <li>Levels 2 – 8</li>
              <li>SACE Tamil (Continuers)</li>
              <li>Cultural concert</li>
              <li>Annual sports meet</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="font-display font-bold text-xs uppercase tracking-widest text-white mb-4">Contact</h4>
            <div className="space-y-3 text-xs text-slate-400">
              <p className="flex gap-2">
                <MapPin size={14} className="text-[#E9B872] shrink-0 mt-0.5" />
                <span>{school.address.line1}, {school.address.suburb}, {school.address.state} {school.address.postcode}</span>
              </p>
              <p className="flex gap-2 items-center">
                <Phone size={14} className="text-[#E9B872] shrink-0" />
                <a href={`tel:${school.phoneIntl}`} className="hover:text-white transition-colors">{school.phone}</a>
              </p>
              <p className="flex gap-2 items-center">
                <Mail size={14} className="text-[#E9B872] shrink-0" />
                <a href={`mailto:${school.email}`} className="hover:text-white transition-colors">{school.email}</a>
              </p>
              <p className="text-slate-500">{school.classTime}</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-8 text-xs text-slate-600">
          <p>© {year} {school.legalName}. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-2 bg-slate-900 border border-slate-800 rounded-lg text-slate-400 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1 group"
          >
            <span>Back to top</span>
            <ChevronUp size={14} className="group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
