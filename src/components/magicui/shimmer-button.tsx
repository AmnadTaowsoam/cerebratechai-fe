'use client';

import React, { CSSProperties } from 'react';

import { Slot } from '@radix-ui/react-slot';

import { cn } from '@/lib/utils';

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  background?: string;
  className?: string;
  asChild?: boolean;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = '#ffffff',
      shimmerSize = '0.06em',
      shimmerDuration = '3s',
      borderRadius = '999px',
      background = 'linear-gradient(135deg, rgba(14,165,233,0.9) 0%, rgba(99,102,241,0.9) 30%, rgba(124,58,237,0.9) 70%, rgba(168,85,247,0.9) 100%)',
      className,
      children,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Component = asChild ? Slot : 'button';

    return (
      <Component
        style={
          {
            '--spread': '90deg',
            '--shimmer-color': shimmerColor,
            '--radius': borderRadius,
            '--speed': shimmerDuration,
            '--cut': shimmerSize,
            '--bg': background,
          } as CSSProperties
        }
        className={cn(
          'group relative z-0 flex transform-gpu cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/20 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300',
          'shadow-[0_10px_30px_rgba(8,25,47,0.45)] hover:scale-[1.02] hover:shadow-[0_16px_42px_rgba(14,165,233,0.45)] active:scale-[0.98]',
          className
        )}
        ref={ref}
        {...props}
      >
        <span className="relative inline-flex w-full items-center justify-center">
          <span className="pointer-events-none absolute inset-0 -z-10 overflow-visible blur-[2px] [container-type:size]">
            <span className="absolute inset-0 h-[100cqh] animate-shimmer-slide [aspect-ratio:1] [border-radius:0] [mask:none]">
              <span className="animate-spin-around absolute -inset-full w-auto rotate-0 [background:conic-gradient(from_calc(270deg-(var(--spread)*0.5)),transparent_0,var(--shimmer-color)_var(--spread),transparent_var(--spread))] [translate:0_0]" />
            </span>
          </span>

          <span className="relative z-10 flex flex-row items-center justify-center gap-2">{children}</span>

          <span
            className={cn(
              'pointer-events-none absolute inset-0 -z-20 rounded-[calc(var(--radius))]'
            )}
            style={{ background }}
          />
        </span>
      </Component>
    );
  }
);

ShimmerButton.displayName = 'ShimmerButton';

export default ShimmerButton;
