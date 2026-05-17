# Next.js Portfolio Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert a Bootstrap 4 static HTML portfolio into a modern Next.js 15 App Router application with a complete visual redesign.

**Architecture:** Next.js App Router with Server Components, Tailwind CSS 4 for styling, Framer Motion 12 for animations. Content is data-driven from a typed `data/content.ts` module replacing hardcoded HTML.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, Framer Motion 12, Lucide React (icons), Node 20+

---

## Overview

The project is a single-page, anchor-based static HTML portfolio. We will replace it entirely with a Next.js directory structure. The Bootstrap + SCSS + jQuery stack is discarded. The new stack is Tailwind + React + Framer Motion.

### Pre-flight Task (Before You Begin)

- [ ] **Confirm Node.js version** — Run `node --version`. Ensure v18+. If not, install via nvm: `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash` then `nvm install 20`.
- [ ] **Ensure npm is installed** — Run `npm --version`. Should be v9+.

---

### Task 1: Project Scaffolding — package.json

**Files:**
- Create: `package.json`
- Delete: `package-lock.json`, `gulpfile.js`, `vendor/`, `node_modules/` (old dependencies)

- [ ] **Step 1: Create package.json with Next.js + Tailwind + Framer Motion**

```json
{
  "name": "karanjit-portfolio",
  "version": "2.0.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^15.1.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "framer-motion": "^12.0.0",
    "lucide-react": "^0.460.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "@types/react": "^19.0.0",
    "@types/react-dom": "^19.0.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "tailwindcss": "^4.0.0",
    "typescript": "^5.6.0"
  }
}
```

- [ ] **Step 2: Verify package.json**
Run: `cat package.json`
Expected: All packages and scripts listed correctly.

---

### Task 2: Install Dependencies & Bootstrap TypeScript

**Files:**
- Create: `next.config.ts`
- Create: `tsconfig.json`
- Create: `postcss.config.mjs`
- Create: `tailwind.config.ts` (minimal — using Tailwind 4 CDN-style approach)
- Create: `app/` directory structure

- [ ] **Step 1: Install dependencies**

```bash
npm install
```

Expected output: All packages installed without errors.

- [ ] **Step 2: Create next.config.ts**

```typescript
import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
```

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "allowSyntheticDefaultImports": true,
    "target": "ES2017",
    "downlevelIteration": true,
    "isolatedModules": true,
    "jsx": "react-jsx",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "baseUrl": ".",
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules", "vendor"]
}
```

- [ ] **Step 4: Create postcss.config.mjs**

```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};

export default config;
```

- [ ] **Step 5: Create directory structure**

```bash
mkdir -p app/components data lib public/img public/resume
```

---

### Task 3: Tailwind CSS Setup & Global Styles

**Files:**
- Create: `app/globals.css`
- Create: `tailwind.config.ts`

- [ ] **Step 1: Create tailwind.config.ts**

```typescript
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fd7e14',
        secondary: '#00d4ff',
        charcoal: '#0f1419',
        surface: {
          light: '#f8f6f3',
          dark: '#1a1f2e',
        },
      },
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['DM Sans', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      maxWidth: {
        sidebar: '20rem',
      },
      animation: {
        'glow-pulse': 'glow-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '0.7' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
```

- [ ] **Step 2: Create app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=DM+Sans:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&family=JetBrains+Mono:wght@400;500;700&display=swap');

@layer base {
  :root {
    --primary: #fd7e14;
    --secondary: #00d4ff;
    --charcoal: #0f1419;
    --surface-light: #f8f6f3;
    --surface-dark: #1a1f2e;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-charcoal text-white font-body;
  }

  /* Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #0f1419;
  }
  ::-webkit-scrollbar-thumb {
    background: #495057;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #fd7e14;
  }

  /* Noise overlay */
  .noise-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: 50;
    opacity: 0.03;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
  }

  /* Dot grid background */
  .dot-grid {
    background-image: radial-gradient(circle, #495057 1px, transparent 1px);
    background-size: 24px 24px;
  }
}

@layer components {
  .section-title {
    @apply font-heading text-4xl md:text-5xl font-bold uppercase tracking-wider text-white mb-8;
    position: relative;
    display: inline-block;
    padding-bottom: 1rem;
  }
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 80px;
    height: 4px;
    background: linear-gradient(90deg, #fd7e14, #00d4ff);
    border-radius: 9999px;
  }

  .card {
    @apply bg-surface-dark rounded-xl border border-gray-700/50 p-6 md:p-8 transition-all duration-300;
  }
  .card-hover {
    @apply hover:bg-gray-800/50 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1;
  }

  .badge {
    @apply inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20;
  }

  .nav-link {
    @apply block text-left px-4 py-3 rounded-lg text-sm font-heading font-semibold uppercase tracking-wider text-gray-400 hover:text-white hover:bg-white/5 transition-all duration-200 cursor-pointer;
  }
  .nav-link.active {
    @apply bg-primary/20 text-primary;
  }

  .skill-bar-container {
    @apply w-full h-2 bg-gray-800 rounded-full overflow-hidden;
  }

  .skill-bar {
    @apply h-full rounded-full transition-all duration-1000 ease-out;
    background: linear-gradient(90deg, var(--primary), var(--secondary));
  }
}
```

---

### Task 4: Data Layer — content.ts

**Files:**
- Create: `data/content.ts`

- [ ] **Step 1: Create data/content.ts with all portfolio data as TypeScript interfaces**

```typescript
export interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface Project {
  title: string;
  role: string;
  company: string;
  description: string;
  highlights: { label: string; value: string }[];
  tech: string[];
}

export interface Skill {
  name: string;
  level: number;  // 0-100
  category: string;
}

export const portfolio = {
  name: 'Karanjit',
  lastName: 'Singh',
  title: 'Principal Software Engineer',
  subtitle: 'Bengaluru · +91 9036765664 · karan.parhar90@gmail.com',
  photo: '/img/profile.webp',
  bio: 'Software Engineer with 12+ years of expertise in developing large-scale software systems using Golang and other technologies. Proven track record of leading high-performing teams, architecting scalable solutions, and delivering complex projects across multiple industries.',

  experiences: [
    {
      title: 'Software Developer',
      company: 'IBM Labs',
      period: 'December 2024 - Present',
      bullets: [
        'Design and implement control plane components using Golang and Python for AI infrastructure and cloud-native systems.',
        'Develop Kubernetes Custom Resource Definitions (CRDs) and operators using Kubebuilder for automated resource management.',
        'Build highly available microservices with gRPC and REST APIs spanning multiple regions.',
        'Manage IBM Cloud Bare Metal Servers at scale, implementing monitoring systems using IPMI/BMC interfaces.',
        'Implement telemetry collection using eBPF and define SLA/SLO metrics for system reliability.',
        'Establish CI/CD pipelines and release management best practices for production deployments.',
        'Collaborate with cross-functional teams ensuring GPU/CUDA compatibility for AI workloads.',
      ],
    },
    {
      title: 'Principal Software Engineer',
      company: 'CAST Software',
      period: 'November 2019 - December 2024',
      bullets: [
        'Designed a Role-Based Access Control (RBAC) system, reducing authorization-related issues ensuring seamless integration with multiple platforms.',
        'Designed and implemented a scalable ETL queue system, improving data processing speed.',
        'Optimized Neo4j query performance, cutting down execution time which enhanced system responsiveness.',
        'Mentored a team of 6 backend developers, improving overall code quality and boosting team productivity through continuous learning and technical guidance.',
      ],
    },
    {
      title: 'Software Developer',
      company: 'Kloud9 Technologies',
      period: 'March 2018 - October 2019',
      bullets: [
        'Developed a Kubernetes Custom Resource Definition (CRD) to automate resource management, improving scalability and reducing manual intervention in deployments.',
        'Created a custom CI/CD tool tailored for multi-cloud environments (GCP, AWS, OpenShift, Kubernetes), enhancing deployment success rates across 20+ projects.',
        'Designed a template engine for dynamically generating deployment pipelines, enabling teams to create custom workflows across various cloud platforms.',
        'Designed and implemented an approval system that automated deployment propagation from development to QA, and QA to production.',
        'Standardized Kubernetes deployments on AWS, GKE, and AKS, reducing manual effort and accelerating release cycles.',
      ],
    },
    {
      title: 'Production System & Network Engineer',
      company: 'Flipkart Pvt Ltd',
      period: 'November 2015 - March 2018',
      bullets: [
        'Developed a hardware health monitoring system using Golang, Beego, Gorilla Mux, and Redis for real-time server monitoring via IPMI.',
        'Created and consumed REST APIs using Golang for the monitoring system, integrating with hardware to track server metrics.',
        'Built a live capacity planner to monitor resource availability across VMs, utilizing Golang, MySQL, and Beego.',
        'Managed over 21,000 Linux servers in multiple data centers, implementing monitoring tools like Nagios and Splunk.',
        'Automated system administration tasks and monitoring scripts using shell scripting.',
        'Provided production support and handled user administration, key-based access, and virtualization through KVM.',
      ],
    },
    {
      title: 'System Engineer',
      company: 'Brocade Communications',
      period: 'April 2015 - November 2015',
      bullets: [
        'Developed Python and Shell scripts to automate Linux system monitoring, leading to 30% faster issue detection.',
        'Handled hardware issues for 600+ servers from HP, IBM, and Dell, coordinating with vendors for resolution.',
        'Built and configured servers from scratch, including managing Linux KVM servers.',
        'Managed file systems, resolved file system issues, and resized using LVM; applied kernel patches.',
        'Centralized server log management using Splunk, created dashboards and log analysis reports.',
      ],
    },
    {
      title: 'System Engineer',
      company: 'Suksh Technology Pvt Ltd, Bengaluru',
      period: 'January 2013 - April 2015',
      bullets: [
        'Automated hardware provisioning and system configuration tasks using Python and Shell, reducing setup times by 35%.',
      ],
    },
  ] as const,

  projects: [
    {
      title: 'CAST Imaging',
      role: 'Enterprise Software Analysis Platform',
      company: 'CAST Software',
      description: 'Led the development of an enterprise-grade software analysis platform that reverse-engineers complex software systems to create interactive architecture blueprints.',
      highlights: [
        { label: 'RBAC System', value: 'Reducing authorization issues by 40%' },
        { label: 'ETL Pipeline', value: 'Improving data processing speed by 60%' },
        { label: 'Database Optimization', value: 'Reducing execution time by 70%' },
        { label: 'Team Leadership', value: 'Mentored 6 developers, improved productivity' },
      ],
      tech: ['Golang', 'Neo4j', 'PostgreSQL', 'Microservices', 'Docker', 'Kubernetes'],
    },
    {
      title: 'Multi-Cloud Continuous Delivery',
      role: 'Platform Engineering',
      company: 'Kloud9 Technologies',
      description: 'Architected and developed a comprehensive CI/CD platform supporting multiple cloud providers with automated deployment pipelines.',
      highlights: [
        { label: 'Multi-Cloud', value: 'AWS EC2, GKE, Azure AKS, OpenShift' },
        { label: 'Kubernetes CRD', value: 'Automated resource management' },
        { label: 'Template Engine', value: 'Dynamic pipeline generation' },
        { label: 'Approval System', value: 'Automated deployment propagation' },
        { label: 'Impact', value: '45% enhanced deployment success rate' },
      ],
      tech: ['Golang', 'Kubernetes', 'Docker', 'Jenkins', 'AWS', 'GCP', 'Azure'],
    },
    {
      title: 'Bare Metal Server Monitoring',
      role: 'Infrastructure Management',
      company: 'Flipkart',
      description: 'Developed a comprehensive hardware health monitoring system for 21,000+ servers across multiple data centers using IPMI protocol.',
      highlights: [
        { label: 'Real-time Monitoring', value: 'Temperature, voltage, fan speeds' },
        { label: 'REST API', value: 'Golang-based hardware metrics' },
        { label: 'Capacity Planning', value: 'Live dashboard with MySQL' },
        { label: 'Scale', value: '21,000+ servers, 99.9% uptime' },
      ],
      tech: ['Golang', 'Beego', 'Redis', 'MySQL', 'IPMI', 'Nagios', 'Splunk'],
    },
    {
      title: 'AI-Driven Infrastructure',
      role: 'Research & Development',
      company: 'Internal Project',
      description: 'Designed intelligent infrastructure management system using machine learning to predict and optimize resource allocation.',
      highlights: [
        { label: 'Predictive Analytics', value: 'Data patterns and demand trends' },
        { label: 'Auto-scaling', value: 'Automated resource deployment' },
        { label: 'Cost Optimization', value: 'Intelligent de-allocation, 30% reduction' },
        { label: 'Config Management', value: 'Automated infrastructure config' },
      ],
      tech: ['Python', 'Machine Learning', 'Kubernetes', 'Cloud APIs', 'Monitoring'],
    },
  ] as const,

  skills: [
    // Programming Languages
    { name: 'Golang', level: 95, category: 'languages' },
    { name: 'Python', level: 85, category: 'languages' },
    { name: 'Shell Scripting (Bash)', level: 90, category: 'languages' },
    // Cloud & DevOps
    { name: 'Kubernetes', level: 92, category: 'devops' },
    { name: 'Docker', level: 90, category: 'devops' },
    { name: 'AWS / GCP / Azure', level: 85, category: 'devops' },
    // Databases
    { name: 'Neo4j (Graph DB)', level: 85, category: 'databases' },
    { name: 'PostgreSQL / MySQL', level: 88, category: 'databases' },
    { name: 'Redis', level: 82, category: 'databases' },
  ] as const,

  education: [
    {
      university: 'Punjab Technical University',
      degree: 'Bachelor of Technology',
      field: 'Electronics & Communication Engineering',
      period: 'August 2008 - May 2012',
    },
  ],

  social: {
    linkedin: 'https://www.linkedin.com/in/karanjit-singh-78b33a129/',
    github: 'https://github.com/karanparhar',
    twitter: 'https://twitter.com/karanjitparhar',
    facebook: 'https://www.facebook.com/karan.parhar.5',
  },

  availableFor: ['Cloud Architecture', 'Backend Development', 'DevOps Engineering', 'Technical Leadership'],
} as const;

export const socialIcons = {
  linkedin: 'https://www.linkedin.com/in/karanjit-singh-78b33a129/',
  github: 'https://github.com/karanparhar',
  twitter: 'https://twitter.com/karanjitparhar',
  facebook: 'https://www.facebook.com/karan.parhar.5',
} as const;
```

---

### Task 5: Root Layout — app/layout.tsx

**Files:**
- Create: `app/layout.tsx`

- [ ] **Step 1: Create root layout with metadata, fonts, and sidebar**

```tsx
import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Karanjit Singh - Principal Software Engineer',
  description: 'Portfolio of Karanjit Singh - Principal Software Engineer with 12+ years of expertise in Golang, cloud technologies, and system architecture.',
  author: 'Karanjit Singh',
  keywords: ['principal software engineer', 'golang', 'cloud architecture', 'devops', 'system architecture', 'karanjitsingh'],
  openGraph: {
    title: 'Karanjit Singh - Principal Software Engineer',
    description: 'Principal Software Engineer with 12+ years of expertise in Golang and cloud technologies.',
    type: 'website',
    url: 'https://karanparhar.github.io/',
    siteName: 'Karanjit Singh Portfolio',
    locale: 'en_US',
  },
  robots: 'index, follow',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Sidebar />
        <main className="ml-0 lg:ml-[20rem]">
          {children}
        </main>
      </body>
    </html>
  );
}
```

- [ ] **Step 2: Verify**

```bash
cat app/layout.tsx
```

Expected: Root layout with metadata, Sidebar import, and main content wrapper.

---

### Task 6: Sidebar Component — components/Sidebar.tsx

**Files:**
- Create: `app/components/Sidebar.tsx`

- [ ] **Step 1: Create Sidebar component with profile + nav + scroll spy**

```tsx
'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { portfolio, socialIcons } from '@/data/content';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronUp } from 'lucide-react';

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
      {/* Mobile Toggle */}
      <button
        className="lg:hidden fixed top-0 left-0 z-[60] bg-charcoal/90 backdrop-blur p-3 m-2 rounded-lg border border-gray-700/50"
        onClick={() => setMobileOpen(!mobileOpen)}
        aria-label="Toggle navigation"
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-charcoal/95 backdrop-blur-xl border-r border-gray-800/50 z-50 flex flex-col items-center py-8 px-4 transition-all duration-300
          w-full lg:w-sidebar
          ${mobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center w-full mb-6">
          <div className="relative w-32 h-32 mb-4">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary animate-glow-pulse opacity-40 blur-sm" />
            <Image
              src="/img/profile.webp"
              alt="Karanjit Singh"
              fill
              className="rounded-full object-cover border-4 border-charcoal"
              priority
            />
          </div>
          <h1 className="font-heading font-bold text-white text-xl text-center">
            {portfolio.name} <span className="text-primary">{portfolio.lastName}</span>
          </h1>
          <p className="text-gray-400 text-sm text-center font-mono mt-1">
            {portfolio.title}
          </p>
        </div>

        {/* Navigation */}
        <nav className="w-full flex-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.href}
              className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
              onClick={() => handleNav(item.href)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Social Links */}
        <div className="flex gap-3 mt-auto pt-4">
          {Object.entries(socialIcons).map(([platform, url]) => (
            <a
              key={platform}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-all duration-200"
              aria-label={platform}
            >
              <span className="text-sm uppercase font-bold">{platform[0]}</span>
            </a>
          ))}
        </div>

        {/* Resume Download Button */}
        <a
          href="/resume/karan_resume.pdf"
          target="_blank"
          className="mt-4 px-6 py-2 bg-primary text-white rounded-full text-sm font-heading font-semibold uppercase tracking-wider hover:bg-primary/80 transition-all duration-200"
        >
          Resume
        </a>
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

      {/* Back to Top (visible on scroll) */}
      <AnimatePresence>
        {scrolled && (
          <motion.button
            className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-primary/20 backdrop-blur rounded-full flex items-center justify-center text-primary border border-primary/30 hover:bg-primary/40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Back to top"
          >
            <ChevronUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
```

---

### Task 7: ProfileHeader Section — components/ProfileHeader.tsx + About Section

**Files:**
- Create: `app/components/ProfileHeader.tsx`
- This component includes the "Professional Journey" / About section inline within the main page, but is exported as a standalone component for animation.

- [ ] **Step 1: Create ProfileHeader component**

```tsx
'use client';

import { motion } from 'framer-motion';
import { portfolio, socialIcons } from '@/data/content';
import { Linkedin, Github, Twitter, Facebook } from 'lucide-react';

const SOCIAL_CONFIG = [
  { key: 'linkedin', href: socialIcons.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { key: 'github', href: socialIcons.github, icon: Github, label: 'GitHub' },
  { key: 'twitter', href: socialIcons.twitter, icon: Twitter, label: 'Twitter' },
  { key: 'facebook', href: socialIcons.facebook, icon: Facebook, label: 'Facebook' },
] as const;

export default function ProfileHeader() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 py-20 relative">
      {/* Background dot grid */}
      <div className="absolute inset-0 dot-grid opacity-20" />

      <motion.div
        className="relative z-10 max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        {/* Name */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-none">
          {portfolio.name}
          <span className="text-primary ml-3">{portfolio.lastName}</span>
        </h1>

        {/* Subtitle */}
        <p className="font-mono text-gray-400 mt-4 text-sm md:text-base">
          {portfolio.subtitle}
        </p>

        {/* Bio */}
        <p className="mt-8 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
          {portfolio.bio}
        </p>

        {/* Professional Journey */}
        <div className="mt-12 p-6 md:p-8 rounded-xl bg-gray-800/30 border border-gray-700/30 border-l-4 border-l-primary">
          <h3 className="font-heading text-xl font-bold text-primary uppercase mb-4">
            Professional Journey
          </h3>
          <p className="text-gray-300 leading-relaxed">
            With over a decade of experience spanning from system engineering to principal software engineering, I&apos;ve architected and delivered mission-critical solutions for Fortune 500 companies and innovative startups alike.
          </p>
          <p className="text-gray-300 mt-4 leading-relaxed">
            My expertise lies in building scalable cloud-native applications, optimizing system performance, and leading engineering teams to deliver exceptional results.
          </p>
          <p className="mt-4 text-primary font-mono text-sm">
            Core: Cloud Architecture • Microservices & Kubernetes • Performance Optimization • Team Leadership • DevOps
          </p>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-8">
          {SOCIAL_CONFIG.map(({ key, href, icon: Icon, label }) => (
            <a
              key={key}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-gray-700/50 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
              aria-label={label}
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
```

---

### Task 8: ExperienceCard & Experience Section — components/ExperienceSection.tsx

**Files:**
- Create: `app/components/ExperienceSection.tsx`

- [ ] **Step 1: Create ExperienceSection with timeline layout and motion animations**

```tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/content';
import { Briefcase, ArrowRight } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

const timelineDotVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4 } },
};

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="experience" ref={ref} className="py-24 px-6 md:px-12 lg:px-20 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-gray-900/50 to-charcoal pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>

        {/* Timeline */}
        <div className="relative mt-12 ml-6 md:ml-0">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-[-1px] top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-gray-800 md:w-1 opacity-40" />

          {portfolio.experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative ml-8 md:ml-0 md:pl-0 mb-12 last:mb-0"
              custom={i}
              initial="hidden"
              animate="visible"
              variants={cardVariants}
              layout
            >
              {/* Timeline dot */}
              <motion.div
                className="absolute left-[-9px] md:left-[-6px] top-1 w-4 h-4 rounded-full bg-primary border-4 border-charcoal z-10"
                variants={timelineDotVariants}
                transition={{ delay: i * 0.15 + 0.2 }}
              />

              <div className="card p-6 md:p-8 card-hover group">
                {/* Date */}
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-primary text-sm font-semibold tracking-wide">
                    {exp.period}
                  </span>
                  <ArrowRight size={16} className="text-gray-600 group-hover:text-primary transition-colors" />
                </div>

                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                    {exp.title}
                  </h3>
                  <p className="text-primary font-semibold mt-1">
                    {exp.company}
                  </p>
                </div>

                <ul className="mt-6 space-y-3">
                  {exp.bullets.map((bullet, j) => (
                    <li key={j} className="flex gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                      <span className="text-primary mt-1.5 shrink-0">▸</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 9: Projects Section — components/ProjectsSection.tsx

**Files:**
- Create: `app/components/ProjectsSection.tsx`

- [ ] **Step 1: Create ProjectsSection with card grid layout**

```tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/content';
import { Code2, Layers, Server, Sparkles } from 'lucide-react';

const icons = [Code2, Layers, Server, Sparkles];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: 'easeOut' },
  }),
};

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="projects" ref={ref} className="py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Key Projects
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {portfolio.projects.map((project, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={project.title}
                className="card card-hover group rounded-2xl overflow-hidden"
                custom={i}
                initial="hidden"
                animate="visible"
                variants={cardVariants}
                layout
              >
                {/* Icon header */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon size={20} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-lg leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm">{project.role}</p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="space-y-2 mb-6">
                  {project.highlights.map((h) => (
                    <div key={h.label} className="flex items-start gap-2 text-sm">
                      <span className="text-primary mt-0.5 shrink-0">◆</span>
                      <div>
                        <span className="text-white font-semibold">{h.label}:</span>{' '}
                        <span className="text-gray-400">{h.value}</span>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 10: Skills Section — components/SkillsSection.tsx

**Files:**
- Create: `app/components/SkillsSection.tsx`

- [ ] **Step 1: Create SkillsSection with animated progress bars**

```tsx
'use client';

import { useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/content';
import { Code2, Cloud, Database, Terminal } from 'lucide-react';

const CATEGORY_ICONS = {
  languages: { icon: Code2, label: 'Programming Languages' },
  devops: { icon: Cloud, label: 'Cloud & DevOps' },
  databases: { icon: Database, label: 'Databases' },
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const grouped = useMemo(() => {
    const groups: Record<string, typeof portfolio.skills> = {};
    for (const skill of portfolio.skills) {
      if (!groups[skill.category]) groups[skill.category] = [];
      groups[skill.category].push(skill);
    }
    return groups;
  }, []);

  return (
    <section id="skills" ref={ref} className="py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-gray-900/30 to-charcoal pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Technical Skills
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.entries(grouped).map(([category, skills]) => {
            const { icon: Icon, label } = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
            return (
              <motion.div
                key={category}
                className="card rounded-2xl"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                    <Icon size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-white text-lg">{label}</h3>
                </div>

                {skills.map((skill, i) => (
                  <div key={skill.name} className="mb-5 last:mb-0">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 text-sm font-medium">{skill.name}</span>
                      <span className="font-mono text-primary text-xs">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="skill-bar-container">
                      <motion.div
                        className="skill-bar"
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
                        transition={{ delay: i * 0.1 + 0.2, duration: 1.2, ease: 'easeOut' }}
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

---

### Task 11: Education Section — components/EducationSection.tsx

**Files:**
- Create: `app/components/EducationSection.tsx`

- [ ] **Step 1: Create EducationSection**

```tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio } from '@/data/content';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="education" ref={ref} className="py-24 px-6 md:px-12 lg:px-20 relative">
      <div className="absolute inset-0 dot-grid opacity-10 pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <motion.div
          className="mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {portfolio.education.map((edu) => (
            <div key={edu.university} className="card p-8 md:p-10 rounded-2xl relative overflow-hidden">
              {/* Accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary" />

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <GraduationCap size={24} className="text-primary" />
                    <h3 className="font-heading text-2xl font-bold text-white">{edu.university}</h3>
                  </div>
                  <p className="text-primary font-semibold text-lg">{edu.degree}</p>
                  <p className="text-gray-400">{edu.field}</p>
                </div>
                <div className="font-mono text-primary text-sm md:text-base font-semibold whitespace-nowrap">
                  {edu.period}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
```

---

### Task 12: Contact Section — components/ContactSection.tsx

**Files:**
- Create: `app/components/ContactSection.tsx`

- [ ] **Step 1: Create ContactSection**

```tsx
'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { portfolio, socialIcons } from '@/data/content';
import { Mail, Phone, MapPin, Download, Linkedin, Github, Twitter } from 'lucide-react';

const CONTACT_ITEMS = [
  { icon: Mail, label: 'Email', value: `mailto:${portfolio.subtitle.split('·')[2]?.trim()}`, text: portfolio.subtitle.split('·')[2]?.trim() },
  { icon: Phone, label: 'Phone', value: `tel:+919036765664`, text: '+91 9036765664' },
  { icon: MapPin, label: 'Location', value: '', text: 'Bengaluru, Karnataka, India' },
] as const;

const SOCIAL_MAP = [
  { key: 'linkedin', icon: Linkedin, label: 'LinkedIn' },
  { key: 'github', icon: Github, label: 'GitHub' },
  { key: 'twitter', icon: Twitter, label: 'Twitter' },
] as const;

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="contact" ref={ref} className="py-24 px-6 md:px-12 lg:px-20 relative mb-20">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal via-gray-900/30 to-charcoal pointer-events-none" />

      <div className="relative z-10 max-w-4xl">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          Let&apos;s Connect
        </motion.h2>

        <p className="mt-6 text-gray-400 text-lg mb-12">
          I&apos;m always interested in hearing about new opportunities, collaborations, or just discussing technology and software engineering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Info */}
          <motion.div
            className="card rounded-2xl"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-6">
              Contact Information
            </h3>
            <div className="space-y-4">
              {CONTACT_ITEMS.map(({ icon: Icon, label, value, text }) => (
                <div key={label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <span className="text-gray-500 text-sm block">{label}</span>
                    {value ? (
                      <a href={value} className="text-white hover:text-primary transition-colors font-medium">
                        {text}
                      </a>
                    ) : (
                      <span className="text-white font-medium">{text}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Links & Action Buttons */}
          <motion.div
            className="card rounded-2xl"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wider mb-6">
              Social Profiles
            </h3>
            <div className="space-y-3">
              {SOCIAL_MAP.map(({ key, icon: Icon, label }) => (
                <a
                  key={key}
                  href={socialIcons[key as keyof typeof socialIcons]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-800/50 hover:bg-primary/20 hover:border-primary/30 border border-transparent transition-all duration-300 group"
                >
                  <Icon size={20} className="text-gray-400 group-hover:text-primary transition-colors" />
                  <span className="text-gray-300 group-hover:text-white transition-colors font-medium">
                    {label}
                  </span>
                  <ArrowRight size={16} className="ml-auto text-gray-600 group-hover:text-primary transition-colors" />
                </a>
              ))}
              {/* Download Resume */}
              <a
                href="/resume/karan_resume.pdf"
                target="_blank"
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary hover:bg-primary/80 text-white transition-all duration-300 font-heading font-semibold text-sm uppercase tracking-wider"
              >
                <Download size={20} />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Open To Badges */}
        <motion.div
          className="mt-12 p-8 rounded-2xl bg-gray-800/30 border border-gray-700/30 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <h3 className="font-heading text-xl font-bold text-white mb-3">Open to Opportunities</h3>
          <p className="text-gray-400 mb-6">Currently exploring new opportunities in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {portfolio.availableFor.map((item) => (
              <span key={item} className="badge px-5 py-2 text-sm">
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
```

Wait, I need to add the ArrowRight import. Let me fix that:

Actually, the arrow icon should be `ArrowRight` from lucide-react. Let me correct:

- [ ] **Step 1 (corrected): Create ContactSection** — Same as above but add `ArrowRight` to the lucide-react import.

```tsx
import { Mail, Phone, MapPin, Download, Linkedin, Github, Twitter, ArrowRight } from 'lucide-react';
```

---

### Task 13: Main Page — app/page.tsx

**Files:**
- Create: `app/page.tsx`
- Modify: `app/layout.tsx` (update children reference)

- [ ] **Step 1: Create the main page component**

```tsx
import ProfileHeader from '@/components/ProfileHeader';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';

export default function Home() {
  return (
    <>
      <ProfileHeader />
      <hr className="border-gray-800/50 mx-6 md:mx-12 lg:mx-20" />
      <ExperienceSection />
      <hr className="border-gray-800/50 mx-6 md:mx-12 lg:mx-20" />
      <ProjectsSection />
      <hr className="border-gray-800/50 mx-6 md:mx-12 lg:mx-20" />
      <EducationSection />
      <hr className="border-gray-800/50 mx-6 md:mx-12 lg:mx-20" />
      <SkillsSection />
      <hr className="border-gray-800/50 mx-6 md:mx-12 lg:mx-20" />
      <ContactSection />
    </>
  );
}
```

---

### Task 14: 404 Page — app/not-found.tsx

**Files:**
- Create: `app/not-found.tsx`

- [ ] **Step 1: Create redesigned 404 page**

```tsx
import Link from 'next/link';
import { HomeIcon } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-charcoal relative overflow-hidden px-6">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10" />
      <div className="absolute inset-0 dot-grid opacity-10" />

      <div className="text-center relative z-10">
        {/* Animated 404 */}
        <h1 className="font-heading text-[120px] md:text-[200px] font-bold text-white leading-none">
          4<span className="text-primary">0</span>4
        </h1>

        <h2 className="text-2xl md:text-4xl font-heading font-bold text-white mt-4 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg md:text-xl max-w-md mx-auto mb-10">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        <Link
          href="/"
          className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-heading font-semibold text-lg hover:bg-primary/80 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
        >
          <HomeIcon size={20} />
          Go Home
        </Link>

        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/#about" className="text-gray-400 hover:text-primary transition-colors">
            About
          </Link>
          <span className="text-gray-700">•</span>
          <Link href="/#experience" className="text-gray-400 hover:text-primary transition-colors">
            Experience
          </Link>
          <span className="text-gray-700">•</span>
          <Link href="/#projects" className="text-gray-400 hover:text-primary transition-colors">
            Projects
          </Link>
          <span className="text-gray-700">•</span>
          <Link href="/#contact" className="text-gray-400 hover:text-primary transition-colors">
            Contact
          </Link>
        </div>
      </div>
    </main>
  );
}
```

Fix ArrowRight import in page.tsx — add it to the import list for the hr elements or remove them:

- [ ] **Step 2: Fix page.tsx** (the hr elements don't need ArrowRight, the import was already fine).

---

### Task 15: Sitemap & Robots — Next.js equivalents

**Files:**
- Create: `app/sitemap.ts`
- Create: `app/robots.ts`

- [ ] **Step 1: Create sitemap.ts**

```tsx
import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://karanparhar.github.io';

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/resume/karan_resume.pdf`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];
}
```

- [ ] **Step 2: Create robots.ts**

```tsx
import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/vendor/', '/node_modules/'],
    },
    sitemap: 'https://karanparhar.github.io/sitemap.xml',
  };
}
```

---

### Task 16: Asset Migration & Image Optimization

**Files:**
- Copy: `img/karan's_pic.jpeg` → `public/img/profile.webp`
- Copy: `resume/karan_resume.pdf` → `public/resume/karan_resume.pdf`
- Delete: Old `img/`, `css/`, `js/`, `scss/`, `vendor/` directories

- [ ] **Step 1: Create public directories and copy assets**

```bash
mkdir -p public/img public/resume
cp "img/karan's_pic.jpeg" "public/img/profile.webp"
cp resume/karan_resume.pdf "public/resume/karan_resume.pdf"
```

Wait — rename to .webp for Next.js optimization. Since we can't convert jpeg to webp in bash easily without a tool, let's keep the filename and reference it as .jpeg in the layout:

Actually, let me use a simpler approach. Use the original filename:

- [ ] **Step 1 (corrected): Copy assets to public/ directories**

```bash
mkdir -p public/img public/resume
cp "img/karan's_pic.jpeg" "public/img/profile.jpeg"
cp resume/karan_resume.pdf "public/resume/karan_resume.pdf"
```

Then update the photo reference in `data/content.ts`:
- Change `photo: '/img/profile.webp'` to `photo: '/img/profile.jpeg'`

Then update the Sidebar `ProfileHeader.tsx` and any Image components:
- Change `<Image src="/img/profile.webp" ... />` to `<Image src="/img/profile.jpeg" ... />`

Wait — since `output: 'export'` in next.config.js, images won't be auto-optimized. That's fine. We can use Next.js Image with `unoptimized: true` as already set. Or we can just use a plain `<img>` tag for the profile photo to avoid the unoptimized warning.

Let me fix the approach: replace the Image component in Sidebar with a regular img tag since we're exporting static:

In `Sidebar.tsx`, replace:
```tsx
<Image src="/img/profile.jpeg" alt="Karanjit Singh" fill className="rounded-full object-cover border-4 border-charcoal" priority />
```
with:
```tsx
<img
  src="/img/profile.jpeg"
  alt="Karanjit Singh"
  className="w-32 h-32 rounded-full object-cover border-4 border-charcoal"
/>
```

Wait, we also want to update `app/layout.tsx` to remove the Image import from `next/image` if not used:

Actually Image is fine to keep, it's in globals.css. Let me reconsider. Use:

```tsx
<img
  src="/img/profile.jpeg"
  alt="Karanjit Singh"
  className="w-32 h-32 rounded-full object-cover border-4 border-charcoal"
  loading="eager"
/>
```

- [ ] **Step 2: Update all profile image references** — In both `ProfileHeader.tsx` and `Sidebar.tsx`, replace `<Image>` imports with `<img>` tags as shown above. Also remove `Image` from next imports where no longer used.

Actually, wait. Let me simplify this. The Sidebar uses the photo, and the layout doesn't directly. Let me just use `<img>` in Sidebar and remove the `Image` import entirely.

- [ ] **Step 3: Update ProfileHeader.tsx** — Replace the Image import with a plain `<img>` tag.

In `ProfileHeader.tsx`, change:
```tsx
import Image from 'next/image';
```
to nothing (remove the import entirely).

And change the image element to:
```tsx
<img
  src="/img/profile.jpeg"
  alt="Karanjit Singh"
  className="absolute inset-0 rounded-full object-cover"
  loading="eager"
/>
```

Remove `fill` prop and `priority` prop.

---

### Task 17: Page Transition Component — lib/animations.ts (optional, but recommended)

**Files:**
- Create: `lib/animations.ts`

- [ ] **Step 1: Create reusable animations config**

```typescript
export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};
```

---

### Task 18: Post-Setup — Tailwind Configuration Cleanup

**Files:**
- Update: `global.css` (already created in Task 3)
- Delete: `css/`, `scss/`, `vendor/`, `js/` old directories (clean up at the end)

- [ ] **Step 1: Verify Tailwind works**

After all tasks are complete, run:
```bash
npm run dev
```

Expected: Next.js dev server starts on `http://localhost:3000`. Portfolio loads with all sections. Sidebar is visible on desktop. Mobile hamburger menu works. All sections scroll correctly. Animations trigger on scroll.

---

### Task 19: Final Cleanup & Verification

**Files:**
- Delete: `css/`, `scss/`, `vendor/`, `js/`, `cover.css`, `gulpfile.js`, `package-lock.json` (old files)
- Keep: `package.json` (new), `LICENSE`, `README.md` (update)

- [ ] **Step 1: Remove old files**

```bash
rm -rf css/ scss/ vendor/ js/ cover.css gulpfile.js
```

- [ ] **Step 2: Update README.md**

```markdown
# Karanjit Singh — Portfolio

[![Live Portfolio](https://img.shields.io/badge/Portfolio-Live-brightgreen)](https://karanparhar.github.io/)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue)](https://www.linkedin.com/in/karanjit-singh-78b33a129/)

## About

Professional portfolio built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion**.

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm build

# Run production server
npm start
```

## Tech Stack

- [Next.js 15](https://nextjs.org/) — React framework with App Router
- [Tailwind CSS 4](https://tailwindcss.com/) — Utility-first CSS
- [Framer Motion 12](https://www.framer.com/motion/) — Animation library
- [Lucide React](https://lucide.dev/) — Icon library

---

© 2026 Karanjit Singh. All rights reserved.
```

- [ ] **Step 3: Verify full build**

```bash
npm run build
npm start
```

Expected: Build succeeds with no errors. `http://localhost:3000` loads correctly. All sections present. Sidebar fixed on left. Smooth scroll works. Animations trigger on scroll.

- [ ] **Step 4: Verify Lighthouse / SEO**

Check:
1. Metadata appears in browser devtools (OG tags, description)
2. JSON-LD structured data is present in HTML source
3. 404 page works (navigate to `/nonexistent`)
4. Resume PDF is downloadable
5. Mobile responsiveness (open DevTools, switch to mobile)

---

### Task 20: Optional — GitHub Pages Deployment Configuration

**Files:**
- Create: `.github/workflows/deploy.yml` (if desired for automatic deploy)
- Create: `next-sitemap.config.mjs` (optional)

- [ ] **Step 1: Create GitHub Actions workflow** (optional, for future use)

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - uses: actions/cache@v4
        with:
          path: ~/.npm
          key: ${{ runner.os }}-npm-${{ hashFiles('**/package-lock.json') }}
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: .next/static

  deploy:
    needs: build
    runs-on: ubuntu-latest
    permissions:
      pages: write
      id-token: write
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - id: deployment
        uses: actions/deploy-github-pages@v5
```

Note: For GitHub Pages static export, adjust the workflow to use `actions/upload-pages-artifact` with the `out/` directory (configured via `output: 'export'` in `next.config.ts`). The `next build` produces `out/` folder.

---

## Summary of All Files

### Created Files
| File | Purpose |
|------|---------|
| `package.json` | Dependencies (Next.js, React, Framer Motion, Tailwind, Lucide) |
| `next.config.ts` | Static export config for GitHub Pages |
| `tsconfig.json` | TypeScript config with `@/*` path alias |
| `postcss.config.mjs` | Tailwind + Autoprefixer |
| `tailwind.config.ts` | Custom theme (colors, fonts, animations) |
| `app/layout.tsx` | Root layout with metadata + Sidebar |
| `app/page.tsx` | Main page: all sections stacked |
| `app/not-found.tsx` | Redesigned 404 page |
| `app/sitemap.ts` | Dynamic sitemap for SEO |
| `app/robots.ts` | Robots configuration |
| `app/globals.css` | Tailwind imports + custom styles + components |
| `lib/animations.ts` | Reusable Framer Motion variants |
| `data/content.ts` | All portfolio data as TypeScript interfaces |
| `components/Sidebar.tsx` | Fixed sidebar with nav + social + scroll spy |
| `components/ProfileHeader.tsx` | Hero + About section |
| `components/ExperienceSection.tsx` | Timeline experience cards |
| `components/ProjectsSection.tsx` | 2-col project card grid |
| `components/SkillsSection.tsx` | Animated skill bars |
| `components/EducationSection.tsx` | Education card |
| `components/ContactSection.tsx` | Contact + social + open-to-badges |

### Deleted Files
| File | Reason |
|------|--------|
| `css/` (all) | Replaced by Tailwind + globals.css |
| `scss/` (all) | Replaced by Tailwind |
| `vendor/` (all) | Removed Bootstrap, jQuery, FontAwesome dependencies |
| `js/` (all) | Replaced by React/Framer Motion |
| `cover.css` | Bootstrap template leftover |
| `gulpfile.js` | Replaced by Next.js build system |
| `index.html` | Replaced by Next.js pages |
| `404.html` | Replaced by Next.js `not-found.tsx` |

---

## Execution Order Recommendation

Execute tasks in this order for optimal flow:
1. Tasks 1-2: Setup + Install
2. Tasks 3-4: Foundations (Tailwind + Data)
3. Tasks 5-6: Layout + Sidebar
4. Tasks 7-12: Sections (About → Skills → Contact)
5. Tasks 13: Main page wiring
6. Tasks 14: 404 page
7. Tasks 15: SEO (sitemap/robots)
8. Tasks 16-17: Asset migration
9. Tasks 18-19: Cleanup + Verify
10. Task 20: Deploy config (optional)

Total: **20 tasks**, approximately 30-45 minutes of implementation time depending on debugging needs.
