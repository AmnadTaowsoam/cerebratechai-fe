'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import type { Product } from '@/data/products';

interface CTASectionProps {
  product: Product;
  locale: string;
}

export function CTASection({ product, locale }: CTASectionProps) {
  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to Get Started with {product.name}?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Let us discuss how this solution can help transform your business
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href={`/${locale}/contact?product=${product.slug}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary rounded-lg font-medium hover:bg-white/90 transition-colors"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
            >
              Schedule Demo
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
