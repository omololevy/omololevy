"use client";

import { useState } from "react";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-[#05347e] dark:text-[#ffbd59]"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white dark:bg-[#051633] shadow-lg p-4">
          <nav className="flex flex-col space-y-4">
            <a
              href="#features"
              className="text-[#05347e] dark:text-[#ffbd59] hover:opacity-80"
            >
              Features
            </a>
            <a
              href="#pricing"
              className="text-[#05347e] dark:text-[#ffbd59] hover:opacity-80"
            >
              Pricing
            </a>
            <a
              href="/career"
              className="text-[#05347e] dark:text-[#ffbd59] hover:opacity-80"
            >
              Career
            </a>
            <a
              href="/faqs"
              className="text-[#05347e] dark:text-[#ffbd59] hover:opacity-80"
            >
              FAQs
            </a>
            <a
              href="/corporate"
              className="text-[#05347e] dark:text-[#ffbd59] hover:opacity-80"
            >
              Corporate Partners
            </a>
            <div className="flex flex-col space-y-2">
              <a
                href="/login"
                className="text-[#05347e] dark:text-[#ffbd59] hover:opacity-80"
              >
                Login
              </a>
              <a
                href="/register"
                className="bg-[#05347e] dark:bg-[#ffbd59] text-white dark:text-[#05347e] px-4 py-2 rounded-full text-center"
              >
                Sign Up
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
