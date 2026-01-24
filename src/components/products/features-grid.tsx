'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import type { Feature } from '@/data/products';
import { getIcon } from '@/lib/icons';

interface FeaturesGridProps {
  features: Feature[];
}

export function FeaturesGrid({ features }: FeaturesGridProps) {
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
            Key Features
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Everything you need to succeed with this solution
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = getIcon(feature.icon);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className={cn(
                    'h-full p-6 rounded-2xl border border-surface-3 bg-surface/50',
                    'hover:border-primary/50 hover:shadow-lg transition-all duration-300'
                  )}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-text">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-text-muted">{feature.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
