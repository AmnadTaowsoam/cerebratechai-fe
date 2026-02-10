import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        // Base surfaces - Midnight base
        bg: '#0B1220',
        surface: '#0F172A',
        'surface-2': '#1E293B',
        'surface-3': '#334155',

        // Text
        text: '#E5E7EB',
        'text-muted': '#94A3B8',
        'text-subtle': '#64748B',

        // Accents
        primary: '#0EA5E9',
        secondary: '#6366F1',
        'primary-brand': '#6366F1',

        // Semantic
        success: '#22C55E',
        warning: '#F59E0B',
        danger: '#EF4444',
        info: '#38BDF8',

        // Lines & overlays
        line: 'rgba(255,255,255,0.06)',
        hairline: 'rgba(255,255,255,0.08)',
        overlay: 'rgba(11,18,32,0.65)',
        'scrim-strong': 'rgba(0,0,0,0.45)',

        // Shadcn/ui colors
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '2xl': '1.25rem',
        lgx: '0.75rem',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.25)',
      },
      maxWidth: {
        container: '1320px',
      },
      backgroundImage: {
        // Cerebrate Gradient (main brand)
        'grad-hero':
          'linear-gradient(135deg, #0EA5E9 0%, #6366F1 55%, #7C3AED 100%)',
        'grad-hero-glow': `
          radial-gradient(120% 120% at 70% 0%, #0EA5E9 0%, #6366F1 50%, rgba(12,18,32,0) 100%),
          #0B1220
        `,

        // Specialized gradients
        'grad-quantum': 'linear-gradient(135deg, #22D3EE 0%, #2563EB 100%)',
        'grad-aurora': 'linear-gradient(135deg, #2DD4BF 0%, #7C3AED 100%)',
        'grad-neon': 'linear-gradient(135deg, #00C2FF 0%, #8B5CF6 100%)',
        'grad-plasma': 'linear-gradient(135deg, #F472B6 0%, #A78BFA 100%)',
        'grad-circuit': 'linear-gradient(135deg, #10B981 0%, #3B82F6 100%)',
        'grad-copper': 'linear-gradient(135deg, #F59E0B 0%, #6D28D9 100%)',
        'grad-slate':
          'linear-gradient(135deg, #0B1220 0%, #111827 50%, #1F2937 100%)',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      fontSize: {
        display: ['3.5rem', { lineHeight: '1.2' }],
        h1: ['2.25rem', { lineHeight: '1.2' }],
        h2: ['1.75rem', { lineHeight: '1.2' }],
        h3: ['1.375rem', { lineHeight: '1.2' }],
        body: ['1rem', { lineHeight: '1.55' }],
        small: ['0.875rem', { lineHeight: '1.55' }],
        micro: ['0.75rem', { lineHeight: '1.55' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.4s ease-out',
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'slide-in-left': 'slideInLeft 0.3s ease-out',
        'scale-in': 'scaleIn 0.2s ease-out',
        'bounce-gentle': 'bounceGentle 0.6s ease-out',
        shimmer: 'shimmer 8s ease-in-out infinite',
        'shimmer-slide':
          'shimmer-slide var(--speed) ease-in-out infinite alternate',
        'spin-around': 'spin-around calc(var(--speed) * 2) infinite linear',
        gradient: 'gradient 8s linear infinite',
        marquee: 'marquee var(--duration) linear infinite',
        'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        bounceGentle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
        shimmer: {
          '0%, 90%, 100%': {
            backgroundPosition: 'calc(-100% - var(--shimmer-width, 20%)) 0',
          },
          '30%, 60%': {
            backgroundPosition: 'calc(100% + var(--shimmer-width, 20%)) 0',
          },
        },
        'shimmer-slide': {
          to: {
            transform: 'translate(calc(100cqw - 100%), 0)',
          },
        },
        'spin-around': {
          '0%': {
            transform: 'translateZ(0) rotate(0deg)',
          },
          '15%, 35%': {
            transform: 'translateZ(0) rotate(90deg)',
          },
          '65%, 85%': {
            transform: 'translateZ(0) rotate(270deg)',
          },
          '100%': {
            transform: 'translateZ(0) rotate(360deg)',
          },
        },
        gradient: {
          to: {
            backgroundPosition: 'var(--bg-size, 300%) 0',
          },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap)))' },
        },
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')],
};

export default config;
