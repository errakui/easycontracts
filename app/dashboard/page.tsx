"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { 
  FileText, Plus, Crown, Download, Eye,
  Calendar, TrendingUp, Sparkles, 
  ChevronRight, Loader2, ArrowUpRight
} from "lucide-react";

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [contracts, setContracts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleAutoLogin();
  }, []);

  const handleAutoLogin = async () => {
    const checkoutEmail = localStorage.getItem("checkout_email");
    
    if (checkoutEmail) {
      try {
        const response = await fetch("/api/auto-login", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email: checkoutEmail }),
        });

        if (response.ok) {
          const data = await response.json();
          setUser(data.user);
          localStorage.setItem("user", JSON.stringify(data.user));
          localStorage.removeItem("checkout_email");
          setLoading(false);
          return;
        }
      } catch (error) {
        console.error("Errore auto-login:", error);
      }
    }

    const userStr = localStorage.getItem("user");
    if (!userStr) {
      router.push("/login");
      return;
    }
    setUser(JSON.parse(userStr));

    const contractsStr = localStorage.getItem("contracts");
    if (contractsStr) {
      setContracts(JSON.parse(contractsStr));
    }
    setLoading(false);
  };

  const getPlanInfo = () => {
    const plan = user?.plan || "FREE";
    const limits: any = {
      FREE: { contracts: 1, templates: 4, name: "Free" },
      PRO: { contracts: 10, templates: 50, name: "Pro" },
      BUSINESS: { contracts: -1, templates: 50, name: "Business" },
    };
    return limits[plan] || limits.FREE;
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#030014]">
        <Loader2 className="w-12 h-12 text-violet-500 animate-spin" />
      </div>
    );
  }

  if (!user) return null;

  const planInfo = getPlanInfo();

  return (
    <div className="min-h-screen bg-[#030014]">
      <Navbar />

      <div className="pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
            <div>
              <h1 className="text-4xl font-black text-white mb-2">
                Ciao, {user.name?.split(' ')[0] || 'Utente'}! 👋
              </h1>
              <p className="text-gray-500">Gestisci i tuoi contratti da qui</p>
            </div>
            <div className="mt-4 md:mt-0">
              <Link
                href="/generate"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl hover:opacity-90 transition-all"
              >
                <Plus className="w-5 h-5" />
                Nuovo Contratto
              </Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-4 gap-4 mb-12">
            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500">Piano</span>
                <Crown className={`w-5 h-5 ${planInfo.name === 'Free' ? 'text-gray-500' : 'text-yellow-500'}`} />
              </div>
              <p className="text-2xl font-bold text-white mb-2">{planInfo.name}</p>
              {planInfo.name === 'Free' && (
                <Link href="/#prezzi" className="text-sm text-violet-400 hover:text-violet-300 flex items-center gap-1">
                  Passa a Pro <ChevronRight className="w-4 h-4" />
                </Link>
              )}
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500">Contratti</span>
                <FileText className="w-5 h-5 text-violet-500" />
              </div>
              <p className="text-2xl font-bold text-white">{contracts.length}</p>
              <p className="text-sm text-gray-500">
                {planInfo.contracts === -1 ? 'Illimitati' : `di ${planInfo.contracts}`}
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-500">Template</span>
                <Sparkles className="w-5 h-5 text-cyan-500" />
              </div>
              <p className="text-2xl font-bold text-white">{planInfo.templates}+</p>
              <p className="text-sm text-gray-500">Disponibili</p>
            </div>

            <div className="p-6 rounded-3xl bg-gradient-to-br from-violet-600/20 to-indigo-600/20 border border-violet-500/30">
              <div className="flex items-center justify-between mb-4">
                <span className="text-gray-300">Risparmio</span>
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-2xl font-bold text-white">€{contracts.length * 600}</p>
              <p className="text-sm text-gray-400">vs avvocato</p>
            </div>
          </div>

          {/* Upgrade Banner */}
          {planInfo.name === 'Free' && contracts.length >= 1 && (
            <div className="p-6 rounded-3xl bg-gradient-to-r from-amber-500/20 to-orange-500/20 border border-amber-500/30 mb-12">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-2xl bg-amber-500/20">
                    <Crown className="w-8 h-8 text-amber-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">
                      Hai usato il tuo contratto gratuito!
                    </h3>
                    <p className="text-gray-400">
                      Passa a Pro per 10 contratti/mese a soli €19
                    </p>
                  </div>
                </div>
                <Link
                  href="/#prezzi"
                  className="px-6 py-3 bg-white text-black font-semibold rounded-2xl hover:bg-gray-100 transition-all whitespace-nowrap"
                >
                  Sblocca Pro
                </Link>
              </div>
            </div>
          )}

          {/* Contracts */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-8">I Tuoi Contratti</h2>

            {contracts.length === 0 ? (
              <div className="p-16 rounded-3xl bg-white/5 border border-white/10 text-center">
                <div className="w-20 h-20 rounded-3xl bg-white/5 flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-10 h-10 text-gray-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">Nessun contratto</h3>
                <p className="text-gray-500 mb-8 max-w-md mx-auto">
                  Genera il tuo primo contratto gratis in 30 secondi!
                </p>
                <Link 
                  href="/generate" 
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-2xl"
                >
                  <Sparkles className="w-5 h-5" />
                  Crea il Primo Contratto
                </Link>
              </div>
            ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {contracts.map((contract: any, index: number) => (
                  <div key={index} className="p-6 rounded-3xl bg-white/5 border border-white/10 hover:border-violet-500/30 transition-all group">
                    <div className="flex items-start justify-between mb-6">
                      <div className="p-3 rounded-2xl bg-violet-500/10 group-hover:bg-violet-500/20 transition-colors">
                        <FileText className="w-6 h-6 text-violet-400" />
                      </div>
                      {contract.plan === "free" && (
                        <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-medium">
                          Watermark
                        </span>
                      )}
                    </div>
                    
                    <h3 className="font-bold text-white text-lg mb-2">
                      {contract.type}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-6">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(contract.date).toLocaleDateString("it-IT")}</span>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2 text-sm font-medium">
                        <Eye className="w-4 h-4" />
                        Vedi
                      </button>
                      <button className="flex-1 py-3 rounded-xl bg-violet-600 text-white hover:bg-violet-500 transition-all flex items-center justify-center gap-2 text-sm font-medium">
                        <Download className="w-4 h-4" />
                        PDF
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Bottom CTA */}
          <div className="mt-16 p-10 rounded-3xl bg-gradient-to-br from-violet-600/10 via-fuchsia-600/10 to-indigo-600/10 border border-violet-500/20 text-center">
            <Crown className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Sblocca Tutto il Potenziale
            </h3>
            <p className="text-gray-400 mb-8 max-w-xl mx-auto">
              Con Pro hai 10 contratti/mese, tutti i template e nessun watermark.
            </p>
            <Link
              href="/#prezzi"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-semibold rounded-2xl hover:bg-gray-100 transition-all"
            >
              Scopri i Piani
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
