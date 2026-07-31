'use client';

import React, { useState } from 'react';
import { MessageCircle, Send, CheckCircle, User, MapPin, PhoneCall } from 'lucide-react';

export default function Voluntariado() {
  const [nombre, setNombre] = useState('');
  const [telefono, setTelefono] = useState('');
  const [sector, setSector] = useState('Sector 1');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hola, mi nombre es ${nombre}. Vivo en ${sector} de Villa El Salvador. Deseo sumarme al equipo de campaña. Mensaje: ${mensaje || '¡Cuenten con mi apoyo para este 4 de Octubre!'}`;
    const whatsappUrl = `https://wa.me/51941378075?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contacto" className="py-20 bg-morado-950 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center space-x-2 bg-verde-500/20 text-verde-400 font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider border border-verde-500/30">
            ÚNETE COMO VOLUNTARIO
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
            SÚMATE AL <span className="text-verde-400">CAMBIO EN VILLA</span>
          </h2>
          <p className="text-gray-300 text-base sm:text-lg">
            ¡Tu voz y tu apoyo son fundamentales! Completa tus datos y escríbenos directamente por WhatsApp para unirte al equipo de campaña.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-morado-900/90 border-2 border-morado-700/60 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-6 backdrop-blur-md">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Nombre */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider">
                Nombres y Apellidos *
              </label>
              <input
                type="text"
                required
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej. Juan Pérez"
                className="w-full bg-morado-950 border border-morado-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-verde-400 transition"
              />
            </div>

            {/* Teléfono / WhatsApp */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider">
                Celular / WhatsApp *
              </label>
              <input
                type="tel"
                required
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                placeholder="Ej. 987654321"
                className="w-full bg-morado-950 border border-morado-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-verde-400 transition"
              />
            </div>

          </div>

          {/* Sector en Villa El Salvador */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider">
              Sector / Zona en Villa El Salvador
            </label>
            <select
              value={sector}
              onChange={(e) => setSector(e.target.value)}
              className="w-full bg-morado-950 border border-morado-700 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-verde-400 transition"
            >
              <option value="Sector 1">Sector 1</option>
              <option value="Sector 2">Sector 2</option>
              <option value="Sector 3">Sector 3</option>
              <option value="Sector 6">Sector 6</option>
              <option value="Sector 9">Sector 9</option>
              <option value="Pachacámac / Oasis">Oasis de Villa / Pachacámac</option>
              <option value="Lomo de Corvina">Lomo de Corvina</option>
              <option value="Parque Industrial">Parque Industrial</option>
              <option value="Otro sector">Otro sector de VES</option>
            </select>
          </div>

          {/* Mensaje */}
          <div className="space-y-2">
            <label className="block text-xs font-bold text-gray-200 uppercase tracking-wider">
              ¿Cómo te gustaría apoyar? (Opcional)
            </label>
            <textarea
              rows={3}
              value={mensaje}
              onChange={(e) => setMensaje(e.target.value)}
              placeholder="Ej. Deseo apoyar difundiendo propuestas, fiscalizando mesas o en redes..."
              className="w-full bg-morado-950 border border-morado-700 rounded-xl px-4 py-3.5 text-white placeholder-gray-500 focus:outline-none focus:border-verde-400 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 px-6 bg-gradient-to-r from-verde-500 to-verde-600 hover:from-verde-600 hover:to-verde-700 text-morado-950 font-black rounded-2xl text-base sm:text-lg uppercase tracking-wider shadow-[0_0_25px_rgba(34,197,94,0.4)] transition-all hover:scale-[1.02] flex items-center justify-center space-x-2"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
            <span>ENVIAR MENSAJE POR WHATSAPP</span>
          </button>

        </form>

      </div>
    </section>
  );
}
