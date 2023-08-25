import Navbar from "@/components/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

export const metadata: Metadata = {
  title: "Template DE PRUEBA",
  description: "pagina de pruebas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
        <footer className="fixed bottom-0">mi footer</footer>
      </body>
    </html>
  );
}
