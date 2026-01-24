import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

interface AnimatedGradientTextProps {
  children: ReactNode;
  className?: string;
}

const AnimatedGradientText = ({
  children,
  className,
}: AnimatedGradientTextProps) => {
  return (
    <div
      className={cn(
        'group relative mx-auto flex max-w-fit items-center justify-center rounded-2xl border border-white/10 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur-sm transition-shadow duration-500 ease-out',
        'shadow-[inset_0_-10px_18px_rgba(14,165,233,0.16)] hover:shadow-[inset_0_-8px_16px_rgba(124,58,237,0.24)]',
        'bg-gradient-to-r from-white/10 via-white/10 to-white/10',
        className
      )}
    >
      <div
        className={cn(
          'absolute inset-0 block h-full w-full animate-gradient bg-[length:var(--bg-size,300%)_100%] p-[1px]',
          'rounded-[inherit] [mask:linear-gradient(#fff_0_0)_content-box,linear-gradient(#fff_0_0)] ![mask-composite:subtract]',
          'bg-gradient-to-r from-[rgba(14,165,233,0.45)] via-[rgba(99,102,241,0.45)] to-[rgba(124,58,237,0.45)]'
        )}
      />
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </div>
  );
};

export default AnimatedGradientText;
