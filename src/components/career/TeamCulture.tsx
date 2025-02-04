import { motion } from "framer-motion";
import Image from "next/image";

const culturePillars = [
  {
    title: "Collaborative Environment",
    description: "We believe in the power of teamwork and open communication, fostering a culture where every voice matters.",
    image: "/img/career/collaboration.svg"
  },
  {
    title: "Work-Life Balance",
    description: "We encourage a healthy balance between professional growth and personal well-being.",
    image: "/img/career/work-life.svg"
  },
  {
    title: "Growth Mindset",
    description: "Continuous learning and development are at the core of our culture.",
    image: "/img/career/growth.svg"
  }
];

export function TeamCulture() {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-16 text-[#05347e] dark:text-[#ffbd59]">
          Our Team Culture
        </h2>
        <div className="grid md:grid-cols-3 gap-12">
          {culturePillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6">
                <Image
                  src={pillar.image}
                  alt={pillar.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#05347e] dark:text-[#ffbd59]">
                {pillar.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Culture Quote */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="max-w-3xl mx-auto mt-20 text-center"
        >
          <blockquote className="text-2xl italic text-[#05347e] dark:text-[#ffbd59] mb-4">
            &ldquo;We&apos;re building more than just a platform; we&apos;re creating a community where every team member can thrive and make a real difference in people&apos;s lives.&ldquo;
          </blockquote>
          <cite className="text-gray-600 dark:text-gray-300">
            - Kiungor Leadership Team
          </cite>
        </motion.div>
      </div>
    </section>
  );
}
