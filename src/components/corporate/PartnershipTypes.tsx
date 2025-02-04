"use client";

import { motion } from "framer-motion";
// import Image from "next/image";

const partnershipTypes = [
  {
    title: "Government Partnerships",
    description:
      "Collaborate with local, state, and federal agencies to streamline support for migrants.",
    benefits: ["Resource Integration", "Data Insights", "Program Innovation"],
    image: "/img/partnerships/government.svg",
  },
  // ...add NGO and Corporate partnership types
];

export default function PartnershipTypes() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#05347e] dark:text-[#ffbd59]"
        >
          Types of Partnerships
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {partnershipTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-[#051633] rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
            >
              {/* Partnership card content */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
