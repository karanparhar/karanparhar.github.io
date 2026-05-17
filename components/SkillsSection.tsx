'use client';

import { useRef, useMemo } from 'react';
import { motion } from 'framer-motion';
import { skills } from '@/data/content';
import { Code2, Cloud, Database } from 'lucide-react';

const CATEGORY_ICONS = {
  languages: { icon: Code2, label: 'Languages & Scripting' },
  devops: { icon: Cloud, label: 'Cloud & DevOps' },
  databases: { icon: Database, label: 'Databases' },
};

export default function SkillsSection() {
  const ref = useRef(null);

  const grouped = useMemo(() => {
    type SkillType = typeof skills[number];
    const groups: Record<string, SkillType[]> = {};
    for (const skill of skills) {
      if (!groups[skill.category]) groups[skill.category] = [];
      groups[skill.category].push(skill);
     }
    return groups;
   }, []);

  return (
       <section id="skills" ref={ref} className="py-28 md:py-36 px-6 md:px-12 lg:px-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl">
            <motion.h2
              className="section-title mb-16"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Technical Skills
            </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {Object.entries(grouped).map(([category, skillList], gi) => {
              const { icon: Icon, label } = CATEGORY_ICONS[category as keyof typeof CATEGORY_ICONS];
              return (
                  <motion.div
                  key={category}
                  className="card rounded-xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: gi * 0.1, duration: 0.4 }}
                   >
                     <div className="flex items-center gap-3 mb-6 pb-4 border-b border-border">
                       <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                         <Icon size={18} />
                       </div>
                       <h3 className="font-heading font-bold text-text-primary text-base tracking-tight">{label}</h3>
                     </div>

                     <div className="space-y-5">
                       {skillList.map((skill: { name: string; level: number; category: string }, i: number) => (
                         <div key={skill.name}>
                           <div className="flex justify-between items-center mb-2">
                             <span className="text-text-secondary/80 text-sm font-medium">{skill.name}</span>
                             <span className="font-mono text-accent text-xs font-medium">
                               {skill.level}%
                             </span>
                           </div>
                           <div className="skill-bar-container">
                             <div
                              className="skill-bar"
                              style={{ width: `${skill.level}%` }}
                             />
                           </div>
                         </div>
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
