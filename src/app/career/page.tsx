"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { JobOpenings } from "@/components/career/JobOpenings";
import { Benefits } from "@/components/career/Benefits";
import { Values } from "@/components/career/Values";
import { TeamCulture } from "@/components/career/TeamCulture";

export default function Career() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#ffbd59]/10 to-[#05347e]/10 dark:from-[#05347e]/20 dark:to-[#ffbd59]/20"
        >
          <div className="container mx-auto text-center">
            <motion.h1
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-[#05347e] dark:text-[#ffbd59]"
            >
              Join Our Mission
            </motion.h1>
            <motion.p
              initial={{ y: 20 }}
              animate={{ y: 0 }}
              className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              Help us build the future of immigration and make a real impact in
              people&apos;s lives
            </motion.p>
          </div>
        </motion.section>

        <Values />
        <TeamCulture />
        <Benefits />
        <JobOpenings />
      </main>
      <Footer />
    </div>
  );
}
