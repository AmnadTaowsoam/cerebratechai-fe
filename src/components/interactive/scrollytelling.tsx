'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const storySteps = [
  {
    title: 'เริ่มต้นการเพาะปลูก',
    desc: 'วิเคราะห์สภาพดินและเลือกพืชที่เหมาะสมที่สุดด้วย AI',
    image: '/images/story/step1.jpg',
    color: 'bg-green-500',
  },
  {
    title: 'ดูแลรักษา',
    desc: 'ระบบเซนเซอร์แจ้งเตือนการให้น้ำและปุ๋ยอย่างแม่นยำ',
    image: '/images/story/step2.jpg',
    color: 'bg-blue-500',
  },
  {
    title: 'เก็บเกี่ยว',
    desc: 'คาดการณ์ผลผลิตและราคาตลาดล่วงหน้า',
    image: '/images/story/step3.jpg',
    color: 'bg-orange-500',
  },
];

interface StoryStepTextProps {
  step: typeof storySteps[0];
  index: number;
  totalSteps: number;
  scrollYProgress: any;
}

function StoryStepText({ step, index, totalSteps, scrollYProgress }: StoryStepTextProps) {
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;
  const opacity = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [start, start + 0.1, end - 0.1, end], [50, 0, 0, -50]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="absolute inset-0 flex flex-col justify-center"
    >
      <span className={`inline-block w-12 h-12 rounded-full ${step.color} mb-4`} />
      <h3 className="text-4xl font-bold mb-4">{step.title}</h3>
      <p className="text-xl text-text-muted">{step.desc}</p>
    </motion.div>
  );
}

interface StoryStepVisualProps {
  step: typeof storySteps[0];
  index: number;
  totalSteps: number;
  scrollYProgress: any;
}

function StoryStepVisual({ step, index, totalSteps, scrollYProgress }: StoryStepVisualProps) {
  const start = index / totalSteps;
  const end = (index + 1) / totalSteps;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05, end - 0.05, end], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [start, end], [1.1, 1]);

  return (
    <motion.div
      style={{ opacity }}
      className="absolute inset-0 flex items-center justify-center"
    >
      {/* Fallback visual if no image */}
      <motion.div
        style={{ scale }}
        className={`w-full h-full ${step.color} opacity-20 flex items-center justify-center`}
      >
        <span className="text-9xl opacity-50 font-bold text-white">{index + 1}</span>
      </motion.div>
    </motion.div>
  );
}

export function Scrollytelling() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section ref={containerRef} className="relative h-[300vh] bg-surface">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        {/* Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 h-1 bg-primary z-50"
          style={{ width: useTransform(scrollYProgress, [0, 1], ['0%', '100%']) }}
        />

        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full">
          {/* Text Content - Changes based on scroll */}
          <div className="relative h-[300px]">
            {storySteps.map((step, index) => (
              <StoryStepText
                key={index}
                step={step}
                index={index}
                totalSteps={storySteps.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>

          {/* Visuals - Right side */}
          <div className="relative h-[400px] w-full bg-surface-2 rounded-3xl overflow-hidden border border-surface-3 shadow-2xl">
            {storySteps.map((step, index) => (
              <StoryStepVisual
                key={index}
                step={step}
                index={index}
                totalSteps={storySteps.length}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
