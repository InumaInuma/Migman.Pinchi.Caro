import './globals.css';
import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://villaelsalvador2026.pe'),
  title: 'Villa El Salvador 2026 | Recuperemos Villa con Orden, Seguridad y Transparencia',
  description: 'Este Domingo 4 de Octubre de 2026 marca el Partido Morado, provincial y distrital',
  keywords: 'Villa El Salvador, Alcaldia VES, Elecciones 2026, Partido Morado, Candidato VES, Plan de Gobierno Villa El Salvador',
  authors: [{ name: 'Campaña Municipal VES' }],
  icons: {
    icon: '/partidomorado.png',
    shortcut: '/partidomorado.png',
    apple: '/partidomorado.png',
  },
  openGraph: {
    title: 'Recuperemos Villa El Salvador | Campaña Municipal 2026',
    description: 'Este Domingo 4 de Octubre de 2026 marca el Partido Morado, provincial y distrital',
    url: 'https://villaelsalvador2026.pe',
    siteName: 'Villa El Salvador 2026',
    images: [
      {
        url: '/imagenCandidato.jpeg',
        width: 1200,
        height: 630,
        alt: 'Candidato Alcaldía Villa El Salvador 2026',
      },
    ],
    locale: 'es_PE',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="antialiased selection:bg-verde-500 selection:text-morado-950">
        {children}
      </body>
    </html>
  );
}
