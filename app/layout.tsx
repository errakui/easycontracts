import type { Metadata } from "next";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

export const metadata: Metadata = {
  title: "easycontracts - Contratti Legali AI in 30 Secondi | €19/mese",
  description: "Genera contratti legali professionali in 30 secondi con l'intelligenza artificiale. Risparmia fino al 97% rispetto a un avvocato. Validati da professionisti, conformi alla legge italiana.",
  keywords: "contratti AI, generatore contratti, contratti legali, freelancer, PMI, SaaS legale, contratti online, NDA, contratto freelance",
  authors: [{ name: "easycontracts" }],
  creator: "easycontracts",
  publisher: "easycontracts",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "easycontracts - Contratti Legali AI in 30 Secondi",
    description: "Genera contratti professionali con l'AI. Risparmia €800 per contratto. Validati da avvocati.",
    url: "https://easycontracts.ai",
    siteName: "easycontracts",
    locale: "it_IT",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "easycontracts - Contratti Legali AI in 30 Secondi",
    description: "Genera contratti professionali con l'AI. Risparmia €800 per contratto.",
  },
  robots: {
    index: true,
    follow: true,
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
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}
