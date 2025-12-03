import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Cookie } from "lucide-react";

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🍪</div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
            <p className="text-lg text-gray-600">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>
          </div>

          <div className="card p-8 md:p-12 prose prose-lg max-w-none">
            <h2>1. Cosa Sono i Cookie? 🍪</h2>
            <p>
              I cookie sono piccoli file di testo che vengono memorizzati sul tuo dispositivo quando visiti un sito
              web. Ci aiutano a migliorare la tua esperienza, ricordare le tue preferenze e comprendere come utilizzi
              il nostro sito.
            </p>

            <h2>2. Tipi di Cookie che Utilizziamo</h2>

            <h3>2.1 Cookie Essenziali (Necessari) 🔒</h3>
            <p>
              Questi cookie sono fondamentali per il funzionamento del sito e non possono essere disabilitati nei
              nostri sistemi.
            </p>
            <table>
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Scopo</th>
                  <th>Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>session_id</td>
                  <td>Mantiene la tua sessione attiva</td>
                  <td>Sessione</td>
                </tr>
                <tr>
                  <td>cookieConsent</td>
                  <td>Memorizza la tua preferenza sui cookie</td>
                  <td>1 anno</td>
                </tr>
                <tr>
                  <td>auth_token</td>
                  <td>Gestisce l&apos;autenticazione</td>
                  <td>7 giorni</td>
                </tr>
              </tbody>
            </table>

            <h3>2.2 Cookie Analitici 📊</h3>
            <p>Ci aiutano a capire come i visitatori utilizzano il sito, permettendoci di migliorare l&apos;esperienza.</p>
            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Scopo</th>
                  <th>Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Google Analytics</td>
                  <td>Analisi del traffico e comportamento utenti</td>
                  <td>2 anni</td>
                </tr>
                <tr>
                  <td>Vercel Analytics</td>
                  <td>Performance e velocità del sito</td>
                  <td>1 anno</td>
                </tr>
              </tbody>
            </table>

            <h3>2.3 Cookie di Marketing 🎯</h3>
            <p>Utilizzati per mostrare contenuti pubblicitari rilevanti e misurare l&apos;efficacia delle campagne.</p>
            <table>
              <thead>
                <tr>
                  <th>Provider</th>
                  <th>Scopo</th>
                  <th>Durata</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Meta Pixel</td>
                  <td>Remarketing e tracciamento conversioni</td>
                  <td>90 giorni</td>
                </tr>
                <tr>
                  <td>LinkedIn Insight</td>
                  <td>Campagne B2B e analytics</td>
                  <td>90 giorni</td>
                </tr>
              </tbody>
            </table>

            <h3>2.4 Cookie di Preferenze ⚙️</h3>
            <p>Memorizzano le tue preferenze per migliorare la tua esperienza.</p>
            <ul>
              <li>Lingua preferita</li>
              <li>Tema (chiaro/scuro)</li>
              <li>Layout personalizzato</li>
            </ul>

            <h2>3. Cookie di Terze Parti</h2>
            <p>Utilizziamo servizi di terze parti che possono impostare cookie:</p>

            <h3>3.1 Stripe (Pagamenti)</h3>
            <ul>
              <li>
                <strong>Scopo:</strong> Elaborazione pagamenti sicuri
              </li>
              <li>
                <strong>Privacy Policy:</strong>{" "}
                <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
                  stripe.com/privacy
                </a>
              </li>
            </ul>

            <h3>3.2 OpenAI/Anthropic (AI)</h3>
            <ul>
              <li>
                <strong>Scopo:</strong> Generazione contratti con intelligenza artificiale
              </li>
              <li>I dati vengono processati ma non memorizzati permanentemente</li>
            </ul>

            <h3>3.3 Google Analytics</h3>
            <ul>
              <li>
                <strong>Scopo:</strong> Analisi traffico e comportamento utenti
              </li>
              <li>
                <strong>Privacy Policy:</strong>{" "}
                <a
                  href="https://policies.google.com/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  policies.google.com/privacy
                </a>
              </li>
            </ul>

            <h2>4. Come Gestire i Cookie</h2>

            <h3>4.1 Tramite il Banner</h3>
            <p>
              Al primo accesso, vedrai un banner che ti permette di accettare tutti i cookie o solo quelli necessari.
              Puoi modificare le tue preferenze in qualsiasi momento.
            </p>

            <h3>4.2 Tramite il Browser</h3>
            <p>Puoi gestire o eliminare i cookie tramite le impostazioni del tuo browser:</p>
            <ul>
              <li>
                <strong>Chrome:</strong> Impostazioni → Privacy e sicurezza → Cookie
              </li>
              <li>
                <strong>Firefox:</strong> Preferenze → Privacy e sicurezza → Cookie
              </li>
              <li>
                <strong>Safari:</strong> Preferenze → Privacy → Gestione dati siti web
              </li>
              <li>
                <strong>Edge:</strong> Impostazioni → Cookie e autorizzazioni sito
              </li>
            </ul>

            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 my-6">
              <p className="text-yellow-900 font-bold mb-2">⚠️ Attenzione:</p>
              <p className="text-yellow-800">
                Se disabiliti tutti i cookie, alcune funzionalità del sito potrebbero non funzionare correttamente (es.
                login, salvataggio preferenze, carrello).
              </p>
            </div>

            <h2>5. Cookie e Dati Personali</h2>
            <p>
              Alcuni cookie possono raccogliere dati personali (es. indirizzo IP). Questi dati vengono trattati in
              conformità con la nostra{" "}
              <a href="/privacy" className="text-primary-600 hover:underline">
                Privacy Policy
              </a>{" "}
              e il GDPR.
            </p>

            <h2>6. Aggiornamenti alla Cookie Policy</h2>
            <p>
              Potremmo aggiornare questa Cookie Policy periodicamente per riflettere cambiamenti nelle tecnologie o
              nelle normative. Ti informeremo di modifiche sostanziali tramite banner sul sito.
            </p>

            <h2>7. Contatti</h2>
            <p>Per domande sui cookie:</p>
            <ul>
              <li>
                <strong>Email:</strong> privacy@easycontracts.com
              </li>
              <li>
                <strong>Azienda:</strong> Errakui Holding Ltd
              </li>
              <li>
                <strong>Company Number:</strong> 16427605<br />
                <strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
              </li>
            </ul>

            <h2>8. Link Utili</h2>
            <ul>
              <li>
                <a href="https://www.aboutcookies.org" target="_blank" rel="noopener noreferrer">
                  AboutCookies.org
                </a>{" "}
                - Guida completa sui cookie
              </li>
              <li>
                <a href="https://www.allaboutcookies.org" target="_blank" rel="noopener noreferrer">
                  AllAboutCookies.org
                </a>{" "}
                - Come gestire i cookie
              </li>
              <li>
                <a href="https://www.youronlinechoices.com" target="_blank" rel="noopener noreferrer">
                  YourOnlineChoices.com
                </a>{" "}
                - Gestione pubblicità comportamentale
              </li>
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

