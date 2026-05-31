"use client";

import { useLocale } from "@/src/i18n/useLocale";
import { ArrowLeft, Moon, Eye, StickyNote } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function ReadingExperiencePage() {
  const { t } = useLocale("es");
  const router = useRouter();

  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-[#6B5C57] hover:text-[#A17808] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          {t.assisted_back}
        </button>

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.reading_experience_title}
          </h1>

          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {t.reading_experience_desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* IMAGE */}
          <div className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] p-3 md:p-4 shadow-2xl border border-[#E5DED3]">
            <Image
              src={t.reading_features}
              alt={t.reading_experience_image_alt}
              width={500}
              height={1000}
              priority
              className="rounded-[24px] md:rounded-[36px] w-full h-auto"
            />
          </div>

          {/* FEATURES */}
          <div className="space-y-8 lg:order-1">

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <Moon size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.reading_dark_mode_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.reading_dark_mode_desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <Eye size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.reading_always_on_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.reading_always_on_desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <StickyNote size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.reading_notes_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.reading_notes_desc}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </main>
  );
}