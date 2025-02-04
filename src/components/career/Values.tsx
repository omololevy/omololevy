import { motion } from "framer-motion";

const values = [
  {
    title: "Innovation First",
    description:
      "We embrace new ideas and technologies to solve complex immigration challenges.",
    icon: "🚀",
  },
  {
    title: "Empathy Driven",
    description:
      "Understanding and supporting our users' journey is at the heart of everything we do.",
    icon: "💝",
  },
  {
    title: "Global Impact",
    description:
      "Making a positive difference in the lives of immigrants worldwide.",
    icon: "🌍",
  },
  {
    title: "Diversity & Inclusion",
    description:
      "Celebrating different perspectives and creating an inclusive environment.",
    icon: "🤝",
  },
];

export function Values() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-[#041328]">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-[#05347e] dark:text-[#ffbd59]">
          Our Values
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-lg bg-gray-50 dark:bg-[#051633] shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-[#05347e] dark:text-[#ffbd59]">
                {value.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
