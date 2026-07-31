'use client';

import React, { useState, useEffect } from 'react';
import { ArrowRight, Calendar, Vote, Sparkles } from 'lucide-react';

export default function Hero() {
  const targetDate = new Date('2026-10-04T08:00:00-05:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <section id="inicio" className="relative pt-24 pb-16 overflow-hidden bg-morado-dark">
      
      {/* Background Glow Effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full bg-morado-600/20 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-8">
        
        {/* Top Tag */}
        <div className="flex justify-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-morado-800/90 via-morado-700/90 to-morado-800/90 border border-verde-400/50 px-5 py-2 rounded-full shadow-lg backdrop-blur-md">
            <Calendar className="w-5 h-5 text-verde-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase">
              DOMINGO 4 DE OCTUBRE DE 2026 • ELECCIONES MUNICIPALES VILLA EL SALVADOR
            </span>
          </div>
        </div>

        {/* Main Banner Artwork Image (paginaprincipal.png) */}
        <div className="relative rounded-3xl overflow-hidden border-4 border-morado-600/70 shadow-[0_0_50px_rgba(109,40,217,0.5)] group">
          <img
            src="/paginaprincipal.png"
            alt="Recuperemos Villa El Salvador - Con Orden, Seguridad y Transparencia"
            className="w-full h-auto object-cover transform hover:scale-[1.01] transition-transform duration-500"
          />

          {/* Floating Subtle Gradient Shadow on edges */}
          <div className="absolute inset-0 ring-1 ring-white/10 pointer-events-none rounded-3xl" />
        </div>

        {/* Bottom Banner Actions & Countdown Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center pt-2">
          
          {/* Countdown Timer */}
          <div className="lg:col-span-7 bg-gradient-to-r from-morado-950 via-morado-900 to-morado-950 border border-verde-500/30 rounded-3xl p-6 shadow-2xl">
            <div className="text-xs font-bold text-verde-400 uppercase tracking-widest mb-3 flex items-center justify-center lg:justify-start gap-2">
              <Sparkles className="w-4 h-4" /> CUENTA REGRESIVA PARA LAS ELECCIONES MUNICIPALES
            </div>
            <div className="grid grid-cols-4 gap-3 text-center">
              <div className="bg-morado-950/90 border border-morado-700/60 rounded-2xl p-3">
                <span className="block text-2xl sm:text-4xl font-black text-white">{timeLeft.days}</span>
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Días</span>
              </div>
              <div className="bg-morado-950/90 border border-morado-700/60 rounded-2xl p-3">
                <span className="block text-2xl sm:text-4xl font-black text-white">{timeLeft.hours}</span>
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Horas</span>
              </div>
              <div className="bg-morado-950/90 border border-morado-700/60 rounded-2xl p-3">
                <span className="block text-2xl sm:text-4xl font-black text-white">{timeLeft.minutes}</span>
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Min</span>
              </div>
              <div className="bg-morado-950/90 border border-morado-700/60 rounded-2xl p-3">
                <span className="block text-2xl sm:text-4xl font-black text-verde-400">{timeLeft.seconds}</span>
                <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Seg</span>
              </div>
            </div>
          </div>

          {/* Action CTA Buttons */}
          <div className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col gap-4">
            <a
              href="#propuestas"
              className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-verde-500 to-verde-600 hover:from-verde-600 hover:to-verde-700 text-morado-950 font-black px-6 py-4 rounded-2xl text-base uppercase tracking-wider shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all hover:scale-105"
            >
              <span>CONOCE MIS PROPUESTAS DE GOBIERNO</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#simulador"
              className="w-full flex items-center justify-center space-x-2 bg-morado-800/80 hover:bg-morado-700 text-white font-extrabold px-6 py-4 rounded-2xl text-base border border-morado-500/50 uppercase tracking-wider transition-all hover:scale-105"
            >
              <Vote className="w-5 h-5 text-verde-400" />
              <span>¿CÓMO VOTAR? (SIMULADOR DE VOTO)</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
