import type { Metadata } from "next";
import {Plus_Jakarta_Sans, Syne } from "next/font/google";
import "./globals.css";
import { Footer } from "./global/footer";
import { Navbar } from "./global/navbar";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta-sans",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Portfolio Dev & UI/UX Gustavo Gantois",
  description: "Portfólio de Gustavo Gantoiss, UI/UX Designer & Front-end Developer. Criação de interfaces modernas, responsivas e escaláveis com Figma, React, Tailwind e Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" type="image/svg+xml" href="/Logo.svg" />
        <link rel="alternate icon" href="/Logo.svg" />
        <meta name="google-site-verification" content="M4Pw1J2X-V6c2FotMav2KX72M48-Zvp0Lhnc9Q4qOnI" />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${syne.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
