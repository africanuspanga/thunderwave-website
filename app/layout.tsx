import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Thunderwave Company Limited | Diversified Conglomerate",
  description:
    "Thunderwave is a diversified conglomerate operating in IT services, solar energy, tourism, tailoring, and agricultural solutions across Tanzania.",
  keywords: [
    "IT solutions",
    "solar energy",
    "tourism",
    "tailoring",
    "agriculture",
    "Tanzania",
    "Dar es Salaam",
    "Thunderwave",
  ],
  authors: [{ name: "Thunderwave Company Limited" }],
  openGraph: {
    title: "Thunderwave Company Limited | Smart Technology Solutions",
    description:
      "Thunderwave delivers reliable, scalable, and future-ready technology solutions for modern businesses.",
    type: "website",
    locale: "en_US",
  },
  icons: {
    icon: "/Thunderwave Favicon.png",
    apple: "/Thunderwave Favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0A0A0A] text-white font-[family-name:var(--font-inter)]">
        {children}
      </body>
    </html>
  );
}
