'use client';

import { useEffect, useState } from 'react';

import { motion } from 'framer-motion';

import { cn } from '@/lib/utils';

interface SparklesTextProps {
  text: string;
  className?: string;
  sparklesCount?: number;
  colors?: {
    first: string;
    second: string;
  };
}

interface Sparkle {
  id: number;
  x: number;
  y: number;
}

const SparklesText = ({
  text,
  className,
  sparklesCount = 12,
  colors = {
    first: '#60A5FA',
    second: '#A855F7',
  },
}: SparklesTextProps) => {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  useEffect(() => {
    const generateSparkle = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      y: Math.random() * 100,
    });

    const interval = setInterval(() => {
      const newSparkle = generateSparkle();
      setSparkles((prev) => [...prev.slice(-sparklesCount + 1), newSparkle]);
    }, 200);

    return () => clearInterval(interval);
  }, [sparklesCount]);

  return (
    <span className={cn('relative inline-block', className)}>
      {sparkles.map((sparkle) => (
        <motion.svg
          key={sparkle.id}
          className="pointer-events-none absolute z-10"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 1, 0], scale: [0, 1.2, 0] }}
          transition={{ duration: 0.9 }}
          style={{
            left: `${sparkle.x}%`,
            top: `${sparkle.y}%`,
          }}
          width="22"
          height="22"
          viewBox="0 0 21 21"
        >
          <path
            d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
            fill={sparkle.id % 2 === 0 ? colors.first : colors.second}
          />
        </motion.svg>
      ))}
      <span className="relative z-0">{text}</span>
    </span>
  );
};

export default SparklesText;
