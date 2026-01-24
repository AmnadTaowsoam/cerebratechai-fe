'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, Type, Sun, Minus, Eye } from 'lucide-react';

export function AccessibilityTools() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(1); // 1 = normal, 0.9 = small, 1.1 = large
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Apply font size
    document.documentElement.style.fontSize = `${fontSize * 100}%`;

    // Apply high contrast
    if (highContrast) {
      document.documentElement.classList.add('high-contrast');
    } else {
      document.documentElement.classList.remove('high-contrast');
    }

    // Apply reduced motion
    if (reducedMotion) {
      document.documentElement.classList.add('reduce-motion');
    } else {
      document.documentElement.classList.remove('reduce-motion');
    }
  }, [fontSize, highContrast, reducedMotion]);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-4 bottom-20 z-50 w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary/90 transition"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Accessibility Options"
      >
        <Settings className="w-6 h-6" />
      </motion.button>

      {/* Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed right-4 bottom-36 z-50 w-72 bg-surface border border-surface-3 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-primary text-white px-4 py-3">
              <h3 className="font-semibold">Accessibility Options</h3>
              <p className="text-sm opacity-80">Adjust settings for better accessibility</p>
            </div>

            <div className="p-4 space-y-4">
              {/* Font Size */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Type className="w-4 h-4" />
                  Font Size
                </label>
                <div className="flex gap-2">
                  <button
                    onClick={() => setFontSize(0.9)}
                    className={`flex-1 py-2 rounded-lg border ${fontSize === 0.9 ? 'bg-primary text-white border-primary' : 'border-surface-3 hover:bg-surface-2'}`}
                  >
                    A-
                  </button>
                  <button
                    onClick={() => setFontSize(1)}
                    className={`flex-1 py-2 rounded-lg border ${fontSize === 1 ? 'bg-primary text-white border-primary' : 'border-surface-3 hover:bg-surface-2'}`}
                  >
                    A
                  </button>
                  <button
                    onClick={() => setFontSize(1.15)}
                    className={`flex-1 py-2 rounded-lg border ${fontSize === 1.15 ? 'bg-primary text-white border-primary' : 'border-surface-3 hover:bg-surface-2'}`}
                  >
                    A+
                  </button>
                </div>
              </div>

              {/* High Contrast */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Sun className="w-4 h-4" />
                  High Contrast
                </label>
                <button
                  onClick={() => setHighContrast(!highContrast)}
                  className={`w-12 h-6 rounded-full transition-colors ${highContrast ? 'bg-primary' : 'bg-surface-3'}`}
                >
                  <motion.div
                    className="w-5 h-5 bg-white rounded-full shadow"
                    animate={{ x: highContrast ? 26 : 2 }}
                  />
                </button>
              </div>

              {/* Reduced Motion */}
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm font-medium">
                  <Minus className="w-4 h-4" />
                  Reduced Motion
                </label>
                <button
                  onClick={() => setReducedMotion(!reducedMotion)}
                  className={`w-12 h-6 rounded-full transition-colors ${reducedMotion ? 'bg-primary' : 'bg-surface-3'}`}
                >
                  <motion.div
                    className="w-5 h-5 bg-white rounded-full shadow"
                    animate={{ x: reducedMotion ? 26 : 2 }}
                  />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
