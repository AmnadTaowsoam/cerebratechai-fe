'use client';

import {
  Box,
  Cpu,
  Factory,
  FileText,
  Lock,
  Sprout,
  ShieldCheck,
  Zap,
  Server,
} from 'lucide-react';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';

/* ─── 1. CORE VALUE PROPOSITIONS ─── */
const valueProps = [
  {
    Icon: Lock,
    name: 'Private-First',
    description: 'Your data never leaves your premises. Full governance and compliance out-of-the-box.',
    href: '#',
    cta: 'Security Specs',
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <ShieldCheck className="h-32 w-32 text-indigo-500 blur-3xl transition-all duration-500 group-hover:blur-2xl" />
      </div>
    ),
    className: 'lg:col-span-3 lg:row-span-1',
    badge: <span className="rounded-full bg-indigo-500/10 px-2 py-0.5 text-xs text-indigo-500">Privacy</span>,
  },
  {
    Icon: Box,
    name: 'Modular Design',
    description: 'Plug-and-play architecture. Add new capabilities without rewriting the core.',
    href: '#',
    cta: 'View Architecture',
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Box className="h-24 w-24 text-amber-500 blur-3xl transition-all duration-500 group-hover:blur-2xl" />
      </div>
    ),
    className: 'lg:col-span-1 lg:row-span-1',
    badge: <span className="rounded-full bg-amber-500/10 px-2 py-0.5 text-xs text-amber-500">Flexibility</span>,
  },
  {
    Icon: Cpu,
    name: 'Local LLM',
    description: 'Run powerful LLMs on-premise with optimized inference costs.',
    href: '#',
    cta: 'Benchmarks',
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Server className="h-24 w-24 text-cyan-500 blur-3xl transition-all duration-500 group-hover:blur-2xl" />
      </div>
    ),
    className: 'lg:col-span-2 lg:row-span-1',
    badge: <span className="rounded-full bg-cyan-500/10 px-2 py-0.5 text-xs text-cyan-500">Performance</span>,
  },
];

export function ValuePropositionsVisualization() {
  return (
    <div className="h-full w-full">
      <BentoGrid className="grid-rows-[auto] gap-4">
        {valueProps.map((feature) => (
          <BentoCard key={feature.name} {...feature} />
        ))}
      </BentoGrid>
    </div>
  );
}

/* ─── 2. SOLUTION PACKAGES ─── */
const packages = [
  {
    Icon: FileText,
    name: 'Smart Document',
    description: 'Automate invoice processing, contract analysis, and data extraction with 99% accuracy.',
    href: '#',
    cta: 'See Demo',
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <FileText className="h-32 w-32 text-blue-500 blur-3xl transition-all duration-500 group-hover:blur-2xl" />
      </div>
    ),
    className: 'lg:col-span-1 lg:row-span-2',
    badge: <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-xs text-blue-500">Office</span>,
  },
  {
    Icon: Factory,
    name: 'Smart Factory',
    description: 'Real-time QC, predictive maintenance, and worker safety monitoring.',
    href: '#',
    cta: 'Case Studies',
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Factory className="h-24 w-24 text-orange-500 blur-3xl transition-all duration-500 group-hover:blur-2xl" />
      </div>
    ),
    className: 'lg:col-span-2 lg:row-span-1',
    badge: <span className="rounded-full bg-orange-500/10 px-2 py-0.5 text-xs text-orange-500">Industrial</span>,
  },
  {
    Icon: Sprout,
    name: 'Smart Farm',
    description: 'Crop monitoring, automated irrigation, and yield prediction with Edge AI.',
    href: '#',
    cta: 'Explore',
    background: (
      <div className="absolute inset-0 flex items-center justify-center opacity-20">
        <Sprout className="h-24 w-24 text-emerald-500 blur-3xl transition-all duration-500 group-hover:blur-2xl" />
      </div>
    ),
    className: 'lg:col-span-2 lg:row-span-1',
    badge: <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-xs text-emerald-500">AgTech</span>,
  },
];

export function SolutionPackagesVisualization() {
  return (
    <div className="h-full w-full">
      <BentoGrid className="grid-rows-[auto] gap-4">
        {packages.map((pkg) => (
          <BentoCard key={pkg.name} {...pkg} />
        ))}
      </BentoGrid>
    </div>
  );
}
