"use client";

import { useLocale } from "@/src/i18n/useLocale";
import { ArrowLeft, Sparkles, Camera, FolderPlus } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function BookCreatorPage() {
  const { locale, t } = useLocale("es");
  const router = useRouter();

  const [mounted, setMounted] = useState(false);
  const [index, setIndex] = useState(0);

  const stepsImages = [
    {
      src: "/images/book_creator_importer_01-en.png",
      alt: t.book_creator_step_1_alt,
    },
    {
      src: "/images/book_creator_importer_02-en.png",
      alt: t.book_creator_step_2_alt,
    },
    {
      src: "/images/book_creator_importer_03-en.png",
      alt: t.book_creator_step_3_alt,
    },
  ];

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % stepsImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [mounted, stepsImages.length]);

  if (!mounted) return null;

  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] min-h-screen pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-6">

        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-[#6B5C57] hover:text-[#A17808] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          {locale === "es" ? t.assisted_back : t.assisted_back}
        </button>

        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.book_creator_title}
          </h1>

          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {t.book_creator_desc}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">

          {/* VISUAL */}
          <div className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] p-3 md:p-4 shadow-2xl border border-[#E5DED3] overflow-hidden">

            <div className="relative">
              {stepsImages.map((img, i) => {
                const isActive = i === index;

                return (
                  <Image
                    key={i}
                    src={img.src}
                    alt={img.alt}
                    width={900}
                    height={1400}
                    priority
                    className={`
                      absolute top-0 left-0
                      w-full h-auto
                      rounded-[24px] md:rounded-[36px]
                      transition-opacity duration-[1500ms] ease-in-out
                      ${isActive ? "opacity-100" : "opacity-0"}
                    `}
                  />
                );
              })}

              <Image
                src={stepsImages[0].src}
                alt="spacer"
                width={900}
                height={1400}
                className="w-full h-auto opacity-0"
              />
            </div>
          </div>

          {/* FEATURES */}
          <div className="space-y-8 lg:order-1">

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <FolderPlus size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.book_creator_import_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.book_creator_import_desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <Camera size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.book_creator_ocr_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.book_creator_ocr_desc}
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0">
                <Sparkles size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">
                  {t.book_creator_ai_title}
                </h3>
                <p className="text-[#6B5C57] text-sm">
                  {t.book_creator_ai_desc}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}