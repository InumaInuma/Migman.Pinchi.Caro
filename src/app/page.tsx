'use client';

import React from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import SobreMi from '@/components/SobreMi';
import EjesGobierno from '@/components/EjesGobierno';
import Propuestas from '@/components/Propuestas';
import SimuladorVoto from '@/components/SimuladorVoto';
import PlanGobierno from '@/components/PlanGobierno';
import Voluntariado from '@/components/Voluntariado';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-morado-dark text-white selection:bg-verde-500 selection:text-morado-950">
      {/* Animated Splash Preloader with Partido Morado logo */}
      <Preloader />

      {/* Navigation Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Biografía y Trayectoria del Candidato */}
      <SobreMi />

      {/* 3 Ejes de Gobierno */}
      <EjesGobierno />

      {/* Propuestas Principales */}
      <Propuestas />

      {/* Simulador de Voto Interactivo */}
      <SimuladorVoto />

      {/* Plan de Gobierno PDF Download */}
      <PlanGobierno />

      {/* Voluntariado & Contacto por WhatsApp */}
      <Voluntariado />

      {/* Footer */}
      <Footer />
    </main>
  );
}
