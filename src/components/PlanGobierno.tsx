'use client';

import React from 'react';
import { FileText, Download, Eye, CheckCircle } from 'lucide-react';

export default function PlanGobierno() {
  return (
    <section id="plan-gobierno" className="py-20 bg-morado-dark relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="bg-gradient-to-r from-morado-950 via-morado-900 to-morado-950 rounded-3xl p-8 sm:p-12 border-2 border-verde-500/40 shadow-2xl relative overflow-hidden">
          
          {/* Background Decorative Element */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-verde-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-8 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center space-x-2 bg-verde-500/20 border border-verde-500/40 px-4 py-1.5 rounded-full text-verde-400 font-bold text-xs uppercase tracking-widest">
                <FileText className="w-4 h-4" /> DOCUMENTO OFICIAL REGISTRADO
              </div>

              <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                PLAN DE GOBIERNO <br />
                <span className="text-verde-400">VILLA EL SALVADOR 2026 - 2030</span>
              </h2>

              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Transparencia total con nuestros vecinos. Descarga el documento oficial en formato PDF con todas las propuestas técnicas, presupuesto estimado e indicadores de gestión.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-gray-200 pt-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-verde-400 flex-shrink-0" />
                  <span>Diagnóstico integral de Villa El Salvador</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-verde-400 flex-shrink-0" />
                  <span>Presupuestos y viabilidad técnica</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-verde-400 flex-shrink-0" />
                  <span>Plazos de ejecución por sector</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-verde-400 flex-shrink-0" />
                  <span>Compromiso ético anticorrupción</span>
                </div>
              </div>

            </div>

            <div className="lg:col-span-4 flex flex-col items-center justify-center space-y-4">
              
              <div className="w-24 h-24 bg-morado-800/90 border-2 border-verde-400 rounded-3xl flex items-center justify-center text-verde-400 shadow-xl">
                <FileText className="w-12 h-12" />
              </div>

              <a
                href="/plan-de-gobierno.pdf"
                download="Plan_de_Gobierno_Villa_El_Salvador_2026.pdf"
                className="w-full py-4 px-6 bg-gradient-to-r from-verde-500 to-verde-600 hover:from-verde-600 hover:to-verde-700 text-morado-950 font-black rounded-2xl text-center text-base uppercase tracking-wider shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all hover:scale-105 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>DESCARGAR PLAN (PDF)</span>
              </a>

              <a
                href="/plan-de-gobierno.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-xs font-bold text-gray-300 hover:text-verde-400 underline"
              >
                <Eye className="w-4 h-4" />
                <span>Ver en línea sin descargar</span>
              </a>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
