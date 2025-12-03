import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "easycontracts - Contratti Intelligenti per Tutti | Errakui Holding Ltd",
  description: "Genera contratti legali professionali in 30 secondi con l'intelligenza artificiale. SaaS legale per freelancer e PMI. Semplice, veloce, affidabile.",
  keywords: "contratti, AI, intelligenza artificiale, legale, freelancer, PMI, SaaS, legal tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={inter.className}>
        {children}
        <CookieBanner />
      </body>
    </html>
  );
}

