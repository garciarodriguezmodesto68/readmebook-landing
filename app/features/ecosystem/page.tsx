"use client";

import { useLocale } from "@/src/i18n/useLocale";
import { ArrowLeft, ShieldAlert, FolderHeart, Languages, KeyRound } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function EcosystemPage() {
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
            {locale === "es" ? "Administración y Privacidad Absoluta" : "Administration & Absolute Privacy"}
          </h1>
          <p className="text-lg md:text-xl text-[#6B5C57] leading-relaxed">
            {locale === "es" 
              ? "Toma el control total de tu entorno de lectura. Sin cuentas en la nube, sin rastreo. Tus datos te pertenecen solo a ti."
              : "Take full control of your reading environment. No cloud accounts, no tracking. Your data belongs exclusively to you."}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><KeyRound size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Petición de Login Seguro" : "Secure Login Request"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Protege tu biblioteca local desde el primer segundo con acceso biométrico o PIN al arrancar la app." : "Protect your local library from the very first second with biometric access or a PIN code upon launch."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><FolderHeart size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Categorías e Idiomas" : "Categories & Languages"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Organiza tus libros con etiquetas personalizadas y cambia el idioma de la interfaz al instante." : "Organize your books with custom tags and instantly change the interface language."}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-[#A17808] shrink-0"><ShieldAlert size={28} /></div>
              <div>
                <h3 className="text-xl font-bold mb-2">{locale === "es" ? "Borrado Radical y Recuperación" : "Radical Deletion & Recovery"}</h3>
                <p className="text-[#6B5C57] text-sm">{locale === "es" ? "Exporta copias de seguridad locales. Si decides borrar tu perfil, se destruye todo de tu dispositivo de forma irreversible." : "Export local backups. If you decide to delete your profile, everything is irreversibly wiped from your device."}</p>
              </div>
            </div>
          </div>

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
        </div>
      </div>
    </main>
  );
}