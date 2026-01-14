"use client";

import { CheckCircle } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface PricingCardProps {
  plan: "free" | "pro" | "business";
  name: string;
  price: number;
  period?: string;
  features: string[];
  popular?: boolean;
  priceId?: string;
}

export default function PricingCard({
  plan,
  name,
  price,
  period = "/mese",
  features,
  popular,
  priceId,
}: PricingCardProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (plan === "free") {
      window.location.href = "/generate";
      return;
    }

    if (!priceId) {
      alert("Stripe non configurato. Controlla le variabili d'ambiente.");
      return;
    }

    const email = prompt("Inserisci la tua email:");
    if (!email || !email.includes("@")) {
      alert("Email non valida!");
      return;
    }

    localStorage.setItem("checkout_email", email);
    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, email }),
      });

      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error(data.error || "Errore checkout");
      }
    } catch (error: any) {
      console.error(error);
      alert(error.message);
      localStorage.removeItem("checkout_email");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`relative p-8 rounded-3xl ${
      popular 
        ? "bg-gradient-to-b from-violet-600/20 to-violet-600/5 border-2 border-violet-500/50 scale-105" 
        : "bg-white/5 border border-white/10"
    }`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-violet-500 rounded-full text-sm font-bold text-white">
          Più Popolare
        </div>
      )}

      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <div className="flex items-baseline gap-1 mb-6">
        <span className="text-5xl font-black text-white">€{price}</span>
        <span className="text-gray-500">{period}</span>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-3">
            <CheckCircle className={`w-5 h-5 ${popular ? "text-violet-400" : "text-gray-500"}`} />
            <span className={popular ? "text-white" : "text-gray-400"}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full py-4 rounded-2xl font-semibold transition-all ${
          popular 
            ? "bg-violet-500 text-white hover:bg-violet-400" 
            : "border border-white/20 text-white hover:bg-white/5"
        } ${loading ? "opacity-50 cursor-wait" : ""}`}
      >
        {loading ? "Caricamento..." : plan === "free" ? "Inizia Gratis" : `Scegli ${name}`}
      </button>
    </div>
  );
}
