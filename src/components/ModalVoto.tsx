'use client';

import React, { useState, useEffect } from 'react';
import { Calendar, Sparkles, X, Vote } from 'lucide-react';

export default function ModalVoto() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
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
            ESTE <span className="text-verde-400 underline decoration-verde-500 decoration-4">DOMINGO 04 DE OCTUBRE</span>
          </h2>

          <p className="text-sm font-extrabold text-purple-200 uppercase tracking-wide">
            MARCA CON UNA <span className="text-verde-400 text-lg font-black bg-morado-800 px-2 py-0.5 rounded">X</span> EL SÍMBOLO DEL PARTIDO MORADO
          </p>

          {/* Interactive Ballot Card Visual matching Image 2 */}
          <div className="bg-morado-950/90 border-2 border-dashed border-verde-400/80 rounded-2xl p-5 relative shadow-inner space-y-3">
            <div className="text-xs text-purple-300 font-bold uppercase tracking-wider flex justify-between">
              <span>CÉDULA ELECTORAL</span>
              <span className="text-verde-400 font-black">PROVINCIAL Y DISTRITAL</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              
              {/* Box 1: Provincial */}
              <div className="bg-white rounded-xl p-3 border-2 border-morado-700 flex flex-col items-center space-y-2">
                <span className="text-[10px] font-black text-morado-900 uppercase">PROVINCIAL</span>
                <div className="relative w-20 h-20 bg-white border-2 border-morado-800 rounded-xl p-1 flex items-center justify-center">
                  <img
                    src="/partidomorado.png"
                    alt="Partido Morado Símbolo"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-morado-950 font-black text-5xl leading-none select-none opacity-90">
                      ✕
                    </span>
                  </div>
                </div>
              </div>

              {/* Box 2: Distrital */}
              <div className="bg-white rounded-xl p-3 border-2 border-morado-700 flex flex-col items-center space-y-2">
                <span className="text-[10px] font-black text-morado-900 uppercase">DISTRITAL</span>
                <div className="relative w-20 h-20 bg-white border-2 border-morado-800 rounded-xl p-1 flex items-center justify-center">
                  <img
                    src="/partidomorado.png"
                    alt="Partido Morado Símbolo"
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-morado-950 font-black text-5xl leading-none select-none opacity-90">
                      ✕
                    </span>
                  </div>
                </div>
              </div>

            </div>

            <p className="text-xs text-purple-200 font-semibold pt-1">
              En las dos cédulas (Distrital para VES y Provincial para Lima), <strong className="text-verde-400 font-extrabold">MARCA LA X SOBRE EL SÍMBOLO MORADO</strong>.
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
