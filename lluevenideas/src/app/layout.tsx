import Navbar from "@/components/Navbar/navbar";
import { OpenGraph } from "@/utils/interfaces";
import "./globals.css";
import "./reset.css";

interface Metadata {
  title: string;
  description: string;
  keywords: string;
  author: string;
  robots: string;
  openGraph: OpenGraph;
}

export const metadata: Metadata = {
  title: "LluevenIdeas - Desarrollo Web y Soluciones Digitales",
  description: "LluevenIdeas es el portafolio digital de desarrolladores especializados en soluciones web, aplicaciones, y diseño. Creamos experiencias innovadoras para tu negocio.",
  keywords: "desarrolladores web, portafolio web, soluciones digitales, diseño web, aplicaciones web, desarrollo frontend, desarrollo backend",
  author: "LluevenIdeas",
  robots: "index, follow",  
  openGraph: {
    title: "LluevenIdeas - Desarrollo Web y Soluciones Digitales",
    description: "Portafolio de desarrolladores con experiencia en crear soluciones web innovadoras. Descubre nuestros proyectos y servicios.",
    url: "https://lluevenideas.com.ar",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="9Iv5i_KthxAjPjApBTEqYEKBQs_Dkw8VPBf5OF5HIrE" />
        <meta name="robots" content="index, follow" />
        <meta name="keywords" content="desarrolladores web, portafolio web, soluciones digitales, diseño web, aplicaciones web, desarrollo frontend, desarrollo backend" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
