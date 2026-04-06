import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PlansHero from "@/components/PlansHero";
import PlansTiers from "@/components/PlansTiers";
import CtaBanner from "@/components/CtaBanner";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Subscription Pricing — Sleek Media",
  description:
    "Creative marketing packages for local businesses. From $850/month for social media management to $3,500/month for full-service brand amplification.",
};

export default function PlansPage() {
  return (
    <main>
      <Navbar />
      <PlansHero />
      <PlansTiers />
      <CtaBanner />
      <Footer heroSrc="/images/plans/plans_footer_hero.png" />
    </main>
  );
}
