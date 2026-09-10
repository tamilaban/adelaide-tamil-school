import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Mail, Menu, X, ChevronDown, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { handleImageError } from '../utils/imageHelper';
import { school, nav } from '../data/site';
import logoImg from '../assets/logo.png';

const Facebook = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);
const Instagram = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const Youtube = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const isActive = (href) => {
    const base = href.split('#')[0] || '/';
    return base === '/' ? location.pathname === '/' : location.pathname.startsWith(base);
  };

  return (
    <header className="w-full fixed top-0 z-50">
      {/* Utility bar */}
      <div className="bg-[#15355E] text-white text-[11px] sm:text-xs py-1.5 px-3 sm:px-4 md:px-8 flex flex-col sm:flex-row justify-between items-center gap-1.5">
        <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-1 font-medium">
          <a href={`tel:${school.phoneIntl}`} className="flex items-center gap-1 hover:text-blue-100 transition-colors">
            <Phone size={12} className="text-[#E9B872] shrink-0" />
            <span>{school.phone}</span>
          </a>
          <span className="hidden md:block w-px h-3.5 bg-white/25" />
          <a href={`mailto:${school.email}`} className="flex items-center gap-1 hover:text-blue-100 transition-colors">
            <Mail size={12} className="text-[#E9B872] shrink-0" />
            <span>{school.email}</span>
          </a>
          <span className="hidden lg:block w-px h-3.5 bg-white/25" />
          <span className="hidden lg:flex items-center gap-1 text-white/80">
            <MapPin size={12} className="text-[#E9B872] shrink-0" />
            {school.address.suburb}, {school.address.state}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="hidden sm:inline text-white/70 mr-1">Follow us</span>
          {[
            { Icon: Facebook, href: school.social.facebook, color: 'text-[#1877F2]' },
            { Icon: Instagram, href: school.social.instagram, color: 'text-[#E4405F]' },
            { Icon: Youtube, href: school.social.youtube, color: 'text-[#FF0000]' },
          ].map(({ Icon, href, color }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white flex items-center justify-center ${color} hover:scale-110 transition-transform shadow-sm`}
            >
              <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
            </a>
          ))}
        </div>
      </div>

      {/* Main nav */}
      <nav className="glass-nav py-2 px-4 md:px-8 flex items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-3 group shrink-0">
          <img
            src={logoImg}
            alt={school.name}
            onError={(e) => handleImageError(e)}
            className="h-11 sm:h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
          />
          <span className="hidden sm:flex flex-col leading-tight">
            <span className="font-display font-extrabold text-[#15355E] text-sm md:text-base tracking-tight">
              {school.name}
            </span>
            <span className="font-tamil text-[#CB8315] text-[11px] md:text-xs">{school.nameTa}</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-5">
          {nav.map((item, index) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(index)}
              onMouseLeave={() => item.dropdown && setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className={`flex items-center gap-1 text-sm font-bold transition-colors duration-200 py-1 ${
                  isActive(item.href) ? 'text-[#15355E]' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {item.name}
                {item.dropdown && (
                  <ChevronDown
                    size={15}
                    className={`transition-transform duration-200 ${
                      activeDropdown === index ? 'rotate-180 text-[#CB8315]' : 'text-slate-400'
                    }`}
                  />
                )}
              </Link>

              {item.dropdown && (
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.97 }}
                      transition={{ duration: 0.15 }}
                      className="absolute left-0 mt-1.5 w-72 rounded-2xl bg-[#0f2442]/95 border border-white/10 shadow-2xl p-3 backdrop-blur-md z-50"
                    >
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block px-4 py-2.5 text-sm font-semibold text-white/90 hover:text-[#E9B872] hover:bg-white/5 rounded-xl transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        <div className="hidden lg:flex items-center">
          <a
            href={school.enrolUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-lg bg-gradient-to-r from-[#CB8315] to-[#E59E27] text-sm font-bold text-white shadow-lg shadow-amber-600/20 hover:shadow-amber-600/35 hover:-translate-y-0.5 transition-all duration-200"
          >
            Enrol Now
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-slate-600 hover:text-slate-900 transition-colors p-2"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden w-full bg-white border-b border-slate-200 overflow-y-auto max-h-[80vh] shadow-2xl"
          >
            <div className="px-6 py-6 flex flex-col gap-3">
              {nav.map((item, index) => (
                <div key={item.name} className="flex flex-col">
                  <div className="flex justify-between items-center py-2">
                    <Link
                      to={item.href}
                      onClick={() => !item.dropdown && setIsOpen(false)}
                      className="text-base font-bold text-slate-700"
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <button
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                        aria-label="Expand"
                      >
                        <ChevronDown
                          size={18}
                          className={`transition-transform ${
                            activeDropdown === index ? 'rotate-180 text-[#CB8315]' : 'text-slate-400'
                          }`}
                        />
                      </button>
                    )}
                  </div>
                  {item.dropdown && activeDropdown === index && (
                    <div className="pl-4 flex flex-col border-l border-slate-200 ml-1 mb-2">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="py-1.5 text-sm text-slate-600 hover:text-[#15355E] font-medium"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a
                href={school.enrolUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="mt-3 w-full py-3 rounded-lg bg-gradient-to-r from-[#CB8315] to-[#E59E27] text-center text-sm font-bold text-white shadow-lg"
              >
                Enrol Now
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
