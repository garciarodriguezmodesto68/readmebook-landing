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

  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

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
        setForm({ name: "", email: "", message: "", honeypot: "" });
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
    // Fondo de pantalla: crema en claro, gris muy oscuro en dark
    <main className="min-h-screen flex items-center justify-center bg-[#F4F1EA] dark:bg-[#121212] px-6 py-12 transition-colors duration-300">
      
      {/* Tarjeta: blanca en claro, marrón muy oscuro en dark */}
      <div className="w-full max-w-xl bg-white dark:bg-[#1E1A17] p-8 md:p-12 rounded-[32px] shadow-xl border border-[#E5DED3] dark:border-[#2B1712]">

        {/* Título: marrón oscuro en claro, crema en dark */}
        <h1 className="text-3xl font-bold mb-2 text-[#2B1712] dark:text-[#F4F1EA]">Contacto</h1>

        <p className="text-[#6B5C57] dark:text-[#A89993] mb-8">
          Escríbenos y te responderemos lo antes posible.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <input
            type="text"
            value={form.honeypot}
            onChange={(e) => setForm({ ...form, honeypot: e.target.value })}
            className="hidden"
            autoComplete="off"
          />

          {/* Inputs: Texto adaptable y fondo que se oscurece ligeramente en dark */}
          <div>
            <input
              type="text"
              placeholder="Nombre"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full p-4 bg-white dark:bg-[#2B1712] border border-[#E5DED3] dark:border-[#3D2620] rounded-2xl text-[#2B1712] dark:text-[#F4F1EA] placeholder-[#6B5C57] dark:placeholder-[#A89993]/50 focus:outline-none focus:ring-2 focus:ring-[#A17808] transition-all"
              required
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className={`w-full p-4 bg-white dark:bg-[#2B1712] border rounded-2xl text-[#2B1712] dark:text-[#F4F1EA] placeholder-[#6B5C57] dark:placeholder-[#A89993]/50 focus:outline-none focus:ring-2 focus:ring-[#A17808] transition-all ${
                form.email && !isValidEmail(form.email)
                  ? "border-red-400"
                  : "border-[#E5DED3] dark:border-[#3D2620]"
              }`}
              required
            />
          </div>

          <div>
            <textarea
              placeholder="Mensaje"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full p-4 bg-white dark:bg-[#2B1712] border border-[#E5DED3] dark:border-[#3D2620] rounded-2xl text-[#2B1712] dark:text-[#F4F1EA] placeholder-[#6B5C57] dark:placeholder-[#A89993]/50 h-32 focus:outline-none focus:ring-2 focus:ring-[#A17808] transition-all resize-none"
              required
            />
          </div>

          <div className="flex flex-col gap-4 pt-2">
            <button
              type="submit"
              disabled={!isValid || status === "loading"}
              className="bg-[#A17808] text-white px-6 py-4 rounded-2xl hover:bg-[#8B6907] active:scale-95 transition-all duration-300 font-medium shadow-md text-lg disabled:opacity-40 disabled:cursor-not-allowed"
            >
              {status === "loading" ? "Enviando..." : "Enviar mensaje"}
            </button>

            <button
                type="button"
                onClick={() => router.back()} // 3. Usa back() en lugar de push("/")
                className="w-full bg-transparent border border-[#D8D2C8] dark:border-[#3D2620] text-[#2B1712] dark:text-[#A89993] py-3 rounded-2xl hover:bg-[#F4F1EA] dark:hover:bg-[#2B1712] transition-colors font-medium"
                >
                Cancelar y volver
            </button>
          </div>

          {status === "sent" && (
            <p className="text-green-600 dark:text-green-400 text-center font-medium">
              ¡Mensaje enviado con éxito! ✔
            </p>
          )}

          {status === "error" && (
            <p className="text-red-600 dark:text-red-400 text-center font-medium">
              Hubo un error. Por favor, inténtalo de nuevo.
            </p>
          )}
        </form>
      </div>
    </main>
  );
}