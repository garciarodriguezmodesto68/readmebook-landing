"use client";

"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

import {
  Shield,
  Mic,
  BookOpen,
  Languages,
  Headphones,
  Lock,
  Search,
  Music,
  Database,
  ArrowRight,
  Accessibility,
  CheckCircle2,
} from "lucide-react";

const voiceCommands = [
  "Acelera",
  "Siguiente párrafo",
  "Deletrea...",
  "Repite",
  "Pausa",
  "Más despacio",
  "Inicio del libro",
  "Continúa",
];

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  const triggerRef = useRef(null);
  
  const isCentered = useInView(triggerRef, {
    margin: "-45% 0px -45% 0px"
  });

  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] overflow-hidden">

      {/* NAVBAR STICKY */}
      <nav className="fixed top-0 w-full z-50 bg-[#E7E0D3]/40 backdrop-blur-md border-b border-[#D8D2C8]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shadow-lg shrink-0">
                <Image
                  src="/images/app_icon.png"
                  alt="ReadMeBook Logo"
                  fill
                  sizes="40px"
                  className="object-contain rounded-xl"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                ReadMeBook
              </span>
            </div>
          </div>
          <Link
            href="/contact"
            className="bg-[#A17808] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-2xl hover:bg-[#8B6907] active:scale-95 transition-all duration-300 font-medium shadow-md text-sm md:text-base"
          >
            Contacto
          </Link>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pt-4"
          >
            <div className="inline-flex items-center gap-2 bg-[#E7E0D3] px-4 py-2 rounded-full mb-8 text-xs md:text-sm font-medium border border-[#D8D2C8]">
              <Shield size={16} className="text-[#A17808]" />
              100% Local · Sin nube · Privado
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Tu biblioteca inteligente.
              <br />
              <span className="text-[#A17808]">Privada.</span>
              <br />
              Controlada por voz.
            </h1>

            <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed mb-10 max-w-xl">
              Lee, escucha, organiza y controla tus libros
              sin depender de servidores externos.
              La potencia de la IA, en tu dispositivo.
            </p>

            {/* CONTENEDOR DE BOTONES - Apilados verticalmente */}
            <div className="flex flex-col space-y-4 mb-12 w-full max-w-xl">
              
              {/* 1. BOTÓN DESCARGA: Arriba y ancho total */}
              <Link
                href="/download"
                className="w-full bg-[#2B1712] text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-black hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                Descargar ahora
                <ArrowRight size={22} />
              </Link>

              {/* 2. BOTÓN CONTACTO: Debajo y ancho total */}
              <Link
                href="/contact"
                className="w-full border-2 border-[#2B1712] text-[#2B1712] px-8 py-5 rounded-2xl text-lg font-bold hover:bg-[#2B1712] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                Contacto
                <ArrowRight size={22} />
              </Link>
              
            </div>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: <BookOpen size={18} />, text: "Biblioteca Inteligente" },
                { icon: <Mic size={18} />, text: "Lectura por Voz" },
                { icon: <Languages size={18} />, text: "Traducción Global" }
              ].map((item, i) => (
                <div key={i} className="bg-white border border-[#E5DED3] px-4 py-3 rounded-2xl flex items-center gap-2 shadow-sm text-xs md:text-sm font-medium">
                  <span className="text-[#A17808]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT (IMAGE + FLOATING CARD) */}
          <div className="relative mt-12 lg:mt-0 flex items-start justify-center">
            <div 
              ref={triggerRef} 
              className="absolute inset-0 w-full h-full pointer-events-none z-0" 
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] p-3 md:p-4 shadow-2xl border border-[#E5DED3]"
            >
              <Image
                src="/images/library.png"
                alt="ReadMeBook Library"
                width={500}
                height={1000}
                priority
                className="rounded-[24px] md:rounded-[36px] w-full h-auto"
              />
            </motion.div>

            <motion.div
              animate={{
                opacity: isCentered ? 1 : 0,
                x: isCentered ? -60 : 0, 
                y: [0, -10, 0] 
              }}
              transition={{
                opacity: { duration: 0.4 },
                x: { duration: 0.5 },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute bottom-10 -left-6 md:-left-48 bg-[#2B1712] text-[#F4F1EA] p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-20 max-w-[180px] md:max-w-[260px] border border-white/20"
            >
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Headphones size={20} className="text-white/80" />
                <span className="font-semibold text-sm md:text-lg">Lectura Asistida</span>
              </div>
              <div className="flex flex-wrap gap-1.5 md:gap-2 text-[10px] md:text-sm font-medium">
                {["“Acelera”", "“Siguiente”", "“Deletrea”"].map((cmd) => (
                  <span key={cmd} className="bg-[#F4F1EA]/10 border border-[#F4F1EA]/10 px-2 md:px-3 py-1 rounded-full">
                    {cmd}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section className="bg-[#E7E0D3]/40 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-16">
            <p className="text-[#A17808] font-bold tracking-widest text-sm mb-4 uppercase">Privacidad Real</p>
            <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">Tus libros son tuyos.<br />De verdad.</h2>
            <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
              ReadMeBook funciona completamente en local. Tus libros nunca dependen de servidores externos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Lock size={32} />, title: "Biblioteca Local", desc: "Archivos cifrados en tu dispositivo." },
              { icon: <Database size={32} />, title: "Backup Manual", desc: "Exporta y restaura tu biblioteca con un click." },
              { icon: <Shield size={32} />, title: "Sin Dependencias", desc: "Funciona perfectamente offline." }
            ].map((feature, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-[#E5DED3] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-[#A17808] mb-6">{feature.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-[#6B5C57] text-sm md:text-base leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* EXPERIENCE SECTION - ACTUALIZADA CON BÚSQUEDA Y CONTEXTO */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeIn} className="order-2 lg:order-1">
            <Image
              src="/images/reading.png"
              alt="Reading Experience"
              width={500}
              height={1000}
              className="rounded-[32px] md:rounded-[40px] shadow-2xl border border-[#E5DED3] w-full h-auto"
            />
          </motion.div>
          <motion.div {...fadeIn} className="order-1 lg:order-2">
            <p className="text-[#A17808] font-bold tracking-widest text-sm mb-4 uppercase">Experiencia</p>
            <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">Diseña tu propia atmósfera.</h2>
            <div className="space-y-6 md:space-y-8">
              {[
                { icon: <Music />, title: "Atmósfera Sonora", desc: "Escucha música ambiental mientras lees." },
                { icon: <Mic />, title: "Ritmo Personalizado", desc: "Ajusta la velocidad a tu ritmo mental." },
                { icon: <Search />, title: "Contexto Inteligente", desc: "Busca personajes, ciudades o significados en el resto del libro al instante." },
                { icon: <Languages />, title: "Traducción", desc: "Consulta significados y traducciones sin salir de la página." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="text-[#A17808] shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#6B5C57] text-sm md:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* SECCIÓN NUEVA: PARA QUIÉN ES */}
      <section className="bg-[#E7E0D3]/40 mx-auto px-6 py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Estudiantes de Idiomas */}
            <motion.div {...fadeIn} className="bg-white p-8 md:p-12 rounded-[40px] border border-[#E5DED3] shadow-sm">
              <div className="flex items-center gap-4 mb-6 text-[#A17808]">
                <Languages size={40} />
                <h3 className="text-2xl md:text-3xl font-bold text-[#2B1712]">Estudiantes de idiomas</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Escucha la pronunciación exacta de cada palabra.",
                  "Sincronía visual: mira cómo se escriben las palabras mientras las oyes.",
                  "Traducción contextual inmediata para ampliar vocabulario."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6B5C57]">
                    <CheckCircle2 size={20} className="text-[#A17808] shrink-0 mt-1" />
                    <span className="text-sm md:text-base leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Accesibilidad / Necesidades Especiales */}
            <motion.div {...fadeIn} transition={{ delay: 0.2 }} className="bg-white p-8 md:p-12 rounded-[40px] border border-[#E5DED3] shadow-sm">
              <div className="flex items-center gap-4 mb-6 text-[#A17808]">
                <Accessibility size={40} />
                <h3 className="text-2xl md:text-3xl font-bold text-[#2B1712]">Lectura Inclusiva</h3>
              </div>
              <ul className="space-y-4">
                {[
                  "Apoyo bimodal: lee y escucha al mismo tiempo para mejorar la comprensión.",
                  "Sincronía audio-visual diseñada para superar barreras de lectura y comprensión..",
                  "Navegación manos libres total mediante comandos de voz."
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-3 text-[#6B5C57]">
                    <CheckCircle2 size={20} className="text-[#A17808] shrink-0 mt-1" />
                    <span className="text-sm md:text-base leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
      </section>
      {/* VOICE SECTION */}
      <section className="bg-[#2B1712] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <p className="text-[#D4B15A] font-bold tracking-widest text-sm mb-4 uppercase">La Perla</p>
            <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">Interactúa con tu libro usando tu voz.</h2>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12">
              {voiceCommands.map((command, i) => (
                <motion.div
                  key={command}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/10 border border-white/10 px-4 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-lg font-medium backdrop-blur-sm"
                >
                  <span className="text-[#A17808] mr-1">“</span>{command}<span className="text-[#A17808] ml-1">”</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="border-t border-[#D8D2C8] pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shadow-lg shrink-0">
                <Image
                  src="/images/app_icon.png"
                  alt="ReadMeBook Logo"
                  fill
                  sizes="40px"
                  className="object-contain rounded-xl"
                />
              </div>
              <span className="text-xl font-bold tracking-tight">
                ReadMeBook
              </span>
            </div>
            <p className="text-[#6B5C57] text-sm md:text-base mt-2">© 2026 ReadMeBook. Tu privacidad es lo primero.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}