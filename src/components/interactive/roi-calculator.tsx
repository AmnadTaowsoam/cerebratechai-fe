'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Sprout, TrendingUp, DollarSign } from 'lucide-react';

export function ROICalculator() {
  const [province, setProvince] = useState('');
  const [crop, setCrop] = useState('');
  const [rai, setRai] = useState<number | ''>('');
  const [roi, setRoi] = useState<number | null>(null);

  const calculateROI = () => {
    if (!rai) return;
    // Simulation logic for demo
    const baseRoi = 25;
    const randomFactor = Math.floor(Math.random() * 15);
    setRoi(baseRoi + randomFactor);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-surface-2 border border-white/10 rounded-3xl p-8 shadow-2xl">
      <div className="flex items-center gap-3 mb-8 border-b border-white/10 pb-6">
        <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
          <Calculator className="w-6 h-6 text-green-500" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-white">ROI Calculator</h3>
          <p className="text-white/60">Estimated returns with AI Farming</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              Province
            </label>
            <select
              value={province}
              onChange={e => setProvince(e.target.value)}
              className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500/50 outline-none transition-all"
            >
              <option value="">Select Province</option>
              <option value="khon-kaen">Khon Kaen</option>
              <option value="chiang-mai">Chiang Mai</option>
              <option value="ayutthaya">Ayutthaya</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              Crop Type
            </label>
            <select
              value={crop}
              onChange={e => setCrop(e.target.value)}
              className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500/50 outline-none transition-all"
            >
              <option value="">Select Crop</option>
              <option value="rice">Rice (Hom Mali)</option>
              <option value="corn">Corn</option>
              <option value="cassava">Cassava</option>
              <option value="sugarcane">Sugarcane</option>
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-white/80">
              Land Size (Rai)
            </label>
            <input
              type="number"
              value={rai}
              onChange={e => setRai(Number(e.target.value))}
              placeholder="Ex. 50"
              className="w-full bg-surface border border-white/10 rounded-xl px-4 py-3 text-white focus:ring-2 focus:ring-green-500/50 outline-none transition-all"
            />
          </div>

          <button
            onClick={calculateROI}
            className="w-full py-4 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl font-bold text-white hover:shadow-[0_0_20px_rgba(34,197,94,0.4)] transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            Calculate Profit
          </button>
        </div>

        <div className="bg-surface rounded-2xl p-6 border border-white/5 flex flex-col justify-center items-center text-center relative overflow-hidden">
          {roi ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative z-10"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green-500/20 text-green-400 text-sm font-medium mb-4">
                <TrendingUp className="w-4 h-4" />
                Projection Success
              </div>
              <div className="text-6xl font-bold text-white mb-2 tracking-tight">
                {roi}%
              </div>
              <div className="text-green-400 font-medium mb-6">
                Estimated ROI Increase
              </div>

              <div className="grid grid-cols-2 gap-4 w-full text-left">
                <div className="bg-surface-2 p-4 rounded-xl border border-white/5">
                  <div className="text-white/40 text-xs uppercase font-bold mb-1">
                    Savings
                  </div>
                  <div className="text-xl font-bold text-emerald-400 flex items-center gap-1">
                    <DollarSign className="w-4 h-4" /> 125k
                  </div>
                </div>
                <div className="bg-surface-2 p-4 rounded-xl border border-white/5">
                  <div className="text-white/40 text-xs uppercase font-bold mb-1">
                    Yield
                  </div>
                  <div className="text-xl font-bold text-emerald-400 flex items-center gap-1">
                    <Sprout className="w-4 h-4" /> +15%
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <div className="text-white/30 space-y-4">
              <Calculator className="w-16 h-16 mx-auto opacity-50" />
              <p>Enter your farm details to see your potential earnings.</p>
            </div>
          )}

          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-green-500/10 blur-[60px] rounded-full pointer-events-none" />
        </div>
      </div>
    </div>
  );
}
