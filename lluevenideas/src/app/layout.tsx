
import Navbar from "@/components/Navbar/Navbar";
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
      <body
      >
        <Navbar/>
        {children}
      </body>
    </html>
  );
}
