import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { school } from '../data/site';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const mailtoHref = () => {
    const subject = encodeURIComponent(`Website enquiry — ${form.name || 'Prospective family'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );
    return `mailto:${school.email}?subject=${subject}&body=${body}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.location.href = mailtoHref();
  };

  const mapQuery = encodeURIComponent(
    `${school.address.line1}, ${school.address.suburb} ${school.address.state} ${school.address.postcode}`,
  );

  return (
    <>
      <PageHeader eyebrow="Contact" title="Contact Us" titleTa="தொடர்பு கொள்ளுங்கள்">
        Questions about enrolling, levels or events? Send us a message or drop in on a Saturday afternoon.
      </PageHeader>

      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 grid lg:grid-cols-12 gap-8 items-start">
          {/* Details */}
          <Reveal className="lg:col-span-5">
            <div className="glass-card rounded-2xl p-7 bg-white border border-slate-200">
              <h2 className="font-display text-xl font-extrabold text-slate-900 mb-5">
                School office <span className="font-tamil text-[#CB8315] text-base">· அலுவலகம்</span>
              </h2>
              <ul className="space-y-4 text-sm">
                <li className="flex gap-3">
                  <MapPin size={18} className="text-[#CB8315] shrink-0 mt-0.5" />
                  <span className="text-slate-600">
                    {school.address.line1}<br />
                    {school.address.suburb}, {school.address.state} {school.address.postcode}
                  </span>
                </li>
                <li className="flex gap-3 items-center">
                  <Phone size={18} className="text-[#15355E] shrink-0" />
                  <a href={`tel:${school.phoneIntl}`} className="text-slate-600 hover:text-[#15355E] font-semibold">{school.phone}</a>
                </li>
                <li className="flex gap-3 items-center">
                  <Mail size={18} className="text-[#CB8315] shrink-0" />
                  <a href={`mailto:${school.email}`} className="text-slate-600 hover:text-[#15355E] font-semibold">{school.email}</a>
                </li>
                <li className="flex gap-3 items-center">
                  <Clock size={18} className="text-[#15355E] shrink-0" />
                  <span className="text-slate-600">{school.classTime}</span>
                </li>
              </ul>

              <div className="mt-6 rounded-xl overflow-hidden border border-slate-200 aspect-[4/3]">
                <iframe
                  title="Adelaide Tamil School location"
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-7 bg-white border border-slate-200 space-y-5">
              <h2 className="font-display text-xl font-extrabold text-slate-900">Send a message</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Your name</label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#15355E]/60 transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Email</label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#15355E]/60 transition-colors"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows="5"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 text-sm focus:outline-none focus:border-[#15355E]/60 transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#CB8315] to-[#E59E27] font-bold text-white text-sm shadow-lg shadow-amber-600/20 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
              >
                <span>Compose email</span>
                <Send size={16} />
              </button>
              <p className="text-[11px] text-slate-400 font-normal text-center -mt-1">
                Opens in your email app, pre-filled and addressed to the school office.
              </p>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
