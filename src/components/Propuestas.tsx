'use client';

import React, { useState } from 'react';
import { Shield, Truck, Trees, Waves, Music, Accessibility, Heart, X, Check, ArrowRight } from 'lucide-react';

interface Proposal {
  id: string;
  numero: string;
  categoria: string;
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
      id: 'seguridad-ciudadana',
      numero: '1',
      categoria: 'SEGURIDAD CIUDADANA',
      titulo: 'TOLERANCIA CERO A LA DELINCUENCIA.',
      resumen: 'Mano firme, tecnología y patrullaje estratégico para devolverle la tranquilidad a nuestras familias.',
      icono: Shield,
      detalles: [
        'Centro de monitoreo con cámaras de alta tecnología con personal capacitado.',
        'Articulación entre serenazgo, PNP y juntas vecinales.',
        'Iluminación LED total en zonas críticas.',
        'Tecnología predictiva: alertas antes del delito.',
        'App vecinal / botón de pánico conectado al centro.',
        'Monitoreo por zonas críticas y horarios de mayor incidencia.'
      ],
      meta: 'Implementar el Centro de Monitoreo Inteligente con cámaras de última generación y patrullaje integrado.'
    },
    {
      id: 'limpieza-publica',
      numero: '2',
      categoria: 'LIMPIEZA PÚBLICA',
      titulo: '¡BASTA DE CALLES SUCIAS!',
      resumen: 'Recuperemos el orden y la higiene con un servicio moderno y eficiente.',
      icono: Truck,
      detalles: [
        'Rutas de recolección optimizadas y horarios estrictos.',
        'Puntos ecológicos y multas drásticas a los que ensucian la ciudad.',
        'Modernización progresiva de la flota de camiones.'
      ],
      meta: 'Establecer rutas fijas ecológicas y renovar la flota para lograr un distrito libre de residuos.'
    },
    {
      id: 'espacios-publicos',
      numero: '3',
      categoria: 'RECUPERACIÓN DE ESPACIOS PÚBLICOS',
      titulo: 'DEVOLVEMOS LOS ESPACIOS PÚBLICOS A LAS FAMILIAS.',
      resumen: 'Recuperación y embellecimiento de parques, losas deportivas y áreas comunes para el sano esparcimiento.',
      icono: Trees,
      detalles: [
        'Intervención de parques y áreas abandonadas.',
        'Juegos infantiles, losas deportivas iluminadas y zonas de descanso.',
        'Recuperación de espacios tomados por la informalidad y el desorden.'
      ],
      meta: 'Iluminar y recuperar el 100% de los parques y complejos recreativos del distrito.'
    },
    {
      id: 'alcantarillado-saneamiento',
      numero: '4',
      categoria: 'ALCANTARILLADO Y SANEAMIENTO',
      titulo: 'DRENAJES QUE FUNCIONAN, CALLES SIN INUNDACIONES.',
      resumen: 'Infraestructura hidráulica moderna para prevenir inundaciones y garantizar un saneamiento digno.',
      icono: Waves,
      detalles: [
        'Creación de puntos de alivio y sumideros de alta capacidad en zonas críticas.',
        'Sistemas de drenaje pluvial focalizado para evacuar el agua en tiempo récord.'
      ],
      meta: 'Construir sumideros de alta capacidad y sistemas pluviales en zonas críticas vulnerables.'
    },
    {
      id: 'deporte-cultura',
      numero: '5',
      categoria: 'DEPORTE Y CULTURA PARA LOS JÓVENES',
      titulo: 'MENOS VIOLENCIA, MÁS DEPORTE Y CULTURA.',
      resumen: 'Talleres artísticos, escuelas deportivas y centros culturales para potenciar el talento de nuestra juventud.',
      icono: Music,
      detalles: [
        'Escuelas deportivas y talleres artísticos gratuitos en cada sector.',
        'Torneos interbarrios con premios para jóvenes talentos.',
        'Centros culturales y espacios para el arte urbano, música y el palacio de la juventud.'
      ],
      meta: 'Crear escuelas gratuitas de arte y deporte para alejar a la juventud de la delincuencia.'
    },
    {
      id: 'inclusion-habilidades-especiales',
      numero: '6',
      categoria: 'INCLUSIÓN PARA PERSONAS CON HABILIDADES ESPECIALES',
      titulo: 'UNA GESTIÓN SIN BARRERAS.',
      resumen: 'Garantizar accesibilidad universal, programas de apoyo especializado y fomento del emprendimiento inclusivo.',
      icono: Accessibility,
      detalles: [
        'Rampas de acceso, señalización podotáctil y espacios 100% accesibles.',
        'Programas de apoyo, capacitación y fomento del emprendimiento.',
        'Oficina municipal especializada para la defensa de sus derechos.'
      ],
      meta: 'Garantizar rampas de accesibilidad y una oficina municipal de protección y capacitación.'
    },
    {
      id: 'bienestar-animal',
      numero: '7',
      categoria: 'BIENESTAR Y CONTROL DE LA POBLACIÓN ANIMAL',
      titulo: 'SALUD Y RESPETO PARA NUESTROS ANIMALES.',
      resumen: 'Cuidado animal mediante clínicas veterinarias móviles, registro único de mascotas y lucha contra el maltrato.',
      icono: Heart,
      detalles: [
        'Veterinaria móvil que llegará a cada sector.',
        'Registro único de mascotas para una tenencia responsable.',
        'Unidad de control y sanción contra el maltrato y abandono animal.'
      ],
      meta: 'Poner en funcionamiento el registro único de mascotas y la red de veterinaria móvil municipal.'
    }
  ];

  return (
    <section id="propuestas" className="py-20 bg-morado-950/80 relative">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-block bg-verde-500/20 text-verde-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider border border-verde-500/40">
            COMPROMISO CON NUESTRO DISTRITO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            NUESTRAS <span className="text-verde-400">PROPUESTAS</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Haz clic en <strong className="text-white">&quot;Ver más&quot;</strong> en cada propuesta para conocer las acciones concretas de nuestra gestión.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 justify-center">
          {propuestas.map((prop, idx) => {
            const Icon = prop.icono;
            const isLast = idx === propuestas.length - 1;
            return (
              <div
                key={prop.id}
                className={`bg-white rounded-3xl p-6 sm:p-8 text-morado-950 shadow-xl border-2 border-transparent hover:border-verde-500 transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between ${
                  isLast ? 'md:col-span-2 lg:col-span-1 lg:col-start-2' : ''
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <span className="text-5xl font-black text-morado-950/20 select-none leading-none">
                        {prop.numero}
                      </span>
                      <div className="text-left">
                        <span className="block text-[10px] font-extrabold tracking-widest text-morado-500 uppercase leading-none mb-1">
                          PROPUESTA
                        </span>
                        <span className="block text-xs font-black tracking-wider text-morado-950 uppercase leading-tight max-w-[150px] sm:max-w-none">
                          {prop.categoria}
                        </span>
                      </div>
                    </div>
                    <div className="w-12 h-12 bg-morado-900 text-verde-400 rounded-2xl flex items-center justify-center shadow-md flex-shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-lg sm:text-xl font-black text-morado-950 uppercase leading-snug pt-2">
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

            <div className="flex items-start space-x-4">
              <div className="w-14 h-14 bg-verde-500 text-morado-950 rounded-2xl flex items-center justify-center font-black flex-shrink-0 shadow-lg">
                {React.createElement(selectedProposal.icono, { className: 'w-7 h-7' })}
              </div>
              <div>
                <span className="text-xs font-extrabold text-verde-400 uppercase tracking-widest block mb-1">
                  PROPUESTA N°{selectedProposal.numero} - {selectedProposal.categoria}
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase leading-tight">
                  {selectedProposal.titulo}
                </h3>
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
