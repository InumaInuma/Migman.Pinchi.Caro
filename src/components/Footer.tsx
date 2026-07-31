'use client';

import React from 'react';
import { Calendar, Vote } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12 border-t border-morado-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-gray-800">
          
          {/* Brand */}
          <div className="flex items-center space-x-3 text-center md:text-left">
            <div className="w-12 h-12 bg-morado-700 text-white font-black text-2xl rounded-2xl flex items-center justify-center shadow-lg">
              M
            </div>
            <div>
              <span className="block text-xs font-black text-verde-400 uppercase tracking-widest">
                PARTIDO MORADO
              </span>
              <span className="block text-lg font-black text-white">
                VILLA EL SALVADOR 2026
              </span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-morado-900/80 hover:bg-verde-500 hover:text-morado-950 text-white rounded-full flex items-center justify-center font-bold transition-all"
              aria-label="Facebook"
            >
              FB
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-morado-900/80 hover:bg-verde-500 hover:text-morado-950 text-white rounded-full flex items-center justify-center font-bold transition-all"
              aria-label="Instagram"
            >
              IG
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-morado-900/80 hover:bg-verde-500 hover:text-morado-950 text-white rounded-full flex items-center justify-center font-bold transition-all"
              aria-label="TikTok"
            >
              TK
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-morado-900/80 hover:bg-verde-500 hover:text-morado-950 text-white rounded-full flex items-center justify-center font-bold transition-all"
              aria-label="YouTube"
            >
              YT
            </a>
          </div>

        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4 text-center sm:text-left">
          <p>© 2026 Campaña Municipal Villa El Salvador. Todos los derechos reservados.</p>
          <div className="flex items-center space-x-2 text-verde-400 font-bold uppercase tracking-wider">
            <Calendar className="w-4 h-4" />
            <span>ELECCIONES: DOMINGO 4 DE OCTUBRE DE 2026</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
