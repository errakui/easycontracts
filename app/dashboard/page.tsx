"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Plus, Crown, Download, Eye } from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [contracts, setContracts] = useState<any[]>([]);

  useEffect(() => {
    // Verifica se l'utente è loggato
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(userStr));

    // Carica contratti salvati
    const contractsStr = localStorage.getItem("contracts");
    if (contractsStr) {
      setContracts(JSON.parse(contractsStr));
    }
  }, [router]);

  if (!user) {
    return <div className="min-h-screen bg-gray-50 flex items-center justify-center">Caricamento...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">Ciao, {user.name}! 👋</h1>
            <p className="text-gray-600">Gestisci i tuoi contratti da qui</p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-8">
            <div className="card p-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-gray-600">Piano Attuale</span>
                <Crown className="w-5 h-5 text-yellow-500" />
              </div>
              <p className="text-2xl font-bold text-gray-900">Free</p>
              <Link href="/#prezzi" className="text-sm text-primary-600 hover:underline mt-2 inline-block">
                Passa a Pro →
              </Link>
            </div>

            <div className="card p-6">
              <span className="text-gray-600 mb-2 block">Contratti Creati</span>
              <p className="text-2xl font-bold text-gray-900">{contracts.length}</p>
              <p className="text-sm text-gray-500 mt-1">di 1 disponibile (Free)</p>
            </div>

            <div className="card p-6">
              <span className="text-gray-600 mb-2 block">Template Disponibili</span>
              <p className="text-2xl font-bold text-gray-900">4</p>
              <p className="text-sm text-gray-500 mt-1">50+ con Pro</p>
            </div>

            <div className="card p-6 bg-gradient-to-br from-primary-500 to-primary-600 text-white">
              <span className="mb-2 block opacity-90">Risparmio Totale</span>
              <p className="text-2xl font-bold">€{contracts.length * 600}</p>
              <p className="text-sm opacity-80 mt-1">vs costo avvocato</p>
            </div>
          </div>

          {/* CTA Upgrade se Free e ha già generato 1 contratto */}
          {contracts.length >= 1 && (
            <div className="card p-6 bg-gradient-to-r from-yellow-400 to-yellow-500 mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    🎉 Hai usato il tuo contratto gratuito!
                  </h3>
                  <p className="text-gray-800">
                    Passa a <strong>Pro</strong> per generare 10 contratti/mese a soli €19
                  </p>
                </div>
                <Link
                  href="/#prezzi"
                  className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors whitespace-nowrap"
                >
                  Sblocca Pro
                </Link>
              </div>
            </div>
          )}

          {/* Contratti */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">I Tuoi Contratti</h2>
              <Link
                href="/generate"
                className="btn-primary flex items-center disabled:opacity-50"
              >
                <Plus className="w-5 h-5 mr-2" />
                Nuovo Contratto
              </Link>
            </div>

            {contracts.length === 0 ? (
              <div className="card p-12 text-center">
                <FileText className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nessun contratto ancora</h3>
                <p className="text-gray-600 mb-6">Inizia generando il tuo primo contratto gratuito!</p>
                <Link href="/generate" className="btn-primary inline-flex items-center">
                  <Plus className="w-5 h-5 mr-2" />
                  Crea il Tuo Primo Contratto
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contracts.map((contract: any, index: number) => (
                  <div key={index} className="card p-6 hover:shadow-xl transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="w-8 h-8 text-primary-600" />
                      {contract.plan === "free" && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                          FREE (Watermark)
                        </span>
                      )}
                    </div>
                    <h3 className="font-bold text-gray-900 mb-2">{contract.type}</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Creato il {new Date(contract.date).toLocaleDateString("it-IT")}
                    </p>
                    <div className="flex space-x-2">
                      <button className="flex-1 btn-outline text-sm py-2 flex items-center justify-center">
                        <Eye className="w-4 h-4 mr-1" />
                        Vedi
                      </button>
                      <button className="flex-1 btn-primary text-sm py-2 flex items-center justify-center">
                        <Download className="w-4 h-4 mr-1" />
                        Download
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Upgrade Banner */}
          <div className="card p-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
            <Crown className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-3">Passa a easycontracts Pro</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              10 contratti al mese • Tutti i template • Nessun watermark • Export PDF professionale
            </p>
            <Link
              href="/#prezzi"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 inline-block"
            >
              Sblocca Pro - €19/mese
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

