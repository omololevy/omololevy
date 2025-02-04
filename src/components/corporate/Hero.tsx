"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="pt-32 pb-16 px-4 bg-gradient-to-br from-[#ffbd59]/10 to-[#05347e]/10 dark:from-[#05347e]/20 dark:to-[#ffbd59]/20">
      <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#05347e] dark:text-[#ffbd59]">
            Partner with KIUNGOR
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Together, we can build pathways to integration, success, and support
            for migrant communities worldwide.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="primary-button"
          >
            Become a Partner
          </motion.button>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Image
            src="/img/partner_bg.png"
            alt="Partnership Illustration"
            width={600}
            height={400}
            className="w-full rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300"
          />
        </motion.div>
      </div>
    </section>
  );
}
