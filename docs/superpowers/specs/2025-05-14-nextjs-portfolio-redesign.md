# Next.js Portfolio — Complete Redesign

## Project Overview

Convert a Bootstrap 4 static HTML portfolio (single-page, anchor-based navigation) into a modern Next.js App Router application with a complete visual redesign.

## Architecture

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS 4 + custom CSS
- **Animations:** Framer Motion 12
- **Data:** React props (hardcoded content in `data/content.ts`)

## Directory Structure

```
portfolio/
├── app/
│    ├── layout.tsx             Root layout: fonts, sidebar, metadata
│    ├── page.tsx               Main page: all sections stacked
│    ├── not-found.tsx          Redesigned 404 page
│    ├── opengraph-image.tsx    Open Graph image for social sharing
│    ├── sitemap.ts             Dynamic sitemap
│    └── robots.ts              Robots configuration
├── components/
│    ├── Sidebar.tsx             Fixed sidebar (desktop) / top nav (mobile)
│    ├── ProfileHeader.tsx       Hero: name, title, photo, social links
│    ├── ExperienceCard.tsx       Reusable experience timeline cards
│    ├── SkillsSection.tsx        Animated skill progress bars
│    ├── EducationSection.tsx     Education display
│    ├── ContactSection.tsx       Contact info + social links
│    └── PageTransition.tsx       Page-load staggered reveal animations
├── data/
│    └── content.ts             Typed data: experiences, projects, skills, contact
├── lib/
│    └── animations.ts          Framer Motion variants
├── public/
│    ├── img/                   Profile photo (optimize to webp)
│    ├── resume/                Resume PDF
│    └── images/                Project/featured images
└── styles/
    ├── globals.css              Tailwind imports + custom CSS
    └── animation.css         Progress bar animations, noise textures
```

## Data Schema (`data/content.ts`)

```typescript
interface Experience {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

interface Project {
  title: string;
  role: string;
  company: string;
  description: string;
  highlights: string[];
  tech: string[];
}

interface Skill {
  name: string;
  level: number;
  category: string;
}

interface Content {
  profile: { name: string; title: string; email: string; phone: string; location: string; photo: string };
  social: { linkedin: string; github: string; twitter: string; facebook: string };
  experiences: Experience[];
  projects: Project[];
  education: { university: string; degree: string; field: string; period: string }[];
  skills: Skill[];
  contact: { availableFor: string[]; openTo: string[] };
}
```

## Visual Design

### Colors
- Background: `#0f1419` (deep charcoal)
- Primary: `#fd7e14` (vibrant orange — preserved from original)
- Secondary: `#00d4ff` (electric cyan)
- Surface cards: `#f8f6f3` (light) / `#1a1f2e` (dark)

### Typography
- Headings: Space Grotesk (geometric, technical)
- Body: DM Sans (warm, readable)
- Mono: JetBrains Mono (dates, tags, labels)

### Layout
- Desktop: Fixed left sidebar (280px) + offset content
- Mobile: Hamburger nav, full-width stacked sections
- Sidebar collapses to icon rail on deep scroll

## Sections (in order)

1. **Hero / Profile** — Full viewport, name in 6rem, profile photo with animated ring, social links with hover effects, geometric dot grid background
2. **About** — Glassmorphism card, left accent border, personal story with highlight
3. **Experience** — Vertical timeline, animated cards cascade in on scroll, accent color connecting lines
4. **Projects** — 2-column card grid, gradient headers, hover lift, tech tags
5. **Education** — Clean single card, compact layout
6. **Skills** — Animated progress bars (scroll-triggered fill), categories in 2-col grid, soft skills as icon cards
7. **Contact** — Split layout (info left, action buttons right), achievement badges row
8. **Footer** — Minimal, copyright + back to top

## Animation Strategy

- Page load: Staggered reveal across all sections (staggerChildren: 150ms)
- Scroll-triggered: `useInView` for experience cards, skill bars, project cards
- Sidebar: Collapse to icon rail on scroll, expand on near sections
- Skill bars: Animate width from 0 to target on scroll
- Cards: Hover lift (translateY -5px) with shadow enhancement
- Profile photo: Animated glow ring pulsing continuously

## SEO

- Next.js `metadata` export in root layout
- JSON-LD structured data component
- Semantic heading hierarchy (h1 once, h2 per section)
- `sitemap.ts` and `robots.ts` files
- Open Graph image generation

## Dependencies

```
next@15, react@19, framer-motion@12, 
@tailwindcss/forms@0.5, tailwindcss@4
```

Remove: Bootstrap 4, jQuery, FontAwesome (replace icons with Tailwind-friendly approach or inline SVGs).

## Migration Notes

- Bootstrap grid → Tailwind grid/flexbox
- Bootstrap utilities (mb-3, p-4, d-flex) → Tailwind equivalents
- FontAwesome icons → inline SVG or Lucide React icons
- jQuery smooth scroll → Next.js native anchor handling
- SCSS → CSS modules / Tailwind + global styles
- Static page → Dynamic data-driven components
