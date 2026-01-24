'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Monitor, Zap } from 'lucide-react';

export function DarkModeSection() {
  const [theme, setTheme] = useState<'light' | 'dark' | 'deep-tech'>('deep-tech');

  useEffect(() => {
    // Apply theme to document
    document.documentElement.setAttribute('data-theme', theme);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  useEffect(() => {
    // Load saved theme on mount
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | 'deep-tech';
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  const themes = [
    {
      id: 'light' as const,
      name: 'Light',
      nameTh: 'สว่าง',
      icon: Sun,
      description: 'Clean and bright interface',
      descriptionTh: 'อินเทอร์เฟซสะอาดและสว่าง',
    },
    {
      id: 'dark' as const,
      name: 'Dark',
      nameTh: 'มืด',
      icon: Moon,
      description: 'Easy on the eyes',
      descriptionTh: 'สบายตา',
    },
    {
      id: 'deep-tech' as const,
      name: 'Deep Tech',
      nameTh: 'ดีปเทค',
      icon: Zap,
      description: 'Neon cyberpunk aesthetic',
      descriptionTh: 'สไตล์ไซเบอร์พังก์นีออน',
    },
  ];

  return (
    <section className="py-20 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
            >
              Choose Your Theme
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-slate-300"
            >
              เลือกธีมที่เหมาะกับคุณ
            </motion.p>
          </div>

          {/* Theme Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {themes.map((t, index) => {
              const Icon = t.icon;
              const isActive = theme === t.id;

              return (
                <motion.button
                  key={t.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  onClick={() => setTheme(t.id)}
                  className={`relative p-8 rounded-2xl border-2 transition-all ${
                    isActive
                      ? 'border-blue-500 bg-blue-500/10 shadow-lg shadow-blue-500/20'
                      : 'border-slate-700 bg-slate-900 hover:border-slate-500'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTheme"
                      className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl -z-10"
                    />
                  )}
                  
                  <div className="flex flex-col items-center text-center">
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 ${
                        isActive ? 'bg-blue-500' : 'bg-slate-800'
                      }`}
                    >
                      <Icon className={`w-8 h-8 ${isActive ? 'text-white' : 'text-slate-400'}`} />
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-1">{t.name}</h3>
                    <p className="text-sm text-slate-400 mb-3">{t.nameTh}</p>
                    
                    <p className="text-sm text-slate-300">{t.description}</p>
                    <p className="text-sm text-slate-400">{t.descriptionTh}</p>
                  </div>

                  {isActive && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute top-4 right-4 w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center"
                    >
                      <span className="text-white text-xs">✓</span>
                    </motion.div>
                  )}
                </motion.button>
              );
            })}
          </div>

          {/* Preview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-slate-900 rounded-2xl border border-slate-700 overflow-hidden"
          >
            <div className="p-6 border-b border-slate-700">
              <h3 className="text-lg font-semibold">Preview / ตัวอย่าง</h3>
            </div>
            
            <div className="p-6">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Light Preview */}
                <div className="bg-white rounded-xl p-6 text-slate-900">
                  <h4 className="font-semibold mb-2">Light Theme</h4>
                  <p className="text-sm text-slate-600 mb-4">Clean and minimal design</p>
                  <button className="px-4 py-2 bg-slate-900 text-white rounded-lg text-sm">
                    Button
                  </button>
                </div>

                {/* Dark Preview */}
                <div className="bg-slate-900 rounded-xl p-6 text-white">
                  <h4 className="font-semibold mb-2">Dark Theme</h4>
                  <p className="text-sm text-slate-400 mb-4">Easy on the eyes</p>
                  <button className="px-4 py-2 bg-white text-slate-900 rounded-lg text-sm">
                    Button
                  </button>
                </div>

                {/* Deep Tech Preview */}
                <div className="md:col-span-2 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 rounded-xl p-6 text-white border border-purple-500/30">
                  <h4 className="font-semibold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                    Deep Tech Theme
                  </h4>
                  <p className="text-sm text-slate-300 mb-4">Neon cyberpunk aesthetic with glowing effects</p>
                  <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm shadow-lg shadow-purple-500/30">
                    Button
                  </button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-8 text-center"
          >
            <p className="text-slate-400 text-sm">
              Your theme preference is saved automatically. / การตั้งค่าธีมของคุณจะถูกบันทึกโดยอัตโนมัติ
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
