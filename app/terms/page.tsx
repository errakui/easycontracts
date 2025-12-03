import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="w-16 h-16 text-primary-600 mx-auto mb-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Termini e Condizioni</h1>
            <p className="text-lg text-gray-600">
              Ultimo aggiornamento: {new Date().toLocaleDateString("it-IT")}
            </p>
          </div>

          <div className="card p-8 md:p-12 prose prose-lg max-w-none">
            <h2>1. Accettazione dei Termini</h2>
            <p>
              Accedendo e utilizzando <strong>easycontracts</strong> (il &quot;Servizio&quot;), gestito da{" "}
              <strong>Errakui Holding Ltd</strong> (Company Number: 15400169), accetti di essere vincolato da questi
              Termini e Condizioni. Se non accetti questi termini, non utilizzare il Servizio.
            </p>

            <h2>2. Descrizione del Servizio</h2>
            <p>easycontracts è una piattaforma SaaS che permette di:</p>
            <ul>
              <li>Generare contratti legali tramite intelligenza artificiale</li>
              <li>Personalizzare template contrattuali</li>
              <li>Scaricare ed esportare contratti in formato PDF</li>
              <li>Archiviare contratti nel cloud</li>
            </ul>

            <h2>3. Disclaimer Legale Importante</h2>
            <div className="bg-red-50 border-2 border-red-300 rounded-lg p-6 my-6">
              <p className="text-red-900 font-bold mb-2">⚠️ ATTENZIONE:</p>
              <p className="text-red-800">
                <strong>easycontracts NON fornisce consulenza legale.</strong> I contratti generati sono template
                informativi basati su intelligenza artificiale. Non sostituiscono la consulenza di un avvocato
                professionista.
              </p>
              <p className="text-red-800 mt-2">
                Per questioni legali complesse, contratti di alto valore o situazioni delicate, ti consigliamo
                vivamente di consultare un avvocato qualificato.
              </p>
            </div>

            <h2>4. Registrazione e Account</h2>
            <h3>4.1 Requisiti</h3>
            <ul>
              <li>Devi avere almeno 18 anni</li>
              <li>Devi fornire informazioni accurate e complete</li>
              <li>Sei responsabile della sicurezza del tuo account</li>
            </ul>

            <h3>4.2 Responsabilità dell&apos;Account</h3>
            <p>Sei responsabile per:</p>
            <ul>
              <li>Tutte le attività svolte tramite il tuo account</li>
              <li>Mantenere riservate le credenziali di accesso</li>
              <li>Notificarci immediatamente di accessi non autorizzati</li>
            </ul>

            <h2>5. Piani e Pagamenti</h2>
            <h3>5.1 Piani Disponibili</h3>
            <ul>
              <li>
                <strong>Free:</strong> €0/sempre - 1 contratto gratis
              </li>
              <li>
                <strong>Pro:</strong> €19/mese - 10 contratti/mese
              </li>
              <li>
                <strong>Business:</strong> €49/mese - Contratti illimitati
              </li>
            </ul>

            <h3>5.2 Fatturazione</h3>
            <ul>
              <li>I pagamenti vengono elaborati tramite Stripe</li>
              <li>Gli abbonamenti si rinnovano automaticamente</li>
              <li>I prezzi sono in Euro e includono IVA dove applicabile</li>
            </ul>

            <h3>5.3 Cancellazione e Rimborsi</h3>
            <ul>
              <li>Puoi cancellare l&apos;abbonamento in qualsiasi momento</li>
              <li>La cancellazione ha effetto alla fine del periodo di fatturazione corrente</li>
              <li>Non sono previsti rimborsi per periodi parzialmente utilizzati</li>
              <li>Piano Free: nessun costo, nessun rimborso necessario</li>
            </ul>

            <h2>6. Utilizzo del Servizio</h2>
            <h3>6.1 Uso Permesso</h3>
            <p>Puoi utilizzare easycontracts per:</p>
            <ul>
              <li>Generare contratti per uso personale o aziendale</li>
              <li>Scaricare e archiviare i contratti generati</li>
              <li>Condividere contratti con le parti contraenti</li>
            </ul>

            <h3>6.2 Uso Vietato</h3>
            <p>Non puoi:</p>
            <ul>
              <li>Rivendere o ridistribuire i contratti generati come servizio</li>
              <li>Utilizzare il servizio per attività illegali</li>
              <li>Tentare di hackerare o compromettere il sistema</li>
              <li>Condividere il tuo account con altri utenti</li>
              <li>Generare contratti per terzi senza abbonamento Business</li>
              <li>Estrarre o copiare il nostro database di template</li>
            </ul>

            <h2>7. Proprietà Intellettuale</h2>
            <h3>7.1 Nostri Diritti</h3>
            <ul>
              <li>easycontracts, il logo e tutti i contenuti sono proprietà di Errakui Holding Ltd</li>
              <li>Non puoi copiare, modificare o distribuire il nostro codice o template</li>
            </ul>

            <h3>7.2 Tuoi Diritti</h3>
            <ul>
              <li>Mantieni tutti i diritti sui contratti generati</li>
              <li>Puoi utilizzare i contratti generati senza restrizioni</li>
              <li>Non rivendichiamo proprietà sui tuoi dati</li>
            </ul>

            <h2>8. Limitazione di Responsabilità</h2>
            <p>
              <strong>Errakui Holding Ltd non è responsabile per:</strong>
            </p>
            <ul>
              <li>Errori o omissioni nei contratti generati dall&apos;AI</li>
              <li>Perdite finanziarie derivanti dall&apos;uso dei contratti</li>
              <li>Controversie legali tra le parti contraenti</li>
              <li>Validità legale dei contratti in specifiche giurisdizioni</li>
              <li>Interruzioni del servizio o perdita di dati</li>
            </ul>
            <p>
              Il servizio è fornito <strong>&quot;così com&apos;è&quot;</strong> senza garanzie di alcun tipo, espresse o
              implicite.
            </p>

            <h2>9. Garanzie AI e Accuratezza</h2>
            <div className="bg-yellow-50 border-2 border-yellow-300 rounded-lg p-6 my-6">
              <p className="text-yellow-900 font-bold mb-2">⚠️ Importante:</p>
              <p className="text-yellow-800">
                I contratti sono generati da intelligenza artificiale (GPT-4/Claude). Nonostante l&apos;alta qualità,
                potrebbero contenere errori o essere inadeguati per situazioni specifiche.
              </p>
              <p className="text-yellow-800 mt-2">
                <strong>È tua responsabilità</strong> rivedere attentamente ogni contratto prima di firmarlo.
              </p>
            </div>

            <h2>10. Privacy e Dati</h2>
            <p>
              La gestione dei tuoi dati personali è regolata dalla nostra{" "}
              <a href="/privacy" className="text-primary-600 hover:underline">
                Privacy Policy
              </a>
              .
            </p>

            <h2>11. Modifiche al Servizio</h2>
            <p>Ci riserviamo il diritto di:</p>
            <ul>
              <li>Modificare o interrompere il Servizio in qualsiasi momento</li>
              <li>Aggiornare i prezzi con preavviso di 30 giorni</li>
              <li>Modificare queste Termini e Condizioni</li>
            </ul>
            <p>Ti informeremo di modifiche sostanziali tramite email.</p>

            <h2>12. Terminazione</h2>
            <h3>12.1 Da Parte Tua</h3>
            <ul>
              <li>Puoi cancellare il tuo account in qualsiasi momento dalle impostazioni</li>
              <li>I dati verranno conservati per 30 giorni poi cancellati definitivamente</li>
            </ul>

            <h3>12.2 Da Parte Nostra</h3>
            <p>Possiamo sospendere o terminare il tuo account se:</p>
            <ul>
              <li>Violi questi Termini e Condizioni</li>
              <li>Utilizzi il servizio per attività illegali</li>
              <li>Non paghi gli abbonamenti dovuti</li>
            </ul>

            <h2>13. Legge Applicabile</h2>
            <p>
              Questi termini sono regolati dalla legge inglese e gallese. Per controversie non risolvibili
              amichevolmente, sarà competente il foro di Londra, Regno Unito.
            </p>

            <h2>14. Contatti</h2>
            <p>Per domande sui Termini e Condizioni:</p>
            <ul>
              <li>
                <strong>Email:</strong> legal@easycontracts.com
              </li>
              <li>
                <strong>Azienda:</strong> Errakui Holding Ltd
              </li>
              <li>
                <strong>Company Number:</strong> 15400169
              </li>
              <li>
                <strong>Registered in:</strong> England and Wales
              </li>
            </ul>

            <h2>15. Clausole Finali</h2>
            <p>
              Se una clausola di questi termini viene dichiarata invalida, le restanti clausole rimangono in vigore.
            </p>
            <p>
              L&apos;eventuale mancato esercizio di un diritto non costituisce rinuncia a tale diritto.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

