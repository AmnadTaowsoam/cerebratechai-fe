'use client';

import { useEffect, useRef, useState } from 'react';

import { cn } from '@/lib/utils';

interface ParticlesProps {
  className?: string;
  quantity?: number;
  staticity?: number;
  ease?: number;
  color?: string;
  refresh?: boolean;
}

interface Particle {
  x: number;
  y: number;
  translateX: number;
  translateY: number;
  size: number;
  alpha: number;
  targetAlpha: number;
  dx: number;
  dy: number;
  magnetism: number;
}

const hexToRgb = (hex: string): string => {
  hex = hex.replace('#', '');
  if (hex.length === 3) {
    hex = hex
      .split('')
      .map((char) => char + char)
      .join('');
  }
  const bigint = parseInt(hex, 16);
  const r = (bigint >> 16) & 255;
  const g = (bigint >> 8) & 255;
  const b = bigint & 255;
  return `${r}, ${g}, ${b}`;
};

const Particles = ({
  className,
  quantity = 36,
  staticity = 45,
  ease = 45,
  color = '#94a3b8',
  refresh = false,
}: ParticlesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const context = useRef<CanvasRenderingContext2D | null>(null);
  const circles = useRef<Particle[]>([]);
  const [canvasSize, setCanvasSize] = useState({ w: 0, h: 0 });
  const rgb = useRef(hexToRgb(color));

  useEffect(() => {
    rgb.current = hexToRgb(color);
  }, [color]);

  useEffect(() => {
    if (canvasRef.current) {
      context.current = canvasRef.current.getContext('2d');
    }
    initCanvas();
    animate();

    window.addEventListener('resize', initCanvas);
    return () => {
      window.removeEventListener('resize', initCanvas);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    initCanvas();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [refresh]);

  const initCanvas = () => {
    resizeCanvas();
    drawParticles();
  };

  const resizeCanvas = () => {
    if (canvasContainerRef.current && canvasRef.current && context.current) {
      circles.current.length = 0;
      const { offsetWidth, offsetHeight } = canvasContainerRef.current;
      setCanvasSize({ w: offsetWidth, h: offsetHeight });
      canvasRef.current.width = offsetWidth;
      canvasRef.current.height = offsetHeight;
    }
  };

  const circleParams = (): Particle => {
    const x = Math.floor(Math.random() * canvasSize.w);
    const y = Math.floor(Math.random() * canvasSize.h);
    const translateX = 0;
    const translateY = 0;
    const size = Math.floor(Math.random() * 2) + 1;
    const alpha = 0;
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(2));
    const dx = (Math.random() - 0.5) * 0.25;
    const dy = (Math.random() - 0.5) * 0.25;
    const magnetism = 0.1 + Math.random() * 4;

    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    };
  };

  const drawCircle = (circle: Particle, update = false) => {
    if (!context.current) return;

    const { x, y, translateX, translateY, size, alpha } = circle;
    context.current.translate(translateX, translateY);
    context.current.beginPath();
    context.current.arc(x, y, size, 0, 2 * Math.PI);
    context.current.fillStyle = `rgba(${rgb.current}, ${alpha})`;
    context.current.fill();
    context.current.setTransform(1, 0, 0, 1, 0, 0);

    if (!update) {
      circles.current.push(circle);
    }
  };

  const clearContext = () => {
    if (!context.current) return;
    context.current.clearRect(0, 0, canvasSize.w, canvasSize.h);
  };

  const drawParticles = () => {
    clearContext();
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams();
      drawCircle(circle);
    }
  };

  const animate = () => {
    clearContext();
    circles.current.forEach((circle, i) => {
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.h - circle.y - circle.translateY - circle.size,
      ];
      const closestEdge = edge.reduce((acc, val) => Math.min(acc, val));
      const remapClosestEdge = parseFloat((closestEdge / 20).toFixed(2));

      if (remapClosestEdge > 1) {
        circle.alpha += 0.02;
        if (circle.alpha > circle.targetAlpha) {
          circle.alpha = circle.targetAlpha;
        }
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge;
      }

      circle.x += circle.dx;
      circle.y += circle.dy;
      circle.translateX +=
        (circle.dx * staticity) / 100 - circle.translateX / ease;
      circle.translateY +=
        (circle.dy * staticity) / 100 - circle.translateY / ease;

      if (
        circle.x < -circle.size ||
        circle.x > canvasSize.w + circle.size ||
        circle.y < -circle.size ||
        circle.y > canvasSize.h + circle.size
      ) {
        circles.current.splice(i, 1);
        const newCircle = circleParams();
        drawCircle(newCircle);
      } else {
        drawCircle(
          {
            ...circle,
            x: circle.x,
            y: circle.y,
            translateX: circle.translateX,
            translateY: circle.translateY,
            alpha: circle.alpha,
          },
          true
        );
      }
    });

    window.requestAnimationFrame(animate);
  };

  return (
    <div
      className={cn('relative h-full w-full', className)}
      ref={canvasContainerRef}
    >
      <canvas ref={canvasRef} className="h-full w-full" />
    </div>
  );
};

export default Particles;
