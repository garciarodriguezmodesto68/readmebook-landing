"use client";

import { useLocale } from "@/src/i18n/useLocale";
import { ArrowLeft, Mic, Headphones, Languages } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AssistedReadingPage() {
  const router = useRouter();
  const { t } = useLocale("es");

  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* Back */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-[#6B5C57] hover:text-[#A17808] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          {t.assisted_back}
        </button>

        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.assisted_title}
          </h1>

          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {t.assisted_desc}
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* Features */}
          <div className="space-y-8">

            {/* Voice */}
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <Mic size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.assisted_voice_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.assisted_voice_desc}
                </p>
              </div>
            </div>

            {/* TTS */}
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <Headphones size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.assisted_tts_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.assisted_tts_desc}
                </p>
              </div>
            </div>

            {/* Translate */}
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <Languages size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.assisted_translate_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.assisted_translate_desc}
                </p>
              </div>
            </div>

          </div>

          {/* Image */}
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