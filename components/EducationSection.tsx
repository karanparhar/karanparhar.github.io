'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/content';
import { GraduationCap } from 'lucide-react';

export default function EducationSection() {
  const ref = useRef(null);

  return (
       <section id="education" ref={ref} className="py-28 md:py-36 px-6 md:px-12 lg:px-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <motion.h2
              className="section-title mb-16"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Education
            </motion.h2>

          <div className="mt-8">
             {education.map((edu, i) => (
               <motion.div
              key={edu.university}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
               >
                 <div className="card p-8 md:p-10 rounded-xl relative overflow-hidden group">
                   <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-accent/60 via-accent/30 to-transparent" />

                   <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                     <div>
                       <div className="flex items-center gap-3 mb-3">
                         <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                           <GraduationCap size={20} />
                         </div>
                         <h3 className="font-heading text-2xl font-bold text-text-primary tracking-tight">
                           {edu.university}
                         </h3>
                       </div>
                       <p className="text-accent font-medium text-lg">{edu.degree}</p>
                       <p className="text-text-secondary/60 mt-1">{edu.field}</p>
                     </div>
                     <div className="flex-shrink-0">
                       <span className="font-mono text-text-muted text-sm px-4 py-2 rounded-lg bg-bg-elevated border border-border">
                         {edu.period}
                       </span>
                     </div>
                   </div>
                 </div>
               </motion.div>
             ))}
           </div>
         </div>
       </section>
     );
}
