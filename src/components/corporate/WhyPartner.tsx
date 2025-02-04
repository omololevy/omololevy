"use client";

import { motion } from "framer-motion";

const benefits = [
  {
    title: "Tech-Driven Tools",
    description:
      "Scalable technology to simplify immigration processes and resource access.",
    icon: "📱",
  },
  {
    title: "Community Insights",
    description: "Data-driven understanding of migrant needs and experiences.",
    icon: "📊",
  },
  {
    title: "Measurable Impact",
    description: "Solutions that track and improve key outcomes for migrants.",
    icon: "📈",
  },
  {
    title: "Collaboration for Change",
    description:
      "Work alongside governments, businesses, and organizations to create programs tailored to real needs.",
    icon: "🤝",
  },
];

export default function WhyPartner() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-[#051633]">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-6 text-[#05347e] dark:text-[#ffbd59]"
        >
          Why Partner with us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
        >
          KIUNGOR offers expertise, innovation, and access to migrant
          communities. As a digital-first solution, we bring:
        </motion.p>

        <div className="grid md:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex gap-4 p-6 bg-gray-50 dark:bg-[#041328] rounded-lg hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl">{benefit.icon}</div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-[#05347e] dark:text-[#ffbd59]">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
