'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';
import { cn } from '@/lib/utils';

// Blur-up loading pattern without heavy JavaScript
export function OptimizedImage({
  src,
  alt,
  className,
  width,
  height,
  ...props
}: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div 
      className={cn("relative overflow-hidden bg-surface-3", className)}
      style={{ aspectRatio: width && height ? `${width}/${height}` : 'auto' }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-110 blur-xl grayscale" : "scale-100 blur-0 grayscale-0"
        )}
        onLoad={() => setIsLoading(false)}
        loading="lazy"
        decoding="async"
        {...props}
      />
    </div>
  );
}
