import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogPage() {
  const articles = [
    {
      title: "Contratto Freelance 2025: Guida Completa con Modello Gratis",
      excerpt: "Tutto quello che devi sapere per creare un contratto freelance perfetto: clausole essenziali, errori da evitare e template gratuito.",
      date: "15 Gennaio 2025",
      slug: "contratto-freelance-2025-guida",
      category: "Guide",
      readTime: "8 min",
    },
    {
      title: "NDA: Cos'è, Quando Serve e Come Scriverlo (con Esempio)",
      excerpt: "Guida pratica all'accordo di riservatezza: quando è obbligatorio, cosa includere e modello NDA pronto all'uso.",
      date: "12 Gennaio 2025",
      slug: "nda-accordo-riservatezza-guida",
      category: "Legal",
      readTime: "6 min",
    },
    {
      title: "Quanto Costa un Avvocato per un Contratto? La Verità",
      excerpt: "Analisi dettagliata dei costi legali in Italia nel 2025 e come risparmiare migliaia di euro con le alternative digitali.",
      date: "8 Gennaio 2025",
      slug: "costi-avvocato-contratto-2025",
      category: "Business",
      readTime: "5 min",
    },
    {
      title: "Contratto di Affitto 2025: Nuove Regole e Aggiornamenti",
      excerpt: "Le novità legislative sulla locazione immobiliare e tutto quello che proprietari e inquilini devono sapere.",
      date: "5 Gennaio 2025",
      slug: "contratto-affitto-2025-novita",
      category: "Immobiliare",
      readTime: "10 min",
    },
    {
      title: "AI per Contratti Legali: Funziona Davvero?",
      excerpt: "Come l'intelligenza artificiale sta rivoluzionando il mondo legal tech: vantaggi, limiti e casi d'uso reali.",
      date: "2 Gennaio 2025",
      slug: "ai-contratti-legali-funziona",
      category: "Tech",
      readTime: "7 min",
    },
    {
      title: "Clausola di Riservatezza: 7 Errori che Possono Costarti Caro",
      excerpt: "Gli errori più comuni nelle clausole di confidenzialità che mettono a rischio la tua azienda e come evitarli.",
      date: "29 Dicembre 2024",
      slug: "errori-clausola-riservatezza",
      category: "Guide",
      readTime: "6 min",
    },
    {
      title: "Contratto a Progetto vs Prestazione Occasionale: Cosa Scegliere",
      excerpt: "Guida fiscale e legale per scegliere la forma contrattuale giusta per la tua collaborazione professionale.",
      date: "22 Dicembre 2024",
      slug: "contratto-progetto-vs-occasionale",
      category: "Lavoro",
      readTime: "9 min",
    },
    {
      title: "Privacy Policy GDPR 2025: Guida Aggiornata per E-commerce",
      excerpt: "Come scrivere una privacy policy conforme GDPR per il tuo shop online: obblighi, sanzioni e template.",
      date: "18 Dicembre 2024",
      slug: "privacy-policy-gdpr-ecommerce",
      category: "Tech",
      readTime: "12 min",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <BookOpen className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-4">Blog</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Guide, consigli e risorse per gestire i tuoi contratti in modo intelligente
            </p>
          </div>


          {/* Preview Articles */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Articoli Recenti</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article, index) => (
                <div key={index} className="card p-6 hover:shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-primary-600 uppercase tracking-wide">
                      {article.category}
                    </span>
                    <span className="text-xs text-gray-500">{article.readTime}</span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">{article.title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs text-gray-500">{article.date}</span>
                    <button className="text-primary-600 font-semibold text-sm hover:text-primary-700">
                      Leggi →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div className="card p-8 bg-gradient-to-r from-primary-600 to-primary-700 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Resta Aggiornato</h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Iscriviti alla newsletter per ricevere i nuovi articoli e consigli pratici sui contratti
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="La tua email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Iscriviti
              </button>
            </div>
            <p className="text-xs text-primary-200 mt-4">Niente spam. Solo contenuti di valore.</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

