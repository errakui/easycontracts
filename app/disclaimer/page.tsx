import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { AlertTriangle } from "lucide-react";

export default function DisclaimerPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <AlertTriangle className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Disclaimer Legale</h1>
            <p className="text-lg text-gray-600">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>
          </div>

          <div className="card p-8 md:p-12 prose prose-lg max-w-none">
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-6 mb-8">
              <h2 className="text-yellow-900 font-bold text-2xl mb-3 mt-0">⚠️ ATTENZIONE - LEGGERE ATTENTAMENTE</h2>
              <p className="text-yellow-800 font-semibold mb-0">
                <strong>easycontracts NON fornisce consulenza legale.</strong> I contratti generati sono template 
                informativi basati su intelligenza artificiale e non sostituiscono la consulenza di un avvocato 
                professionista qualificato.
              </p>
            </div>

            <h2>1. Natura del Servizio</h2>
            <p>
              <strong>easycontracts</strong> è una piattaforma tecnologica (SaaS) che utilizza l&apos;intelligenza 
              artificiale per generare bozze di contratti. Il servizio:
            </p>
            <ul>
              <li>NON è uno studio legale</li>
              <li>NON fornisce consulenza legale personalizzata</li>
              <li>NON sostituisce un avvocato professionista</li>
              <li>NON garantisce la validità legale in ogni giurisdizione</li>
            </ul>

            <h2>2. Limitazioni dell&apos;Intelligenza Artificiale</h2>
            <p>
              I contratti sono generati da modelli di AI (GPT-4, Claude) che, nonostante l&apos;alta qualità:
            </p>
            <ul>
              <li>Possono contenere errori, imprecisioni o omissioni</li>
              <li>Potrebbero non essere adatti a situazioni specifiche o complesse</li>
              <li>Non sono aggiornati in tempo reale con le ultime modifiche legislative</li>
              <li>Non considerano sfumature specifiche del tuo caso particolare</li>
            </ul>

            <h2>3. Responsabilità dell&apos;Utente</h2>
            <p>
              <strong>È TUA responsabilità:</strong>
            </p>
            <ul>
              <li>Leggere attentamente ogni contratto generato</li>
              <li>Verificare che le clausole siano adatte al tuo caso specifico</li>
              <li>Consultare un avvocato per situazioni complesse o di alto valore</li>
              <li>Assicurarti che il contratto rispetti le leggi della tua giurisdizione</li>
              <li>Modificare il contratto secondo le tue esigenze specifiche</li>
            </ul>

            <h2>4. Quando Consultare un Avvocato</h2>
            <p>
              Ti consigliamo <strong>SEMPRE</strong> di consultare un avvocato professionista nei seguenti casi:
            </p>
            <ul>
              <li>Contratti di valore elevato (oltre €10.000)</li>
              <li>Situazioni legali complesse o inusuali</li>
              <li>Contratti internazionali</li>
              <li>Controversie legali esistenti</li>
              <li>Proprietà intellettuale di valore</li>
              <li>Questioni di compliance normativa</li>
              <li>Fusioni e acquisizioni</li>
              <li>Quando hai dubbi sulla validità o appropriatezza del contratto</li>
            </ul>

            <h2>5. Esclusione di Responsabilità</h2>
            <p>
              <strong>Errakui Holding Ltd</strong> e <strong>easycontracts</strong> declinano ogni responsabilità per:
            </p>
            <ul>
              <li>Perdite finanziarie derivanti dall&apos;uso dei contratti generati</li>
              <li>Controversie legali tra le parti contraenti</li>
              <li>Invalidità o inefficacia dei contratti generati</li>
              <li>Errori, omissioni o imprecisioni nel contenuto dei contratti</li>
              <li>Danni diretti, indiretti, consequenziali o punitivi di qualsiasi natura</li>
            </ul>

            <h2>6. Nessuna Garanzia</h2>
            <p>
              Il servizio è fornito <strong>&quot;così com&apos;è&quot;</strong> senza garanzie di alcun tipo, 
              espresse o implicite, incluse ma non limitate a:
            </p>
            <ul>
              <li>Garanzie di idoneità per un particolare scopo</li>
              <li>Garanzie di accuratezza o completezza</li>
              <li>Garanzie di conformità legale</li>
              <li>Garanzie di risultati specifici</li>
            </ul>

            <h2>7. Giurisdizione Italiana</h2>
            <p>
              I contratti sono ottimizzati per la <strong>legge italiana</strong>. Se operi in altre giurisdizioni 
              o con leggi straniere applicabili, consulta sempre un avvocato locale.
            </p>

            <h2>8. Template Informativi</h2>
            <p>
              I contratti generati sono da considerarsi <strong>template informativi</strong> e <strong>bozze</strong> 
              che richiedono:
            </p>
            <ul>
              <li>Revisione accurata</li>
              <li>Personalizzazione secondo il tuo caso</li>
              <li>Verifica della conformità legale</li>
              <li>Eventuale revisione da parte di un professionista legale</li>
            </ul>

            <h2>9. Aggiornamenti e Modifiche</h2>
            <p>
              Le leggi cambiano frequentemente. Anche se cerchiamo di mantenere i template aggiornati:
            </p>
            <ul>
              <li>Non garantiamo che i contratti riflettano le ultime modifiche legislative</li>
              <li>È tua responsabilità verificare l&apos;attualità delle clausole</li>
              <li>Consigliamo revisioni periodiche con un avvocato per contratti di lunga durata</li>
            </ul>

            <h2>10. Limitazione di Responsabilità</h2>
            <p>
              In nessun caso <strong>Errakui Holding Ltd</strong> sarà responsabile per danni superiori 
              all&apos;importo pagato per il servizio nell&apos;ultimo mese.
            </p>

            <h2>11. Servizio di Revisione (Opzionale)</h2>
            <p>
              Offriamo un servizio opzionale di revisione da parte di avvocati professionisti (disponibile 
              solo per piano Business a €49 per contratto). Questo servizio:
            </p>
            <ul>
              <li>Fornisce una revisione professionale del contratto generato</li>
              <li>Identifica potenziali problemi o clausole mancanti</li>
              <li>NON sostituisce una consulenza legale completa per casi complessi</li>
            </ul>

            <h2>12. Uso Commerciale</h2>
            <p>
              I contratti generati sono destinati al <strong>tuo uso personale o aziendale</strong>. Non puoi:
            </p>
            <ul>
              <li>Rivendere i contratti generati come servizio</li>
              <li>Offrire consulenza legale basata sui nostri template</li>
              <li>Rappresentarti come avvocato o consulente legale</li>
            </ul>

            <h2>13. Modifiche al Disclaimer</h2>
            <p>
              Ci riserviamo il diritto di modificare questo disclaimer in qualsiasi momento. 
              L&apos;uso continuato del servizio dopo le modifiche costituisce accettazione dei nuovi termini.
            </p>

            <h2>14. Contatti per Questioni Legali</h2>
            <p>Per domande su questo disclaimer:</p>
            <ul>
              <li><strong>Email:</strong> legal@easycontracts.com</li>
              <li><strong>Azienda:</strong> Errakui Holding Ltd</li>
              <li><strong>Company Number:</strong> 16427605</li>
              <li><strong>Registered Office:</strong> 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</li>
              <li><strong>Registered in:</strong> England and Wales</li>
            </ul>

            <div className="bg-red-50 border-2 border-red-400 rounded-lg p-6 mt-8">
              <h3 className="text-red-900 font-bold text-xl mb-3">⚠️ RIEPILOGO IMPORTANTE</h3>
              <p className="text-red-800 font-semibold">
                Utilizzando easycontracts, riconosci e accetti che:
              </p>
              <ol className="text-red-800">
                <li>Il servizio NON fornisce consulenza legale</li>
                <li>I contratti generati sono template informativi</li>
                <li>È TUA responsabilità verificare e personalizzare i contratti</li>
                <li>Per situazioni complesse DEVI consultare un avvocato</li>
                <li>Non siamo responsabili per perdite derivanti dall&apos;uso del servizio</li>
              </ol>
              <p className="text-red-800 font-bold mt-4 mb-0">
                Se non accetti questi termini, NON utilizzare il servizio.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

