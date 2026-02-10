import {
  Brain,
  Eye,
  Cpu,
  Wifi,
  Layers,
  BarChart,
  Microscope,
  Factory,
  Leaf,
  Heart,
  Building2,
  Sparkles,
  Users,
  GraduationCap,
  Database,
  Github,
  Rocket,
  Settings,
  Briefcase,
  Mail,
  Info,
  Workflow,
} from 'lucide-react';

export interface MegaMenuItem {
  label: string;
  href: string;
  icon?: React.ComponentType<{ className?: string }>;
  description?: string;
  badge?: 'new' | 'featured' | 'beta';
  external?: boolean;
}

export interface MegaMenuColumn {
  title: string;
  items: MegaMenuItem[];
}

export interface MegaMenuSection {
  id: string;
  label: string;
  columns: MegaMenuColumn[];
}

export const navigationData: MegaMenuSection[] = [
  {
    id: 'services',
    label: 'Services',
    columns: [
      {
        title: 'Our Services',
        items: [
          {
            label: 'AI Consulting',
            href: '/services/consulting',
            icon: Brain,
            description: 'POC/Pilot, Assessment, Strategy',
          },
          {
            label: 'AI Development',
            href: '/services/development',
            icon: Cpu,
            description: 'Custom AI, Integration, Training',
          },
          {
            label: 'AI Deployment',
            href: '/services/deployment',
            icon: Rocket,
            description: 'MLOps, Maintenance, Support',
          },
        ],
      },
    ],
  },
  {
    id: 'solutions',
    label: 'Solutions',
    columns: [
      {
        title: 'Featured Solutions',
        items: [
          {
            label: 'ChartSentinel',
            href: '/products/chartsentinel',
            icon: BarChart,
            badge: 'featured' as const,
            description: 'AI-SPC Quality Control - ลดของเสีย 85%',
          },
          {
            label: 'CerebraForge',
            href: '/products/cerebraforge',
            icon: Layers,
            badge: 'featured' as const,
            description: 'Enterprise RAG Platform - Document AI',
          },
          {
            label: 'CerebraLoLM',
            href: '/products/cerebralolm',
            icon: Brain,
            description: 'Private Local LLM - 100% Data Privacy',
            badge: 'new' as const,
          },
        ],
      },
      {
        title: 'AI Core Technologies',
        items: [
          {
            label: 'LLM & RAG',
            href: '/solutions/llm',
            icon: Brain,
            description:
              'Large Language Models & Retrieval-Augmented Generation',
          },
          {
            label: 'Computer Vision',
            href: '/solutions/cv',
            icon: Eye,
            description: 'Image & Video Analysis',
          },
          {
            label: 'Machine Learning',
            href: '/solutions/ml',
            icon: Cpu,
            description: 'Predictive Analytics & Models',
          },
          {
            label: 'AIoT',
            href: '/solutions/aiot',
            icon: Wifi,
            description: 'AI on Edge Devices',
          },
        ],
      },
    ],
  },
  {
    id: 'products',
    label: 'Products',
    columns: [
      {
        title: 'Core AI Platforms',
        items: [
          {
            label: 'CerebraForge',
            href: '/products/cerebraforge',
            icon: Layers,
            description: 'Enterprise RAG & Knowledge Platform',
            badge: 'featured',
          },
          {
            label: 'ChartSentinel',
            href: '/products/chartsentinel',
            icon: BarChart,
            description: 'AI-SPC Quality Control System',
            badge: 'featured',
          },
          {
            label: 'CerebraLoLM',
            href: '/products/cerebralolm',
            icon: Brain,
            description: 'Private Local LLM Inference Engine',
          },
          {
            label: 'CerebraCV',
            href: '/products/cerebracv',
            icon: Eye,
            description: 'Advanced Computer Vision Suite',
          },
        ],
      },
      {
        title: 'Developer Tools',
        items: [
          {
            label: 'Agent Skills',
            href: 'https://github.com/AmnadTaowsoam/cerebratechai-claude-skills.git',
            icon: Github,
            description: '400+ Claude Skills for Agentic Development',
            external: true,
            badge: 'new' as const,
          },
        ],
      },
    ],
  },
  {
    id: 'company',
    label: 'Company',
    columns: [
      {
        title: 'About',
        items: [
          {
            label: 'About Us',
            href: '/about',
            icon: Info,
            description: 'Our story, mission & team',
          },
          {
            label: 'How We Work',
            href: '/how-we-work',
            icon: Workflow,
            description: 'Our process & methodology',
          },
          {
            label: 'Careers',
            href: '/careers',
            icon: Briefcase,
            description: 'Join our team',
          },
          {
            label: 'Contact',
            href: '/contact',
            icon: Mail,
            description: 'Get in touch',
          },
        ],
      },
    ],
  },
];
