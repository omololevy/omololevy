import { motion } from "framer-motion";

const benefits = [
  {
    title: "Remote-First Culture",
    description: "Work from anywhere in the world with flexible hours.",
    icon: "🏠",
  },
  {
    title: "Health & Wellness",
    description: "Comprehensive health coverage and wellness programs.",
    icon: "🏥",
  },
  {
    title: "Learning Budget",
    description: "$1,500 annual budget for professional development.",
    icon: "📚",
  },
  {
    title: "Equity Package",
    description: "Be a part-owner of Kiungor with our equity program.",
    icon: "📈",
  },
  {
    title: "Paid Time Off",
    description: "Unlimited PTO policy with minimum 20 days encouraged.",
    icon: "🏖️",
  },
  {
    title: "Team Retreats",
    description: "Annual company retreats to amazing destinations.",
    icon: "✈️",
  },
];

export function Benefits() {
  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-[#041328]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#05347e] dark:text-[#ffbd59]">
          Benefits & Perks
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-white dark:bg-[#051633] shadow-lg hover:shadow-xl transition-all"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#05347e] dark:text-[#ffbd59]">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
