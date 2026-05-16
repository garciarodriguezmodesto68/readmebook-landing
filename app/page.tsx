"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { useLocale } from "@/src/i18n/useLocale";

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
  Accessibility,
  CheckCircle2,
} from "lucide-react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "ReadMeBook",
  operatingSystem: "Android",
  applicationCategory: "ReadingApplication",
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "EUR",
  },
  description:
    "Lector de eBooks inteligente con OCR local y control por voz. Privacidad 100% sin nube.",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "1",
  },
};

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

export default function Home() {
  const triggerRef = useRef(null);

  const { locale, setLocale, t } = useLocale("es");

  const voiceCommands = t.voiceCommands;

  const isCentered = useInView(triggerRef, {
    margin: "-45% 0px -45% 0px",
  });

  return (
    <main className="bg-[#F4F1EA] text-[#2B1712] overflow-hidden">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* NAVBAR STICKY */}
      <nav className="fixed top-0 w-full z-50 bg-[#E7E0D3]/40 backdrop-blur-md border-b border-[#D8D2C8]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shadow-lg shrink-0">
                <Image
                  src="/images/app_icon.png"
                  alt="ReadMeBook Logo"
                  fill
                  sizes="40px"
                  className="object-contain rounded-xl"
                />
              </div>

              <span className="text-xl font-bold tracking-tight">
                ReadMeBook
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="bg-[#A17808] text-white px-4 py-2 md:px-6 md:py-2.5 rounded-2xl hover:bg-[#8B6907] active:scale-95 transition-all duration-300 font-medium shadow-md text-sm md:text-base"
            >
              {t.nav_contact}
            </Link>

            <button
              onClick={() => setLocale(locale === "es" ? "en" : "es")}
              className="text-xs md:text-sm font-medium px-3 py-2 rounded-xl border border-[#D8D2C8] bg-white/40"
            >
              {locale.toUpperCase()}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative max-w-7xl mx-auto px-6 pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start min-h-[700px] lg:min-h-[700px]">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:pt-4"
          >
            <div className="inline-flex items-center gap-2 bg-[#E7E0D3] px-4 py-2 rounded-full mb-8 text-xs md:text-sm font-medium border border-[#D8D2C8]">
              <Shield size={16} className="text-[#A17808]" />
              {t.hero_badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] mb-8 tracking-tight min-h-[180px] md:min-h-[220px] lg:min-h-[260px]">
              {t.hero_title_1}
              <br />
              <span className="text-[#A17808]">{t.hero_title_2}</span>
              <br />
              {t.hero_title_3}
            </h1>

            <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed mb-10 max-w-xl min-h-[80px] md:min-h-[90px]">
              {t.hero_desc}
            </p>

            {/* BOTONES */}
            <div className="flex flex-col space-y-4 mb-12 w-full max-w-xl">
              <Link
                href="/download"
                className="w-full bg-[#2B1712] text-white px-8 py-5 rounded-2xl text-lg font-bold hover:bg-black hover:scale-[1.01] active:scale-[0.98] transition-all duration-300 shadow-xl flex items-center justify-center gap-2"
              >
                {t.download}
                <ArrowRight size={22} />
              </Link>

              <Link
                href="/contact"
                className="w-full border-2 border-[#2B1712] text-[#2B1712] px-8 py-5 rounded-2xl text-lg font-bold hover:bg-[#2B1712] hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
              >
                {t.nav_contact}
                <ArrowRight size={22} />
              </Link>
              <Link
                href="/free-books"
                className="text-sm font-medium text-[#6B5C57] hover:text-[#A17808] transition-colors underline">
                {locale === "es" ? "¿Dónde descargar libros gratis?" : "Where to get free eBooks?"}
              </Link>
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                {
                  icon: <BookOpen size={18} />,
                  text: t.hero_chip_1,
                },
                {
                  icon: <Mic size={18} />,
                  text: t.hero_chip_2,
                },
                {
                  icon: <Languages size={18} />,
                  text: t.hero_chip_3,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white border border-[#E5DED3] px-4 py-3 rounded-2xl flex items-center gap-2 shadow-sm text-xs md:text-sm font-medium"
                >
                  <span className="text-[#A17808]">{item.icon}</span>
                  {item.text}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <div className="relative mt-12 lg:mt-0 flex items-center justify-center h-full">
            <div
              ref={triggerRef}
              className="absolute inset-0 w-full h-full pointer-events-none z-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-10 bg-white rounded-[32px] md:rounded-[48px] p-3 md:p-4 shadow-2xl border border-[#E5DED3]"
            >
              <Image
                src={t.hero_image_library}
                alt="Interfaz de la biblioteca ReadMeBook mostrando organización de libros locales y privacidad"
                width={500}
                height={1000}
                priority
                className="rounded-[24px] md:rounded-[36px] w-full h-auto"
              />
            </motion.div>

            <motion.div
              animate={{
                opacity: isCentered ? 1 : 0,
                x: isCentered ? -60 : 0,
                y: [0, -10, 0],
              }}
              transition={{
                opacity: { duration: 0.4 },
                x: { duration: 0.5 },
                y: {
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute bottom-10 -left-6 md:-left-10 bg-[#2B1712] text-[#F4F1EA] p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl z-20 max-w-[180px] md:max-w-[260px] border border-white/20">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                <Headphones size={20} className="text-white/80" />
                <span className="font-semibold text-sm md:text-lg">
                  {t.assisted_reading}
                </span>
              </div>

              <div className="flex flex-wrap gap-1.5 md:gap-2 text-[10px] md:text-sm font-medium">
                {voiceCommands.slice(0, 3).map((cmd: string) => (
                  <span
                    key={cmd}
                    className="bg-[#F4F1EA]/10 border border-[#F4F1EA]/10 px-2 md:px-3 py-1 rounded-full"
                  >
                    “{cmd}”
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section className="bg-[#E7E0D3]/40 py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="max-w-3xl mb-16">
            <p className="text-[#A17808] font-bold tracking-widest text-sm mb-4 uppercase">
              {t.privacy_kicker}
            </p>

            <h2 className="text-3xl md:text-6xl font-bold mb-6 tracking-tight">
              {t.privacy_title}
              <br />
              {t.privacy_title_2}
            </h2>

            <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
              {t.privacy_desc}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: <Lock size={32} />,
                title: t.feature_local_title,
                desc: t.feature_local_desc,
              },
              {
                icon: <Database size={32} />,
                title: t.feature_backup_title,
                desc: t.feature_backup_desc,
              },
              {
                icon: <Shield size={32} />,
                title: t.feature_offline_title,
                desc: t.feature_offline_desc,
              },
            ].map((feature, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-[32px] border border-[#E5DED3] hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="text-[#A17808] mb-6">{feature.icon}</div>

                <h3 className="text-xl md:text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-[#6B5C57] text-sm md:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div {...fadeIn} className="order-2 lg:order-1">
            <Image
              src={t.hero_image_reading}
              alt="Usuario utilizando el comando de voz para controlar la lectura en la app ReadMeBook"
              width={500}
              height={1000}
              className="rounded-[32px] md:rounded-[40px] shadow-2xl border border-[#E5DED3] w-full h-auto"
            />
          </motion.div>

          <motion.div {...fadeIn} className="order-1 lg:order-2">
            <p className="text-[#A17808] font-bold tracking-widest text-sm mb-4 uppercase">
              {t.experience_kicker}
            </p>

            <h2 className="text-3xl md:text-6xl font-bold leading-tight mb-8 tracking-tight">
              {t.experience_title}
            </h2>

            <div className="space-y-6 md:space-y-8">
              {[
                {
                  icon: <Music />,
                  title: t.experience_music_title,
                  desc: t.experience_music_desc,
                },
                {
                  icon: <Mic />,
                  title: t.experience_speed_title,
                  desc: t.experience_speed_desc,
                },
                {
                  icon: <Search />,
                  title: t.experience_search_title,
                  desc: t.experience_search_desc,
                },
                {
                  icon: <Languages />,
                  title: t.experience_translate_title,
                  desc: t.experience_translate_desc,
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6">
                  <div className="text-[#A17808] shrink-0">{item.icon}</div>

                  <div>
                    <h3 className="text-xl md:text-2xl font-bold mb-2">
                      {item.title}
                    </h3>

                    <p className="text-[#6B5C57] text-sm md:text-base leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* AUDIENCE SECTION */}
      <section className="bg-[#E7E0D3]/40 mx-auto px-6 py-20 md:py-32">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Idiomas */}
          <motion.div
            {...fadeIn}
            className="bg-white p-8 md:p-12 rounded-[40px] border border-[#E5DED3] shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6 text-[#A17808]">
              <Languages size={40} />

              <h3 className="text-2xl md:text-3xl font-bold text-[#2B1712]">
                {t.audience_lang_title}
              </h3>
            </div>

            <ul className="space-y-4">
              {t.audience_lang_items.map((text: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#6B5C57]"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#A17808] shrink-0 mt-1"
                  />

                  <span className="text-sm md:text-base leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Inclusiva */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[40px] border border-[#E5DED3] shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6 text-[#A17808]">
              <Accessibility size={40} />

              <h3 className="text-2xl md:text-3xl font-bold text-[#2B1712]">
                {t.audience_access_title}
              </h3>
            </div>

            <ul className="space-y-4">
              {t.audience_access_items.map((text: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#6B5C57]"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#A17808] shrink-0 mt-1"
                  />

                  <span className="text-sm md:text-base leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Estudio */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.3 }}
            className="bg-white p-8 md:p-12 rounded-[40px] border border-[#E5DED3] shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6 text-[#A17808]">
              <Search size={40} />

              <h3 className="text-2xl md:text-3xl font-bold text-[#2B1712]">
                {t.audience_study_title}
              </h3>
            </div>

            <ul className="space-y-4">
              {t.audience_study_items.map((text: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#6B5C57]"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#A17808] shrink-0 mt-1"
                  />

                  <span className="text-sm md:text-base leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Proactiva */}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.4 }}
            className="bg-white p-8 md:p-12 rounded-[40px] border border-[#E5DED3] shadow-sm"
          >
            <div className="flex items-center gap-4 mb-6 text-[#A17808]">
              <Headphones size={40} />

              <h3 className="text-2xl md:text-3xl font-bold text-[#2B1712]">
                {t.audience_life_title}
              </h3>
            </div>

            <ul className="space-y-4">
              {t.audience_life_items.map((text: string, i: number) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-[#6B5C57]"
                >
                  <CheckCircle2
                    size={20}
                    className="text-[#A17808] shrink-0 mt-1"
                  />

                  <span className="text-sm md:text-base leading-relaxed">
                    {text}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* VOICE SECTION */}
      <section className="bg-[#2B1712] text-white py-20 md:py-32 relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
          <motion.div {...fadeIn}>
            <p className="text-[#D4B15A] font-bold tracking-widest text-sm mb-4 uppercase">
              {t.voice_kicker}
            </p>

            <h2 className="text-4xl md:text-7xl font-bold leading-tight mb-8 tracking-tight">
              {t.voice_title}
            </h2>

            <div className="flex flex-wrap justify-center gap-3 md:gap-4 mt-12">
              {voiceCommands.map((command: string, i: number) => (
                <motion.div
                  key={command}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/10 border border-white/10 px-4 py-2 md:px-6 md:py-4 rounded-xl md:rounded-2xl text-sm md:text-lg font-medium backdrop-blur-sm"
                >
                  <span className="text-[#A17808] mr-1">“</span>
                  {command}
                  <span className="text-[#A17808] ml-1">”</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="max-w-7xl mx-auto px-6 py-12 md:py-20">
        <div className="border-t border-[#D8D2C8] pt-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 shadow-lg shrink-0">
                <Image
                  src="/images/app_icon.png"
                  alt="ReadMeBook Logo"
                  fill
                  sizes="40px"
                  className="object-contain rounded-xl"
                />
              </div>

              <span className="text-xl font-bold tracking-tight">
                ReadMeBook
              </span>
            </div>

            <p className="text-[#6B5C57] text-sm md:text-base mt-2">
              {t.footer_copy}
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}