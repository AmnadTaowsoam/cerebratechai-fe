'use client';

import { motion } from 'framer-motion';

export function TrafficLightAdvisor() {
  const cards = [
    {
      color: 'bg-emerald-500',
      glow: 'shadow-[0_0_30px_rgba(16,185,129,0.3)]',
      icon: '🟢',
      title: 'Ideal Conditions',
      desc: 'Soil moisture and weather are perfect for planting.',
      status: 'Go'
    },
    {
      color: 'bg-amber-500',
      glow: 'shadow-[0_0_30px_rgba(245,158,11,0.3)]',
      icon: '🟡',
      title: 'Caution Advised',
      desc: 'Upcoming rain may affect fertilizer application.',
      status: 'Wait'
    },
    {
      color: 'bg-rose-500',
      glow: 'shadow-[0_0_30px_rgba(244,63,94,0.3)]',
      icon: '🔴',
      title: 'Do Not Plant',
      desc: 'Severe drought conditions predicted. Delay activity.',
      status: 'Stop'
    },
  ];

  return (
    <div className="w-full">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-white mb-4">Traffic Light Advisor</h2>
        <p className="text-white/60 max-w-2xl mx-auto">
          AI-driven recommendations for farming activities based on real-time data.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {cards.map((card, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative bg-surface-2 border border-white/10 p-8 rounded-3xl overflow-hidden hover:border-white/20 transition-colors"
          >
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center text-4xl mb-6 bg-surface border border-white/5 ${card.glow} transition-shadow duration-500 group-hover:scale-110 transform`}>
              {card.icon}
            </div>
            
            <div className="text-center relative z-10">
              <h3 className="text-xl font-bold text-white mb-2">{card.title}</h3>
              <p className="text-white/60 mb-6">{card.desc}</p>
              
              <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold text-white ${card.color.replace('bg-', 'bg-opacity-20 text-').replace('500', '400')} border border-white/10`}>
                Status: {card.status}
              </span>
            </div>

            {/* Gradient Overlay */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 ${card.color}`} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}
