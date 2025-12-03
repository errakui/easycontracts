import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Building2, Target, Users, Zap, Heart, Globe } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Building2 className="w-16 h-16 text-primary-400 mx-auto mb-6" />
          <h1 className="text-5xl font-bold mb-6 text-white">Chi Siamo</h1>
          <p className="text-xl text-gray-300">
            La missione di <strong className="text-primary-400">easycontracts</strong> è democratizzare l&apos;accesso
            ai contratti legali attraverso l&apos;intelligenza artificiale.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card text-center p-8">
              <Target className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Mission</h3>
              <p className="text-gray-600">
                Rendere i contratti legali accessibili, comprensibili e istantanei per tutti, eliminando barriere di
                costo e tempo.
              </p>
            </div>

            <div className="card text-center p-8">
              <Zap className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Vision</h3>
              <p className="text-gray-600">
                Diventare la piattaforma legal-tech leader in Europa, servendo milioni di freelancer e PMI con
                tecnologia AI all&apos;avanguardia.
              </p>
            </div>

            <div className="card text-center p-8">
              <Heart className="w-12 h-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-3 text-gray-900">Valori</h3>
              <p className="text-gray-600">
                Trasparenza, accessibilità, innovazione e responsabilità. Crediamo che la tecnologia debba servire le
                persone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Storia */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">La Nostra Storia</h2>
          <div className="card p-8 md:p-12">
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                <strong>easycontracts</strong> nasce dall&apos;esperienza diretta del problema: contratti troppo costosi,
                troppo lenti, troppo complicati.
              </p>
              <p>
                Come freelancer e imprenditori, abbiamo vissuto sulla nostra pelle la frustrazione di pagare €800 per
                un semplice contratto, attendere settimane per una bozza, o peggio ancora, lavorare senza contratto per
                evitare costi legali.
              </p>
              <p>
                Con l&apos;avvento di GPT-4 e Claude, abbiamo capito che la tecnologia AI poteva finalmente risolvere
                questo problema. Non più template statici, ma contratti generati intelligentemente, personalizzati per
                ogni situazione specifica.
              </p>
              <p>
                Siamo una startup in crescita, focalizzata su rendere i contratti accessibili a tutti. Il nostro obiettivo 
                è aiutare freelancer e PMI a proteggersi legalmente senza spendere una fortuna.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="card p-8 md:p-12 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
            <div className="flex items-center mb-6">
              <Building2 className="w-12 h-12 mr-4" />
              <div>
                <h2 className="text-3xl font-bold">Errakui Holding Ltd</h2>
                <p className="text-primary-100">La società dietro easycontracts</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-primary-50">
              <div>
                <p className="font-semibold text-white mb-1">Company Number</p>
                <p>16427605</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Registered In</p>
                <p>England and Wales</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Type</p>
                <p>Private Limited Company</p>
              </div>
              <div>
                <p className="font-semibold text-white mb-1">Industry</p>
                <p>Legal Technology (LegalTech) / SaaS</p>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-primary-400">
              <p className="font-semibold text-white mb-2">Contact</p>
              <p>Email: info@easycontracts.com</p>
              <p>Legal: legal@easycontracts.com</p>
              <p>Privacy: privacy@easycontracts.com</p>
            </div>
          </div>
        </div>
      </section>



      {/* CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-600 to-primary-700 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-white">Inizia con easycontracts</h2>
          <p className="text-xl text-primary-100 mb-8">
            Inizia a generare contratti professionali in 30 secondi
          </p>
          <Link
            href="/generate"
            className="bg-white text-primary-600 px-12 py-5 rounded-xl font-bold text-lg hover:bg-gray-100 inline-block shadow-2xl"
          >
            Prova Gratis Ora
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}

