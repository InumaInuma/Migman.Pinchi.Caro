'use client';

import React, { useState, useEffect } from 'react';

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Start fading out after 1.8 seconds
    const fadeTimer = setTimeout(() => {
      setFadeOut(true);
    }, 1800);

    // Completely unmount preloader after fade out animation completes (2.3s)
    const removeTimer = setTimeout(() => {
      setLoading(false);
    }, 2300);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-b from-morado-950 via-black to-morado-950 text-white transition-opacity duration-700 ${
        fadeOut ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      {/* Background Animated Glowing Rings */}
      <div className="absolute w-[500px] h-[500px] bg-morado-600/20 rounded-full blur-[120px] animate-pulse pointer-events-none" />
      <div className="absolute w-[300px] h-[300px] bg-verde-500/20 rounded-full blur-[90px] animate-pulse pointer-events-none" />

      {/* Main Animated Logo Card */}
      <div className="relative z-10 flex flex-col items-center space-y-6">
        
        {/* Logo Container with Glowing Ring & Pulse */}
        <div className="relative">
          <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-morado-600 via-verde-400 to-morado-600 blur-xl opacity-80 animate-pulse" />
          
          <div className="relative bg-white p-5 sm:p-6 rounded-3xl border-4 border-verde-400 shadow-[0_0_50px_rgba(34,197,94,0.6)] transform hover:scale-105 transition-transform">
            <img
              src="/partidomorado.png"
              alt="Partido Morado Logo"
              className="h-20 sm:h-28 w-auto object-contain animate-bounce"
            />
          </div>
        </div>

        {/* Text & Loading Indicator */}
        <div className="text-center space-y-2">
          <span className="block text-xs font-black text-verde-400 tracking-[0.3em] uppercase animate-pulse">
            PARTIDO MORADO
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-white tracking-tight uppercase">
            VILLA EL SALVADOR <span className="text-verde-400">2026</span>
          </h2>
          <p className="text-xs text-purple-200 font-semibold tracking-wider">
            RECUPEREMOS VILLA SE RESPETA
          </p>
        </div>

        {/* Animated Loading Bar */}
        <div className="w-48 sm:w-64 h-1.5 bg-morado-900/80 rounded-full overflow-hidden border border-morado-700">
          <div className="h-full bg-gradient-to-r from-verde-400 via-morado-500 to-verde-400 rounded-full animate-[loadingBar_1.8s_ease-in-out]" />
        </div>

      </div>
    </div>
  );
}
