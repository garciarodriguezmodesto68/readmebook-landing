"use client";

import { useState, useEffect } from "react";
import { translations, Locale } from "./translations";

export function useLocale(initial: Locale = "es") {
  const [locale, setLocale] = useState<Locale>(() => {
    if (typeof window !== "undefined") {
      return (localStorage.getItem("locale") as Locale) || initial;
    }
    return initial;
  });

  useEffect(() => {
    localStorage.setItem("locale", locale);
  }, [locale]);

  const t = translations[locale] ?? translations.es;

  return {
    locale,
    setLocale,
    t,
  };
}