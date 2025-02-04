"use client";

import { motion } from "framer-motion";
import { useState, FormEvent, ChangeEvent } from "react";
import { toast } from "react-hot-toast";

interface FormData {
  name: string;
  organization: string;
  email: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      // Here you would typically send the data to your API
      console.log("Form submitted:", formData);

      // Clear form after successful submission
      setFormData({
        name: "",
        organization: "",
        email: "",
        message: "",
      });

      toast.success("Thank you for your interest! We will contact you soon.");
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#ffbd59]/10 to-[#05347e]/10 dark:from-[#05347e]/20 dark:to-[#ffbd59]/20">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="bg-white dark:bg-[#051633] rounded-2xl p-8 md:p-12 shadow-xl"
        >
          <h2 className="text-3xl font-bold mb-6 text-[#05347e] dark:text-[#ffbd59]">
            Let&apos;s Build Together
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Ready to make a difference? Whether you represent a government
            agency, NGO, or business, KIUNGOR is eager to collaborate.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#041328] focus:ring-2 focus:ring-[#05347e] dark:focus:ring-[#ffbd59]"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Organization
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#041328] focus:ring-2 focus:ring-[#05347e] dark:focus:ring-[#ffbd59]"
                  placeholder="Your organization"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#041328] focus:ring-2 focus:ring-[#05347e] dark:focus:ring-[#ffbd59]"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#041328] focus:ring-2 focus:ring-[#05347e] dark:focus:ring-[#ffbd59]"
                placeholder="Tell us about your partnership ideas..."
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="primary-button w-full"
              type="submit"
            >
              Start Partnership Discussion
            </motion.button>
          </form>

          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-300 text-center">
              Or reach out directly at{" "}
              <a
                href="mailto:partnerships@kiungor.com"
                className="text-[#05347e] dark:text-[#ffbd59] font-semibold hover:underline"
              >
                partnerships@kiungor.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
