import type { Metadata } from "next";
import { Montserrat, Instrument_Serif } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Joaquín Sabater - Portfolio",
  description: "Portfolio de Joaquín Sabater: desarrollador full stack y analista funcional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es" className="scroll-smooth">
        <body className={`${montserrat.className} ${instrumentSerif.variable}`}>{children}</body>
      </html>
  );
}
