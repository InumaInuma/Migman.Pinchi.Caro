'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, Users, Eye, ArrowRight, Calendar, Vote, Sparkles } from 'lucide-react';

export default function Hero() {
  // Target election date: October 4, 2026
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
    <section id="inicio" className="relative pt-28 pb-20 overflow-hidden concentric-bg concentric-rings">
      
      {/* Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-morado-600/20 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-verde-500/15 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Election Date Top Highlight Tag */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-morado-800/80 via-morado-700/80 to-morado-800/80 border border-verde-400/50 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
            <Calendar className="w-5 h-5 text-verde-400 animate-pulse" />
            <span className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase">
              DOMINGO 4 DE OCTUBRE DE 2026 • ELECCIONES MUNICIPALES
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headlines & Call to Actions */}
          <div className="lg:col-span-7 text-center lg:text-left space-y-6">
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-white leading-none">
              RECUPEREMOS <br />
              <span className="text-verde-400 drop-shadow-[0_0_20px_rgba(34,197,94,0.4)]">
                VILLA EL SALVADOR
              </span>
            </h1>

            <p className="text-xl sm:text-2xl font-bold text-purple-200">
              CON ORDEN, SEGURIDAD Y TRANSPARENCIA
            </p>

            <div className="inline-block bg-morado-900/60 border-l-4 border-verde-500 px-4 py-2 rounded-r-xl">
              <p className="text-base sm:text-lg italic font-medium text-gray-200">
                &quot;Por un mejor futuro para Villa El Salvador&quot;
              </p>
            </div>

            {/* Feature Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center space-x-2.5 bg-morado-950/80 border border-morado-700/60 p-3 rounded-2xl">
                <ShieldCheck className="w-6 h-6 text-verde-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="block text-xs font-black text-white uppercase">ORDEN</span>
                  <span className="block text-[11px] text-gray-300">para progresar</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-morado-950/80 border border-morado-700/60 p-3 rounded-2xl">
                <Users className="w-6 h-6 text-verde-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="block text-xs font-black text-white uppercase">UNIDOS</span>
                  <span className="block text-[11px] text-gray-300">por Villa</span>
                </div>
              </div>

              <div className="flex items-center space-x-2.5 bg-morado-950/80 border border-morado-700/60 p-3 rounded-2xl">
                <Eye className="w-6 h-6 text-verde-400 flex-shrink-0" />
                <div className="text-left">
                  <span className="block text-xs font-black text-white uppercase">TRANSPARENCIA</span>
                  <span className="block text-[11px] text-gray-300">en cada decisión</span>
                </div>
              </div>
            </div>

            {/* Countdown Box */}
            <div className="bg-gradient-to-r from-morado-950 via-morado-900 to-morado-950 border border-verde-500/30 rounded-3xl p-5 shadow-2xl">
              <div className="text-xs font-bold text-verde-400 uppercase tracking-widest text-center lg:text-left mb-3 flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Cuenta regresiva para las elecciones
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div className="bg-morado-950/90 border border-morado-700/60 rounded-2xl p-2.5">
                  <span className="block text-2xl sm:text-4xl font-black text-white">{timeLeft.days}</span>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Días</span>
                </div>
                <div className="bg-morado-950/90 border border-morado-700/60 rounded-2xl p-2.5">
                  <span className="block text-2xl sm:text-4xl font-black text-white">{timeLeft.hours}</span>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Horas</span>
                </div>
                <div className="bg-morado-950/90 border border-morado-700/60 rounded-2xl p-2.5">
                  <span className="block text-2xl sm:text-4xl font-black text-white">{timeLeft.minutes}</span>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Min</span>
                </div>
                <div className="bg-morado-950/90 border border-morado-700/60 rounded-2xl p-2.5">
                  <span className="block text-2xl sm:text-4xl font-black text-verde-400">{timeLeft.seconds}</span>
                  <span className="text-[10px] sm:text-xs font-bold text-gray-400 uppercase">Seg</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href="#propuestas"
                className="flex items-center justify-center space-x-2 bg-gradient-to-r from-verde-500 to-verde-600 hover:from-verde-600 hover:to-verde-700 text-morado-950 font-black px-8 py-4 rounded-2xl text-base sm:text-lg shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all hover:scale-105"
              >
                <span>CONOCE MIS PROPUESTAS</span>
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#simulador"
                className="flex items-center justify-center space-x-2 bg-morado-800/80 hover:bg-morado-700 text-white font-extrabold px-8 py-4 rounded-2xl text-base sm:text-lg border border-morado-500/50 transition-all hover:scale-105"
              >
                <Vote className="w-5 h-5 text-verde-400" />
                <span>CÓMO VOTAR</span>
              </a>
            </div>

          </div>

          {/* Right Column: Candidate Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              
              {/* Outer Glowing Concentric Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-verde-400/40 animate-pulse scale-105" />
              <div className="absolute inset-0 rounded-full border-2 border-morado-400/30 scale-110" />

              {/* Main Image Wrapper */}
              <div className="relative rounded-3xl overflow-hidden border-4 border-morado-600 shadow-[0_0_50px_rgba(109,40,217,0.5)] bg-gradient-to-b from-morado-800 to-morado-950">
                <img
                  src="/imagenCandidato.jpeg"
                  alt="Candidato Alcaldía Villa El Salvador"
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                />

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-morado-950 via-morado-950/90 to-transparent p-6 text-center space-y-1">
                  <div className="inline-block bg-verde-500 text-morado-950 font-black text-xs px-3 py-1 rounded-full uppercase tracking-wider">
                    CANDIDATO A LA ALCALDÍA
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    PARTIDO MORADO
                  </h3>
                  <p className="text-xs font-semibold text-verde-400 uppercase tracking-widest">
                    ESTE DOMINGO 4 DE OCTUBRE: MARCA EL 3
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
