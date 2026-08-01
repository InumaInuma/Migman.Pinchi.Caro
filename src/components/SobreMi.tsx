'use client';

import React, { useState } from 'react';
import { UserCheck, GraduationCap, Briefcase, Linkedin, ExternalLink, MapPin, Quote, Sparkles, Train, ShieldCheck, HeartHandshake, Award, ChevronRight } from 'lucide-react';

export default function SobreMi() {
  const [activeTab, setActiveTab] = useState<'historia' | 'educacion' | 'experiencia'>('historia');

  const educacion = [
    {
      titulo: 'Maestría en Sistemas Ferroviarios (Magíster)',
      institucion: 'TECH Universidad',
      periodo: '2022 - 2023',
      destaque: 'Posgrado Especializado de Alto Nivel',
      icono: Train
    },
    {
      titulo: 'Lic. en Administración de Empresas (Licenciado)',
      institucion: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      periodo: '2018 - 2021',
      destaque: 'Grado Profesional & Orden de Mérito',
      icono: GraduationCap
    },
    {
      titulo: 'Storytelling y Presentaciones Efectivas',
      institucion: 'UPC Escuela de Postgrado (EPG)',
      periodo: '2022',
      destaque: 'Especialización Ejecutiva',
      icono: Award
    },
    {
      titulo: 'Titulado en Administración Bancaria',
      institucion: 'IFB CERTUS',
      periodo: '2010 - 2013',
      destaque: 'Título Técnico Profesional',
      icono: Briefcase
    }
  ];

  const experiencia = [
    {
      cargo: 'Instructor de Capacitación Técnica',
      empresa: 'Línea 1 Metro de Lima (UNNA Infraestructura)',
      periodo: '2022 - Actualidad',
      descripcion: 'Formación y capacitación del personal operativo y técnico ferroviario.'
    },
    {
      cargo: 'Inspector de Transporte Ferroviario',
      empresa: 'Línea 1 Metro de Lima',
      periodo: '2021 - 2022',
      descripcion: 'Supervisión y control de estándares de seguridad operacional en estaciones.'
    },
    {
      cargo: 'Conductor de Tren UME (Full Time)',
      empresa: 'Línea 1 Metro de Lima',
      periodo: '2014 - 2020',
      descripcion: 'Operación directa de unidades eléctricas trasladando a miles de pasajeros diariamente.'
    },
    {
      cargo: 'Administrador Junior de Estación & Cajero',
      empresa: 'Línea 1 Metro de Lima',
      periodo: '2012 - 2014',
      descripcion: 'Atención al usuario, gestión de recaudación y liderazgo de equipos de estación.'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-b from-morado-950 via-morado-dark to-morado-950 relative border-t border-morado-800">
      
      {/* Background Decorative Lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-morado-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-verde-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 bg-verde-500/20 text-verde-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-widest border border-verde-500/40 shadow-sm">
            <UserCheck className="w-4 h-4" /> CONOCE A TU PRÓXIMO ALCALDE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            SOBRE <span className="text-verde-400 drop-shadow-[0_0_15px_rgba(34,197,94,0.3)]">MIGMAN PINCHI CARO</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Integridad, esfuerzo y 14+ años de gestión eficiente para construir un Villa El Salvador con futuro.
          </p>
        </div>

        {/* Hero Card Profile + Top Quote Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Photo & Social Card */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="bg-gradient-to-b from-morado-900 via-morado-950 to-black p-6 rounded-3xl border-2 border-verde-500/40 shadow-2xl space-y-6 h-full flex flex-col justify-between">
              
              <div className="space-y-4">
                <div className="relative rounded-2xl overflow-hidden border-2 border-morado-600 shadow-xl group">
                  <img
                    src="/imagenCandidato.jpeg"
                    alt="Migman Pinchi Caro"
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-morado-900/90 text-verde-400 text-xs font-black px-3 py-1.5 rounded-full border border-verde-400/50 flex items-center gap-1.5 shadow">
                    <MapPin className="w-3.5 h-3.5" /> Villa El Salvador
                  </div>
                </div>

                <div className="text-center space-y-1">
                  <h3 className="text-2xl font-black text-white">Migman Pinchi Caro</h3>
                  <div className="inline-block bg-verde-500/20 text-verde-300 font-extrabold text-xs px-3 py-1 rounded-full border border-verde-500/30 uppercase tracking-wider">
                    Lic. en Administración • Magíster en Sistemas Ferroviarios
                  </div>
                </div>
              </div>

              {/* LinkedIn & Social CTA */}
              <div className="pt-2">
                <a
                  href="https://www.linkedin.com/in/migman-pinchi-caro-168541194/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center space-x-2 bg-[#0A66C2] hover:bg-[#084e96] text-white py-3.5 px-4 rounded-2xl font-black text-xs uppercase tracking-wider shadow-lg transition-all hover:scale-[1.02]"
                >
                  <Linkedin className="w-4 h-4 fill-current" />
                  <span>VER PERFIL EN LINKEDIN</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right: Featured Quote Card */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="bg-gradient-to-br from-morado-900/90 via-morado-950 to-morado-900/90 border-2 border-morado-700/80 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden flex flex-col justify-between space-y-6">
              
              <div className="absolute top-4 right-4 text-verde-400/10 pointer-events-none">
                <Quote className="w-32 h-32" />
              </div>

              <div className="space-y-4 relative z-10">
                <div className="inline-flex items-center space-x-2 text-verde-400 text-xs font-black uppercase tracking-widest bg-verde-500/10 px-3 py-1 rounded-full border border-verde-500/30">
                  <Sparkles className="w-3.5 h-3.5" /> PRINCIPIO FUNDAMENTAL
                </div>

                <blockquote className="text-2xl sm:text-3xl font-black text-white leading-snug">
                  &quot;El cambio se construye <span className="text-verde-400 underline decoration-verde-500 decoration-4">con hechos</span>, no solo con palabras&quot;
                </blockquote>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  Soy Migman, nací en Iquitos, crecí en el distrito de Tres Unidos (San Martín) y desde los 16 años vivo en Lima. Aprendí el valor del esfuerzo y la integridad <strong className="text-white">jamás dejándome corromper</strong>.
                </p>
              </div>

              {/* Quick Feature Badges */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2 relative z-10">
                <div className="bg-morado-950/80 border border-morado-800 p-3 rounded-2xl text-center space-y-1">
                  <span className="block text-xs font-black text-verde-400 uppercase">14+ AÑOS</span>
                  <span className="block text-[11px] text-gray-300 font-medium">Línea 1 Metro Lima</span>
                </div>
                <div className="bg-morado-950/80 border border-morado-800 p-3 rounded-2xl text-center space-y-1">
                  <span className="block text-xs font-black text-verde-400 uppercase">LICENCIADO</span>
                  <span className="block text-[11px] text-gray-300 font-medium">Administración (UPC)</span>
                </div>
                <div className="col-span-2 sm:col-span-1 bg-morado-950/80 border border-morado-800 p-3 rounded-2xl text-center space-y-1">
                  <span className="block text-xs font-black text-verde-400 uppercase">MAGÍSTER</span>
                  <span className="block text-[11px] text-gray-300 font-medium">Sistemas Ferroviarios</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Interactive Navigation Tabs for Story / Education / Experience */}
        <div className="flex justify-center border-b border-morado-800/80 pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 bg-morado-950/90 p-2 rounded-2xl border border-morado-700/60 shadow-lg w-full max-w-3xl">
            <button
              onClick={() => setActiveTab('historia')}
              className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm transition-all uppercase tracking-wider flex items-center justify-center space-x-2 text-center ${
                activeTab === 'historia'
                  ? 'bg-verde-500 text-morado-950 shadow-md scale-[1.02]'
                  : 'text-gray-300 hover:text-white hover:bg-morado-900'
              }`}
            >
              <HeartHandshake className="w-4 h-4 flex-shrink-0" />
              <span>MI HISTORIA Y VALORES</span>
            </button>

            <button
              onClick={() => setActiveTab('educacion')}
              className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm transition-all uppercase tracking-wider flex items-center justify-center space-x-2 text-center ${
                activeTab === 'educacion'
                  ? 'bg-verde-500 text-morado-950 shadow-md scale-[1.02]'
                  : 'text-gray-300 hover:text-white hover:bg-morado-900'
              }`}
            >
              <GraduationCap className="w-4 h-4 flex-shrink-0" />
              <span>FORMACIÓN ACADÉMICA</span>
            </button>

            <button
              onClick={() => setActiveTab('experiencia')}
              className={`w-full py-3 px-4 rounded-xl font-extrabold text-xs sm:text-sm transition-all uppercase tracking-wider flex items-center justify-center space-x-2 text-center ${
                activeTab === 'experiencia'
                  ? 'bg-verde-500 text-morado-950 shadow-md scale-[1.02]'
                  : 'text-gray-300 hover:text-white hover:bg-morado-900'
              }`}
            >
              <Briefcase className="w-4 h-4 flex-shrink-0" />
              <span>EXPERIENCIA LABORAL</span>
            </button>
          </div>
        </div>

        {/* Tab Content Display */}

        {/* TAB 1: STORY & VALUES */}
        {activeTab === 'historia' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            
            {/* Card 1 */}
            <div className="bg-gradient-to-br from-morado-900 to-morado-950 border border-morado-700/60 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 glass-card-hover">
              <div className="w-12 h-12 bg-morado-800 text-verde-400 rounded-2xl flex items-center justify-center font-black">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Esfuerzo desde Abajo y Trabajo Honesto</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Al llegar a <strong className="text-white">Villa El Salvador</strong>, trabajé arduamente en diversos oficios forjándome con disciplina y vocación de servicio, hasta ingresar a la <strong className="text-verde-400">Línea 1 del Metro de Lima</strong>. Durante más de 14 años aprendí a manejar situaciones complejas con máxima eficiencia.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-gradient-to-br from-morado-900 to-morado-950 border border-morado-700/60 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 glass-card-hover">
              <div className="w-12 h-12 bg-morado-800 text-verde-400 rounded-2xl flex items-center justify-center font-black">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-black text-white">Liderazgo Escolar y Compromiso Social</h3>
              <p className="text-gray-300 text-sm leading-relaxed">
                Fui <strong className="text-white">Alcalde Escolar</strong>, participé activamente en marchas por los derechos de la ciudadanía y promuevo constantemente el deporte y el voluntariado vecinal, lo que forjó mi convicción por una gestión transparente.
              </p>
            </div>

            {/* Banner Wide Quote */}
            <div className="md:col-span-2 bg-gradient-to-r from-verde-500/20 via-morado-900 to-verde-500/20 border-2 border-verde-500/40 p-6 sm:p-8 rounded-3xl text-center space-y-3 shadow-xl">
              <span className="text-xs font-black text-verde-400 uppercase tracking-widest">COMPROMISO POR UN PERÚ ÍNTEGRO</span>
              <p className="text-base sm:text-xl font-extrabold text-white max-w-3xl mx-auto leading-relaxed">
                &quot;Creo firmemente que es momento de que más jóvenes se involucren con energía e ideas transparentes para construir un Perú más próspero. No puedo quedarme de brazos cruzados viendo las injusticias y necesidades de nuestro distrito.&quot;
              </p>
            </div>

          </div>
        )}

        {/* TAB 2: ACADEMIC EDUCATION */}
        {activeTab === 'educacion' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
            {educacion.map((item, idx) => {
              const Icon = item.icono;
              return (
                <div key={idx} className="bg-morado-900/90 border border-morado-700/80 p-6 rounded-3xl space-y-3 glass-card-hover shadow-xl">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 bg-morado-800 text-verde-400 rounded-xl flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="bg-verde-500/20 text-verde-300 text-xs font-extrabold px-3 py-1 rounded-full border border-verde-500/30">
                      {item.periodo}
                    </span>
                  </div>
                  <h4 className="text-lg font-black text-white">{item.titulo}</h4>
                  <p className="text-sm font-bold text-verde-400">{item.institucion}</p>
                  <span className="inline-block text-xs font-semibold text-purple-200 bg-morado-950 px-3 py-1 rounded-lg">
                    ✦ {item.destaque}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* TAB 3: WORK EXPERIENCE */}
        {activeTab === 'experiencia' && (
          <div className="space-y-4 max-w-4xl mx-auto animate-fadeIn">
            {experiencia.map((item, idx) => (
              <div key={idx} className="bg-morado-900/90 border border-morado-700/80 p-6 rounded-3xl space-y-2 glass-card-hover shadow-xl flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center space-x-2">
                    <span className="text-xs font-black text-verde-400 uppercase tracking-widest">{item.empresa}</span>
                  </div>
                  <h4 className="text-lg font-black text-white">{item.cargo}</h4>
                  <p className="text-xs text-gray-300">{item.descripcion}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="bg-morado-950 text-verde-400 border border-verde-500/30 text-xs font-extrabold px-4 py-2 rounded-xl inline-block">
                    {item.periodo}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

    </section>
  );
}
