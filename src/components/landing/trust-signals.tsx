'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, CheckCircle2, Zap, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

export function TrustSignals() {
  const signals = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with RBAC and audit logs',
      color: 'text-primary'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Trusted by leading enterprises',
      color: 'text-amber-500'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Certified AI engineers with production experience',
      color: 'text-green-500'
    },
    {
      icon: CheckCircle2,
      title: 'Quality Assured',
      description: '99.9% uptime and 24/7 support',
      color: 'text-blue-500'
    },
    {
      icon: Zap,
      title: 'Fast Deployment',
      description: 'Deploy in days, not months',
      color: 'text-purple-500'
    },
    {
      icon: TrendingUp,
      title: 'Growing Fast',
      description: 'New features released regularly',
      color: 'text-pink-500'
    }
  ];

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
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-text-muted max-w-2xl mx-auto mb-12">
            Our solutions are trusted by enterprises worldwide for their reliability and innovation
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <div className={cn(
                'relative p-6 rounded-2xl border',
                'border-surface-3 bg-surface/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg'
              )}>
                <div className={cn(
                  'flex items-center justify-center w-16 h-16 rounded-full',
                  'bg-primary/10 mb-4',
                  signal.color
                )}>
                  <signal.icon className="w-8 h-8" />
                </div>
                <div>
                  <h3 className={cn('text-xl font-bold mb-2', signal.color)}>
                    {signal.title}
                  </h3>
                  <p className="text-text-muted">
                    {signal.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-text-muted mb-4">
            Ready to transform your business with AI?
          </p>
          <button className="px-8 py-4 bg-primary text-white rounded-lg font-medium hover:bg-primary/90 transition-colors">
            Get Started Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
