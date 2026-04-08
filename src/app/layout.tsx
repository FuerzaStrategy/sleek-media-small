import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";
import MetaPixel from "@/components/MetaPixel";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600", "700", "900"],
  style: ["normal", "italic"],
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Sleek Media — Real Growth for Local & Small Businesses",
  description:
    "Creative marketing solutions for local and small businesses that need results — not more to-dos.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={sourceSans.variable}>
      <body>
        {children}
        <CookieBanner />
        <MetaPixel />
      </body>
    </html>
  );
}
