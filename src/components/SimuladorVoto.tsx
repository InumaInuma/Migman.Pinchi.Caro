'use client';

import React, { useState } from 'react';
import { Vote, CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';

export default function SimuladorVoto() {
  const [hasVoted, setHasVoted] = useState(false);

  const handleVote = () => {
    setHasVoted(true);
  };

  return (
    <section id="simulador" className="py-20 concentric-bg relative border-t border-b border-morado-800">
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center space-x-2 bg-verde-500/20 border border-verde-500/40 px-4 py-1.5 rounded-full text-verde-400 font-bold text-xs uppercase tracking-widest mb-4">
          <Sparkles className="w-4 h-4" /> SIMULADOR DE VOTO INTERACTIVO
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-4">
          ¿CÓMO VOTAR ESTE <span className="text-verde-400">DOMINGO 4 DE OCTUBRE</span>?
        </h2>

        <p className="text-gray-300 text-base sm:text-lg mb-10 max-w-2xl mx-auto">
          Prueba nuestro simulador digital. En la cédula oficial de votación, ubica el logo del <strong className="text-white">Partido Morado</strong> y marca con una cruz o escribe el número <strong className="text-verde-400">3</strong>.
        </p>

        {/* Digital Ballot Container */}
        <div className="bg-gradient-to-b from-morado-900 via-morado-950 to-black p-6 sm:p-10 rounded-3xl border-4 border-morado-600 shadow-[0_0_50px_rgba(109,40,217,0.4)] max-w-lg mx-auto space-y-6">
          
          <div className="bg-morado-950/80 px-4 py-2 rounded-xl border border-morado-700 text-xs font-bold text-purple-300 uppercase tracking-wider flex items-center justify-between">
            <span>CÉDULA ELECTORAL MUNICIPAL 2026</span>
            <span>VILLA EL SALVADOR</span>
          </div>

          {/* Interactive Ballot Card */}
          <div className="bg-white rounded-2xl p-6 text-gray-900 shadow-2xl border-4 border-gray-200 space-y-4">
            
            <div className="flex items-center justify-between">
              
              {/* Party Logo & Info */}
              <div className="flex items-center space-x-4 text-left">
                <div className="w-16 h-16 bg-morado-700 text-white font-black text-3xl rounded-xl flex items-center justify-center shadow-lg border-2 border-morado-900">
                  M
                </div>
                <div>
                  <h4 className="text-base sm:text-lg font-black text-morado-950 tracking-wider">
                    PARTIDO MORADO
                  </h4>
                  <p className="text-xs font-bold text-gray-600 uppercase">
                    ALCALDÍA VILLA EL SALVADOR
                  </p>
                </div>
              </div>

              {/* Voting Target Box */}
              <button
                onClick={handleVote}
                className={`relative w-20 h-20 rounded-2xl border-4 transition-all duration-300 flex items-center justify-center cursor-pointer ${
                  hasVoted
                    ? 'bg-verde-500 border-verde-600 shadow-[0_0_20px_rgba(34,197,94,0.6)] scale-105'
                    : 'bg-amber-50 border-morado-700 hover:bg-amber-100 hover:scale-105'
                }`}
                aria-label="Marcar el 3"
              >
                {hasVoted ? (
                  <div className="text-morado-950 text-center animate-bounce">
                    <span className="text-3xl font-black block leading-none">✓</span>
                    <span className="text-xs font-black uppercase">¡3!</span>
                  </div>
                ) : (
                  <div className="text-center text-morado-900">
                    <span className="text-4xl font-black block leading-none">3</span>
                    <span className="text-[10px] font-extrabold tracking-wider block text-morado-700">MARCA</span>
                  </div>
                )}
              </button>

            </div>

          </div>

          {/* Feedback Message */}
          {hasVoted ? (
            <div className="bg-verde-500/20 border border-verde-500/50 p-4 rounded-2xl text-verde-300 space-y-2 animate-fadeIn">
              <div className="flex items-center justify-center space-x-2 font-black text-lg text-white">
                <CheckCircle2 className="w-6 h-6 text-verde-400" />
                <span>¡EXCELENTE! HAS MARCADO EL 3 POR VILLA EL SALVADOR</span>
              </div>
              <p className="text-xs text-gray-200">
                Recuerda asistir a votar este <strong>Domingo 4 de Octubre de 2026</strong>.
              </p>
              <button
                onClick={() => setHasVoted(false)}
                className="inline-flex items-center space-x-1 text-xs font-extrabold text-verde-400 underline hover:text-white pt-2"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Simular de nuevo</span>
              </button>
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-purple-200 italic">
              👆 Haz clic en el recuadro amarillo de arriba para simular tu voto.
            </p>
          )}

        </div>

      </div>

    </section>
  );
}
