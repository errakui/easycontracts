import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <MessageSquare className="w-16 h-16 text-primary-600 mx-auto mb-6" />
            <h1 className="text-5xl font-bold text-gray-900 mb-4 text-gray-900">Contattaci</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hai domande? Siamo qui per aiutarti
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Informazioni di Contatto</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">info@easycontracts.com</p>
                    <p className="text-sm text-gray-500 mt-1">Risponderemo entro 24 ore</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Supporto</h3>
                    <p className="text-gray-600">support@easycontracts.com</p>
                    <p className="text-sm text-gray-500 mt-1">Per problemi tecnici</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Legale</h3>
                    <p className="text-gray-600">legal@easycontracts.com</p>
                    <p className="text-sm text-gray-500 mt-1">Questioni legali e privacy</p>
                  </div>
                </div>
              </div>

              <div className="card p-6 bg-white">
                <h3 className="font-bold text-gray-900 mb-4">Errakui Holding Ltd</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p><strong>Company Number:</strong> 16427605</p>
                  <p><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</p>
                  <p><strong>Registered in:</strong> England and Wales</p>
                  <p><strong>Industry:</strong> Legal Technology (LegalTech) / SaaS</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Inviaci un Messaggio</h2>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nome *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Il tuo nome"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="la-tua@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Oggetto *</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Di cosa vuoi parlare?"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Messaggio *</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Scrivi qui il tuo messaggio..."
                  />
                </div>

                <button type="submit" className="btn-primary w-full">
                  Invia Messaggio
                </button>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Inviando questo form accetti la nostra{" "}
                <a href="/privacy" className="text-primary-600 hover:underline">
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Domande Frequenti</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-2">🕐 Tempi di Risposta</h3>
                <p className="text-gray-600 text-sm">
                  Rispondiamo entro 24 ore lavorative (Lun-Ven, 9-18)
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-2">💬 Supporto Tecnico</h3>
                <p className="text-gray-600 text-sm">
                  Per problemi tecnici urgenti, scrivi a support@easycontracts.com
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-2">🤝 Partnership</h3>
                <p className="text-gray-600 text-sm">
                  Interessato a collaborare? Contattaci a info@easycontracts.com
                </p>
              </div>
              <div className="card p-6">
                <h3 className="font-bold text-gray-900 mb-2">📄 Consulenza Legale</h3>
                <p className="text-gray-600 text-sm">
                  Non forniamo consulenza legale diretta. Usa il nostro servizio di revisione.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

