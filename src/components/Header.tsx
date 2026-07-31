'use client';

import React, { useState } from 'react';
import { Menu, X, MessageCircle, Phone, Share2 } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Mis Ejes', href: '#ejes' },
    { name: 'Propuestas', href: '#propuestas' },
    { name: 'Simulador', href: '#simulador' },
    { name: 'Plan de Gobierno', href: '#plan-gobierno' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-morado-dark/85 backdrop-blur-lg border-b border-morado-700/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo & Brand */}
          <a href="#inicio" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-gradient-to-tr from-morado-700 to-verde-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl shadow-lg border border-white/20 group-hover:scale-105 transition-transform">
              M
            </div>
            <div>
              <span className="block text-xs font-black tracking-widest text-verde-400 uppercase">
                PARTIDO MORADO
              </span>
              <span className="block text-lg font-extrabold text-white tracking-tight leading-none">
                VILLA EL SALVADOR
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-semibold">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-200 hover:text-verde-400 transition-colors py-1 border-b-2 border-transparent hover:border-verde-400"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action Button: WhatsApp CTA (Desktop & Tablet) */}
          <div className="hidden sm:flex items-center space-x-3">
            <a
              href="https://wa.me/51999999999?text=Hola,%20deseo%20apoyar%20la%20campa%C3%B1a%20para%20Villa%20El%20Salvador%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 bg-gradient-to-r from-verde-500 to-verde-600 hover:from-verde-600 hover:to-verde-700 text-morado-950 px-4 py-2.5 rounded-full font-black text-xs uppercase tracking-wider shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all hover:scale-105"
            >
              <MessageCircle className="w-4 h-4 fill-current" />
              <span>ESCRÍBEME POR WHATSAPP</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center space-x-2">
            <a
              href="https://wa.me/51999999999?text=Hola,%20deseo%20apoyar%20la%20campa%C3%B1a%20para%20Villa%20El%20Salvador%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 bg-verde-500 text-morado-950 rounded-full font-bold shadow-md"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-morado-800/60 text-gray-200 hover:text-white border border-morado-600/50"
              aria-label="Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-morado-950/95 backdrop-blur-xl border-b border-morado-700/60 px-6 pt-4 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-base font-bold text-gray-200 hover:text-verde-400 py-2 border-b border-morado-800/40"
            >
              {link.name}
            </a>
          ))}
          
          <div className="pt-4">
            <a
              href="https://wa.me/51999999999?text=Hola,%20deseo%20apoyar%20la%20campa%C3%B1a%20para%20Villa%20El%20Salvador%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center space-x-2 bg-verde-500 hover:bg-verde-600 text-morado-950 py-3 rounded-xl font-black text-sm uppercase tracking-wider shadow-lg"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              <span>ESCRÍBEME POR WHATSAPP</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
