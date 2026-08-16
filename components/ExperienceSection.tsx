'use client';

import { motion, type Easing } from 'framer-motion';
import { experiences } from '../data/content';
import { Building2 } from 'lucide-react';

const EASE: Easing = 'easeOut';

const reveal = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.5, ease: EASE },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: EASE },
       }),
};

export default function ExperienceSection() {
  return (
         <section id="experience" className="py-28 md:py-36 px-6 md:px-12 lg:px-20 relative">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent pointer-events-none" />

            <div className="relative z-10 max-w-4xl">
              <motion.h2
               className="section-title mb-16"
               {...reveal}
              >
               Experience
              </motion.h2>

            <div className="relative">
               {/* Timeline line */}
               <div className="absolute left-0 md:left-0 top-2 bottom-0 w-px bg-gradient-to-b from-accent/40 via-accent/20 to-transparent" />

               {experiences.map((exp, i) => (
                 <motion.div
               key={exp.company}
               className="relative pl-10 md:pl-12 mb-12 last:mb-0"
               custom={i}
               initial="hidden"
               whileInView="visible"
               viewport={{ once: true, amount: 0.2 }}
               variants={cardVariants}
                 >
                 {/* Timeline dot */}
                 <div className="absolute left-[-3px] md:left-[-1px] top-3 w-3 h-3 rounded-full bg-bg-deep border-2 border-accent/60 z-10" />

                 <div className="card p-6 md:p-8 group">
                   {/* Header */}
                   <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                     <div>
                       <span className="font-mono text-accent text-xs font-medium tracking-wider uppercase">
                         {exp.period}
                       </span>
                       <h3 className="font-heading text-xl md:text-2xl font-bold text-text-primary mt-1.5 tracking-tight">
                         {exp.title}
                       </h3>
                       <div className="flex items-center gap-2 mt-1">
                         <Building2 size={14} className="text-accent/60" />
                         <span className="text-accent font-medium text-sm">{exp.company}</span>
                       </div>
                     </div>
                   </div>

                   {/* Bullets */}
                   <ul className="space-y-3">
                     {exp.bullets.map((bullet: string, j: number) => (
                       <li key={j} className="flex gap-3 text-text-secondary/70 text-sm md:text-base leading-relaxed">
                         <span className="text-accent/60 mt-1.5 shrink-0 text-[10px]">◆</span>
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
