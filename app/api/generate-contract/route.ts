import { NextRequest, NextResponse } from "next/server";

const PERPLEXITY_API_KEY = process.env.PERPLEXITY_API_KEY;

interface ContractData {
  type: string;
  typeName: string;
  party1Name: string;
  party1Email: string;
  party1Vat: string;
  party1Address: string;
  party2Name: string;
  party2Email: string;
  party2Vat: string;
  party2Address: string;
  amount: string;
  duration: string;
  startDate: string;
  description: string;
  selectedClauses: string[];
  customRequests: string;
}

const SYSTEM_PROMPT = `Sei un avvocato esperto italiano specializzato nella redazione di contratti legali. 
Il tuo compito è generare contratti professionali, completi e conformi alla legge italiana.

REGOLE FONDAMENTALI:
1. Scrivi SEMPRE in italiano formale e legale
2. Includi riferimenti agli articoli del Codice Civile italiano quando appropriato
3. Usa una struttura chiara con articoli numerati
4. Includi tutte le clausole standard necessarie per il tipo di contratto
5. Sii specifico e dettagliato, non generico
6. Il contratto deve essere pronto per la firma, non una bozza
7. NON usare placeholder come [inserire], compila tutto con i dati forniti
8. Includi data, luogo e spazio per le firme alla fine`;

export async function POST(req: NextRequest) {
  try {
    const data: ContractData = await req.json();

    if (!PERPLEXITY_API_KEY) {
      // Fallback se non c'è la chiave API - genera con template
      return NextResponse.json({ 
        contract: generateFallbackContract(data),
        source: "template"
      });
    }

    const userPrompt = buildPrompt(data);

    const response = await fetch("https://api.perplexity.ai/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${PERPLEXITY_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.1-sonar-large-128k-online",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: userPrompt }
        ],
        temperature: 0.2,
        max_tokens: 4000,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Perplexity API error:", error);
      // Fallback a template se l'API fallisce
      return NextResponse.json({ 
        contract: generateFallbackContract(data),
        source: "template"
      });
    }

    const result = await response.json();
    const contractText = result.choices[0]?.message?.content;

    if (!contractText) {
      return NextResponse.json({ 
        contract: generateFallbackContract(data),
        source: "template"
      });
    }

    return NextResponse.json({ 
      contract: contractText,
      source: "ai"
    });

  } catch (error: any) {
    console.error("Error generating contract:", error);
    return NextResponse.json(
      { error: "Errore nella generazione del contratto" },
      { status: 500 }
    );
  }
}

function buildPrompt(data: ContractData): string {
  const clauseDescriptions: Record<string, string> = {
    "riservatezza": "Clausola di riservatezza e non divulgazione delle informazioni",
    "proprieta-intellettuale": "Clausola sulla proprietà intellettuale e diritti d'autore",
    "penale": "Clausola penale per inadempimento",
    "recesso": "Clausola di recesso anticipato",
    "foro-competente": "Clausola sul foro competente",
    "forza-maggiore": "Clausola di forza maggiore",
  };

  const selectedClausesText = data.selectedClauses
    .map(c => clauseDescriptions[c] || c)
    .join(", ");

  return `Genera un contratto di tipo "${data.typeName}" completo e professionale.

DATI DELLE PARTI:

PARTE 1 (Committente/Proprietario):
- Nome/Ragione Sociale: ${data.party1Name}
- Email: ${data.party1Email || "Non specificata"}
- P.IVA/Codice Fiscale: ${data.party1Vat || "Non specificato"}
- Indirizzo: ${data.party1Address || "Non specificato"}

PARTE 2 (Prestatore/Conduttore):
- Nome/Ragione Sociale: ${data.party2Name}
- Email: ${data.party2Email || "Non specificata"}
- P.IVA/Codice Fiscale: ${data.party2Vat || "Non specificato"}
- Indirizzo: ${data.party2Address || "Non specificato"}

DETTAGLI DEL CONTRATTO:
- Oggetto/Descrizione: ${data.description}
- Compenso/Importo: €${data.amount}
- Durata: ${data.duration || "Da definire nelle clausole"}
- Data di inizio: ${data.startDate || "Dalla firma del contratto"}

CLAUSOLE RICHIESTE:
${selectedClausesText || "Clausole standard per questo tipo di contratto"}

${data.customRequests ? `RICHIESTE AGGIUNTIVE DEL CLIENTE:\n${data.customRequests}` : ""}

ISTRUZIONI:
1. Genera un contratto COMPLETO con tutti gli articoli necessari
2. Usa i dati forniti, non usare placeholder
3. Includi premesse, articoli dettagliati e clausole finali
4. Aggiungi riferimenti normativi italiani appropriati
5. Concludi con data, luogo e spazi per le firme
6. Il contratto deve essere pronto per essere stampato e firmato`;
}

function generateFallbackContract(data: ContractData): string {
  const today = new Date().toLocaleDateString("it-IT", {
    day: "numeric",
    month: "long", 
    year: "numeric"
  });

  return `
═══════════════════════════════════════════════════════════════════════════════
                              ${data.typeName?.toUpperCase() || "CONTRATTO"}
═══════════════════════════════════════════════════════════════════════════════

                        Redatto il ${today}
                        
═══════════════════════════════════════════════════════════════════════════════

                              TRA LE PARTI

PARTE PRIMA:
${data.party1Name}
${data.party1Vat ? `P.IVA/C.F.: ${data.party1Vat}` : ""}
${data.party1Address ? `Indirizzo: ${data.party1Address}` : ""}
${data.party1Email ? `Email: ${data.party1Email}` : ""}
(di seguito denominata "COMMITTENTE")

                                    E

PARTE SECONDA:
${data.party2Name}
${data.party2Vat ? `P.IVA/C.F.: ${data.party2Vat}` : ""}
${data.party2Address ? `Indirizzo: ${data.party2Address}` : ""}
${data.party2Email ? `Email: ${data.party2Email}` : ""}
(di seguito denominata "PRESTATORE")

═══════════════════════════════════════════════════════════════════════════════
                              PREMESSE
═══════════════════════════════════════════════════════════════════════════════

CONSIDERATO CHE:
- Il COMMITTENTE necessita delle prestazioni di seguito descritte;
- Il PRESTATORE dichiara di possedere le competenze necessarie;
- Le parti intendono regolare i loro rapporti secondo i termini del presente contratto.

TUTTO CIÒ PREMESSO, LE PARTI CONVENGONO E STIPULANO QUANTO SEGUE:

═══════════════════════════════════════════════════════════════════════════════
                              ARTICOLI
═══════════════════════════════════════════════════════════════════════════════

Art. 1 - OGGETTO DEL CONTRATTO
${data.description}

Art. 2 - DURATA
Il presente contratto ha durata di ${data.duration || "tempo determinato"}.
${data.startDate ? `Data di decorrenza: ${new Date(data.startDate).toLocaleDateString("it-IT")}` : "Decorrenza: dalla data di sottoscrizione."}

Art. 3 - CORRISPETTIVO
Per le prestazioni oggetto del presente contratto, il COMMITTENTE corrisponderà 
al PRESTATORE un compenso pari a € ${data.amount} (euro ${numberToWords(parseFloat(data.amount) || 0)}/00).

Art. 4 - MODALITÀ DI PAGAMENTO
Il pagamento avverrà mediante bonifico bancario entro 30 giorni dalla 
presentazione di regolare fattura.

Art. 5 - OBBLIGHI DEL PRESTATORE
Il PRESTATORE si impegna a:
a) Eseguire le prestazioni con diligenza e professionalità;
b) Rispettare le tempistiche concordate;
c) Mantenere la riservatezza su tutte le informazioni acquisite.

Art. 6 - OBBLIGHI DEL COMMITTENTE
Il COMMITTENTE si impegna a:
a) Fornire tutte le informazioni necessarie all'esecuzione dell'incarico;
b) Corrispondere il compenso nei termini pattuiti;
c) Collaborare attivamente con il PRESTATORE.

${data.selectedClauses.includes("riservatezza") ? `
Art. 7 - RISERVATEZZA
Le parti si impegnano a mantenere riservate tutte le informazioni di cui 
vengano a conoscenza in esecuzione del presente contratto, ai sensi degli 
artt. 2105 c.c. e delle normative sulla protezione dei dati personali.
Tale obbligo permane anche dopo la cessazione del rapporto contrattuale.
` : ""}

${data.selectedClauses.includes("proprieta-intellettuale") ? `
Art. 8 - PROPRIETÀ INTELLETTUALE
Tutti i diritti di proprietà intellettuale relativi ai risultati delle 
prestazioni saranno di esclusiva proprietà del COMMITTENTE, ai sensi della 
Legge 22 aprile 1941, n. 633 e successive modifiche.
` : ""}

${data.selectedClauses.includes("penale") ? `
Art. 9 - CLAUSOLA PENALE
In caso di inadempimento, la parte inadempiente sarà tenuta al pagamento 
di una penale pari al 10% del valore del contratto, fatto salvo il 
risarcimento del maggior danno, ai sensi dell'art. 1382 c.c.
` : ""}

${data.selectedClauses.includes("recesso") ? `
Art. 10 - RECESSO
Ciascuna parte potrà recedere dal contratto con un preavviso di 30 giorni 
da comunicarsi a mezzo PEC o raccomandata A/R.
` : ""}

Art. 11 - RISOLUZIONE DELLE CONTROVERSIE
Per qualsiasi controversia derivante dal presente contratto sarà competente 
in via esclusiva il Foro di ${data.party1Address?.split(",").pop()?.trim() || "Milano"}.

Art. 12 - DISPOSIZIONI FINALI
Per quanto non espressamente previsto dal presente contratto, si applicano 
le disposizioni del Codice Civile italiano.

${data.customRequests ? `
═══════════════════════════════════════════════════════════════════════════════
                         CLAUSOLE AGGIUNTIVE
═══════════════════════════════════════════════════════════════════════════════

${data.customRequests}
` : ""}

═══════════════════════════════════════════════════════════════════════════════
                              FIRME
═══════════════════════════════════════════════════════════════════════════════

Letto, confermato e sottoscritto.

Luogo e data: _________________, ${today}


IL COMMITTENTE                              IL PRESTATORE
${data.party1Name}                          ${data.party2Name}


_____________________________              _____________________________
         (firma)                                    (firma)


═══════════════════════════════════════════════════════════════════════════════
              Documento generato da easycontracts.ai
           Per rimuovere questo watermark, passa al piano PRO
═══════════════════════════════════════════════════════════════════════════════
`;
}

function numberToWords(num: number): string {
  const units = ['', 'uno', 'due', 'tre', 'quattro', 'cinque', 'sei', 'sette', 'otto', 'nove'];
  const teens = ['dieci', 'undici', 'dodici', 'tredici', 'quattordici', 'quindici', 'sedici', 'diciassette', 'diciotto', 'diciannove'];
  const tens = ['', '', 'venti', 'trenta', 'quaranta', 'cinquanta', 'sessanta', 'settanta', 'ottanta', 'novanta'];
  
  if (num === 0) return 'zero';
  if (num < 10) return units[num];
  if (num < 20) return teens[num - 10];
  if (num < 100) {
    const t = Math.floor(num / 10);
    const u = num % 10;
    return tens[t] + (u ? units[u] : '');
  }
  if (num < 1000) {
    const h = Math.floor(num / 100);
    const r = num % 100;
    return (h === 1 ? 'cento' : units[h] + 'cento') + (r ? numberToWords(r) : '');
  }
  if (num < 1000000) {
    const t = Math.floor(num / 1000);
    const r = num % 1000;
    return (t === 1 ? 'mille' : numberToWords(t) + 'mila') + (r ? numberToWords(r) : '');
  }
  return num.toString();
}

