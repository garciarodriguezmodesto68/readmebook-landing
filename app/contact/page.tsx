"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "",
  });

  const [status, setStatus] = useState<
    "idle" | "loading" | "sent" | "error"
  >("idle");

  const router = useRouter();

  // 🧠 Validación email simple pero efectiva
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  // 🚀 Form válido (control total del botón)
  const isValid = useMemo(() => {
    return (
      form.name.trim().length > 0 &&
      isValidEmail(form.email) &&
      form.message.trim().length > 0
    );
  }, [form]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isValid) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({
          name: "",
          email: "",
          message: "",
          honeypot: "",
        });

        // ✨ feedback UX antes de salir
        setTimeout(() => {
          router.push("/");
        }, 1200);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#F4F1EA] px-6">
      <div className="w-full max-w-xl bg-white p-8 rounded-3xl shadow-xl border border-[#E5DED3]">

        <h1 className="text-3xl font-bold mb-2">Contacto</h1>

        <p className="text-[#6B5C57] mb-8">
          Escríbenos y te responderemos lo antes posible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          {/* 🛡 Honeypot anti-bot */}
          <input
            type="text"
            value={form.honeypot}
            onChange={(e) =>
              setForm({ ...form, honeypot: e.target.value })
            }
            className="hidden"
            autoComplete="off"
          />

          {/* Nombre */}
          <input
            type="text"
            placeholder="Nombre"
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
            className="w-full p-3 border border-[#E5DED3] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A17808]"
            required
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className={`w-full p-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-[#A17808] ${
              form.email && !isValidEmail(form.email)
                ? "border-red-400"
                : "border-[#E5DED3]"
            }`}
            required
          />

          {/* Mensaje */}
          <textarea
            placeholder="Mensaje"
            value={form.message}
            onChange={(e) =>
              setForm({ ...form, message: e.target.value })
            }
            className="w-full p-3 border border-[#E5DED3] rounded-xl h-32 focus:outline-none focus:ring-2 focus:ring-[#A17808]"
            required
          />

          {/* BOTONES */}
          <div className="flex flex-col gap-3">

            {/* ENVIAR */}
            <button
              type="submit"
              disabled={!isValid || status === "loading"}
              className="w-full bg-[#A17808] text-white py-3 rounded-xl hover:bg-[#8B6907] transition-all duration-200 active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#A17808] focus:ring-offset-2 disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "loading"
                ? "Enviando..."
                : "Enviar mensaje"}
            </button>

            {/* CANCELAR */}
            <button
              type="button"
              onClick={() => router.push("/")}
              className="w-full bg-transparent border border-[#D8D2C8] text-[#2B1712] py-3 rounded-xl hover:bg-[#F4F1EA] transition"
            >
              Cancelar
            </button>
          </div>

          {/* FEEDBACK */}
          {status === "sent" && (
            <p className="text-green-600 text-sm">
              Mensaje enviado correctamente ✔
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 text-sm">
              Error al enviar. Intenta más tarde.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}