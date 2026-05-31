"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { useLocale } from "@/src/i18n/useLocale";
import {
  BookOpen,
  ArrowLeft,
  ExternalLink,
  Globe,
  Compass,
  Award,
  Layers,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function FreeBooksPage() {
  const { t } = useLocale("es");
  const router = useRouter();

  const icons: Record<string, React.ReactNode> = {
    gutenberg: <Compass size={28} />,
    bdh: <Award size={28} />,
    elejandria: <BookOpen size={28} />,
    feedbooks: <Layers size={28} />,
  };

  const platforms = [
    {
      id: "gutenberg",
      url: "https://www.gutenberg.org/",
      title: t.books_gutenberg_title,
      desc: t.books_gutenberg_desc,
      badge: t.books_gutenberg_badge,
    },
    {
      id: "elejandria",
      url: "https://www.elejandria.com/",
      title: t.books_elejandria_title,
      desc: t.books_elejandria_desc,
      badge: t.books_elejandria_badge,
    },
    {
      id: "bdh",
      url: "https://bnedigital.bne.es/",
      title: t.books_bdh_title,
      desc: t.books_bdh_desc,
      badge: t.books_bdh_badge,
    },
    {
      id: "feedbooks",
      url: "https://www.feedbooks.com/publicdomain",
      title: t.books_feedbooks_title,
      desc: t.books_feedbooks_desc,
      badge: t.books_feedbooks_badge,
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EA] text-[#2B1712] px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">

        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B5C57] hover:text-[#A17808] transition-colors mb-12"
        >
          <ArrowLeft size={18} />
          {t.download_cancel}
        </button>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#E7E0D3] px-4 py-2 rounded-full mb-6 text-sm font-medium border border-[#D8D2C8]">
            <Globe size={16} className="text-[#A17808]" />
            {t.books_badge}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.books_title}
            <br />
            <span className="text-[#A17808]">{t.books_title_color}</span>
          </h1>

          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {t.books_subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-[#E5DED3] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[#A17808] bg-[#F4F1EA] p-3 rounded-2xl border border-[#E5DED3]">
                    {icons[platform.id]}
                  </div>

                  <span className="text-xs font-semibold px-3 py-1 bg-[#E7E0D3] text-[#2B1712] rounded-full">
                    {platform.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {platform.title}
                </h3>

                <p className="text-[#6B5C57] text-sm md:text-base leading-relaxed mb-8">
                  {platform.desc}
                </p>
              </div>

              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#2B1712] text-white px-6 py-4 rounded-xl font-bold hover:bg-[#A17808] transition-all flex items-center justify-center gap-2"
              >
                {t.books_visit_button}
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}