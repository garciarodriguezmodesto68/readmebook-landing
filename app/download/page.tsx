"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useLocale } from "@/src/i18n/useLocale";

import { 
  ArrowLeft, 
  Download, 
  AlertTriangle, 
  MessageSquare, 
  ShieldCheck 
} from "lucide-react";

export default function DownloadPage() {
  const { locale, setLocale, t } = useLocale("es");
  const apkUrl = "/downloads/readmebook.apk";
  const router = useRouter();
  
  // La lógica va aquí, fuera del return
  const [isDownloading, setIsDownloading] = useState(false);

  return (
    <main className="min-h-screen bg-[#F4F1EA] dark:bg-[#121212] text-[#2B1712] dark:text-[#F4F1EA] transition-colors duration-300">
      
      <nav className="max-w-7xl mx-auto px-6 py-6">
        <button 
          onClick={() => router.back()} 
          className="inline-flex items-center gap-2 text-[#6B5C57] hover:text-[#A17808] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          {t.download_back}
        </button>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-white dark:bg-[#1E1A17] rounded-[40px] p-8 md:p-12 shadow-xl border border-[#E5DED3] dark:border-[#2B1712]">
          
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-[#A17808]/10 p-4 rounded-3xl mb-6">
              <Download size={48} className="text-[#A17808]" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">{t.download_title}</h1>
            <p className="text-lg text-[#6B5C57] dark:text-[#A89993]">
              {t.download_subtitle}
            </p>
          </div>

          <div className="bg-[#FDF8F1] dark:bg-[#2B1712] border border-[#E5DED3] dark:border-[#3D2620] rounded-3xl p-6 mb-8">
            <div className="flex gap-4">
              <AlertTriangle className="text-[#A17808] shrink-0" size={24} />
              <div>
                <h3 className="font-bold mb-1 text-[#2B1712] dark:text-[#F4F1EA]">{t.download_warning_title}</h3>
                <p className="text-sm text-[#6B5C57] dark:text-[#A89993] leading-relaxed">
                  {t.download_warning_text}
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-6 mb-10">
            <div className="flex gap-4 items-start">
              <div className="bg-green-100 dark:bg-green-900/30 p-2 rounded-lg text-green-700 dark:text-green-400">
                <ShieldCheck size={20} />
              </div>
              <div>
                <p className="font-medium text-[#2B1712] dark:text-[#F4F1EA]">{t.download_feature_privacy_title}</p>
                <p className="text-sm text-[#6B5C57] dark:text-[#A89993]">{t.download_feature_privacy_desc}</p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-2 rounded-lg text-blue-700 dark:text-blue-400">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="font-medium text-[#2B1712] dark:text-[#F4F1EA]">{t.download_feature_beta_title}</p>
                <p className="text-sm text-[#6B5C57] dark:text-[#A89993]">{t.download_feature_beta_desc}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <a 
              href={apkUrl}
              download
              onClick={() => {
                setIsDownloading(true);
                setTimeout(() => {
                  router.back();
                }, 1500);
              }}
              className={`w-full py-5 rounded-2xl text-center text-xl font-bold transition-all shadow-lg active:scale-[0.98] cursor-pointer flex items-center justify-center gap-3 ${
                isDownloading 
                  ? "bg-green-600 text-white" 
                  : "bg-[#A17808] text-white hover:bg-[#8B6907]"
              }`}
            >
              {isDownloading ? t.download_preparing : t.download_button}
            </a>
            
            <button
              type="button"
              disabled={isDownloading}
              onClick={() => router.back()}
              className="w-full bg-transparent border border-[#D8D2C8] dark:border-[#3D2620] text-[#2B1712] dark:text-[#A89993] py-4 rounded-2xl hover:bg-[#F4F1EA] dark:hover:bg-[#2B1712] transition-colors font-medium disabled:opacity-50"
            >
              {isDownloading ? t.download_returning : t.download_cancel}
            </button>

            <p className="text-center text-[10px] text-[#6B5C57] opacity-60 mt-2">
              {t.download_footer_note}
            </p>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#6B5C57] mb-4 text-sm md:text-base">{t.download_feedback_text}</p>
          <Link href="/contact" className="text-[#A17808] font-bold hover:underline underline-offset-4">
            {t.download_feedback_link}
          </Link>
        </div>
      </section>
    </main>
  );
}