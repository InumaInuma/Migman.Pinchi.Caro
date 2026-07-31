'use client';

import React, { useState } from 'react';
import { CheckCircle2, Sparkles, RefreshCw } from 'lucide-react';

export default function SimuladorVoto() {
  const [votedDistrital, setVotedDistrital] = useState(false);
  const [votedProvincial, setVotedProvincial] = useState(false);

  const resetVotes = () => {
    setVotedDistrital(false);
    setVotedProvincial(false);
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

        <p className="text-gray-300 text-base sm:text-lg mb-8 max-w-2xl mx-auto">
          En las elecciones municipales debes <strong className="text-verde-400 font-black uppercase">MARCAR 2 VECES EL SÍMBOLO DEL PARTIDO MORADO</strong>: una vez en la Cédula Distrital (Villa El Salvador) y una vez en la Cédula Provincial (Lima).
        </p>

        {/* 2 Interactive Ballots (Distrital & Provincial) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-8">
          
          {/* Card 1: Distrital Villa El Salvador */}
          <div className="bg-gradient-to-b from-morado-900 via-morado-950 to-black p-6 rounded-3xl border-2 border-morado-600 shadow-xl space-y-4">
            <div className="bg-morado-950/80 px-3 py-1.5 rounded-xl border border-morado-700 text-xs font-black text-verde-400 uppercase tracking-wider">
              1. CÉDULA DISTRITAL (VILLA EL SALVADOR)
            </div>

            <div className="bg-white rounded-2xl p-5 text-gray-900 shadow-2xl border-4 border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-16 h-16 bg-white border-2 border-morado-700 rounded-xl p-1 flex items-center justify-center shadow">
                  <img
                    src="/partidomorado.png"
                    alt="Partido Morado Símbolo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-morado-950">PARTIDO MORADO</h4>
                  <p className="text-[11px] font-bold text-gray-600">ALCALDÍA DISTRITAL VES</p>
                </div>
              </div>

              <button
                onClick={() => setVotedDistrital(!votedDistrital)}
                className={`relative w-16 h-16 rounded-2xl border-4 transition-all flex items-center justify-center cursor-pointer ${
                  votedDistrital
                    ? 'bg-verde-500 border-verde-600 scale-105 shadow-[0_0_20px_rgba(34,197,94,0.6)]'
                    : 'bg-amber-50 border-morado-700 hover:bg-amber-100 hover:scale-105'
                }`}
                aria-label="Marcar Distrital"
              >
                {votedDistrital ? (
                  <span className="text-morado-950 font-black text-3xl animate-bounce">✓</span>
                ) : (
                  <span className="text-xs font-black text-morado-900 uppercase">MARCA</span>
                )}
              </button>
            </div>
            <p className="text-xs text-purple-200">
              {votedDistrital ? '✅ ¡Cédula Distrital Marcada!' : '👈 Toca la casilla para simular tu voto distrital'}
            </p>
          </div>

          {/* Card 2: Provincial Lima */}
          <div className="bg-gradient-to-b from-morado-900 via-morado-950 to-black p-6 rounded-3xl border-2 border-morado-600 shadow-xl space-y-4">
            <div className="bg-morado-950/80 px-3 py-1.5 rounded-xl border border-morado-700 text-xs font-black text-verde-400 uppercase tracking-wider">
              2. CÉDULA PROVINCIAL (LIMA METROPOLITANA)
            </div>

            <div className="bg-white rounded-2xl p-5 text-gray-900 shadow-2xl border-4 border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-3 text-left">
                <div className="w-16 h-16 bg-white border-2 border-morado-700 rounded-xl p-1 flex items-center justify-center shadow">
                  <img
                    src="/partidomorado.png"
                    alt="Partido Morado Símbolo"
                    className="h-12 w-auto object-contain"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-black text-morado-950">PARTIDO MORADO</h4>
                  <p className="text-[11px] font-bold text-gray-600">ALCALDÍA PROVINCIAL LIMA</p>
                </div>
              </div>

              <button
                onClick={() => setVotedProvincial(!votedProvincial)}
                className={`relative w-16 h-16 rounded-2xl border-4 transition-all flex items-center justify-center cursor-pointer ${
                  votedProvincial
                    ? 'bg-verde-500 border-verde-600 scale-105 shadow-[0_0_20px_rgba(34,197,94,0.6)]'
                    : 'bg-amber-50 border-morado-700 hover:bg-amber-100 hover:scale-105'
                }`}
                aria-label="Marcar Provincial"
              >
                {votedProvincial ? (
                  <span className="text-morado-950 font-black text-3xl animate-bounce">✓</span>
                ) : (
                  <span className="text-xs font-black text-morado-900 uppercase">MARCA</span>
                )}
              </button>
            </div>
            <p className="text-xs text-purple-200">
              {votedProvincial ? '✅ ¡Cédula Provincial Marcada!' : '👈 Toca la casilla para simular tu voto provincial'}
            </p>
          </div>

        </div>

        {/* Feedback Message */}
        {votedDistrital && votedProvincial ? (
          <div className="bg-verde-500/20 border border-verde-500/50 p-5 rounded-2xl text-verde-300 space-y-2 animate-fadeIn max-w-xl mx-auto">
            <div className="flex items-center justify-center space-x-2 font-black text-lg text-white">
              <CheckCircle2 className="w-6 h-6 text-verde-400" />
              <span>¡EXCELENTE! HAS MARCADO 2 VECES EL SÍMBOLO MORADO</span>
            </div>
            <p className="text-xs text-gray-200">
              Recuerda asistir a votar este <strong>Domingo 4 de Octubre de 2026</strong>.
            </p>
            <button
              onClick={resetVotes}
              className="inline-flex items-center space-x-1 text-xs font-extrabold text-verde-400 underline hover:text-white pt-2"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Simular de nuevo</span>
            </button>
          </div>
        ) : (
          <p className="text-xs sm:text-sm text-purple-200 italic">
            👆 Toca las casillas en ambas cédulas para completar la simulación de voto doble (Distrital y Provincial).
          </p>
        )}

      </div>

    </section>
  );
}
