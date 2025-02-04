"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/corporate/Hero";
import WhyPartner from "@/components/corporate/WhyPartner";
import PartnershipTypes from "@/components/corporate/PartnershipTypes";
import ContactSection from "@/components/corporate/ContactSection";
import PartnerTestimonials from "@/components/corporate/PartnerTestimonials";
import PartnersShowcase from "@/components/corporate/PartnersShowcase";
import ImpactMetrics from "@/components/corporate/ImpactMetrics";

export default function CorporatePartners() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <WhyPartner />
        <ImpactMetrics />
        <PartnershipTypes />
        <PartnersShowcase />
        <PartnerTestimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
