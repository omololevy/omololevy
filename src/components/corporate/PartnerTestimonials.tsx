"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "KIUNGOR has transformed how we connect with and support immigrant communities. Their platform makes resource delivery seamless and efficient.",
    author: "Sarah Chen",
    role: "Director of Immigration Services",
    organization: "Global Support Initiative",
    image: "/img/testimonials/sarah.jpg",
  },
  {
    quote:
      "The data insights and community engagement tools have helped us create more effective programs for newcomers.",
    author: "Michael Rodriguez",
    role: "Program Manager",
    organization: "City Immigration Office",
    image: "/img/testimonials/michael.jpg",
  },
  {
    quote:
      "Working with KIUNGOR has expanded our reach and impact in supporting immigrant communities worldwide.",
    author: "Priya Patel",
    role: "CEO",
    organization: "Immigrant Support Network",
    image: "/img/testimonials/priya.jpg",
  },
];

export default function PartnerTestimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-[#041328]">
      <div className="container mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-[#05347e] dark:text-[#ffbd59]"
        >
          Partner Success Stories
        </motion.h2>

        <div className="relative">
          <div className="flex overflow-hidden">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: activeIndex === index ? 1 : 0,
                  x: `${(index - activeIndex) * 100}%`,
                }}
                transition={{ duration: 0.5 }}
                className="w-full flex-shrink-0"
              >
                <div className="flex flex-col items-center text-center px-4">
                  <div className="w-24 h-24 mb-6 relative rounded-full overflow-hidden">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <blockquote className="text-xl italic mb-6 text-gray-600 dark:text-gray-300">
                    &quot;{testimonial.quote}&quot;
                  </blockquote>
                  <cite className="not-italic">
                    <div className="font-bold text-[#05347e] dark:text-[#ffbd59]">
                      {testimonial.author}
                    </div>
                    <div className="text-gray-600 dark:text-gray-400">
                      {testimonial.role}
                    </div>
                    <div className="text-gray-500 dark:text-gray-500">
                      {testimonial.organization}
                    </div>
                  </cite>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? "bg-[#05347e] dark:bg-[#ffbd59]"
                    : "bg-gray-300 dark:bg-gray-700"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
