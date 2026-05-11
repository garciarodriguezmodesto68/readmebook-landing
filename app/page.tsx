"use client";

import Image from "next/image";
import { motion } from "framer-motion";
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
  CheckCircle2
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
  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] overflow-hidden">

      {/* NAVBAR STICKY */}
      <nav className="fixed top-0 w-full z-50 bg-[#F4F1EA]/80 backdrop-blur-md border-b border-[#D8D2C8]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#A17808] flex items-center justify-center text-white shadow-lg">
              📚
            </div>
            <span className="text-xl font-bold tracking-tight">ReadMeBook</span>
          </div>
          <button className="bg-[#A17808] text-white px-6 py-2.5 rounded-2xl hover:bg-[#8B6907] transition-all active:scale-95 font-medium shadow-md">
            Descargar App
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#E7E0D3] px-4 py-2 rounded-full mb-8 text-sm font-medium border border-[#D8D2C8]">
              <Shield size={16} className="text-[#A17808]" />
              100% Local · Sin nube · Privado
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
              Tu biblioteca inteligente. <br />
              <span className="text-[#A17808]">Privada.</span> <br />
              Controlada por voz.
            </h1>
            <p className="text-xl text-[#6B5C57] leading-relaxed mb-10 max-w-xl">
              Lee, escucha, organiza y controla tus libros sin depender de servidores externos. La potencia de la IA, en tu dispositivo.
            </p>
            
            <div className="flex flex-wrap gap-4 mb-12">
              <button className="bg-[#2B1712] text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-black transition-all shadow-xl flex items-center gap-2">
                Descargar ahora <ArrowRight size={20} />
              </button>
            </div>

            <div className="flex flex-wrap gap-3">
              <div className="bg-white border border-[#E5DED3] px-4 py-3 rounded-2xl flex items-center gap-2 shadow-sm text-sm font-medium">
                <BookOpen size={18} className="text-[#A17808]" /> Biblioteca Inteligente
              </div>
              <div className="bg-white border border-[#E5DED3] px-4 py-3 rounded-2xl flex items-center gap-2 shadow-sm text-sm font-medium">
                <Mic size={18} className="text-[#A17808]" /> Lectura por Voz
              </div>
              <div className="bg-white border border-[#E5DED3] px-4 py-3 rounded-2xl flex items-center gap-2 shadow-sm text-sm font-medium">
                <Languages size={18} className="text-[#A17808]" /> Traducción Global
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 bg-white rounded-[48px] p-4 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.15)] border border-[#E5DED3]">
              <Image
                src="/images/library.png"
                alt="ReadMeBook Library"
                width={500}
                height={1000}
                className="rounded-[36px]"
              />
            </div>
            
            {/* FLOATING CARD */}
            <motion.div 
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-10 -left-10 bg-[#6B4EFF] text-white p-6 rounded-3xl shadow-2xl z-20 max-w-[260px] border border-white/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <Headphones className="text-white/80" />
                <span className="font-semibold text-lg">Lectura Asistida</span>
              </div>
              <div className="flex flex-wrap gap-2 text-sm font-medium">
                <span className="bg-white/20 px-3 py-1 rounded-full">“Acelera”</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">“Siguiente”</span>
                <span className="bg-white/20 px-3 py-1 rounded-full">“Deletrea”</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section className="bg-[#E7E0D3]/40 py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-16">
            <p className="text-[#A17808] font-bold tracking-widest text-sm mb-4 uppercase">Privacidad Real</p>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6 tracking-tight">Tus libros son tuyos.<br />De verdad.</h2>
            <p className="text-xl text-[#6B5C57] leading-relaxed">
              ReadMeBook funciona completamente en local. Tus libros, notas y progresos nunca dependen de servidores externos ni de suscripciones que rastrean tus hábitos.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Lock size={32} />, title: "Biblioteca Local", desc: "Todos tus archivos permanecen cifrados en la memoria de tu dispositivo." },
              { icon: <Database size={32} />, title: "Backup Manual", desc: "Exporta y restaura tu biblioteca completa con un solo click cuando quieras." },
              { icon: <Shield size={32} />, title: "Sin Dependencias", desc: "Sin nube obligatoria. Sin rastreadores. Funciona perfectamente offline." }
            ].map((feature, i) => (
              <motion.div 
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-[#E5DED3] hover:shadow-lg transition-shadow"
              >
                <div className="text-[#A17808] mb-6">{feature.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-[#6B5C57] leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* READING EXPERIENCE (RECUPERADA) */}
      <section className="max-w-7xl mx-auto px-6 py-32">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div {...fadeIn}>
            <Image
              src="/images/reading.png"
              alt="Reading Experience"
              width={500}
              height={1000}
              className="rounded-[40px] shadow-2xl border border-[#E5DED3]"
            />
          </motion.div>

          <motion.div {...fadeIn}>
            <p className="text-[#A17808] font-bold tracking-widest text-sm mb-4 uppercase">Experiencia de Lectura</p>
            <h2 className="text-4xl lg:text-6xl font-bold leading-tight mb-8 tracking-tight">
              Diseña tu propia atmósfera.
            </h2>
            
            <div className="space-y-8">
              {[
                { icon: <Music />, title: "Atmósfera Sonora", desc: "Escucha música ambiental mientras lees e importa tus propios MP3 para concentrarte." },
                { icon: <Mic />, title: "Ritmo Personalizado", desc: "Ajusta pausas, velocidad y cadencia de lectura para que se adapte a tu velocidad mental." },
                { icon: <Search />, title: "Traducción y Búsqueda", desc: "Traduce palabras al instante, consulta significados y busca referencias en todo el libro." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="text-[#A17808] shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                    <p className="text-[#6B5C57] leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* VOICE SECTION (LA PERLA) */}
      <section className="bg-[#2B1712] text-white py-32 relative overflow-hidden">
        {/* Luces decorativas de fondo */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A17808] rounded-full blur-[150px] opacity-10" />
        
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <p className="text-[#D9C4FF] font-bold tracking-widest text-sm mb-4 uppercase">La Perla</p>
            <h2 className="text-5xl lg:text-7xl font-bold leading-tight mb-8 tracking-tight">
              Interactúa con tu libro <br /> usando tu voz.
            </h2>
            <p className="text-xl text-[#C9BDB8] max-w-3xl mx-auto leading-relaxed mb-16">
              Controla la lectura frase a frase usando comandos naturales en múltiples idiomas. Diseñado para cuando tienes las manos ocupadas o prefieres cerrar los ojos.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {voiceCommands.map((command, i) => (
                <motion.div
                  key={command}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/10 border border-white/10 px-6 py-4 rounded-2xl text-lg font-medium backdrop-blur-sm hover:bg-white/20 transition-all cursor-default shadow-lg"
                >
                  <span className="text-[#A17808] mr-2">“</span>{command}<span className="text-[#A17808] ml-1">”</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-20">
        <div className="border-t border-[#D8D2C8] pt-12 flex flex-col md:flex-row justify-between gap-10">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-lg bg-[#A17808] flex items-center justify-center text-white text-xs">📚</div>
              <span className="text-2xl font-bold tracking-tighter">ReadMeBook</span>
            </div>
            <p className="text-[#6B5C57] max-w-sm leading-relaxed text-lg">
              Una nueva forma de leer, escuchar y organizar tu conocimiento sin comprometer tu privacidad.
            </p>
          </div>
          
          <div className="flex flex-col justify-end text-[#6B5C57] font-medium">
            <p>© 2026 ReadMeBook. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}