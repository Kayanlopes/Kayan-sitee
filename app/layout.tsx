import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Kayan Cassariego | Product Designer",
  description:
    "Product Designer · Estratégia, pesquisa e craft em produtos digitais de alto impacto.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-neutral-950 text-white font-[family-name:var(--font-body)] antialiased">
        {children}
      </body>
    </html>
  );
}
