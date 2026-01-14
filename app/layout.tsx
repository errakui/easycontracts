import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import JsonLd from "@/components/JsonLd";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.easycontracts.tech"),
  title: {
    default: "easycontracts - Genera Contratti Legali con AI in 30 Secondi",
    template: "%s | easycontracts"
  },
  description: "Crea contratti legali italiani in 30 secondi con intelligenza artificiale. 500+ template, conformi al Codice Civile. NDA, freelance, consulenza, affitto e molto altro. Da €19/mese.",
  keywords: [
    "contratti AI",
    "generatore contratti",
    "contratti legali Italia",
    "contratto freelance",
    "NDA italiano",
    "contratto consulenza",
    "contratto affitto",
    "contratti online",
    "SaaS legale",
    "documenti legali AI",
    "contratto prestazione d'opera",
    "modelli contratti gratis"
  ],
  authors: [{ name: "easycontracts", url: "https://www.easycontracts.tech" }],
  creator: "easycontracts",
  publisher: "easycontracts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "https://www.easycontracts.tech",
  },
  openGraph: {
    title: "easycontracts - Contratti Legali AI in 30 Secondi",
    description: "Genera contratti italiani professionali con l'AI. 500+ template conformi alla legge italiana. NDA, freelance, consulenza e altro. Prova gratis!",
    url: "https://www.easycontracts.tech",
    siteName: "easycontracts",
    locale: "it_IT",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "easycontracts - Contratti Legali AI",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "easycontracts - Contratti Legali AI in 30 Secondi",
    description: "Genera contratti italiani con l'AI. 500+ template. Prova gratis!",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Aggiungi quando hai i codici di verifica
    // google: "xxx",
    // yandex: "xxx",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="dark">
      <head>
        {/* Preload Fonts */}
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link 
          href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700,900&f[]=cabinet-grotesk@400,500,700,800,900&display=swap" 
          rel="stylesheet"
        />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="bg-dark-950 text-dark-100 antialiased">
        <JsonLd />
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
