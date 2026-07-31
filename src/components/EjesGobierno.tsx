'use client';

import React from 'react';
import { HeartPulse, ShieldAlert, Leaf } from 'lucide-react';

export default function EjesGobierno() {
  const ejes = [
    {
      numero: '1',
      titulo: 'SALUD DIGNA E INCLUSIÓN PARA TODOS',
      descripcion: 'Ampliación de atención médica descentralizada, medicamentos accesibles y programas inclusivos para adultos mayores y personas con discapacidad.',
      icono: HeartPulse,
      gradient: 'from-purple-900 via-morado-900 to-morado-950',
      border: 'border-purple-500/50'
    },
    {
      numero: '2',
      titulo: 'SEGURIDAD, INNOVACIÓN Y CONVIVENCIA',
      descripcion: 'Integración tecnológica para la vigilancia en tiempo real, iluminación LED en todos los sectores y patrullaje integrado vecinal.',
      icono: ShieldAlert,
      gradient: 'from-morado-900 via-morado-800 to-morado-950',
      border: 'border-verde-500/50'
    },
    {
      numero: '3',
      titulo: 'TRANSPARENCIA Y SOSTENIBILIDAD',
      descripcion: 'Gestión municipal de puertas abiertas con auditorías en vivo, recojo inteligente de residuos y creación de nuevas áreas verdes.',
      icono: Leaf,
      gradient: 'from-purple-950 via-morado-900 to-morado-950',
      border: 'border-verde-400/50'
    }
  ];

  return (
    <section id="ejes" className="py-20 bg-morado-dark relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-verde-500/10 border border-verde-500/30 px-4 py-1.5 rounded-full text-verde-400 font-bold text-xs uppercase tracking-widest">
            PLAN ESTRATÉGICO 2026 - 2030
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight uppercase">
            MIS <span className="text-verde-400">3 EJES DE GOBIERNO</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Pilares fundamentales para transformar Villa El Salvador en un distrito seguro, moderno e inclusivo.
          </p>
        </div>

        {/* 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ejes.map((eje) => {
            const Icon = eje.icono;
            return (
              <div
                key={eje.numero}
                className={`relative bg-gradient-to-b ${eje.gradient} rounded-3xl p-8 border ${eje.border} shadow-2xl glass-card-hover group flex flex-col justify-between`}
              >
                <div>
                  {/* Top Badge with Icon & Number */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 bg-morado-700/80 border border-verde-400/50 rounded-2xl flex items-center justify-center text-verde-400 group-hover:scale-110 group-hover:bg-verde-500 group-hover:text-morado-950 transition-all duration-300 shadow-lg">
                      <Icon className="w-8 h-8" />
                    </div>
                    <span className="text-4xl font-black text-white/20 group-hover:text-verde-400/40 transition-colors">
                      0{eje.numero}
                    </span>
                  </div>

                  <h3 className="text-xl font-black text-white mb-4 leading-snug group-hover:text-verde-400 transition-colors">
                    {eje.titulo}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {eje.descripcion}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-morado-700/40 flex items-center justify-between text-xs font-bold text-verde-400 uppercase tracking-wider">
                  <span>EJE DE GOBIERNO #0{eje.numero}</span>
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>

    </section>
  );
}
