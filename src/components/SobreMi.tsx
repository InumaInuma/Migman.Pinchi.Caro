'use client';

import React from 'react';
import { UserCheck, GraduationCap, Briefcase, Linkedin, ExternalLink, MapPin } from 'lucide-react';

export default function SobreMi() {
  const educacion = [
    {
      titulo: 'Maestría en Sistemas Ferroviarios (Magíster)',
      institucion: 'TECH Universidad',
      periodo: '2022 - 2023',
      destaque: 'Posgrado Especializado'
    },
    {
      titulo: 'Lic. en Administración de Empresas (Licenciado)',
      institucion: 'Universidad Peruana de Ciencias Aplicadas (UPC)',
      periodo: '2018 - 2021',
      destaque: 'Grado Profesional & Orden de Mérito'
    },
    {
      titulo: 'Curso Storytelling y Presentaciones Efectivas',
      institucion: 'UPC EPG',
      periodo: '2022',
      destaque: 'Especialización Ejecutiva'
    },
    {
      titulo: 'Titulado en Administración Bancaria',
      institucion: 'IFB CERTUS',
      periodo: '2010 - 2013',
      destaque: 'Título Técnico Profesional'
    }
  ];

  const experiencia = [
    {
      cargo: 'Instructor de Capacitación Técnica',
      empresa: 'Línea 1 Metro de Lima (UNNA Infraestructura)',
      periodo: '2022 - Actualidad'
    },
    {
      cargo: 'Inspector de Transporte Ferroviario',
      empresa: 'Línea 1 Metro de Lima',
      periodo: '2021 - 2022'
    },
    {
      cargo: 'Conductor de Tren UME Full Time',
      empresa: 'Línea 1 Metro de Lima',
      periodo: '2014 - 2020'
    },
    {
      cargo: 'Administrador Junior de Estación & Cajero',
      empresa: 'Línea 1 Metro de Lima',
      periodo: '2012 - 2014'
    }
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-morado-950 relative border-t border-morado-800">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-verde-500/20 text-verde-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider border border-verde-500/30">
            <UserCheck className="w-4 h-4" /> CONOCE A TU PRÓXIMO ALCALDE
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            SOBRE <span className="text-verde-400">MIGMAN PINCHI CARO</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            Un vecino trabajador, profesional capacitado y preparado para liderar la transformación de Villa El Salvador.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          {/* Candidate Image & Highlights Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-md bg-gradient-to-b from-morado-900 to-black p-6 rounded-3xl border-2 border-verde-500/40 shadow-2xl space-y-6">
              
              <div className="relative rounded-2xl overflow-hidden border-2 border-morado-600 shadow-lg">
                <img
                  src="/imagenCandidato.jpeg"
                  alt="Migman Pinchi Caro - Candidato VES 2026"
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-3 left-3 bg-morado-900/90 text-verde-400 text-xs font-black px-3 py-1.5 rounded-full border border-verde-400/50 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" /> Villa El Salvador
                </div>
              </div>

              <div className="space-y-3 text-center">
                <h3 className="text-2xl font-black text-white">Migman Pinchi Caro</h3>
                <p className="text-xs font-bold text-verde-400 uppercase tracking-wider">
                  Lic. en Administración de Empresas • Magíster en Sistemas Ferroviarios
                </p>

                <div className="pt-2 flex justify-center">
                  <a
                    href="https://www.linkedin.com/in/migman-pinchi-caro-168541194/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-[#0A66C2] hover:bg-[#084e96] text-white px-5 py-2.5 rounded-xl font-extrabold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-105"
                  >
                    <Linkedin className="w-4 h-4 fill-current" />
                    <span>Ver Perfil en LinkedIn</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Biography Bio & Story Text */}
          <div className="lg:col-span-7 space-y-6 text-gray-200">
            
            <div className="bg-morado-900/60 border-l-4 border-verde-400 p-6 rounded-r-2xl space-y-3">
              <h4 className="text-xl font-extrabold text-white">
                &quot;El cambio se construye con hechos, no solo con palabras&quot;
              </h4>
              <p className="text-sm text-purple-200 leading-relaxed">
                Soy Migman, nací en Iquitos, crecí en el distrito de Tres Unidos (San Martín) y desde los 16 años vivo en Lima. Aprendí el valor del esfuerzo y la integridad jamás dejándome corromper.
              </p>
            </div>

            <div className="space-y-4 text-sm sm:text-base leading-relaxed text-gray-300">
              <p>
                Cuando llegué a <strong className="text-white">Villa El Salvador</strong>, trabajé arduamente en diversos oficios, forjándome con disciplina y vocación de servicio, hasta ingresar a la <strong className="text-verde-400">Línea 1 del Metro de Lima</strong>. Durante más de 14 años me he desempeñado como cajero, administrador junior, conductor de tren, inspector de transporte e instructor de capacitación técnica, aprendiendo a manejar situaciones complejas con eficiencia.
              </p>
              
              <p>
                Como <strong className="text-white">Lic. en Administración de Empresas</strong> y <strong className="text-white">Magíster en Sistemas Ferroviarios</strong>, he combinado mi vocación social con una sólida preparación técnica para el servicio público. Desde muy joven me involucré en la representación social: fui <strong className="text-white">Alcalde Escolar</strong>, participé en marchas ciudadanas por el respeto de nuestros derechos y promuevo activamente el deporte y el voluntariado vecinal.
              </p>

              <p className="bg-morado-900/40 p-4 rounded-xl border border-morado-700 text-white font-medium">
                💪 Creo firmemente que es momento de que más jóvenes se involucren con energía e ideas transparentes para construir un Perú más próspero e íntegro. No puedo quedarme de brazos cruzados viendo las injusticias y necesidades de nuestro distrito.
              </p>
            </div>

          </div>

        </div>

        {/* Education & Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
          
          {/* Formación Académica */}
          <div className="bg-morado-900/70 border border-morado-700/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center space-x-3 text-verde-400 border-b border-morado-800 pb-4">
              <GraduationCap className="w-8 h-8" />
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-300">PREPARACIÓN PROFESIONAL</span>
                <h3 className="text-xl font-black text-white">Formación Académica</h3>
              </div>
            </div>

            <div className="space-y-4">
              {educacion.map((item, index) => (
                <div key={index} className="bg-morado-950/80 p-4 rounded-2xl border border-morado-800 hover:border-verde-500/50 transition">
                  <div className="flex items-center justify-between text-xs text-verde-400 font-bold mb-1">
                    <span>{item.institucion}</span>
                    <span className="bg-morado-800 text-white px-2.5 py-0.5 rounded-full">{item.periodo}</span>
                  </div>
                  <h4 className="text-base font-extrabold text-white">{item.titulo}</h4>
                  <span className="inline-block mt-1 text-[11px] font-semibold text-purple-300">
                    ✦ {item.destaque}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experiencia Laboral & Liderazgo */}
          <div className="bg-morado-900/70 border border-morado-700/60 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl">
            <div className="flex items-center space-x-3 text-verde-400 border-b border-morado-800 pb-4">
              <Briefcase className="w-8 h-8" />
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-purple-300">TRAYECTORIA DE GESTIÓN (14+ AÑOS)</span>
                <h3 className="text-xl font-black text-white">Experiencia Laboral</h3>
              </div>
            </div>

            <div className="space-y-4">
              {experiencia.map((item, index) => (
                <div key={index} className="bg-morado-950/80 p-4 rounded-2xl border border-morado-800 hover:border-verde-500/50 transition">
                  <div className="flex items-center justify-between text-xs text-verde-400 font-bold mb-1">
                    <span>{item.empresa}</span>
                    <span className="bg-morado-800 text-white px-2.5 py-0.5 rounded-full">{item.periodo}</span>
                  </div>
                  <h4 className="text-base font-extrabold text-white">{item.cargo}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>

    </section>
  );
}
