import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://readmebook.com"),

  title: "ReadMeBook | Lector de eBooks Inteligente con OCR y Control por Voz",

  description:
    "La app de lectura privada y 100% local. Importa tus libros, usa OCR para digitalizar textos y controla todo con comandos de voz. Sin nube, sin rastreo.",

  keywords: [
    "lector de ebooks inteligente",
    "app lectura por voz",
    "OCR para libros",
    "biblioteca privada local",
    "lectura inclusiva",
    "referencias cruzadas libros",
  ],

  alternates: {
    canonical: "https://readmebook.com",
  },

  openGraph: {
    title: "ReadMeBook - Tu biblioteca inteligente y privada",
    description:
      "Controla tu lectura por voz con tecnología OCR 100% local.",
    url: "https://readmebook.com",
    siteName: "ReadMeBook",
    images: [
      {
        url: "https://readmebook.com/images/app_icon.png",
        width: 1200,
        height: 630,
        alt: "ReadMeBook",
      },
    ],
    locale: "es_ES",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "ReadMeBook - Tu biblioteca inteligente y privada",
    description:
      "Controla tu lectura por voz con tecnología OCR 100% local.",
    images: ["https://readmebook.com/images/app_icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}