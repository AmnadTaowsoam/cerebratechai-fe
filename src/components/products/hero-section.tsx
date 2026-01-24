'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import type { Product } from '@/data/products';

interface HeroSectionProps {
  product: Product;
  locale: string;
}

export function HeroSection({ product, locale }: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br',
          product.hero.gradient
        )}
      />
      <div className="absolute inset-0 bg-black/30" />

      {/* Content */}
      <div className="relative container mx-auto px-4 py-24 sm:py-32">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-white/20 text-white text-sm font-medium mb-6 backdrop-blur-sm">
              {product.tagline}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              {product.name}
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-2xl">
              {product.tagline}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href={`/${locale}/contact?product=${product.slug}`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 rounded-lg font-medium hover:bg-white/90 transition-colors"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex items-center gap-2 px-6 py-3 bg-white/20 text-white rounded-lg font-medium hover:bg-white/30 transition-colors backdrop-blur-sm"
              >
                Request Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
    </section>
  );
}
