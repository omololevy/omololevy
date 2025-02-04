'use client';

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Features from "@/components/sections/Features";
import Pricing from "@/components/sections/Pricing";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
