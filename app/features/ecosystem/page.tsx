"use client";

import { useLocale } from "@/src/i18n/useLocale";
import {
  ArrowLeft,
  ShieldAlert,
  FolderHeart,
  KeyRound,
} from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EcosystemPage() {
  const { t } = useLocale("es");
  const router = useRouter();

  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        {/* BACK */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-[#6B5C57] hover:text-[#A17808] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          {t.assisted_back}
        </button>

        {/* HEADER */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.ecosystem_title}
          </h1>

          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {t.ecosystem_desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* FEATURES */}
          <div className="space-y-8">

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <KeyRound size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.ecosystem_login_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.ecosystem_login_desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <FolderHeart size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.ecosystem_categories_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.ecosystem_categories_desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <ShieldAlert size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.ecosystem_delete_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.ecosystem_delete_desc}
                </p>
              </div>
            </div>

          </div>

          {/* IMAGE */}
          <div className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] p-3 md:p-4 shadow-2xl border border-[#E5DED3]">
            <Image
              src={t.pure_reading_experience}
              alt={t.ecosystem_image_alt}
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