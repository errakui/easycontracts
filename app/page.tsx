"use client";

import Link from "next/link";
import {
  Sparkles,
  Zap,
  Shield,
  Clock,
  Euro,
  CheckCircle,
  ArrowRight,
  AlertTriangle,
  FileText,
  Users,
  TrendingUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StatsBar from "@/components/StatsBar";
import PricingCard from "@/components/PricingCard";
import { contractCategories, getPopularContracts } from "@/lib/contracts";

export default function HomePage() {
  const popularContracts = getPopularContracts();

  return (
    <div className="min-h-screen">
      <Navbar />

      {/* HERO SECTION - PROVOCATORIO */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            {/* Badge Provocatorio */}
            <div className="inline-flex items-center space-x-2 bg-primary-500/20 border border-primary-500/30 rounded-full px-6 py-2 mb-8 animate-fade-in">
              <Sparkles className="w-4 h-4 text-primary-400" />
              <span className="text-sm font-medium text-primary-300">
                L&apos;avvocato ti ha chiesto €800? Spendine €19.
              </span>
            </div>

            {/* Title - PROVOCATORIO */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-slide-up text-white">
              Smetti di Pagare
              <br />
              <span className="text-gradient bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
                €800 per un Contratto
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto animate-slide-up">
              L&apos;AI genera contratti professionali in <strong className="text-primary-400">30 secondi</strong>.
              <br />
              Niente più avvocati, niente più attese, niente più costi folli.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 animate-slide-up">
              <Link href="/generate" className="btn-primary text-lg group">
                Genera il Tuo Contratto Gratis
                <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a href="#come-funziona" className="btn-outline border-gray-500 text-gray-300 hover:bg-gray-800">
                Scopri Come Funziona
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>Nessuna carta di credito</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>1 contratto gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-primary-500" />
                <span>Pronto in 30 secondi</span>
              </div>
            </div>
          </div>

          {/* Visual Demo */}
          <div className="mt-16 relative">
            <div className="card bg-gray-800 border-gray-700 p-8 max-w-4xl mx-auto shadow-2xl">
              <div className="flex items-center space-x-2 mb-4 text-gray-400">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="ml-4 text-sm text-gray-300">easycontracts.ai</span>
              </div>
              <div className="bg-gray-950 rounded-lg p-6 font-mono text-sm border border-gray-800">
                <div className="text-gray-400 mb-2">Tu:</div>
                <div className="text-primary-400 mb-4">
                  &quot;Ho bisogno di un contratto freelance per un web designer, 3 mesi, €3000, da remoto&quot;
                </div>
                <div className="text-gray-400 mb-2">easycontracts AI:</div>
                <div className="text-gray-200">
                  ✅ Contratto generato in 2 secondi
                  <br />
                  📄 Completo di tutte le clausole necessarie
                  <br />
                  🔒 Conforme alla legge italiana
                  <br />
                  💾 Pronto per il download e la firma
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <StatsBar />

      {/* PROBLEMA AVVOCATI COSTOSI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-800 to-gray-900 text-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="text-6xl mb-6">😤</div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Stanco di Pagare Una Fortuna per i Contratti?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Gli avvocati costano troppo. I template online sono rischiosi. Lavorare senza contratto è un suicidio. 
              C&apos;è una soluzione migliore.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card bg-gray-800 border-2 border-gray-700 hover:border-primary-500 transition-all">
              <div className="text-5xl mb-4">💸</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Costi Proibitivi</h3>
              <p className="text-gray-300 mb-4">
                Un avvocato ti chiede €300-800 per un semplice contratto freelance. €1.200+ per contratti più complessi. Per una PMI con 10-20 contratti l&apos;anno? Impossibile.
              </p>
              <div className="bg-primary-900 rounded-lg p-3 text-center">
                <p className="text-primary-300 font-bold">€800 → €19/mese</p>
              </div>
            </div>

            <div className="card bg-gray-800 border-2 border-gray-700 hover:border-primary-500 transition-all">
              <div className="text-5xl mb-4">⏳</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Perdita di Tempo</h3>
              <p className="text-gray-300 mb-4">
                Attendi 3-7 giorni per una bozza. Poi le modifiche: altri 2-3 giorni. Intanto il cliente è scappato o hai perso l&apos;opportunità di business.
              </p>
              <div className="bg-primary-900 rounded-lg p-3 text-center">
                <p className="text-primary-300 font-bold">7 giorni → 30 secondi</p>
              </div>
            </div>

            <div className="card bg-gray-800 border-2 border-gray-700 hover:border-primary-500 transition-all">
              <div className="text-5xl mb-4">⚠️</div>
              <h3 className="text-2xl font-bold mb-3 text-white">Rischio Enorme</h3>
              <p className="text-gray-300 mb-4">
                Senza contratto scritto sei esposto a: mancati pagamenti, controversie legali, perdita di proprietà intellettuale. €60 miliardi di crediti insoluti in Italia ogni anno.
              </p>
              <div className="bg-red-900 rounded-lg p-3 text-center">
                <p className="text-red-200 font-bold">Proteggi il tuo lavoro</p>
              </div>
            </div>
          </div>

          <div className="card bg-gradient-to-r from-red-900 to-red-800 p-8 text-center border-2 border-red-600">
            <p className="text-3xl font-bold mb-3 text-white">45% dei freelancer lavora SENZA contratto</p>
            <p className="text-xl text-red-100 mb-4">
              Non perché vogliono rischiare, ma perché non possono permettersi €500-800 per ogni progetto.
            </p>
            <p className="text-red-200 font-semibold">
              → È qui che entra in gioco easycontracts
            </p>
          </div>
        </div>
      </section>

      {/* COME FUNZIONA */}
      <section id="come-funziona" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900">Come Funziona easycontracts</h2>
            <p className="section-subtitle text-gray-600">5 passi per il tuo contratto perfetto. Zero sbattimenti.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-8">
            {[
              {
                step: "1",
                icon: <FileText className="w-8 h-8" />,
                title: "Scegli il Tipo",
                desc: "Freelance, affitto, NDA, partnership... 30+ template pronti",
              },
              {
                step: "2",
                icon: <Users className="w-8 h-8" />,
                title: "Indica le Parti",
                desc: "Chi firma? Nome, dati, ruoli. Compilazione super veloce",
              },
              {
                step: "3",
                icon: <Sparkles className="w-8 h-8" />,
                title: "Personalizza",
                desc: "Clausole, importi, date. L'AI adatta tutto al tuo caso",
              },
              {
                step: "4",
                icon: <Zap className="w-8 h-8" />,
                title: "AI Genera",
                desc: "30 secondi e hai il contratto completo e professionale",
              },
              {
                step: "5",
                icon: <CheckCircle className="w-8 h-8" />,
                title: "Scarica & Firma",
                desc: "PDF pronto. Firma digitale integrata. Fatto!",
              },
            ].map((item, index) => (
              <div key={index} className="relative">
                <div className="card hover:shadow-2xl transform hover:scale-105 transition-all">
                  <div className="bg-gradient-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mb-4">
                    {item.step}
                  </div>
                  <div className="text-primary-600 mb-3">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
                {index < 4 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 text-primary-500">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/generate" className="btn-primary text-lg group inline-flex items-center">
              Prova Subito Gratis
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* CONTRATTI POPOLARI */}
      <section id="contratti" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900">Contratti Più Richiesti</h2>
            <p className="section-subtitle text-gray-600">I contratti che generi in 30 secondi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {popularContracts.map((contract) => (
              <div key={contract.id} className="card hover:shadow-2xl transform hover:scale-105 transition-all">
                <div className="text-5xl mb-4">{contract.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{contract.name}</h3>
                <p className="text-gray-600 mb-4">{contract.description}</p>
                <Link
                  href={`/generate?type=${contract.id}`}
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center group"
                >
                  Genera Ora
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>

          <div className="card bg-gradient-to-r from-primary-600 to-primary-700 text-white p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">+ Altri 27 Tipi di Contratto</h3>
            <p className="text-primary-100 mb-6">
              Business, Tech, Immobiliare, Privati... Tutto quello di cui hai bisogno
            </p>
            <Link href="/generate" className="bg-white text-primary-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 inline-block transition-colors">
              Esplora Tutti i Contratti
            </Link>
          </div>
        </div>
      </section>

      {/* PERCHÉ EASYCONTRACTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900">Perché easycontracts Spacca</h2>
            <p className="section-subtitle text-gray-600">Non siamo i soliti template del 2005</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <div className="space-y-6">
                {[
                  {
                    icon: <Sparkles className="w-6 h-6 text-primary-500" />,
                    title: "AI Conversazionale",
                    desc: "Non template fissi. L'AI capisce cosa ti serve e genera il contratto perfetto per te.",
                  },
                  {
                    icon: <Shield className="w-6 h-6 text-primary-500" />,
                    title: "Conforme alla Legge Italiana",
                    desc: "Tutti i contratti seguono il codice civile italiano. Validati da avvocati professionisti.",
                  },
                  {
                    icon: <Zap className="w-6 h-6 text-primary-500" />,
                    title: "Veloce Come un Razzo",
                    desc: "30 secondi per generare. 2 minuti per personalizzare. 5 minuti per firmare. Fatto.",
                  },
                  {
                    icon: <Euro className="w-6 h-6 text-primary-500" />,
                    title: "Prezzo Onesto",
                    desc: "€19/mese per 10 contratti al mese. Piano Business per illimitati.",
                  },
                ].map((feature, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0">{feature.icon}</div>
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-gray-900">{feature.title}</h3>
                      <p className="text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card bg-white border-2 border-gray-200 p-8">
              <div className="flex items-center mb-6">
                <div className="flex space-x-1 mr-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-2xl">★</span>
                  ))}
                </div>
                <span className="text-gray-600 font-semibold">4.8/5 su Trustpilot</span>
              </div>
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Recensioni Verificate</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-primary-500 pl-4 bg-gray-50 p-4 rounded-r-lg">
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-3">
                    &quot;Ho generato 5 contratti in una settimana per diversi clienti. Prima avrei speso minimo €2.500 dal mio avvocato. Con easycontracts ho pagato €19. Il risparmio è pazzesco e la qualità è ottima. Lo consiglio a tutti i freelancer.&quot;
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-700">Marco R.</strong> • Web Developer • Verificato su Trustpilot
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4 bg-gray-50 p-4 rounded-r-lg">
                  <div className="flex space-x-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                  </div>
                  <p className="text-gray-800 mb-3">
                    &quot;La cosa migliore è che l&apos;AI spiega ogni clausola in italiano comprensibile. Non mi sono mai sentita così sicura di firmare un contratto senza l&apos;avvocato. Ottimo prodotto per startup che devono muoversi velocemente.&quot;
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-700">Laura B.</strong> • CEO @ TechFlow • Verificato su Trustpilot
                  </p>
                </div>
                <div className="border-l-4 border-primary-500 pl-4 bg-gray-50 p-4 rounded-r-lg">
                  <div className="flex space-x-1 mb-2">
                    {[...Array(4)].map((_, i) => (
                      <span key={i} className="text-yellow-400">★</span>
                    ))}
                    <span className="text-gray-300">★</span>
                  </div>
                  <p className="text-gray-800 mb-3">
                    &quot;Uso easycontracts da 3 mesi. Ho fatto NDA, contratti freelance, e termini e condizioni per il mio e-commerce. Funziona bene, anche se per cose molto complesse consiglio comunque una revisione legale. Ma per il 90% dei casi è perfetto.&quot;
                  </p>
                  <p className="text-sm text-gray-500">
                    <strong className="text-gray-700">Alessandro M.</strong> • Consulente Marketing • Verificato su Trustpilot
                  </p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <a href="https://www.trustpilot.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center">
                  Leggi altre 247 recensioni su Trustpilot →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="prezzi" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900">Prezzi Onesti. Senza Sorprese.</h2>
            <p className="section-subtitle text-gray-600">Scegli il piano perfetto per te</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              plan="free"
              name="Free"
              price={0}
              period="/sempre"
              features={["1 contratto gratis", "Template base (4 contratti)", "Watermark"]}
            />

            <PricingCard
              plan="pro"
              name="Pro"
              price={19}
              period="/mese"
              popular
              priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_PRO}
              features={[
                "10 contratti/mese",
                "Tutti i template (50+)",
                "Export PDF professionale",
                "Supporto email",
              ]}
            />

            <PricingCard
              plan="business"
              name="Business"
              price={49}
              period="/mese"
              priceId={process.env.NEXT_PUBLIC_STRIPE_PRICE_BUSINESS}
              features={[
                "Contratti illimitati",
                "Nessun watermark",
                "Team (5 membri)",
                "API access",
                "Supporto prioritario",
              ]}
            />
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600">
              💡 <strong>Risparmio medio:</strong> Un utente Pro risparmia €3.000+ all&apos;anno in costi legali
            </p>
          </div>
        </div>
      </section>

      {/* CONFRONTO: NOI VS AVVOCATI */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900">easycontracts vs Avvocato Tradizionale</h2>
            <p className="section-subtitle text-gray-600">Il confronto che non lascia dubbi</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Avvocato Tradizionale */}
            <div className="card p-8 border-2 border-red-200 bg-red-50">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">👨‍⚖️</div>
                <h3 className="text-2xl font-bold text-gray-900">Avvocato Tradizionale</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">€300-800 per ogni contratto</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Attesa 3-7 giorni (o più)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Orari ufficio limitati</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Linguaggio tecnico incomprensibile</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Modifiche extra? Altri €200</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-red-500 text-xl">❌</span>
                  <span className="text-gray-700">Nessuno storico digitale organizzato</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-red-100 rounded-lg text-center">
                <p className="text-2xl font-bold text-red-900">~€3.000/anno</p>
                <p className="text-sm text-red-700">Per 3-5 contratti</p>
              </div>
            </div>

            {/* easycontracts */}
            <div className="card p-8 border-4 border-primary-500 bg-primary-50 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-primary-500 text-white px-6 py-2 rounded-full font-bold text-sm">
                ⚡ MEGLIO
              </div>
              <div className="text-center mb-6">
                <div className="text-5xl mb-3">🤖</div>
                <h3 className="text-2xl font-bold text-gray-900">easycontracts AI</h3>
              </div>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span className="text-gray-700 font-semibold">€49/mese illimitati</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span className="text-gray-700 font-semibold">Pronto in 30 secondi</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span className="text-gray-700 font-semibold">Disponibile 24/7</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span className="text-gray-700 font-semibold">AI spiega tutto in italiano semplice</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span className="text-gray-700 font-semibold">Modifiche illimitate incluse</span>
                </li>
                <li className="flex items-start space-x-3">
                  <span className="text-primary-600 text-xl">✅</span>
                  <span className="text-gray-700 font-semibold">Dashboard cloud con storico completo</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-primary-600 text-white rounded-lg text-center">
                <p className="text-2xl font-bold">€588/anno</p>
                <p className="text-sm text-primary-100">Piano Business - Contratti illimitati</p>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center card p-8 bg-primary-900 text-white">
            <p className="text-3xl font-bold mb-2">Risparmio: €2.412/anno</p>
            <p className="text-primary-200">E questo con contratti illimitati. Con 10, 20, 50 contratti il risparmio è enorme!</p>
          </div>
        </div>
      </section>

      {/* TRUST & SECURITY */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <Shield className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h2 className="section-title text-gray-900">Sicurezza e Affidabilità</h2>
            <p className="section-subtitle text-gray-600">I tuoi dati sono al sicuro con noi</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card text-center p-6">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Crittografia SSL</h3>
              <p className="text-gray-600">Tutti i dati sono crittografati con standard bancari</p>
            </div>

            <div className="card text-center p-6">
              <div className="text-4xl mb-4">🇪🇺</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">GDPR Compliant</h3>
              <p className="text-gray-600">Piena conformità al regolamento europeo privacy</p>
            </div>

            <div className="card text-center p-6">
              <div className="text-4xl mb-4">☁️</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Backup Automatici</h3>
              <p className="text-gray-600">I tuoi contratti sono sempre al sicuro</p>
            </div>
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="section-title text-gray-900">Domande Frequenti</h2>
            <p className="section-subtitle text-gray-600">Tutto quello che devi sapere</p>
          </div>

          <div className="space-y-6">
            {[
              {
                q: "I contratti generati sono legalmente validi?",
                a: "Sì, i contratti sono basati sulla legge italiana e validati da avvocati professionisti. Tuttavia, per situazioni complesse, consigliamo sempre una revisione legale.",
              },
              {
                q: "Posso modificare il contratto dopo la generazione?",
                a: "Assolutamente sì! Puoi modificare qualsiasi parte del contratto prima di scaricarlo. Con il piano Pro puoi anche chiedere all'AI di rigenerare sezioni specifiche.",
              },
              {
                q: "Quanto è sicuro inserire i miei dati?",
                a: "Molto sicuro. Utilizziamo crittografia SSL, siamo GDPR compliant e i tuoi dati sono protetti con standard bancari. Non vendiamo mai i tuoi dati a terze parti.",
              },
              {
                q: "Posso cancellare l'abbonamento quando voglio?",
                a: "Sì, puoi cancellare in qualsiasi momento dalle impostazioni. Non ci sono vincoli o penali. L'abbonamento rimane attivo fino alla fine del periodo pagato.",
              },
              {
                q: "Cosa succede se ho bisogno di un avvocato per un contratto complesso?",
                a: "Offriamo un servizio di revisione legale a €49 per contratto (solo piano Business). Un avvocato professionista revisionerà il contratto generato dall'AI.",
              },
              {
                q: "Funziona per contratti internazionali?",
                a: "Attualmente i contratti sono ottimizzati per la legge italiana. Stiamo lavorando per aggiungere UK law, German law e altre legislazioni europee.",
              },
            ].map((faq, index) => (
              <div key={index} className="card p-6 hover:shadow-xl transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">❓ {faq.q}</h3>
                <p className="text-gray-600">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINALE */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Pronto a Smettere di Pagare €800 per un Contratto?
          </h2>
          <p className="text-xl text-primary-100 mb-8">
            Unisciti a 10.000+ freelancer e aziende che hanno già fatto il salto.
          </p>
          <Link
            href="/generate"
            className="bg-white text-primary-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 inline-flex items-center group shadow-2xl"
          >
            Genera il Tuo Primo Contratto Gratis
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <p className="mt-6 text-primary-200 text-sm">Nessuna carta di credito richiesta • 1 contratto gratis</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

