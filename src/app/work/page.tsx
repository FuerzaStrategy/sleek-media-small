import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import WorkHero from "@/components/WorkHero";
import WorkCaseStudies from "@/components/WorkCaseStudies";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Our Work — Sleek Media",
  description:
    "See how Sleek Media has helped local businesses, nonprofits, and public agencies grow their social presence and community impact.",
};

export default function WorkPage() {
  return (
    <main>
      <Navbar />
      <WorkHero />
      <WorkCaseStudies />
      <CtaBanner />
      <Footer />
    </main>
  );
}
