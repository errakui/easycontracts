"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  ArrowRight,
  ArrowLeft,
  Sparkles,
  FileText,
  Download,
  Check,
  Lock,
} from "lucide-react";
import { contractTypes, contractCategories, commonClauses } from "@/lib/contracts";
import Link from "next/link";

type Step = "type" | "parties" | "details" | "clauses" | "generate" | "preview";

interface ContractData {
  type: string;
  party1Name: string;
  party1Email: string;
  party1Vat: string;
  party1Address: string;
  party2Name: string;
  party2Email: string;
  party2Vat: string;
  party2Address: string;
  amount: string;
  paymentTerms: string;
  paymentMethod: string;
  duration: string;
  startDate: string;
  endDate: string;
  description: string;
  deliverables: string;
  workLocation: string;
  workHours: string;
  selectedClauses: string[];
  customRequests: string;
}

export default function GeneratePage() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("type");
  const [data, setData] = useState<ContractData>({
    type: "",
    party1Name: "",
    party1Email: "",
    party1Vat: "",
    party1Address: "",
    party2Name: "",
    party2Email: "",
    party2Vat: "",
    party2Address: "",
    amount: "",
    paymentTerms: "",
    paymentMethod: "",
    duration: "",
    startDate: "",
    endDate: "",
    description: "",
    deliverables: "",
    workLocation: "",
    workHours: "",
    selectedClauses: [],
    customRequests: "",
  });
  const [generatedContract, setGeneratedContract] = useState<string>("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Verifica se l'utente è loggato
    const userStr = localStorage.getItem("user");
    if (userStr) {
      setUser(JSON.parse(userStr));
    }

    // Recupera dati salvati se presenti
    const savedData = localStorage.getItem("pendingContract");
    if (savedData) {
      const parsed = JSON.parse(savedData);
      setData(parsed.data);
      setStep(parsed.step);
      localStorage.removeItem("pendingContract");
    }
  }, []);

  const selectedContract = contractTypes.find((c) => c.id === data.type);

  const handleNext = () => {
    const steps: Step[] = ["type", "parties", "details", "clauses", "generate"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex < steps.length - 1) {
      setStep(steps[currentIndex + 1]);
    }
  };

  const handleBack = () => {
    const steps: Step[] = ["type", "parties", "details", "clauses", "generate"];
    const currentIndex = steps.indexOf(step);
    if (currentIndex > 0) {
      setStep(steps[currentIndex - 1]);
    }
  };

  const handleGenerate = async () => {
    // IMPORTANTE: Verifica login prima di generare
    if (!user) {
      // Salva lo stato corrente
      localStorage.setItem("pendingContract", JSON.stringify({ data, step: "generate" }));
      // Redirect al login
      router.push("/login");
      return;
    }

    setIsGenerating(true);
    setStep("generate");

    // Simula generazione AI (in produzione: chiamata API OpenAI/Claude)
    await new Promise((resolve) => setTimeout(resolve, 3000));

    const contract = generateContractText(data, selectedContract?.name || "");
    setGeneratedContract(contract);
    
    // Salva il contratto nel localStorage
    const contracts = JSON.parse(localStorage.getItem("contracts") || "[]");
    const newContract = {
      id: Date.now(),
      type: selectedContract?.name || "Contratto",
      content: contract,
      date: new Date().toISOString(),
      plan: "free", // Piano Free ha watermark
      data: data,
    };
    contracts.push(newContract);
    localStorage.setItem("contracts", JSON.stringify(contracts));

    setIsGenerating(false);
    setStep("preview");
  };

  const handleDownload = () => {
    const element = document.createElement("a");
    const file = new Blob([generatedContract], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = `contratto-${data.type}-${Date.now()}.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <div className="pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {["Tipo", "Parti", "Dettagli", "Clausole", "Genera"].map((label, index) => {
                const steps: Step[] = ["type", "parties", "details", "clauses", "generate"];
                const currentIndex = steps.indexOf(step);
                const isActive = index === currentIndex;
                const isCompleted = index < currentIndex;

                return (
                  <div key={label} className="flex items-center flex-1">
                    <div className="flex flex-col items-center flex-1">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-all ${
                          isCompleted
                            ? "bg-primary-500 text-white"
                            : isActive
                            ? "bg-primary-600 text-white ring-4 ring-primary-200"
                            : "bg-gray-300 text-gray-600"
                        }`}
                      >
                        {isCompleted ? <Check className="w-5 h-5" /> : index + 1}
                      </div>
                      <span
                        className={`text-xs mt-2 font-medium ${
                          isActive ? "text-primary-600" : "text-gray-500"
                        }`}
                      >
                        {label}
                      </span>
                    </div>
                    {index < 4 && (
                      <div
                        className={`h-1 flex-1 -mt-6 ${
                          isCompleted ? "bg-primary-500" : "bg-gray-300"
                        }`}
                      ></div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Step: Tipo di Contratto */}
          {step === "type" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Che Tipo di Contratto Ti Serve?</h1>
                <p className="text-xl text-gray-600">Scegli dalla nostra libreria di 30+ template professionali</p>
              </div>

              <div className="space-y-8">
                {contractCategories.map((category) => {
                  const contracts = contractTypes.filter((c) => c.category === category.id);
                  if (contracts.length === 0) return null;

                  return (
                    <div key={category.id}>
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                        <span className="text-3xl mr-3">{category.icon}</span>
                        {category.name}
                      </h2>
                      <div className="grid md:grid-cols-2 gap-4">
                        {contracts.map((contract) => {
                          const isLocked = !contract.free;
                          return (
                            <div key={contract.id} className="relative">
                              <button
                                onClick={() => {
                                  if (isLocked && !user) {
                                    router.push("/login");
                                    return;
                                  }
                                  if (isLocked) {
                                    alert("Questo contratto richiede il piano PRO. Passa a Pro per sbloccarlo!");
                                    return;
                                  }
                                  setData({ ...data, type: contract.id });
                                  handleNext();
                                }}
                                className={`card text-left hover:shadow-xl transition-all p-6 w-full relative ${
                                  data.type === contract.id ? "ring-4 ring-primary-500" : ""
                                } ${isLocked ? "opacity-75" : "hover:scale-105"}`}
                                disabled={isLocked && !user}
                              >
                                {isLocked && (
                                  <div className="absolute top-4 right-4 z-10">
                                    <Lock className="w-6 h-6 text-yellow-600" />
                                  </div>
                                )}
                                <div className="flex items-start justify-between">
                                  <div className="flex-1">
                                    <div className="text-3xl mb-3">{contract.icon}</div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                      {contract.name}
                                      {isLocked && (
                                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                                          PRO
                                        </span>
                                      )}
                                    </h3>
                                    <p className="text-gray-600 text-sm">{contract.description}</p>
                                  </div>
                                  {contract.popular && !isLocked && (
                                    <span className="bg-primary-100 text-primary-700 text-xs px-3 py-1 rounded-full font-semibold">
                                      Popolare
                                    </span>
                                  )}
                                </div>
                              </button>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step: Parti Contraenti */}
          {step === "parties" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <div className="text-5xl mb-4">{selectedContract?.icon}</div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Chi Sono le Parti del Contratto?</h1>
                <p className="text-xl text-gray-600">Inserisci i dati di chi firma il contratto</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {/* Parte 1 */}
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Prima Parte (Tu / Tua Azienda)</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome / Ragione Sociale *
                      </label>
                      <input
                        type="text"
                        value={data.party1Name}
                        onChange={(e) => setData({ ...data, party1Name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Es: Mario Rossi / Acme S.r.l."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={data.party1Email}
                        onChange={(e) => setData({ ...data, party1Email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="mario.rossi@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        P.IVA / Codice Fiscale
                      </label>
                      <input
                        type="text"
                        value={data.party1Vat}
                        onChange={(e) => setData({ ...data, party1Vat: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="12345678901"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Indirizzo Completo
                      </label>
                      <input
                        type="text"
                        value={data.party1Address}
                        onChange={(e) => setData({ ...data, party1Address: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Via Roma 123, 20100 Milano (MI)"
                      />
                    </div>
                  </div>
                </div>

                {/* Parte 2 */}
                <div className="card p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6">Seconda Parte (Controparte)</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome / Ragione Sociale *
                      </label>
                      <input
                        type="text"
                        value={data.party2Name}
                        onChange={(e) => setData({ ...data, party2Name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Es: Laura Bianchi / Tech Corp S.p.A."
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={data.party2Email}
                        onChange={(e) => setData({ ...data, party2Email: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="laura.bianchi@email.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        P.IVA / Codice Fiscale
                      </label>
                      <input
                        type="text"
                        value={data.party2Vat}
                        onChange={(e) => setData({ ...data, party2Vat: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="98765432109"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Indirizzo Completo
                      </label>
                      <input
                        type="text"
                        value={data.party2Address}
                        onChange={(e) => setData({ ...data, party2Address: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Via Dante 456, 00100 Roma (RM)"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="btn-outline flex items-center">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Indietro
                </button>
                <button
                  onClick={handleNext}
                  disabled={!data.party1Name || !data.party2Name}
                  className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Avanti
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step: Dettagli */}
          {step === "details" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Dettagli del Contratto</h1>
                <p className="text-xl text-gray-600">Le informazioni essenziali per il tuo {selectedContract?.name}</p>
              </div>

              <div className="card p-8 max-w-4xl mx-auto">
                <div className="space-y-6">
                  {/* Descrizione Oggetto */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Descrizione dell&apos;Oggetto *
                    </label>
                    <textarea
                      value={data.description}
                      onChange={(e) => setData({ ...data, description: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Es: Sviluppo di un sito web e-commerce con sistema di pagamento integrato, gestione catalogo prodotti e area admin..."
                    />
                    <p className="text-sm text-gray-500 mt-2">
                      💡 Più dettagli dai, più preciso sarà il contratto generato dall&apos;AI
                    </p>
                  </div>

                  {/* Deliverables - PRO FEATURE */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deliverables / Risultati Attesi
                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                        PRO
                      </span>
                    </label>
                    <textarea
                      value={data.deliverables}
                      onChange={(e) => setData({ ...data, deliverables: e.target.value })}
                      rows={3}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                      placeholder="🔒 Sblocca con Piano PRO - Es: Sito web completo, 5 pagine, responsive..."
                      disabled
                    />
                  </div>

                  {/* Compenso e Pagamento */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Compenso Totale (€) *</label>
                      <input
                        type="number"
                        value={data.amount}
                        onChange={(e) => setData({ ...data, amount: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="3000"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Metodo di Pagamento
                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                          PRO
                        </span>
                      </label>
                      <select
                        value={data.paymentMethod}
                        onChange={(e) => setData({ ...data, paymentMethod: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                        disabled
                      >
                        <option>🔒 Bonifico bancario</option>
                        <option>🔒 PayPal</option>
                        <option>🔒 Contanti</option>
                      </select>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Termini di Pagamento
                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                        PRO
                      </span>
                    </label>
                    <input
                      type="text"
                      value={data.paymentTerms}
                      onChange={(e) => setData({ ...data, paymentTerms: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                      placeholder="🔒 Es: 50% anticipo, 50% a consegna / Rate mensili / Fine mese..."
                      disabled
                    />
                  </div>

                  {/* Date */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Data di Inizio *</label>
                      <input
                        type="date"
                        value={data.startDate}
                        onChange={(e) => setData({ ...data, startDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      />
                    </div>

                    <div className="relative">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Data di Fine
                        <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                          PRO
                        </span>
                      </label>
                      <input
                        type="date"
                        value={data.endDate}
                        onChange={(e) => setData({ ...data, endDate: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                        disabled
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Durata</label>
                    <input
                      type="text"
                      value={data.duration}
                      onChange={(e) => setData({ ...data, duration: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Es: 3 mesi, 12 mesi, indeterminato"
                    />
                  </div>

                  {/* Modalità Lavoro - PRO */}
                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Luogo di Lavoro
                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                        PRO
                      </span>
                    </label>
                    <select
                      value={data.workLocation}
                      onChange={(e) => setData({ ...data, workLocation: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                      disabled
                    >
                      <option>🔒 Da remoto</option>
                      <option>🔒 In sede</option>
                      <option>🔒 Ibrido</option>
                    </select>
                  </div>

                  <div className="relative">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Orari di Lavoro
                      <span className="ml-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded font-semibold">
                        PRO
                      </span>
                    </label>
                    <input
                      type="text"
                      value={data.workHours}
                      onChange={(e) => setData({ ...data, workHours: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent bg-gray-50"
                      placeholder="🔒 Es: Lun-Ven 9-18 / Flessibile / Part-time 20h/settimana..."
                      disabled
                    />
                  </div>
                </div>

                {/* Upgrade Banner */}
                <div className="mt-8 p-4 bg-gradient-to-r from-yellow-50 to-yellow-100 border-2 border-yellow-300 rounded-lg">
                  <p className="text-sm text-yellow-900 font-semibold mb-2">
                    🔒 Molti campi sono bloccati nel piano FREE
                  </p>
                  <p className="text-sm text-yellow-800 mb-3">
                    Passa al Piano PRO per sbloccare: Deliverables, Metodi pagamento, Termini pagamento, Date fine, Modalità lavoro e molto altro!
                  </p>
                  <Link href="/#prezzi" className="text-sm font-bold text-primary-600 hover:text-primary-700">
                    Sblocca Piano PRO - €19/mese →
                  </Link>
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="btn-outline flex items-center">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Indietro
                </button>
                <button
                  onClick={handleNext}
                  disabled={!data.description || !data.amount}
                  className="btn-primary flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Avanti
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          )}

          {/* Step: Clausole */}
          {step === "clauses" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Seleziona le Clausole</h1>
                <p className="text-xl text-gray-600">
                  Personalizza il contratto con le clausole che ti servono
                </p>
              </div>

              <div className="card p-8 max-w-3xl mx-auto">
                <div className="space-y-4">
                  {commonClauses.map((clause) => (
                    <div
                      key={clause.id}
                      className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${
                        data.selectedClauses.includes(clause.id) || clause.required
                          ? "border-primary-500 bg-primary-50"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                      onClick={() => {
                        if (!clause.required) {
                          if (data.selectedClauses.includes(clause.id)) {
                            setData({
                              ...data,
                              selectedClauses: data.selectedClauses.filter((id) => id !== clause.id),
                            });
                          } else {
                            setData({
                              ...data,
                              selectedClauses: [...data.selectedClauses, clause.id],
                            });
                          }
                        }
                      }}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 mb-1 flex items-center">
                            {clause.title}
                            {clause.required && (
                              <span className="ml-2 text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded">
                                Obbligatoria
                              </span>
                            )}
                          </h3>
                          <p className="text-sm text-gray-600">{clause.description}</p>
                        </div>
                        <div className="ml-4">
                          {(data.selectedClauses.includes(clause.id) || clause.required) && (
                            <div className="w-6 h-6 bg-primary-500 rounded-full flex items-center justify-center">
                              <Check className="w-4 h-4 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Richieste Aggiuntive (Opzionale)
                  </label>
                  <textarea
                    value={data.customRequests}
                    onChange={(e) => setData({ ...data, customRequests: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    placeholder="Es: Vorrei aggiungere una clausola di esclusiva territoriale..."
                  />
                </div>
              </div>

              <div className="flex justify-between mt-8">
                <button onClick={handleBack} className="btn-outline flex items-center">
                  <ArrowLeft className="mr-2 w-5 h-5" />
                  Indietro
                </button>
                <button onClick={handleGenerate} className="btn-primary flex items-center">
                  <Sparkles className="mr-2 w-5 h-5" />
                  Genera Contratto con AI
                </button>
              </div>
            </div>
          )}

          {/* Step: Generazione */}
          {step === "generate" && (
            <div className="animate-fade-in">
              <div className="text-center py-20">
                <div className="animate-pulse mb-8">
                  <Sparkles className="w-20 h-20 text-primary-500 mx-auto" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">
                  L&apos;AI sta Generando il Tuo Contratto...
                </h1>
                <p className="text-xl text-gray-600 mb-8">Questo richiederà solo 30 secondi ✨</p>
                <div className="max-w-md mx-auto">
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-primary animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Step: Preview */}
          {step === "preview" && (
            <div className="animate-fade-in">
              <div className="text-center mb-12">
                <div className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-6 py-3 rounded-full mb-6">
                  <Check className="w-5 h-5" />
                  <span className="font-semibold">Contratto Generato con Successo!</span>
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Ecco il Tuo Contratto</h1>
                <p className="text-xl text-gray-600">Revisionalo e scaricalo quando sei pronto</p>
              </div>

              <div className="card p-8 mb-8">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-200">
                  <div className="flex items-center space-x-3">
                    <FileText className="w-6 h-6 text-primary-600" />
                    <div>
                      <h3 className="font-bold text-gray-900">{selectedContract?.name}</h3>
                      <p className="text-sm text-gray-500">Generato il {new Date().toLocaleDateString("it-IT")}</p>
                    </div>
                  </div>
                  <button onClick={handleDownload} className="btn-primary flex items-center">
                    <Download className="mr-2 w-5 h-5" />
                    Scarica PDF
                  </button>
                </div>

                <div
                  className="prose prose-sm max-w-none bg-gray-50 p-6 rounded-lg border border-gray-200 max-h-[600px] overflow-y-auto"
                  style={{ fontFamily: "monospace", whiteSpace: "pre-wrap" }}
                >
                  {generatedContract}
                </div>
              </div>

              <div className="card bg-primary-50 border-primary-200 p-6">
                <h3 className="font-bold text-gray-900 mb-3">💡 Prossimi Passi</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary-600" />
                    <span>Leggi attentamente il contratto</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary-600" />
                    <span>Scarica il PDF</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary-600" />
                    <span>Invialo alla controparte per la firma</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-primary-600" />
                    <span>
                      Per contratti complessi, considera una revisione legale (upgrade al piano Business)
                    </span>
                  </li>
                </ul>
              </div>

              <div className="text-center mt-8">
                <Link href="/generate" className="text-primary-600 font-semibold hover:text-primary-700">
                  ← Genera un Altro Contratto
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}

// Funzione che simula generazione AI (in produzione: API OpenAI/Claude)
function generateContractText(data: ContractData, contractName: string): string {
  const today = new Date().toLocaleDateString("it-IT");

  return `
═══════════════════════════════════════════════════════════════
                    ${contractName.toUpperCase()}
═══════════════════════════════════════════════════════════════

Generato da easycontracts.ai il ${today}


TRA LE PARTI:

1) ${data.party1Name}
   Email: ${data.party1Email || "N/A"}
   P.IVA/CF: ${data.party1Vat || "N/A"}
   (di seguito "PARTE 1")

E

2) ${data.party2Name}
   Email: ${data.party2Email || "N/A"}
   P.IVA/CF: ${data.party2Vat || "N/A"}
   (di seguito "PARTE 2")


═══════════════════════════════════════════════════════════════
PREMESSO CHE
═══════════════════════════════════════════════════════════════

Le parti intendono regolare i rapporti derivanti dalla seguente attività:

${data.description}


═══════════════════════════════════════════════════════════════
CLAUSOLE
═══════════════════════════════════════════════════════════════

Art. 1 - OGGETTO DEL CONTRATTO

La PARTE 1 si impegna a fornire le seguenti prestazioni:
${data.description}

Le prestazioni dovranno essere svolte nel rispetto delle modalità 
concordate tra le parti e secondo le migliori pratiche professionali.


Art. 2 - DURATA

Il presente contratto ha durata: ${data.duration || "come concordato tra le parti"}
Data di inizio: ${data.startDate ? new Date(data.startDate).toLocaleDateString("it-IT") : "Da concordare"}


Art. 3 - COMPENSO

Per le prestazioni oggetto del presente contratto, la PARTE 2 
corrisponderà alla PARTE 1 un compenso di € ${data.amount}.

Modalità di pagamento: secondo accordi tra le parti.
Il compenso si intende al netto di eventuali oneri fiscali e previdenziali.


Art. 4 - OBBLIGHI DELLE PARTI

La PARTE 1 si impegna a:
- Eseguire le prestazioni con diligenza professionale
- Rispettare le scadenze concordate
- Informare tempestivamente la PARTE 2 di eventuali problematiche

La PARTE 2 si impegna a:
- Fornire tutte le informazioni necessarie all'esecuzione
- Corrispondere il compenso pattuito nei termini previsti
- Collaborare attivamente per il raggiungimento degli obiettivi


${
  data.selectedClauses.includes("riservatezza")
    ? `
Art. 5 - RISERVATEZZA

Le parti si impegnano a mantenere riservate tutte le informazioni
confidenziali di cui vengano a conoscenza durante l'esecuzione del
presente contratto. Tale obbligo permane anche dopo la cessazione
del rapporto contrattuale.
`
    : ""
}

${
  data.selectedClauses.includes("proprieta-intellettuale")
    ? `
Art. 6 - PROPRIETÀ INTELLETTUALE

Tutti i diritti di proprietà intellettuale relativi alle opere
create nell'ambito del presente contratto saranno di proprietà
della PARTE 2, salvo diverso accordo scritto tra le parti.
`
    : ""
}

${
  data.selectedClauses.includes("risoluzione")
    ? `
Art. 7 - RISOLUZIONE ANTICIPATA

Ciascuna parte potrà recedere dal presente contratto con preavviso
scritto di 30 giorni, senza necessità di fornire motivazione alcuna.
In caso di inadempimento grave, il contratto potrà essere risolto
immediatamente ai sensi dell'art. 1456 c.c.
`
    : ""
}

${
  data.selectedClauses.includes("controversie")
    ? `
Art. 8 - RISOLUZIONE CONTROVERSIE

Per qualsiasi controversia derivante dal presente contratto sarà
competente il Foro di [INSERIRE CITTÀ], con esclusione di ogni
altro foro alternativo.
Le parti si impegnano preventivamente a tentare una conciliazione
bonaria delle controversie.
`
    : ""
}


Art. ${data.selectedClauses.length + 5} - DISPOSIZIONI FINALI

Il presente contratto è regolato dalla legge italiana.
Ogni modifica al presente contratto dovrà essere fatta per iscritto.
Le parti dichiarano di aver letto, compreso e accettato integralmente
quanto sopra riportato.


${data.customRequests ? `NOTE AGGIUNTIVE:\n${data.customRequests}\n\n` : ""}

═══════════════════════════════════════════════════════════════
FIRME
═══════════════════════════════════════════════════════════════

Luogo e Data: __________________, ${today}


PARTE 1                                    PARTE 2
${data.party1Name}                         ${data.party2Name}

_______________________                    _______________________
        (Firma)                                    (Firma)


═══════════════════════════════════════════════════════════════

⚠️ DISCLAIMER:
Questo contratto è stato generato da easycontracts.ai tramite 
intelligenza artificiale. Non costituisce consulenza legale.
Per questioni complesse, si consiglia di consultare un avvocato.

═══════════════════════════════════════════════════════════════

⚠️ WATERMARK - PIANO FREE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Questo contratto è stato generato con il PIANO FREE di easycontracts.
Per rimuovere questo watermark, passa al Piano PRO (€19/mese).

Scopri di più: https://easycontracts.ai
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

═══════════════════════════════════════════════════════════════
`;
}

