'use client';

import React, { useState } from 'react';
import { Shield, Construction, Trash2, GraduationCap, Stethoscope, Users, X, Check, ArrowRight } from 'lucide-react';

interface Proposal {
  id: string;
  titulo: string;
  resumen: string;
  icono: any;
  detalles: string[];
  meta: string;
}

export default function Propuestas() {
  const [selectedProposal, setSelectedProposal] = useState<Proposal | null>(null);

  const propuestas: Proposal[] = [
    {
      id: 'villa-segura',
      titulo: 'Villa Segura',
      resumen: 'Más patrullaje, cámaras de seguridad inteligentes y serenazgo capacitado 24/7.',
      icono: Shield,
      detalles: [
        'Central de Monitoreo Inteligente con IA para detección inmediata de delitos.',
        'Triplicación del patrullaje de serenazgo en los 9 sectores de VES.',
        'Módulos de auxilio rápido en paraderos de alto tránsito.',
        'Integración con la PNP y juntas vecinales de seguridad.'
      ],
      meta: 'Disminuir la delincuencia en un 45% en los primeros 12 meses.'
    },
    {
      id: 'pistas-veredas',
      titulo: 'Pistas y Veredas',
      resumen: 'Calles ordenadas, recapeo de avenidas principales y veredas accesibles.',
      icono: Construction,
      detalles: [
        'Pavimentación integral de zonas pendientes en los sectores altos.',
        'Plan de recapeo asfáltico en Av. Revolución, Av. Central y Av. Pastor Sevilla.',
        'Alumbrado público LED en zonas de mayor vulnerabilidad.',
        'Veredas inclusivas con rampas para personas con movilidad reducida.'
      ],
      meta: '100% de avenidas principales reasfaltadas e iluminadas.'
    },
    {
      id: 'ciudad-limpia',
      titulo: 'Ciudad Limpia',
      resumen: 'Más limpieza pública, recojo nocturno eficiente y cultura de reciclaje.',
      icono: Trash2,
      detalles: [
        'Nueva flota de camiones compactadores eco-amigables.',
        'Horarios fijos de recojo de basura en cada sector para evitar acumulación.',
        'Instalación de contenedores soterrados y puntos limpios de reciclaje.',
        'Arbolización y recuperación de parques abandonados.'
      ],
      meta: 'Cero acumulaciones de basura en vía pública.'
    },
    {
      id: 'educacion-juventud',
      titulo: 'Educación y Juventud',
      resumen: 'Más oportunidades, becas de estudio y talleres de emprendimiento.',
      icono: GraduationCap,
      detalles: [
        'Creación de la Academia Pre-Municipal Gratuita para jóvenes de VES.',
        'Becas técnicas en alianza con institutos y universidades destacadas.',
        'Centros de Innovación Digital y Co-working juvenil municipal.',
        'Talleres deportivos y culturales gratuitos en todas las zonas.'
      ],
      meta: 'Beneficiar a más de 10,000 jóvenes con capacitación gratuita.'
    },
    {
      id: 'salud-para-todos',
      titulo: 'Salud para Todos',
      resumen: 'Mejores puestos de salud, atención primaria 24/7 y clínicas móviles.',
      icono: Stethoscope,
      detalles: [
        'Ambulancias municipales equipadas listas para emergencias 24 horas.',
        'Campañas semanales de salud gratuita (medicina general, odontología, pediatría).',
        'Farmacia municipal con medicamentos a precio costo.',
        'Programa especial de prevención de la anemia y nutrición infantil.'
      ],
      meta: 'Atención médica directa para 50,000 familias de Villa El Salvador.'
    },
    {
      id: 'participacion-vecinal',
      titulo: 'Participación Vecinal',
      resumen: 'Vecinos escuchados, presupuesto participativo real y decisiones transparentes.',
      icono: Users,
      detalles: [
        'Audiencias públicas descentralizadas cada 3 meses en los sectores.',
        'App Municipal "VES Transparente" para reportar obras y fiscalizar gastos.',
        'Presupuesto Participativo ejecutado al 100% según prioridad vecinal.',
        'Empoderamiento de las dirigencias y juntas directivas de grupos residenciales.'
      ],
      meta: 'Transparencia absoluta en la ejecución del presupuesto municipal.'
    }
  ];

  return (
    <section id="propuestas" className="py-20 bg-morado-950/80 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-verde-500/20 text-verde-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider border border-verde-500/40">
            COMPROMISO CON VILLA EL SALVADOR
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            PROPUESTAS <span className="text-verde-400">PRINCIPALES</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Haz clic en <strong className="text-white">&quot;Ver más&quot;</strong> en cada propuesta para conocer las acciones concretas de nuestra gestión.
          </p>
        </div>

        {/* 6 Proposals Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {propuestas.map((prop) => {
            const Icon = prop.icono;
            return (
              <div
                key={prop.id}
                className="bg-white rounded-3xl p-6 sm:p-8 text-morado-950 shadow-xl border-2 border-transparent hover:border-verde-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Badge */}
                  <div className="w-14 h-14 bg-morado-900 text-verde-400 rounded-2xl flex items-center justify-center shadow-md">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-2xl font-black text-morado-950">
                    {prop.titulo}
                  </h3>

                  <p className="text-gray-600 text-sm font-medium leading-relaxed">
                    {prop.resumen}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100">
                  <button
                    onClick={() => setSelectedProposal(prop)}
                    className="w-full py-3 px-4 bg-verde-500 hover:bg-verde-600 text-morado-950 font-black rounded-xl text-sm uppercase tracking-wider flex items-center justify-center space-x-2 transition-colors shadow-md"
                  >
                    <span>VER MÁS</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Proposal Details Modal */}
      {selectedProposal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-xl bg-morado-900 border-2 border-verde-400 rounded-3xl p-6 sm:p-8 text-white shadow-2xl space-y-6 max-h-[90vh] overflow-y-auto">
            
            <button
              onClick={() => setSelectedProposal(null)}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white rounded-full bg-morado-800"
              aria-label="Cerrar"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-verde-500 text-morado-950 rounded-2xl flex items-center justify-center font-black">
                {React.createElement(selectedProposal.icono, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs font-bold text-verde-400 uppercase tracking-widest">PROPUESTA DE GOBIERNO</span>
                <h3 className="text-2xl sm:text-3xl font-black text-white">{selectedProposal.titulo}</h3>
              </div>
            </div>

            <p className="text-gray-200 text-base leading-relaxed">
              {selectedProposal.resumen}
            </p>

            <div className="space-y-3 bg-morado-950/80 p-5 rounded-2xl border border-morado-700">
              <h4 className="text-sm font-extrabold text-verde-400 uppercase tracking-wider">Acciones Concretas:</h4>
              <ul className="space-y-2.5">
                {selectedProposal.detalles.map((detalle, idx) => (
                  <li key={idx} className="flex items-start space-x-3 text-sm text-gray-200">
                    <Check className="w-5 h-5 text-verde-400 flex-shrink-0 mt-0.5" />
                    <span>{detalle}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-verde-500/10 border border-verde-500/30 p-4 rounded-xl text-xs sm:text-sm text-verde-300 font-semibold">
              🎯 <strong>Meta de Gestión:</strong> {selectedProposal.meta}
            </div>

            <button
              onClick={() => setSelectedProposal(null)}
              className="w-full py-3 bg-verde-500 hover:bg-verde-600 text-morado-950 font-black rounded-xl uppercase tracking-wider shadow-lg"
            >
              CERRAR DETALLES
            </button>

          </div>
        </div>
      )}

    </section>
  );
}
