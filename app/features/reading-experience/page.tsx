"use client";

import { useLocale } from "@/src/i18n/useLocale";
import { ArrowLeft, Moon, Eye, StickyNote, BookOpen } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ReadingExperiencePage() {
  const router = useRouter();
  const { locale, setLocale, t } = useLocale("es");
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
            {locale === "es" ? "Experiencia de Lectura Inmersiva" : "Immersive Reading Experience"}
          </h1>
          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {locale === "es" 
              ? "Diseñado para los que no pueden parar de leer. Una interfaz limpia que protege tus ojos y se adapta a tus hábitos."
              : "Designed for those who can't stop reading. A clean interface that protects your eyes and adapts to your habits."}
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
              <div className="text-[#A17808] shrink-0"><Moon size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Modo Oscuro Puro (OLED)" : "Pure Dark Mode (OLED)"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Apaga los píxeles de tu pantalla para leer cómodamente en total oscuridad sin fatiga visual." : "Turn off your screen pixels for comfortable reading in total darkness without eye strain."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><Eye size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Pantalla Siempre Activa" : "Always-On Screen"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "El sistema evita que la pantalla se atenúe o se bloquee mientras estás concentrado leyendo." : "The system prevents the screen from dimming or locking while you are deeply focused on reading."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><StickyNote size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Anotaciones y Marcadores" : "Notes & Bookmarks"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Subraya texto, añade reflexiones en tus notas y gestiona tus marcadores locales al instante." : "Highlight text, add reflections to your notes, and manage your local bookmarks instantly."}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}