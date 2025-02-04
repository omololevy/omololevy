"use client";

import { useTheme } from "@/app/context/ThemeContext";
import Image from "next/image";
import MobileMenu from "../MobileMenu";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed w-full z-30 top-0 bg-white/80 dark:bg-[#051633]/80 backdrop-blur-sm shadow-md dark:shadow-[#ffbd59]/10">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center space-x-2">
          <Image
            src="/img/logo.png"
            alt="Kiungor"
            width={48}
            height={48}
            className="rounded-full bg-white"
          />
          <span className="text-xl font-bold text-[#05347e] dark:text-[#ffbd59]">
            KIUNGOR
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#features" className="nav-link">
            Features
          </a>
          <a href="#pricing" className="nav-link">
            Pricing
          </a>
          <a href="/career" className="nav-link">
            Career
          </a>
          <a href="/faqs" className="nav-link">
            FAQs
          </a>
          <a href="/corporate" className="nav-link">
            Corporate Partners
          </a>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5 text-[#05347e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-[#ffbd59]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4">
            <a
              href="/login"
              className="text-[#05347e] dark:text-[#ffbd59] font-semibold hover:opacity-80"
            >
              Login
            </a>
            <a
              href="/register"
              className="bg-[#05347e] dark:bg-[#ffbd59] text-white dark:text-[#05347e] px-6 py-2 rounded-full font-semibold hover:opacity-90"
            >
              Sign Up
            </a>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center space-x-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5 text-[#05347e]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-[#ffbd59]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            )}
          </button>
          <MobileMenu />
        </div>
      </div>
    </nav>
  );
}
