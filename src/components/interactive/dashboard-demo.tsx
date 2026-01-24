'use client';

import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';

// For demo purposes, we accept a type to switch between different demo videos
interface DashboardDemoProps {
  type?: 'smartfarm' | 'sookwai' | 'default';
}

export function DashboardDemo({ type = 'default' }: DashboardDemoProps) {
  const videoSrc =
    type === 'sookwai'
      ? '/demos/sookwai-demo.svg' // Replace with .mp4 or .gif when available
      : '/demos/smartfarm-demo.svg';

  return (
    <div className="w-full max-w-5xl mx-auto rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-surface-2 relative group">
      {/* Browser Chrome Simulation */}
      <div className="bg-surface border-b border-white/5 px-4 py-3 flex items-center gap-2">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 flex-1 bg-surface-2 h-6 rounded-md flex items-center px-3 text-xs text-text-muted/50 font-mono">
          cerebra.tech/demo/{type === 'default' ? 'smartfarm' : type}
        </div>
      </div>

      {/* Video / Static Content Container */}
      <div className="relative aspect-video bg-black/20 flex items-center justify-center">
        {/* 
           Using img tag for SVG/GIF placeholders. 
           In production, use <video> tag for mp4/webm with fallback.
        */}
        <img
          src={videoSrc}
          alt={`${type} demo`}
          className="w-full h-full object-cover opacity-90 transition-opacity group-hover:opacity-100"
        />

        {/* Overlay Play Button (Optional - for video feel) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
            <svg
              className="w-6 h-6 text-white fill-current ml-1"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
