'use client';

import { motion } from 'framer-motion';
import { Cpu, Database, Cloud, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TechStackSectionProps {
  techStack: string[];
}

export function TechStackSection({ techStack }: TechStackSectionProps) {
  const getIcon = (tech: string) => {
    const lowerTech = tech.toLowerCase();
    if (lowerTech.includes('next') || lowerTech.includes('react')) return Code2;
    if (lowerTech.includes('postgres') || lowerTech.includes('sql'))
      return Database;
    if (
      lowerTech.includes('python') ||
      lowerTech.includes('tensorflow') ||
      lowerTech.includes('pytorch')
    )
      return Cpu;
    return Cloud;
  };

  return (
    <section className="py-20 bg-surface">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            Tech Stack
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Built with modern, production-ready technologies
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className={cn(
                'flex flex-col items-center justify-center p-6 rounded-xl',
                'border border-surface-3 bg-surface/50',
                'hover:border-primary/50 hover:shadow-lg transition-all duration-300'
              )}
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 mb-3">
                {(() => {
                  const Icon = getIcon(tech);
                  return <Icon className="w-6 h-6 text-primary" />;
                })()}
              </div>
              <span className="text-sm font-medium text-text text-center">
                {tech}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
