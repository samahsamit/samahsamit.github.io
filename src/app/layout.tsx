import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://samahsamit.github.io"),
  title: {
    default: "Samah Samit · UX/UI e dati",
    template: "%s · Samah Samit",
  },
  description:
    "Portfolio di Samah Samit: UX/UI design, ricerca utente e analisi dati. Progetti, competenze e contatti.",
  openGraph: {
    title: "Samah Samit · UX/UI e dati",
    description: "Progetti di UX/UI design e analisi dati.",
    images: ["/img/learnow/hifi-01-home-creatore.jpg"],
    locale: "it_IT",
    type: "website",
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="it" className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
      <body className="min-h-dvh bg-canvas text-ink">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
