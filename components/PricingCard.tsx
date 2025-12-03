"use client";

import { CheckCircle, Crown } from "lucide-react";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "");

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
      alert("Stripe non ancora configurato. Controlla .env.local");
      return;
    }

    // Chiedi email all'utente
    const email = prompt("Inserisci la tua email per continuare:");
    if (!email || !email.includes("@")) {
      alert("Email non valida!");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, email }),
      });

      const { url } = await response.json();

      if (url) {
        window.location.href = url;
      }
    } catch (error) {
      console.error("Errore checkout:", error);
      alert("Errore durante il checkout. Riprova.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`card hover:shadow-2xl transition-all ${
        popular ? "border-4 border-primary-500 relative" : ""
      }`}
    >
      {popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          🔥 Più Popolare
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2 text-gray-900">{name}</h3>
      <div className="mb-6">
        <span
          className={`text-5xl font-bold ${
            popular ? "text-primary-600" : "text-gray-900"
          }`}
        >
          €{price}
        </span>
        <span className="text-gray-600">{period}</span>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center space-x-2">
            <CheckCircle className="w-5 h-5 text-primary-500 flex-shrink-0" />
            <span className={index === 0 ? "font-semibold" : ""}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={handleCheckout}
        disabled={loading}
        className={`w-full text-center block ${
          popular ? "btn-primary" : plan === "free" ? "btn-outline" : "btn-secondary"
        } ${loading ? "opacity-50 cursor-wait" : ""}`}
      >
        {loading ? "Caricamento..." : plan === "free" ? "Inizia Gratis" : `Inizia ${name}`}
      </button>

      {popular && (
        <p className="text-center text-sm text-gray-500 mt-3">
          💡 Più scelto dai freelancer
        </p>
      )}
    </div>
  );
}

