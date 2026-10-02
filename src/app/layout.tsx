import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

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
      <html lang="es">
        <body className={montserrat.className}>{children}</body>
      </html>
  );
}
