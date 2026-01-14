"use client";

import Link from "next/link";
import { FileText, Mail, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    prodotto: [
      { label: "Come Funziona", href: "/#demo" },
      { label: "Prezzi", href: "/#prezzi" },
      { label: "Template", href: "/generate" },
    ],
    legale: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Termini di Servizio", href: "/terms" },
      { label: "Cookie Policy", href: "/cookie-policy" },
    ],
    risorse: [
      { label: "Blog", href: "/blog" },
      { label: "Contatti", href: "/contact" },
      { label: "Chi Siamo", href: "/about" },
    ],
  };

  return (
    <footer className="relative border-t border-white/5 bg-[#030014]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* CTA Section */}
        <div className="py-16 text-center border-b border-white/5">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto a risparmiare migliaia di euro?
          </h2>
          <p className="text-gray-500 mb-8 max-w-xl mx-auto">
            Unisciti a 10.000+ professionisti che hanno già scoperto il futuro dei contratti legali.
          </p>
          <Link 
            href="/generate" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-indigo-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all"
          >
            Inizia Gratis
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Links Grid */}
        <div className="py-16 grid md:grid-cols-5 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="bg-gradient-to-br from-violet-600 to-indigo-600 p-2.5 rounded-xl">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">
                <span className="text-white">easy</span>
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">contracts</span>
              </span>
            </Link>
            <p className="text-gray-500 mb-6 max-w-sm text-sm">
              Genera contratti legali professionali in 30 secondi con l&apos;intelligenza artificiale. 
              Risparmia tempo e denaro.
            </p>
            <div className="flex gap-3">
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a 
                href="mailto:support@easycontracts.tech" 
                className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-gray-500 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Prodotto */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Prodotto</h4>
            <ul className="space-y-3">
              {footerLinks.prodotto.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legale */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Legale</h4>
            <ul className="space-y-3">
              {footerLinks.legale.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Risorse */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Risorse</h4>
            <ul className="space-y-3">
              {footerLinks.risorse.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="text-gray-500 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            © {currentYear} easycontracts. Tutti i diritti riservati.
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            Sviluppato con <span className="text-red-500">❤️</span> da{" "}
            <a 
              href="https://www.errakui.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-300 font-medium"
            >
              errakui.dev
            </a>
            {" "}🇮🇹
          </p>
        </div>
      </div>
    </footer>
  );
}
