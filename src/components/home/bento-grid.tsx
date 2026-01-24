'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLocale } from 'next-intl';
import { Sparkles, Users, Leaf, Wifi, Brain, Cpu, Eye, Layers, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

interface BentoCardProps {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  size?: 'large' | 'medium' | 'small';
  gradient?: string;
  badge?: string;
  children?: ReactNode;
}

interface HomeBentoGridProps {
  className?: string;
}

const GridPattern = ({ width = 40, height = 40, x = -1, y = -1, strokeDasharray = 0, className, ...props }: any) => {
  return (
    <svg
      aria-hidden="true"
      className={cn(
        "absolute inset-0 h-full w-full fill-neutral-400/30 stroke-neutral-400/30",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id="bento-grid-pattern"
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill="url(#bento-grid-pattern)" />
    </svg>
  );
};

const BentoCard = ({
  title,
  description,
  icon: Icon,
  href,
  size = 'medium',
  gradient = 'from-surface/80 to-surface/60',
  badge,
  children,
}: BentoCardProps) => {
  const locale = useLocale();
  const basePath = `/${locale}`;

  const sizeClasses = {
    large: 'col-span-1 md:col-span-2 row-span-2',
    medium: 'col-span-1 row-span-1',
    small: 'col-span-1 row-span-1',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        'relative group overflow-hidden rounded-3xl border border-white/10',
        'bg-surface-2', // Solid base color
        'shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_12px_32px_rgba(8,25,47,0.35)]',
        'transform-gpu transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1',
        'hover:border-primary/50 hover:shadow-[0_0_0_1px_rgba(14,165,233,0.4),0_24px_64px_rgba(8,25,47,0.6)]',
        sizeClasses[size]
      )}
    >
       {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500">
        <GridPattern width={30} height={30} x={-1} y={-1} className="stroke-white/10 fill-white/5" />
      </div>

      {/* Gradient Overlay */}
      <div className={cn("absolute inset-0 z-0 opacity-30 bg-gradient-to-br transition-opacity duration-500 group-hover:opacity-50", gradient)} />

      {/* Content */}
      <div className="relative z-10 block h-full p-6 md:p-8">
        {href.startsWith('http://') || href.startsWith('https://') ? (
          <a href={href} target="_blank" rel="noopener noreferrer" className="block h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
                   <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="h-7 w-7 relative z-10" />
                </div>
                {badge && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                    {badge}
                  </span>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors">
                  {description}
                </p>
                 {/* Tech Decoration Lines */}
                 <div className="mt-4 h-0.5 w-12 bg-white/10 group-hover:w-full group-hover:bg-primary/50 transition-all duration-500" />
              </div>

              {children && <div className="mt-4">{children}</div>}

              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                 {/* Tech Corner Accent */}
                 <div className="w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500 rounded-br-lg" />
              </div>
            </div>
          </a>
        ) : (
          <Link href={`${basePath}${href}` as any} className="block h-full">
            <div className="flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 text-white group-hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/10">
                   <div className="absolute inset-0 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon className="h-7 w-7 relative z-10" />
                </div>
                {badge && (
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30 backdrop-blur-sm">
                    {badge}
                  </span>
                )}
              </div>
              
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-white/70 group-hover:text-white/90 transition-colors">
                  {description}
                </p>
                 {/* Tech Decoration Lines */}
                 <div className="mt-4 h-0.5 w-12 bg-white/10 group-hover:w-full group-hover:bg-primary/50 transition-all duration-500" />
              </div>

              {children && <div className="mt-4">{children}</div>}

              <div className="mt-auto pt-4 flex items-center justify-between">
                <span className="inline-flex items-center text-sm font-medium text-primary group-hover:text-primary/80 transition-colors">
                  Learn more
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
                 {/* Tech Corner Accent */}
                 <div className="w-4 h-4 border-b-2 border-r-2 border-white/10 group-hover:border-primary/50 transition-colors duration-500 rounded-br-lg" />
              </div>
            </div>
          </Link>
        )}
      </div>

      {/* Hover glow effect (full card) */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/0 via-primary/5 to-primary/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none z-0" />
    </motion.div>
  );
};

// --- Mini Visual Components ---

const PhitiaiVisual = () => (
  <div className="absolute right-0 bottom-0 h-48 w-full md:w-3/4 bg-surface rounded-tl-2xl border-t border-l border-white/10 p-4 shadow-2xl overflow-hidden group-hover:-translate-y-2 transition-transform duration-500">
    <div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
      <div className="w-2 h-2 rounded-full bg-red-500/50" />
      <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
      <div className="w-2 h-2 rounded-full bg-green-500/50" />
      <span className="text-[10px] text-white/30 ml-auto">AI Chat Planner</span>
    </div>
    <div className="space-y-2">
      <div className="bg-white/5 p-2 rounded-lg rounded-tl-none w-3/4">
        <div className="h-1.5 w-12 bg-white/20 rounded mb-1" />
        <div className="h-1.5 w-full bg-white/10 rounded" />
      </div>
      <div className="bg-primary/10 p-2 rounded-lg rounded-tr-none w-3/4 ml-auto border border-primary/20">
        <div className="h-1.5 w-10 bg-primary/40 rounded mb-1 ml-auto" />
        <div className="h-1.5 w-full bg-primary/20 rounded" />
      </div>
       <div className="bg-white/5 p-2 rounded-lg rounded-tl-none w-2/3">
        <div className="h-1.5 w-8 bg-white/20 rounded mb-1" />
        <div className="h-1.5 w-full bg-white/10 rounded" />
      </div>
    </div>
  </div>
);

const SookwaiVisual = () => (
  <div className="absolute right-4 bottom-4 h-32 w-48 bg-surface rounded-xl border border-white/10 p-3 shadow-xl group-hover:scale-105 transition-transform duration-500">
    <div className="flex justify-between items-end h-full gap-1">
      {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
         <div key={i} className="w-full bg-gradient-to-t from-cyan-500/20 to-blue-500/20 rounded-t-sm relative overflow-hidden" style={{ height: `${h}%` }}>
            <div className="absolute bottom-0 left-0 right-0 h-full bg-gradient-to-t from-cyan-500/50 to-transparent opacity-50" />
         </div>
      ))}
    </div>
    <div className="absolute top-3 left-3 flex items-center gap-1.5">
       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
       <span className="text-[10px] font-medium text-white/60">Health Live</span>
    </div>
  </div>
);

const SmartFarmVisual = () => (
  <div className="absolute right-0 bottom-0 h-40 w-full overflow-hidden">
     {/* Grid Nodes */}
     <div className="absolute top-8 right-12 w-3 h-3 bg-teal-500 rounded-full shadow-[0_0_10px_rgba(20,184,166,0.5)] animate-ping" />
     <div className="absolute top-8 right-12 w-3 h-3 bg-teal-500 rounded-full" />
     
     <div className="absolute bottom-12 right-32 w-2 h-2 bg-cyan-500/50 rounded-full" />
     <div className="absolute top-4 right-48 w-2 h-2 bg-cyan-500/50 rounded-full" />
     
     {/* Connection Lines (SVG) */}
     <svg className="absolute inset-0 w-full h-full pointer-events-none">
        <path d="M280 40 L220 80 L350 120" stroke="rgba(20,184,166,0.2)" fill="none" strokeWidth="1" />
     </svg>
     
     <div className="absolute bottom-4 right-4 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-[10px] text-teal-300">
        IoT Node: Active
     </div>
  </div>
);


export function HomeBentoGrid({ className }: HomeBentoGridProps) {
  const cards = [
    {
      title: 'Phitiai',
      description: 'AI Marketplace งานประเพณี - สร้างการ์ดอวยพรด้วย AI ใน 3 วินาที',
      icon: Sparkles,
      href: 'https://www.phithiai.com',
      size: 'large' as const,
      gradient: 'from-amber-500/20 to-orange-600/20',
      badge: 'Featured',
      children: <PhitiaiVisual />
    },
    {
      title: 'Sookwai',
      description: 'Wellness Platform ผู้สูงอายุ - ระบบดูแลสุขภาพครบวงจร',
      icon: Users,
      href: 'https://www.sookwei.com',
      size: 'medium' as const,
      gradient: 'from-cyan-500/20 to-blue-600/20',
      badge: 'Featured',
      children: <SookwaiVisual />
    },
    {
      title: 'PlukTunRaka',
      description: 'AgTech วางแผนปลูกพืช - ปลูกทันราคาด้วย AI',
      icon: Leaf,
      href: 'https://www.pluktunraka.com',
      size: 'medium' as const,
      gradient: 'from-green-500/20 to-emerald-600/20',
    },
    {
      title: 'SmartFarm',
      description: 'IoT Platform ฟาร์มอัจฉริยะ - จัดการฟาร์มผ่าน Cloud AI',
      icon: Wifi,
      href: '/products/smartfarm',
      size: 'medium' as const,
      gradient: 'from-teal-500/20 to-cyan-600/20',
      children: <SmartFarmVisual />
    },
    {
      title: 'CerebraForge',
      description: 'Enterprise RAG Platform - โครงสร้างพื้นฐาน AI สำหรับองค์กร',
      icon: Layers,
      href: '/products/cerebraforge',
      size: 'medium' as const,
      gradient: 'from-indigo-500/20 to-purple-600/20',
    },
    {
      title: 'AI Solutions',
      description: 'LLM & RAG, Computer Vision, Machine Learning, AIoT',
      icon: Brain,
      href: '/solutions',
      size: 'medium' as const,
      gradient: 'from-blue-500/20 to-indigo-600/20',
    },
    {
      title: 'Computer Vision',
      description: 'ระบบมองเห็นด้วย AI สำหรับอุตสาหกรรมและเกษตร',
      icon: Eye,
      href: '/solutions/cv',
      size: 'medium' as const,
      gradient: 'from-purple-500/20 to-pink-600/20',
    },
    {
      title: 'Machine Learning',
      description: 'โมเดล ML ที่ปรับแต่งได้ตามความต้องการธุรกิจ',
      icon: Cpu,
      href: '/solutions/ml',
      size: 'medium' as const,
      gradient: 'from-rose-500/20 to-red-600/20',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Our Products & Solutions
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Building Intelligence for Thailand's Future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {cards.map((card, index) => (
            <BentoCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}
