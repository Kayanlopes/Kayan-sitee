import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kayan Cassariego | Product Designer",
  description: "Product Designer · Estratégia, pesquisa e craft em produtos digitais de alto impacto.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
