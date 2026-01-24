'use client';

import { Sparkles } from 'lucide-react';

export function AICardPreview() {
  return (
    <div className="relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20">
      {/* GIF Container */}
      <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-black/20 flex items-center justify-center">
        {/* Placeholder SVG/GIF */}
        <img
          src="/demos/phitiai-demo.svg"
          alt="AI Card Generation Demo"
          className="w-full h-full object-cover"
        />

        <div className="absolute bottom-4 left-0 right-0 flex justify-center">
          <span className="bg-black/60 backdrop-blur-md text-white text-xs px-3 py-1 rounded-full border border-white/10">
            Preview Mode
          </span>
        </div>
      </div>

      {/* CTA */}
      <a
        href="#"
        className="w-full mt-4 py-3 bg-white text-orange-600 rounded-lg font-semibold hover:bg-white/90 transition flex items-center justify-center gap-2 group"
      >
        <Sparkles className="w-5 h-5 transition-transform group-hover:rotate-12" />
        ลองสร้างการ์ดฟรี
      </a>
    </div>
  );
}
