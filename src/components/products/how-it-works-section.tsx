'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Step {
  title: string;
  description: string;
}

interface HowItWorksSectionProps {
  steps: Step[];
}

export function HowItWorksSection({ steps }: HowItWorksSectionProps) {
  // Default steps if none provided
  const defaultSteps: Step[] = [
    {
      title: 'Consultation',
      description: 'We discuss your needs and requirements',
    },
    {
      title: 'Implementation',
      description: 'Our team deploys the solution',
    },
    {
      title: 'Training',
      description: 'We train your team on the platform',
    },
    {
      title: 'Support',
      description: 'Ongoing support and optimization',
    },
  ];

  const displaySteps = steps.length > 0 ? steps : defaultSteps;

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-text mb-4">
            How It Works
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Simple process to get you started
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          {displaySteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'flex gap-6 mb-8',
                index % 2 === 1 && 'flex-row-reverse'
              )}
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-text mb-2">
                  {step.title}
                </h3>
                <p className="text-text-muted">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
