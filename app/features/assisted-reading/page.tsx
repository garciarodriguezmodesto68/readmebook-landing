"use client";

import { useLocale } from "@/src/i18n/useLocale";
import { ArrowLeft, Mic, Headphones, Languages, Accessibility } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AssistedReadingPage() {
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
            {locale === "es" ? "Lectura Asistida Inteligente" : "Intelligent Assisted Reading"}
          </h1>
          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {locale === "es" 
              ? "Potencia tu memoria y rompe barreras de accesibilidad. Controla tu libro con la voz y traduce textos en tiempo real."
              : "Boost your memory and break accessibility barriers. Control your book with your voice and translate texts in real time."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><Mic size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Control Manos Libres por Voz" : "Hands-Free Voice Control"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Pasa de página o busca palabras mediante comandos de voz locales sin tocar el dispositivo." : "Turn pages or search for words using local voice commands without touching the device."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><Headphones size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Motor TTS para Opositores" : "TTS Engine for Candidates"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Escucha tus temas de estudio controlando la velocidad de la voz de forma óptima para memorizar." : "Listen to your study topics by controlling the voice speed optimally for memory retention."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><Languages size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Traducción en Tiempo Real" : "Real-Time Translation"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Ideal para aprender idiomas. Consulta diccionarios y traduce cualquier párrafo al instante." : "Ideal for language learning. Consult dictionaries and translate any paragraph instantly."}</p>
              </div>
            </div>
          </div>

          <div className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] p-3 md:p-4 shadow-2xl border border-[#E5DED3]">
            <Image
                src={t.assisted_inclusive_reading}
                alt="Interfaz de los modos de lectura detallados en la app ReadMeBook"
                width={500}
                height={1000}
                priority
                className="rounded-[24px] md:rounded-[36px] w-full h-auto"
            />
          </div>
        </div>
      </div>
    </main>
  );
}