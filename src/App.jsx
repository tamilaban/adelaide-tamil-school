import { useState } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Splash from './components/Splash';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Programs from './pages/Programs';
import News from './pages/News';
import Resources from './pages/Resources';
import Achievements from './pages/Achievements';
import Contact from './pages/Contact';

export default function App() {
  // Skip the splash for automated renderers / crawlers so content is immediate.
  const [showSplash, setShowSplash] = useState(
    typeof navigator === 'undefined' || !navigator.webdriver,
  );

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <BrowserRouter basename="/adelaide-tamil-school">
      <ScrollToTop />

      <AnimatePresence mode="wait">
        {showSplash && <Splash key="splash" onComplete={() => setShowSplash(false)} />}
      </AnimatePresence>

      {!showSplash && (
        <div className="relative min-h-screen bg-[#F5F5F5] font-sans text-slate-800 overflow-x-hidden flex flex-col">
          <motion.div
            className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#15355E] via-blue-400 to-[#CB8315] z-[100] origin-left"
            style={{ scaleX }}
          />

          <Navbar />

          <main className="flex-grow pt-[104px] sm:pt-[104px] md:pt-[92px]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/programs" element={<Programs />} />
              <Route path="/news" element={<News />} />
              <Route path="/resources" element={<Resources />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      )}
    </BrowserRouter>
  );
}
