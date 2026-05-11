"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight, BookOpen } from "lucide-react";

export default function WelcomePage() {
  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] min-height-screen flex flex-col justify-between overflow-hidden min-h-screen">
      
      {/* NAVBAR (Reutilizando el estilo de tu landing) */}
      <nav className="fixed top-0 w-full z-50 bg-[#F4F1EA]/80 backdrop-blur-md border-b border-[#D8D2C8]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#A17808] flex items-center justify-center text-white shadow-lg">
              📚
            </div>
            <span className="text-xl font-bold tracking-tight">ReadMeBook</span>
          </div>
        </div>
      </nav>

      {/* CONTENIDO CENTRAL */}
      <section className="flex-grow flex items-center justify-center px-6 pt-32 pb-12">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl w-full bg-white rounded-[48px] p-8 lg:p-12 shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] border border-[#E5DED3] text-center"
        >
          <div className="w-20 h-20 bg-[#E7E0D3] rounded-3xl flex items-center justify-center mx-auto mb-8 text-[#A17808]">
            <CheckCircle2 size={48} />
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-6 tracking-tight">
            ¡Enhorabuena! <br />
            <span className="text-[#A17808]">Usuario validado.</span>
          </h1>

          <p className="text-xl text-[#6B5C57] leading-relaxed mb-10">
            Tu cuenta ha sido confirmada con éxito. Ya puedes empezar a disfrutar de tu biblioteca inteligente y privada.
          </p>

          <div className="flex flex-col gap-4">
            <Link 
              href="/" 
              className="bg-[#2B1712] text-white px-8 py-4 rounded-2xl text-lg font-medium hover:bg-black transition-all shadow-xl flex items-center justify-center gap-2"
            >
              Comenzar ahora <ArrowRight size={20} />
            </Link>
            
            <div className="flex items-center justify-center gap-2 text-[#A17808] font-medium mt-4">
              <BookOpen size={18} />
              <span>Tu privacidad, nuestro compromiso.</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* FOOTER SIMPLE */}
      <footer className="max-w-7xl mx-auto px-6 py-10 w-full">
        <div className="border-t border-[#D8D2C8] pt-8 text-center text-[#6B5C57]">
          <p>© 2026 ReadMeBook. Tu biblioteca inteligente local.</p>
        </div>
      </footer>
    </main>
  );
}