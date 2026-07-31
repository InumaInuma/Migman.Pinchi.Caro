'use client';

import React, { useState } from 'react';
import { CheckCircle2, Sparkles, RefreshCw, MessageCircle } from 'lucide-react';

export default function SimuladorVoto() {
  const [votedDistrital, setVotedDistrital] = useState(true);
  const [votedProvincial, setVotedProvincial] = useState(true);

  const resetVotes = () => {
    setVotedDistrital(false);
    setVotedProvincial(false);
  };

  return (
    <section id="simulador" className="py-20 concentric-bg relative border-t border-b border-morado-800">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center space-x-2 bg-verde-500/20 border border-verde-500/40 px-4 py-1.5 rounded-full text-verde-400 font-bold text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-4 h-4" /> GUÍA Y SIMULADOR DE VOTO
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-3">
          ESTE <span className="text-verde-400">04 DE OCTUBRE</span> MARCA
        </h2>

        <p className="text-gray-200 text-base sm:text-lg mb-8 max-w-2xl mx-auto font-medium">
          Marca con una <strong className="text-white bg-morado-800 px-2 py-0.5 rounded font-black text-xl">X</strong> el símbolo del <strong className="text-verde-400 font-bold">PARTIDO MORADO</strong> en la cédula Provincial y Distrital.
        </p>

        {/* Cédula Box Display matching Image 2 */}
        <div className="bg-gradient-to-b from-morado-900 via-morado-950 to-black p-6 sm:p-10 rounded-3xl border-4 border-morado-600 shadow-[0_0_50px_rgba(109,40,217,0.5)] max-w-2xl mx-auto space-y-6">
          
          <div className="bg-white text-morado-950 font-black text-xs sm:text-sm py-2 px-4 rounded-xl uppercase tracking-widest shadow">
            ESTE 04 DE OCTUBRE • ASÍ DEBES MARCAR TU VOTO
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* PROVINCIAL Ballot Box */}
            <div className="bg-white rounded-2xl p-5 text-gray-900 shadow-xl border-4 border-purple-200 flex flex-col items-center space-y-3">
              <span className="text-xs font-black text-morado-900 uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full">
                PROVINCIAL (LIMA)
              </span>

              <button
                onClick={() => setVotedProvincial(!votedProvincial)}
                className="relative w-36 h-36 bg-white border-4 border-morado-800 rounded-2xl p-2 flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform"
                aria-label="Marcar Cédula Provincial"
              >
                <img
                  src="/partidomorado.png"
                  alt="Partido Morado Logo"
                  className="w-full h-full object-contain"
                />

                {/* Overlaid Big 'X' like Image 2 */}
                {votedProvincial && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-morado-950 font-black text-8xl leading-none select-none opacity-90 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] stroke-white">
                      ✕
                    </span>
                  </div>
                )}
              </button>

              <span className="text-xs font-bold text-morado-950">
                {votedProvincial ? '✅ ¡Cédula Provincial Marcada!' : '👉 Toca el símbolo para marcar con X'}
              </span>
            </div>

            {/* DISTRITAL Ballot Box */}
            <div className="bg-white rounded-2xl p-5 text-gray-900 shadow-xl border-4 border-purple-200 flex flex-col items-center space-y-3">
              <span className="text-xs font-black text-morado-900 uppercase tracking-widest bg-purple-100 px-3 py-1 rounded-full">
                DISTRITAL (VILLA EL SALVADOR)
              </span>

              <button
                onClick={() => setVotedDistrital(!votedDistrital)}
                className="relative w-36 h-36 bg-white border-4 border-morado-800 rounded-2xl p-2 flex items-center justify-center cursor-pointer shadow-md hover:scale-105 transition-transform"
                aria-label="Marcar Cédula Distrital"
              >
                <img
                  src="/partidomorado.png"
                  alt="Partido Morado Logo"
                  className="w-full h-full object-contain"
                />

                {/* Overlaid Big 'X' like Image 2 */}
                {votedDistrital && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <span className="text-morado-950 font-black text-8xl leading-none select-none opacity-90 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] stroke-white">
                      ✕
                    </span>
                  </div>
                )}
              </button>

              <span className="text-xs font-bold text-morado-950">
                {votedDistrital ? '✅ ¡Cédula Distrital Marcada!' : '👉 Toca el símbolo para marcar con X'}
              </span>
            </div>

          </div>

          {/* Feedback & WhatsApp Group CTA */}
          <div className="pt-2 space-y-4">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-200">
              <CheckCircle2 className="w-5 h-5 text-verde-400" />
              <span>Toca los recuadros para simular quitar o poner la marca <strong>X</strong></span>
            </div>

            <a
              href="https://wa.me/51941378075?text=Hola,%20deseo%20unirme%20al%20grupo%20de%20WhatsApp%20Del%20Moradito"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-verde-500 to-verde-600 hover:from-verde-600 hover:to-verde-700 text-morado-950 px-6 py-3.5 rounded-2xl font-black text-sm uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>ÚNETE AL GRUPO DE WHATSAPP &quot;DEL MORADITO&quot; (941 378 075)</span>
            </a>
          </div>

        </div>

      </div>

    </section>
  );
}
