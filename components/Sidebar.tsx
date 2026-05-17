'use client';

import { useState, useEffect } from 'react';
import { portfolioData } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronUp, Linkedin, Github, Twitter, Facebook } from 'lucide-react';

const NAV_ITEMS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#education', label: 'Education' },
  { href: '#skills', label: 'Skills' },
  { href: '#contact', label: 'Contact' },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = NAV_ITEMS.map((item) => item.href.substring(1));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.getElementById(href.substring(1));
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* Mobile Hamburger */}
      <button
        className="lg:hidden fixed top-0 left-0 z-[60] bg-bg-surface/90 backdrop-blur-md p-3 m-2 rounded-lg border border-border"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar Panel */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-bg-surface/95 backdrop-blur-xl border-r border-border z-50 flex flex-col items-center py-10 px-4 transition-all duration-300
          w-full lg:w-sidebar
               ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Profile Section */}
        <div className="flex flex-col items-center w-full mb-8">
          {/* Profile Photo */}
          <div className="relative mb-5">
            <div className="absolute -inset-2 rounded-full bg-accent/20 blur-xl opacity-40" />
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-border">
              <img
                src="/img/profile.jpeg"
                alt={`${portfolioData.name} ${portfolioData.lastName}`}
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </div>

          {/* Name */}
          <h1 className="font-heading font-bold text-text-primary text-xl tracking-tight text-center">
            {portfolioData.name} <span className="text-accent">{portfolioData.lastName}</span>
          </h1>
          <p className="text-text-secondary text-sm font-body mt-1.5 font-medium">
            {portfolioData.title}
          </p>
          <div className="mt-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20">
            <p className="text-accent text-xs font-mono font-medium">Open to opportunities</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="w-full flex-1 overflow-y-auto">
          <div className="flex flex-col gap-1">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.href}
                className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                onClick={() => handleNav(item.href)}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>

        {/* Bottom Section */}
        <div className="w-full mt-auto pt-6 flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex gap-3">
            {[
              { href: portfolioData.social.linkedin, label: 'LinkedIn', icon: Linkedin },
              { href: portfolioData.social.github, label: 'GitHub', icon: Github },
              { href: portfolioData.social.twitter, label: 'Twitter', icon: Twitter },
              { href: portfolioData.social.facebook, label: 'Facebook', icon: Facebook },
            ].map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-bg-elevated border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
                aria-label={label}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>

          {/* Resume Download */}
          <a
            href="/resume/karan_resume.pdf"
            target="_blank"
            className="w-full text-center px-4 py-2.5 bg-accent/10 text-accent rounded-lg text-xs font-heading font-semibold uppercase tracking-widest hover:bg-accent/20 border border-accent/20 transition-all duration-300"
          >
            Download Resume
          </a>
        </div>
      </aside>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Back to Top Button */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 w-10 h-10 bg-accent/10 backdrop-blur rounded-lg flex items-center justify-center text-accent border border-accent/20 hover:bg-accent/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
