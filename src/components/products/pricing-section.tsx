'use client';

import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PricingConfig } from '@/data/products';

interface PricingSectionProps {
  pricing: PricingConfig;
}

export function PricingSection({ pricing }: PricingSectionProps) {
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
            Pricing
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                'relative p-8 rounded-2xl border',
                tier.highlighted
                  ? 'border-primary bg-primary/5 shadow-xl scale-105'
                  : 'border-surface-3 bg-surface/50 hover:border-primary/30'
              )}
            >
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-primary text-white text-sm font-medium rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <h3 className="text-2xl font-bold text-text mb-2">
                {tier.name}
              </h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-text">
                  {typeof tier.price === 'number' ? `฿${tier.price.toLocaleString()}` : tier.price}
                </span>
                {tier.period && (
                  <span className="text-text-muted ml-2">{tier.period}</span>
                )}
              </div>
              <ul className="space-y-3 mb-8">
                {tier.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-text-muted">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className={cn(
                'w-full py-3 rounded-lg font-medium transition-colors',
                tier.highlighted
                  ? 'bg-primary text-white hover:bg-primary/90'
                  : 'bg-surface-2 text-text hover:bg-surface-3'
              )}>
                {tier.highlighted ? 'Get Started' : 'Contact Us'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
