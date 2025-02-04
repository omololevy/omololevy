"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
  {
    name: "Immigration Support Services",
    logo: "/img/partners/partner1.jpeg",
    category: "Government",
  },
  {
    name: "Global Refugee Aid",
    logo: "/img/partners/partner4.jpeg",
    category: "NGO",
  },
  {
    name: "Immigrant Integration Center",
    logo: "/img/partners/partner1.jpeg",
    category: "NGO",
  },
  {
    name: "Tech for Immigration",
    logo: "/img/partners/partner2.png",
    category: "Corporate",
  },
  {
    name: "Newcomer Support Network",
    logo: "/img/partners/partner3.jpeg",
    category: "NGO",
  },
  {
    name: "Municipal Immigration Office",
    logo: "/img/partners/partner2.png",
    category: "Government",
  },
];

export default function PartnersShowcase() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#05347e] dark:text-[#ffbd59]"
        >
          Our Partners
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center group"
            >
              <div className="w-32 h-32 relative mb-4 filter grayscale hover:grayscale-0 transition-all duration-300">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400 group-hover:text-[#05347e] dark:group-hover:text-[#ffbd59] transition-colors">
                {partner.category}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#05347e] dark:text-[#ffbd59] hover:underline"
          >
            <span>Become a Partner</span>
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
