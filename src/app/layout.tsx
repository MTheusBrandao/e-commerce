import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import clsx from "clsx";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import { ptBR } from '@clerk/localizations'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Commerce",
  description: "E-commerce desenvolvido por Matheus Brandao usando nex",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ptBR}>
      <html lang="pt-BR">
        <body
          className={clsx(
            `${geistSans.variable} ${geistMono.variable} antialiased`,
            "bg-slate-700"
          )}
        >
          <Navbar />
          <main className="bg-slate-700 h-screen p-16">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
