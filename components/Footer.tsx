import Link from "next/link";
import { FileText, Mail, Github, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-primary p-2 rounded-lg">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">
                easy<span className="text-primary-400">contracts</span>
              </span>
            </div>
            <p className="text-gray-400 text-sm">
              Contratti intelligenti per tutti. Semplice, veloce, professionale.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-white font-semibold mb-4">Prodotto</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#come-funziona" className="hover:text-primary-400 transition-colors">
                  Come Funziona
                </Link>
              </li>
              <li>
                <Link href="/#contratti" className="hover:text-primary-400 transition-colors">
                  Tipi di Contratti
                </Link>
              </li>
              <li>
                <Link href="/#prezzi" className="hover:text-primary-400 transition-colors">
                  Prezzi
                </Link>
              </li>
              <li>
                <Link href="/generate" className="hover:text-primary-400 transition-colors">
                  Genera Contratto
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Azienda</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-primary-400 transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary-400 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary-400 transition-colors">
                  Contatti
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-white font-semibold mb-4">Legale</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="hover:text-primary-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary-400 transition-colors">
                  Termini di Servizio
                </Link>
              </li>
              <li>
                <Link href="/disclaimer" className="hover:text-primary-400 transition-colors">
                  Disclaimer Legale
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center mb-4">
            <div className="text-sm text-gray-400 mb-4 md:mb-0">
              <p className="font-semibold text-white mb-1">Errakui Holding Ltd</p>
              <p>Company Number: 15400169</p>
              <p>Registered in England and Wales</p>
              <p>© {new Date().getFullYear()} easycontracts. Tutti i diritti riservati.</p>
            </div>
            <div className="flex space-x-6">
              <a href="mailto:info@easycontracts.com" className="hover:text-primary-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/company/errakui-holding" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="https://github.com/errakui" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <p className="text-xs text-gray-400 text-center">
              ⚠️ <strong>Disclaimer:</strong> easycontracts non fornisce consulenza legale. I contratti generati sono
              template informativi. Per questioni complesse, consulta sempre un avvocato professionista.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

