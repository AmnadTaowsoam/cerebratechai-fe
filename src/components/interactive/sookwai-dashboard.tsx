'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Activity, 
  Moon, 
  AlertCircle,
  User,
  Phone,
  Battery
} from 'lucide-react';

export function SookwaiDashboard() {
  const [heartRate, setHeartRate] = useState(72);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setHeartRate(prev => {
        const change = Math.floor(Math.random() * 3) - 1;
        return prev + change;
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-5xl mx-auto bg-surface border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      {/* Header */}
      <div className="bg-surface-2 p-6 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-teal-500/20 rounded-full flex items-center justify-center">
            <User className="w-6 h-6 text-teal-400" />
          </div>
          <div>
            <h3 className="font-semibold text-white">คุณยายสมศรี (82 ปี)</h3>
            <div className="flex items-center gap-2 text-xs text-teal-400">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              Online • Wearable Active
            </div>
          </div>
        </div>
        <div className="flex gap-3">
          <button className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition">
            <AlertCircle className="w-5 h-5" />
          </button>
          <button className="p-2 rounded-lg bg-teal-500/10 text-teal-400 hover:bg-teal-500/20 transition">
            <Phone className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Grid Content */}
      <div className="p-6 grid md:grid-cols-3 gap-6">
        {/* Heart Rate Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-surface-2 p-6 rounded-2xl border border-white/5 relative overflow-hidden"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-rose-500/20 rounded-lg">
              <Heart className="w-6 h-6 text-rose-500" />
            </div>
            <span className="text-xs text-text-muted">Real-time</span>
          </div>
          <div className="text-4xl font-bold text-white mb-1">
            {heartRate} <span className="text-lg text-text-muted font-normal">bpm</span>
          </div>
          <p className="text-sm text-green-400">Normal Range (60-100)</p>
          
          {/* Chart Line Simulation */}
          <div className="absolute bottom-0 left-0 right-0 h-16 opacity-20">
             <svg viewBox="0 0 100 20" className="w-full h-full text-rose-500 fill-current">
                <path d="M0 10 Q 25 15, 50 10 T 100 10 V 20 H 0 Z" />
             </svg>
          </div>
        </motion.div>

        {/* Activity Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-surface-2 p-6 rounded-2xl border border-white/5"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-blue-500/20 rounded-lg">
              <Activity className="w-6 h-6 text-blue-500" />
            </div>
            <span className="text-xs text-text-muted">Today</span>
          </div>
          <div className="text-4xl font-bold text-white mb-1">
            1,240 <span className="text-lg text-text-muted font-normal">steps</span>
          </div>
          <div className="w-full bg-surface-3 rounded-full h-2 mt-4">
            <div className="bg-blue-500 h-2 rounded-full w-[45%]" />
          </div>
          <p className="text-xs text-text-muted mt-2">Goal: 3,000 steps</p>
        </motion.div>

        {/* Sleep Quality */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-surface-2 p-6 rounded-2xl border border-white/5"
        >
          <div className="flex justify-between items-start mb-4">
            <div className="p-2 bg-indigo-500/20 rounded-lg">
              <Moon className="w-6 h-6 text-indigo-500" />
            </div>
            <span className="text-xs text-text-muted">Last Night</span>
          </div>
          <div className="text-4xl font-bold text-white mb-1">
            7h 20m
          </div>
          <p className="text-sm text-indigo-300">Deep Sleep: 2h 15m</p>
          <div className="flex gap-1 mt-4">
            {[...Array(5)].map((_, i) => (
              <div key={i} className={`h-1 flex-1 rounded-full ${i < 4 ? 'bg-indigo-500' : 'bg-surface-3'}`} />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Fall Detection Alert (Simulator) */}
      <div className="px-6 pb-6">
        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-xl flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <div>
              <div className="font-semibold text-green-400">Fall Detection System Active</div>
              <div className="text-xs text-green-400/60">Monitored area: Living Room, Bedroom</div>
            </div>
          </div>
          <div className="flex items-center gap-2 text-xs text-green-400">
            <Battery className="w-4 h-4" /> 94% Battery
          </div>
        </div>
      </div>
    </div>
  );
}
