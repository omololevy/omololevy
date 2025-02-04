"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

const metrics = [
  { value: 10000, label: "Immigrants Supported", suffix: "+" },
  { value: 50, label: "Partner Organizations", suffix: "+" },
  { value: 25, label: "Countries Reached", suffix: "" },
  { value: 95, label: "Success Rate", suffix: "%" },
];

export default function ImpactMetrics() {
  return (
    <section className="py-20 bg-[#05347e] dark:bg-[#051633]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-[#ffbd59] mb-2">
                <CountUp
                  end={metric.value}
                  duration={2.5}
                  suffix={metric.suffix}
                />
              </div>
              <p className="text-white text-lg">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
