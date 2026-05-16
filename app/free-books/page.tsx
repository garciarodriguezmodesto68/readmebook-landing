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
  Layers 
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

export default function FreeBooksPage() {
  const { t } = useLocale("es");
  const router = useRouter();

  // Mapeamos los iconos de Lucide para renderizarlos dinámicamente según la tarjeta
  const icons: Record<string, React.ReactNode> = {
    gutenberg: <Compass size={28} />,
    bdh: <Award size={28} />,
    elejandria: <BookOpen size={28} />,
    feedbooks: <Layers size={28} />,
  };

  // Datos de las plataformas estables y seguras
  const platforms = [
    {
      id: "gutenberg",
      url: "https://www.gutenberg.org/",
      title: t.books_gutenberg_title || "Project Gutenberg",
      desc: t.books_gutenberg_desc || "La mayor biblioteca de dominio público del mundo. Más de 70.000 libros libres de derechos, ideal para grandes clásicos universales.",
      badge: "70k+ eBooks",
    },
    {
      id: "elejandria",
      url: "https://www.elejandria.com/",
      title: t.books_elejandria_title || "Elejandría",
      desc: t.books_elejandria_desc || "Web en español con una interfaz impecable. Ofrece literatura clásica y obras de dominio público con un formato digital ultra cuidado.",
      badge: "Español / Premium Layout",
    },
    {
      id: "bdh",
      url: "https://bnedigital.bne.es/",
      title: t.books_bdh_title || "Biblioteca Digital Hispánica",
      desc: t.books_bdh_desc || "El portal oficial de la Biblioteca Nacional de España. Miles de documentos, joyas literarias e incunables digitalizados de acceso libre.",
      badge: "BNE Oficial",
    },
    {
      id: "feedbooks",
      url: "https://www.feedbooks.com/publicdomain",
      title: t.books_feedbooks_title || "Feedbooks (Public Domain)",
      desc: t.books_feedbooks_desc || "Excelente catálogo de obras de dominio público organizadas de forma impecable por categorías, géneros y con portadas de alta calidad.",
      badge: "Multiidioma / Catálogo",
    },
  ];

  return (
    <main className="min-h-screen bg-[#F4F1EA] dark:bg-[#121212] text-[#2B1712] dark:text-[#F4F1EA] px-6 py-16 md:py-24 transition-colors duration-300">
      <div className="max-w-5xl mx-auto">
        
        {/* BOTÓN VOLVER */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-2 text-sm font-medium text-[#6B5C57] dark:text-[#A89993] hover:text-[#A17808] dark:hover:text-[#D4B15A] transition-colors mb-12 group"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          {t.contact_button_cancel || "Volver"}
        </button>

        {/* CABECERA */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#E7E0D3] dark:bg-[#2B1712] px-4 py-2 rounded-full mb-6 text-xs md:text-sm font-medium border border-[#D8D2C8] dark:border-[#3D2620]">
            <Globe size={16} className="text-[#A17808]" />
            {t.books_badge || "Ecosistema ReadMeBook"}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t.books_title || "Descarga eBooks gratis"}
            <br />
            <span className="text-[#A17808]">{t.books_title_color || "100% legales"}</span>
          </h1>

          <p className="text-lg md:text-xl text-[#6B5C57] dark:text-[#A89993] leading-relaxed">
            {t.books_subtitle || "¿No tienes ningún archivo a mano para probar la app? Te recomendamos las mejores plataformas limpias, seguras y sin anuncios para nutrir tu biblioteca local."}
          </p>
        </motion.div>

        {/* GRID DE PLATAFORMAS */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {platforms.map((platform, i) => (
            <motion.div
              key={platform.id}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              className="bg-white dark:bg-[#1E1A17] p-8 rounded-[32px] border border-[#E5DED3] dark:border-[#2B1712] hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="text-[#A17808] bg-[#F4F1EA] dark:bg-[#2B1712] p-3 rounded-2xl border border-[#E5DED3] dark:border-[#3D2620]">
                    {icons[platform.id]}
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 bg-[#E7E0D3] dark:bg-[#3D2620] text-[#2B1712] dark:text-[#F4F1EA] rounded-full">
                    {platform.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-4 text-[#2B1712] dark:text-[#F4F1EA]">
                  {platform.title}
                </h3>

                <p className="text-[#6B5C57] dark:text-[#A89993] text-sm md:text-base leading-relaxed mb-8">
                  {platform.desc}
                </p>
              </div>

              <a
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#2B1712] dark:bg-[#EAEDF4]/10 text-white dark:text-[#F4F1EA] px-6 py-4 rounded-xl text-md font-bold hover:bg-[#A17808] dark:hover:bg-[#A17808] transition-all duration-300 flex items-center justify-center gap-2 border border-transparent dark:border-white/10"
              >
                {t.books_visit_button || "Visitar Sitio"}
                <ExternalLink size={16} />
              </a>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}