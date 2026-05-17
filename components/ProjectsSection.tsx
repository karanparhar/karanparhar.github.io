'use client';

import { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '@/data/content';
import { Code2, Cloud, Database } from 'lucide-react';

const ICONS = [Code2, Cloud, Database];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.4 },
     }),
};

export default function ProjectsSection() {
  const ref = useRef(null);

  return (
       <section id="projects" ref={ref} className="py-28 md:py-36 px-6 md:px-12 lg:px-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.015] to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-5xl">
            <motion.h2
              className="section-title mb-16"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              Key Projects
            </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             {projects.map((project, i) => {
              const Icon = ICONS[i % ICONS.length];
              return (
                 <motion.div
                  key={project.title}
                  className="card group rounded-xl overflow-hidden"
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={cardVariants}
                  >
                    <div className="relative">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Icon size={18} />
                        </div>
                        <div>
                          <h3 className="font-heading font-bold text-text-primary text-lg leading-tight tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-text-muted text-xs font-mono mt-0.5">{project.role}</p>
                        </div>
                      </div>

                      <p className="text-text-secondary/70 text-sm leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="space-y-2.5 mb-6">
                        {project.highlights.map((h, idx) => (
                          <div key={idx} className="flex items-start gap-2.5 text-sm">
                            <span className="text-accent/50 mt-0.5 shrink-0 text-[9px]">◆</span>
                            <div>
                              <span className="text-text-primary font-semibold">{h.label}:</span>{' '}
                              <span className="text-text-secondary/60">{h.value}</span>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                        {project.tech.map((tech) => (
                          <span key={tech} className="tag">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
             })}
           </div>
         </div>
       </section>
     );
}
