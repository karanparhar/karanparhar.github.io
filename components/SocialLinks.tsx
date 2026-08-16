'use client';

import { Linkedin, Github, Twitter, Facebook, Mail } from 'lucide-react';
import { portfolioData } from '../data/content';

const ICONS = {
  Linkedin,
  Github,
  Twitter,
  Facebook,
  Mail,
};

type IconName = keyof typeof ICONS;

export default function SocialLinks({
  size = 18,
  className = '',
}: {
  size?: number;
  className?: string;
}) {
  return (
     <div className={`flex gap-3 ${className}`}>
       {portfolioData.socialLinks.map((s) => {
          const Icon = ICONS[s.icon as IconName];
          if (!Icon) return null;
          return (
            <a
             key={s.key}
             href={s.href}
             target={s.key === 'email' ? undefined : '_blank'}
             rel={s.key === 'email' ? undefined : 'noopener noreferrer'}
             className="w-10 h-10 rounded-lg bg-bg-elevated/50 border border-border flex items-center justify-center text-text-muted hover:text-accent hover:border-accent/30 hover:bg-accent/5 transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent/50"
             aria-label={s.label}
            >
              <Icon size={size} />
            </a>
          );
        })}
     </div>
   );
}