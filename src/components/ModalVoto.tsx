'use client';

import React, { useState, useEffect } from 'react';
import { CheckCircle, Calendar, Sparkles, X, Vote } from 'lucide-react';

export default function ModalVoto() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show modal on load unless user dismissed it in current session
    const dismissed = sessionStorage.getItem('voto_modal_dismissed');
    if (!dismissed) {
      setIsOpen(true);
    }
  }, []);

  const handleClose = () => {
    sessionStorage.setItem('voto_modal_dismissed', 'true');
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-lg bg-gradient-to-b from-morado-900 via-morado-950 to-black rounded-3xl border-2 border-verde-500/60 shadow-[0_0_50px_rgba(34,197,94,0.3)] overflow-hidden">
        
        {/* Top Header Badge */}
        <div className="bg-gradient-to-r from-morado-700 via-verde-600 to-morado-700 px-6 py-3 text-center flex items-center justify-between">
          <div className="flex items-center space-x-2 text-white font-bold text-sm sm:text-base">
            <Calendar className="w-5 h-5 text-verde-400 animate-bounce" />
            <span>RECORDATORIO ELECTORAL 2026</span>
          </div>
          <button 
            onClick={handleClose}
            className="text-white/80 hover:text-white p-1 rounded-full hover:bg-white/10 transition"
            aria-label="Cerrar modal"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 text-center space-y-6">
          
          <div className="inline-flex items-center gap-2 bg-verde-500/20 border border-verde-500/40 text-verde-400 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-4 h-4" /> Elecciones Municipales Villa El Salvador
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white leading-tight">
            ESTE <span className="text-verde-400 underline decoration-verde-500 decoration-4">DOMINGO 4 DE OCTUBRE</span>
          </h2>

          {/* Interactive Ballot Card Visual */}
          <div className="bg-morado-950/90 border-2 border-dashed border-verde-400/80 rounded-2xl p-5 relative shadow-inner">
            <div className="text-xs text-purple-300 font-semibold mb-2 uppercase tracking-wide">
              Cédula de Votación Municipal
            </div>
            
            <div className="flex items-center justify-between bg-white text-gray-900 rounded-xl p-4 shadow-lg border border-purple-200">
              <div className="flex items-center space-x-3 text-left">
                {/* Logo Marca / Partido */}
                <div className="w-12 h-12 bg-morado-700 rounded-lg flex items-center justify-center font-black text-white text-2xl shadow">
                  M
                </div>
                <div>
                  <span className="block text-xs font-extrabold text-morado-800 uppercase tracking-wider">
                    PARTIDO MORADO
                  </span>
                  <span className="block text-sm font-bold text-gray-700">
                    VILLA EL SALVADOR
                  </span>
                </div>
              </div>

              {/* The "3" Voting Box */}
              <div className="relative bg-amber-100 border-4 border-morado-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-md">
                <span className="text-3xl font-black text-morado-900">3</span>
                {/* Checkmark overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-verde-600/90 rounded-lg text-white font-extrabold text-2xl animate-pulse">
                  ✓ 3
                </div>
              </div>
            </div>

            <p className="mt-3 text-xs sm:text-sm text-purple-200 font-medium">
              ¡Busca el símbolo del <strong className="text-white font-bold">Partido Morado</strong> y <strong className="text-verde-400 font-bold">MARCA EL 3</strong>!
            </p>
          </div>

          <p className="text-sm text-gray-300">
            Con tu voto recuperaremos Villa El Salvador con <span className="text-verde-400 font-semibold">Orden, Seguridad y Transparencia</span>.
          </p>

          {/* Close Action Button */}
          <button
            onClick={handleClose}
            className="w-full py-4 px-6 bg-gradient-to-r from-verde-500 to-verde-600 hover:from-verde-600 hover:to-verde-700 text-morado-950 font-black text-base sm:text-lg rounded-2xl shadow-[0_0_25px_rgba(34,197,94,0.5)] transition-all transform hover:scale-[1.02] active:scale-95 flex items-center justify-center space-x-2"
          >
            <Vote className="w-6 h-6 text-morado-950" />
            <span>¡ENTENDIDO! VER PLAN DE GOBIERNO</span>
          </button>
        </div>

      </div>
    </div>
  );
}
