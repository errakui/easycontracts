import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
            <p className="text-lg text-gray-600">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>
          </div>

          <div className="card p-8 md:p-12 prose prose-lg max-w-none">
            <h2>1. Introduzione</h2>
            <p>
              Errakui Holding Ltd (Company Number: 16427605), proprietaria di <strong>easycontracts</strong>, si
              impegna a proteggere la privacy dei propri utenti. Questa Privacy Policy descrive come raccogliamo,
              utilizziamo e proteggiamo i tuoi dati personali in conformità con il GDPR (Regolamento UE 2016/679).
            </p>

            <h2>2. Dati che Raccogliamo</h2>
            <h3>2.1 Dati Forniti dall&apos;Utente</h3>
            <ul>
              <li>Nome e cognome</li>
              <li>Indirizzo email</li>
              <li>Informazioni di pagamento (tramite Stripe - non salvate sui nostri server)</li>
              <li>Dati inseriti nei contratti generati</li>
            </ul>

            <h3>2.2 Dati Raccolti Automaticamente</h3>
            <ul>
              <li>Indirizzo IP</li>
              <li>Tipo di browser e dispositivo</li>
              <li>Pagine visitate e tempo di permanenza</li>
              <li>Cookie e tecnologie simili</li>
            </ul>

            <h2>3. Come Utilizziamo i Tuoi Dati</h2>
            <p>Utilizziamo i tuoi dati personali per:</p>
            <ul>
              <li>Fornire e migliorare i nostri servizi</li>
              <li>Elaborare i pagamenti</li>
              <li>Generare contratti personalizzati tramite AI</li>
              <li>Inviare comunicazioni relative al servizio</li>
              <li>Analizzare l&apos;utilizzo del sito per migliorare l&apos;esperienza utente</li>
              <li>Rispettare obblighi legali</li>
            </ul>

            <h2>4. Base Giuridica del Trattamento</h2>
            <p>Trattiamo i tuoi dati personali sulla base di:</p>
            <ul>
              <li>
                <strong>Consenso:</strong> quando ci hai dato il permesso esplicito
              </li>
              <li>
                <strong>Esecuzione contrattuale:</strong> per fornire i servizi richiesti
              </li>
              <li>
                <strong>Legittimo interesse:</strong> per migliorare i nostri servizi
              </li>
              <li>
                <strong>Obblighi legali:</strong> quando richiesto dalla legge
              </li>
            </ul>

            <h2>5. Condivisione dei Dati</h2>
            <p>Condividiamo i tuoi dati solo con:</p>
            <ul>
              <li>
                <strong>Provider di servizi:</strong> OpenAI/Anthropic (AI), Stripe (pagamenti), Supabase (database),
                Vercel (hosting)
              </li>
              <li>
                <strong>Autorità legali:</strong> quando richiesto per legge
              </li>
            </ul>
            <p>
              <strong>Non vendiamo mai</strong> i tuoi dati personali a terze parti.
            </p>

            <h2>6. Sicurezza dei Dati</h2>
            <p>Implementiamo misure di sicurezza tecniche e organizzative per proteggere i tuoi dati:</p>
            <ul>
              <li>Crittografia SSL/TLS per tutte le comunicazioni</li>
              <li>Database protetti con Row Level Security</li>
              <li>Accesso limitato ai dati solo al personale autorizzato</li>
              <li>Backup regolari e disaster recovery</li>
            </ul>

            <h2>7. I Tuoi Diritti (GDPR)</h2>
            <p>Hai il diritto di:</p>
            <ul>
              <li>
                <strong>Accesso:</strong> richiedere una copia dei tuoi dati
              </li>
              <li>
                <strong>Rettifica:</strong> correggere dati inesatti
              </li>
              <li>
                <strong>Cancellazione:</strong> richiedere la cancellazione dei tuoi dati (&quot;diritto all&apos;oblio&quot;)
              </li>
              <li>
                <strong>Portabilità:</strong> ricevere i tuoi dati in formato strutturato
              </li>
              <li>
                <strong>Opposizione:</strong> opporti al trattamento dei tuoi dati
              </li>
              <li>
                <strong>Limitazione:</strong> richiedere la limitazione del trattamento
              </li>
            </ul>
            <p>
              Per esercitare questi diritti, contattaci a:{" "}
              <a href="mailto:privacy@easycontracts.com">privacy@easycontracts.com</a>
            </p>

            <h2>8. Cookie</h2>
            <p>Utilizziamo cookie per:</p>
            <ul>
              <li>Cookie essenziali: necessari per il funzionamento del sito</li>
              <li>Cookie analitici: per comprendere come gli utenti utilizzano il sito</li>
              <li>Cookie di preferenze: per ricordare le tue scelte</li>
            </ul>
            <p>
              Puoi gestire le preferenze dei cookie tramite il banner che appare alla prima visita o nelle
              impostazioni del tuo browser.
            </p>

            <h2>9. Conservazione dei Dati</h2>
            <p>Conserviamo i tuoi dati per il tempo necessario a:</p>
            <ul>
              <li>Fornire i servizi richiesti</li>
              <li>Rispettare obblighi legali (es. fatturazione: 10 anni)</li>
              <li>Risolvere controversie</li>
            </ul>
            <p>Puoi richiedere la cancellazione del tuo account in qualsiasi momento.</p>

            <h2>10. Trasferimenti Internazionali</h2>
            <p>
              I tuoi dati potrebbero essere trasferiti e trattati in paesi al di fuori dell&apos;UE. In tal caso,
              garantiamo che vengano applicate misure di salvaguardia adeguate (es. Standard Contractual Clauses).
            </p>

            <h2>11. Minori</h2>
            <p>
              easycontracts non è destinato a minori di 18 anni. Non raccogliamo consapevolmente dati di minori. Se
              vieni a conoscenza che un minore ci ha fornito dati, contattaci immediatamente.
            </p>

            <h2>12. Modifiche alla Privacy Policy</h2>
            <p>
              Potremmo aggiornare questa Privacy Policy periodicamente. Ti informeremo di eventuali modifiche
              sostanziali tramite email o banner sul sito.
            </p>

            <h2>13. Contatti</h2>
            <p>Per qualsiasi domanda sulla privacy, contattaci:</p>
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
              <li>
                <strong>Registrata in:</strong> England and Wales
              </li>
            </ul>

            <h2>14. Autorità di Controllo</h2>
            <p>
              Hai il diritto di presentare un reclamo all&apos;autorità di controllo competente (in Italia: Garante per
              la Protezione dei Dati Personali).
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

