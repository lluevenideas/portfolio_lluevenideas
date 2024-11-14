
import Navbar from "@/components/Navbar/navbar";
import type { Metadata } from "next";
import "./globals.css";
import "./reset.css";



export const metadata: Metadata = {
  title: "LluevenIdeas",
  description: "Portafolio de la marca",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="rKZd8ZUvoFnUFRnHcTtyX8ych67dmmuUXvrRsnwXIzs" />
      </head>
      <meta name="google-site-verification" content="rKZd8ZUvoFnUFRnHcTtyX8ych67dmmuUXvrRsnwXIzs" />
      <head/>
      <body
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
