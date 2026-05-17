'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { portfolioData } from '../data/content';
import { Linkedin, Github, Twitter, Facebook } from 'lucide-react';

const SOCIAL_CONFIG = [
   { key: 'linkedin', href: portfolioData.social.linkedin, icon: Linkedin, label: 'LinkedIn' },
   { key: 'github', href: portfolioData.social.github, icon: Github, label: 'GitHub' },
   { key: 'twitter', href: portfolioData.social.twitter, icon: Twitter, label: 'Twitter' },
   { key: 'facebook', href: portfolioData.social.facebook, icon: Facebook, label: 'Facebook' },
] as const;

export default function ProfileHeader() {
  const ref = useRef(null);

  return (
      <section id="about" ref={ref} className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-20 right-10 w-72 h-72 rounded-full bg-accent/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-32 right-32 w-48 h-48 rounded-full bg-accent/3 blur-3xl pointer-events-none" />

        {/* Large decorative initial */}
        <div className="absolute top-32 right-16 font-heading text-[24rem] font-bold text-text-primary/[0.02] pointer-events-none select-none leading-none">
         K
        </div>

        <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        >
          {/* Decorative line */}
          <motion.div
          className="accent-line mb-6"
          initial={{ width: 0 }}
          animate={{ width: 40 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          />

          {/* Name */}
          <h1 className="font-heading text-6xl md:text-7xl lg:text-8xl font-bold text-text-primary leading-[0.95] tracking-tight">
            {portfolioData.name} <span className="text-accent">{portfolioData.lastName}</span>
          </h1>

          {/* Subtitle */}
          <p className="font-mono text-text-muted mt-6 text-sm md:text-base tracking-wide">
            {portfolioData.subtitle}
          </p>

          {/* Bio */}
          <motion.p
          className="mt-10 text-lg md:text-xl text-text-secondary/80 leading-relaxed max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          >
            {portfolioData.bio}
          </motion.p>

          {/* Professional Summary Card */}
          <motion.div
          className="mt-10 p-6 md:p-8 rounded-xl bg-bg-card/80 border border-border backdrop-blur-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          >
            <h3 className="font-heading text-sm font-semibold text-accent uppercase tracking-widest mb-3">
            Professional Journey
            </h3>
            <p className="text-text-secondary/70 leading-relaxed text-sm md:text-base">
            With over a decade of experience spanning from system engineering to principal software engineering, I&apos;ve architected and delivered mission-critical solutions for Fortune 500 companies and innovative startups alike.
            </p>
            <p className="text-text-secondary/70 mt-3 leading-relaxed text-sm md:text-base">
            My expertise lies in building scalable cloud-native applications, optimizing system performance, and leading engineering teams to deliver exceptional results.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {['Cloud Architecture', 'Microservices & Kubernetes', 'Performance Optimization', 'Team Leadership', 'DevOps'].map((tag) => (
                <span key={tag} className="text-xs font-mono text-text-muted px-3 py-1 rounded-full bg-bg-elevated border border-border">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
          className="flex gap-3 mt-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.4 }}
          >
            {SOCIAL_CONFIG.map(({ key, href, icon: Icon }) => (
              <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-lg bg-bg-elevated/50 border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300"
              aria-label={key}
              >
                <Icon size={18} />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        >
          <span className="text-text-muted text-xs font-mono tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-text-muted to-transparent" />
        </motion.div>
      </section>
    );
}
