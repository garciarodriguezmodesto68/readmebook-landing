import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"; // Cambiado a /react que suele ser más estable

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ReadMeBook | Lector de eBooks Inteligente con OCR y Control por Voz",
  description: "La app de lectura privada y 100% local. Importa tus libros, usa OCR para digitalizar textos y controla todo con comandos de voz. Sin nube, sin rastreo.",
  keywords: [
    "lector de ebooks inteligente",
    "app lectura por voz",
    "OCR para libros",
    "biblioteca privada local",
    "lectura inclusiva",
    "referencias cruzadas libros"
  ],
  openGraph: {
    title: "ReadMeBook - Tu biblioteca inteligente y privada",
    description: "Controla tu lectura por voz con tecnología OCR 100% local.",
    images: ["/images/app_icon.png"], 
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {/* LA PIEZA QUE FALTABA: */}
        <Analytics /> 
      </body>
    </html>
  );
}