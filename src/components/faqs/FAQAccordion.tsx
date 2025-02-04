'use client';

import { JSX, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
  question: string;
  answer: string | JSX.Element;
  category: string;
}

const faqs: FAQ[] = [
  // Getting Started Category
  {
    question: "What types of connections can I make through this app?",
    answer: "Our app allows you to connect with fellow immigrants from your origin country, providing a platform to share experiences, seek advice, and build a supportive community. You can connect with individuals who share similar cultural backgrounds and understand the challenges of settling in a new country.",
    category: "Getting Started"
  },
  {
    question: "How can I find events relevant to my country of origin?",
    answer: "Our app offers a curated list of events and gatherings that cater to individuals from various countries and cultural backgrounds. You can discover cultural festivals, networking events, language exchange meetups, workshops, and other activities that celebrate diversity and foster connections within the immigrant community.",
    category: "Events & Community"
  },
  {
    question: "Are there resources available to help me navigate life in a new country?",
    answer: "Yes, our app provides access to a range of resources aimed at supporting immigrants in their transition to a new country. These resources include information on visa requirements, legal services, community centers, language translation, and cultural organizations that provide aid and guidance.",
    category: "Resources"
  },
  {
    question: "How can I connect with other immigrants who share similar interests or experiences?",
    answer: "Our app offers features such as group forums, chat functionalities, and interest-based communities that allow you to connect with like-minded individuals from your origin country and engage in meaningful conversations, share advice, and build lasting friendships.",
    category: "Community"
  },
  {
    question: "Can I seek advice or guidance on immigration-related matters through the app?",
    answer: "Absolutely! Our platform provides a network of experienced mentors, immigration experts, and community members who can offer valuable insights and guidance on navigating the immigration process, understanding legal requirements, and accessing essential services in your new country.",
    category: "Support"
  },
  {
    question: "How can I contribute to the app's community and support fellow immigrants?",
    answer: "You can actively participate in the app's community by sharing your experiences, offering advice, posting relevant resources, and engaging in discussions with fellow immigrants. Your contributions help create a supportive and inclusive environment where individuals from different backgrounds can connect, learn, and grow together.",
    category: "Community"
  },
  {
    question: "Is my privacy and personal information protected on the app?",
    answer: "Yes, we prioritize the privacy and security of our users. We adhere to strict data protection measures and ensure that your personal information is kept confidential and secure. We do not share your data with third parties without your consent, and you have full control over your privacy settings.",
    category: "Privacy & Security"
  },
  {
    question: "How do I get started with the app?",
    answer: "Getting started is easy! Simply join our waitlist using the form on our homepage. Once the app launches, you'll receive an invitation to create your profile, set your preferences, and begin connecting with other immigrants from your country of origin.",
    category: "Getting Started"
  },
  {
    question: "What translation services are available?",
    answer: "Our app features real-time AI-powered translation for conversations, documents, and forms. This helps break down language barriers and enables seamless communication between users from different linguistic backgrounds.",
    category: "Features"
  },
  {
    question: "How can I find job opportunities through the platform?",
    answer: "Our job listings feature uses AI to match your skills and experience with opportunities from trusted employers. Premium members get access to exclusive job postings, resume review services, and career guidance.",
    category: "Jobs & Career"
  },
  {
    question: "What's included in the free vs. premium plans?",
    answer: "The free plan includes access to basic features like community forums, event browsing, and essential resources. Premium members get additional benefits such as job listings access, ability to create events, and advanced networking features.",
    category: "Pricing"
  },
  {
    question: "How can I report inappropriate content or behavior?",
    answer: "We take community safety seriously. You can report any concerning content or behavior through our in-app reporting system. Our moderation team reviews all reports promptly to maintain a safe and respectful environment.",
    category: "Safety & Support"
  },
  {
    question: "How do I join the waitlist?",
    answer: <div>
      <p className="mb-3"><strong><i>To join the waitlist, select either of the options below:</i></strong></p>
      <ol className="list-decimal ml-6">
        <li className="mb-2">Click the &quot;Join the Waitlist&quot; button in the navigation bar</li>
        <li className="mb-2">Visit our homepage and scroll to the waitlist signup form</li>
      </ol>
    </div>,
    category: "Getting Started"
  }
];

const categories = Array.from(new Set(faqs.map(faq => faq.category)));

export default function FAQAccordion() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Get filtered FAQs based on category
  const filteredFaqs = activeCategory === 'All' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  return (
    <div>
      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        <button
          onClick={() => setActiveCategory('All')}
          className={`px-4 py-2 rounded-full transition-colors ${
            activeCategory === 'All'
              ? 'bg-[#05347e] text-white dark:bg-[#ffbd59] dark:text-[#05347e]'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
          }`}
        >
          All FAQs ({faqs.length})
        </button>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === category
                ? 'bg-[#05347e] text-white dark:bg-[#ffbd59] dark:text-[#05347e]'
                : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
          >
            {category} ({faqs.filter(faq => faq.category === category).length})
          </button>
        ))}
      </div>

      {/* Show category description if not "All" */}
      {activeCategory !== 'All' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center mb-8 text-gray-600 dark:text-gray-300"
        >
          Showing {filteredFaqs.length} questions in {activeCategory}
        </motion.div>
      )}

      {/* FAQ Items */}
      <div className="space-y-4">
        {filteredFaqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              className="w-full p-6 text-left flex justify-between items-center hover:bg-gray-50 dark:hover:bg-[#051633]/50"
            >
              <span className="font-semibold text-[#05347e] dark:text-[#ffbd59]">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 transform transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            <AnimatePresence>
              {activeIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
