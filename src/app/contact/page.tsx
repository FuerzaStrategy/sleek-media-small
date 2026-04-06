import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import ContactHero from "@/components/ContactHero";
import ContactFaq from "@/components/ContactFaq";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Contact — Sleek Media",
  description:
    "Get in touch with Sleek Media. Ask us anything or start a conversation about your marketing goals.",
};

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHero />
      <ContactFaq />
      <CtaBanner />
      <Footer />
    </main>
  );
}
