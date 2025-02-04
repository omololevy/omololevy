'use client';

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FAQAccordion from "@/components/faqs/FAQAccordion";

export default function FAQs() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#ffbd59]/10 to-[#05347e]/10 dark:from-[#05347e]/20 dark:to-[#ffbd59]/20">
          <div className="container mx-auto text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="text-4xl md:text-5xl font-bold mb-6 text-[#05347e] dark:text-[#ffbd59]"
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            >
              Find answers to common questions about Kiungor and how we help immigrants connect and thrive
            </motion.p>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto max-w-4xl">
            <FAQAccordion />
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-20 px-4 bg-gray-50 dark:bg-[#041328]">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-[#05347e] dark:text-[#ffbd59]">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Can&apos;t find the answer you&apos;re looking for? We&apos;re here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:support@kiungor.com"
                className="primary-button inline-flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Contact Support
              </a>
              <a 
                href="#" 
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border-2 border-[#05347e] dark:border-[#ffbd59] text-[#05347e] dark:text-[#ffbd59] hover:bg-[#05347e] hover:text-white dark:hover:bg-[#ffbd59] dark:hover:text-[#05347e] transition-colors"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
                Live Chat
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
