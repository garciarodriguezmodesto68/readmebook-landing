"use client";

import { useLocale } from "@/src/i18n/useLocale";
import { ArrowLeft, Sparkles, Camera, FileText, FolderPlus } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function BookCreatorPage() {
  const { locale, setLocale, t } = useLocale("es");
  const router = useRouter();
  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <button 
            onClick={() => router.back()} 
            className="inline-flex items-center gap-2 text-[#6B5C57] hover:text-[#A17808] transition-colors font-medium"
            >
            <ArrowLeft size={20} />
            {locale === "es" ? "Volver" : "Back"}
        </button>

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {locale === "es" ? "Creador e Importador de Libros" : "Book Creator & Importer"}
          </h1>
          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {locale === "es" 
              ? "Pasa de lector a creador. Importa formatos estándar o genera tus propios libros digitales usando herramientas inteligentes."
              : "Go from reader to creator. Import standard formats or generate your own digital books using smart tools."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
        <div className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] p-3 md:p-4 shadow-2xl border border-[#E5DED3]">
        <Image
            src={t.reading_features}
            alt="Interfaz de los modos de lectura detallados en la app ReadMeBook"
            width={500}
            height={1000}
            priority
            className="rounded-[24px] md:rounded-[36px] w-full h-auto"
        />
        </div>

          <div className="space-y-8 lg:order-1">
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><FolderPlus size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Importación de ePub y TXT" : "ePub & TXT Import"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Sube tus archivos electrónicos directamente a la app de forma nativa e instantánea." : "Upload your electronic files directly to the app natively and instantly."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><Camera size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Escaneo OCR y Dictado" : "OCR Scanning & Dictation"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Usa tu cámara para digitalizar páginas físicas o dicta por voz para escribir historias sin teclear." : "Use your camera to digitize physical pages or dictate via voice to write stories without typing."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><Sparkles size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Consulta a IA y Portadas" : "AI Query & Covers"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Crea libros estructurados con apoyo de IA local e importa portadas personalizadas para tus obras." : "Create structured books supported by local AI and import custom covers for your works."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}