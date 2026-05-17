'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { Mail, Phone, MapPin, ArrowUpRight, Download } from 'lucide-react';

const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: 'mailto:karan.parhar90@gmail.com', text: 'karan.parhar90@gmail.com' },
  { icon: Phone, label: 'Phone', value: 'tel:+919036765664', text: '+91 9036765664' },
  { icon: MapPin, label: 'Location', value: '', text: 'Bengaluru, Karnataka, India' },
] as const;

export default function ContactSection() {
  const ref = useRef(null);

  return (
    <section id="contact" ref={ref} className="py-28 md:py-36 px-6 md:px-12 lg:px-20 relative mb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <motion.h2
          className="section-title mb-16"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Get in Touch
        </motion.h2>

        <motion.p
          className="mt-6 text-text-secondary/70 text-lg mb-16 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
        >
          I&apos;m always interested in hearing about new opportunities, collaborations, or just discussing technology and software engineering.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            className="card rounded-xl"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            <h3 className="font-heading font-bold text-text-primary text-base uppercase tracking-widest mb-6">
              Contact
            </h3>
            <div className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, text }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-accent" />
                  </div>
                  <div>
                    <span className="text-text-muted text-xs block mb-0.5">{label}</span>
                    {value ? (
                      <a href={value} className="text-text-primary hover:text-accent transition-colors text-sm font-medium">
                        {text}
                      </a>
                    ) : (
                      <span className="text-text-primary text-sm font-medium">{text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="card rounded-xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.4 }}
          >
            <h3 className="font-heading font-bold text-text-primary text-base uppercase tracking-widest mb-6">
              Connect
            </h3>
            <div className="space-y-3">
              {[
                { href: 'https://www.linkedin.com/in/karanjit-singh-78b33a129/', label: 'LinkedIn' },
                { href: 'https://github.com/karanparhar', label: 'GitHub' },
                { href: 'https://twitter.com/karanjitparhar', label: 'Twitter' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-accent/5 hover:border-accent/20 border border-border transition-all duration-300 group"
                >
                  <span className="text-text-muted/60 group-hover:text-accent transition-colors text-sm font-mono">{label[0]}</span>
                  <span className="text-text-secondary/70 group-hover:text-text-primary transition-colors text-sm font-medium flex-1">{label}</span>
                  <ArrowUpRight size={14} className="text-text-muted/40 group-hover:text-accent transition-colors" />
                </a>
              ))}
              <a
                href="/resume/karan_resume.pdf"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-accent/10 text-accent hover:bg-accent/15 border border-accent/20 transition-all duration-300 font-medium text-sm"
              >
                <Download size={14} />
                <span>Download Resume (PDF)</span>
                <ArrowUpRight size={14} className="ml-auto" />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="mt-12 p-8 md:p-10 rounded-xl bg-bg-card/80 border border-border backdrop-blur-sm text-center"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.4 }}
        >
          <h3 className="font-heading text-xl font-bold text-text-primary mb-2 tracking-tight">
            Open to Opportunities
          </h3>
          <p className="text-text-secondary/60 text-sm mb-6">Currently exploring new roles in</p>
          <div className="flex flex-wrap justify-center gap-2">
            {portfolioData.availableFor.map((item) => (
              <span key={item} className="tag">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
