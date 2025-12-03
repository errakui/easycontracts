"use client";

import { useState, useEffect } from "react";
import { X, Cookie } from "lucide-react";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookieConsent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-slide-up">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="text-4xl">🍪</div>
              <h3 className="text-xl font-bold text-gray-900">Cookie Policy</h3>
            </div>
            <p className="text-gray-600 mb-4">
              Utilizziamo i cookie per migliorare la tua esperienza su easycontracts. I cookie ci aiutano a
              personalizzare i contenuti, fornire funzionalità social e analizzare il traffico. Condividiamo
              informazioni sull&apos;utilizzo del sito con i nostri partner di social media e analytics.
            </p>
            <p className="text-sm text-gray-500 mb-4">
              Continuando a navigare accetti la nostra{" "}
              <a href="/cookie-policy" className="text-primary-600 hover:underline font-semibold">
                Cookie Policy
              </a>{" "}
              e la{" "}
              <a href="/privacy" className="text-primary-600 hover:underline font-semibold">
                Privacy Policy
              </a>
              .
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <button onClick={acceptCookies} className="btn-primary">
                <Cookie className="w-4 h-4 mr-2 inline-block" />
                Accetta Tutti i Cookie
              </button>
              <button onClick={declineCookies} className="btn-outline">
                Solo Cookie Necessari
              </button>
            </div>
          </div>
          <button
            onClick={declineCookies}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}

