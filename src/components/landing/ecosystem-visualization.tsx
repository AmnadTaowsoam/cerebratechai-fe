'use client';

import {
  Brain,
  Database,
  Network,
  Shield,
  ArrowRight,
} from 'lucide-react';
import { Particles } from '@/components/magicui';
import { cn } from '@/lib/utils';
import { useRef, useState } from 'react';

const features = [
  {
    Icon: Brain,
    name: 'CerebraML Core',
    description: 'Centralized AI training and inference engine with auto-scaling capabilities.',
    href: '#',
    cta: 'Learn more',
    gradient: 'from-violet-500/20 via-purple-500/5 to-transparent',
    border: 'group-hover:border-violet-500/50',
    iconColor: 'text-violet-400',
    glow: 'bg-violet-500/20',
    colSpan: 'lg:col-span-2',
  },
  {
    Icon: Network,
    name: 'IoT Mesh & Edge',
    description: 'Seamless connectivity for thousands of edge devices with real-time sync.',
    href: '#',
    cta: 'Learn more',
    gradient: 'from-cyan-500/20 via-blue-500/5 to-transparent',
    border: 'group-hover:border-cyan-500/50',
    iconColor: 'text-cyan-400',
    glow: 'bg-cyan-500/20',
    colSpan: 'lg:col-span-1',
  },
  {
    Icon: Database,
    name: 'Data Lakehouse',
    description: 'Unified storage for structured and unstructured data with zero-copy sharing.',
    href: '#',
    cta: 'Learn more',
    gradient: 'from-emerald-500/20 via-teal-500/5 to-transparent',
    border: 'group-hover:border-emerald-500/50',
    iconColor: 'text-emerald-400',
    glow: 'bg-emerald-500/20',
    colSpan: 'lg:col-span-1',
  },
  {
    Icon: Shield,
    name: 'Security & Governance',
    description: 'Enterprise-grade encryption, RBAC, and audit logging built-in by default.',
    href: '#',
    cta: 'Learn more',
    gradient: 'from-rose-500/20 via-pink-500/5 to-transparent',
    border: 'group-hover:border-rose-500/50',
    iconColor: 'text-rose-400',
    glow: 'bg-rose-500/20',
    colSpan: 'lg:col-span-2',
  },
];

const PremiumCard = ({ feature }: { feature: any }) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    setOpacity(1);
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={cn(
        'group relative overflow-hidden rounded-3xl border border-white/10 bg-bg/50 backdrop-blur-md transition-all duration-300',
        feature.colSpan
      )}
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,0.06), transparent 40%)`,
        }}
      />
      
      {/* Gradient Background */}
      <div className={cn("absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100", feature.gradient)} />

      <div className="relative h-full p-8 flex flex-col justify-between z-10">
        <div>
          <div className={cn("mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10 shadow-lg transition-transform group-hover:scale-110 duration-500", feature.iconColor)}>
             <feature.Icon className="h-6 w-6" />
          </div>
          
          <h3 className="text-2xl font-bold text-text mb-3 group-hover:text-white transition-colors">{feature.name}</h3>
          <p className="text-text-muted leading-relaxed group-hover:text-text-muted/80">{feature.description}</p>
        </div>
        
        <div className="mt-8 flex items-center gap-2 text-sm font-semibold text-white/40 group-hover:text-white transition-colors">
          <span>{feature.cta}</span>
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>

       {/* Border Highlight */}
       <div className={cn("absolute inset-0 rounded-3xl border border-transparent transition-colors duration-300", feature.border)} />
    </div>
  );
};

export function EcosystemVisualization() {
  return (
    <div className="relative w-full max-w-6xl mx-auto">
      {/* Subtle Glow Backend */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/5 via-transparent to-transparent blur-3xl opacity-30" />
      
      {/* Particles */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <Particles quantity={40} staticity={30} ease={60} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {features.map((feature) => (
          <PremiumCard key={feature.name} feature={feature} />
        ))}
      </div>
    </div>
  );
}
