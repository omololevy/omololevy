"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
    const [theme, setTheme] = useState("");
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeRoute, setActiveRoute] = useState("");
  
    useEffect(() => {
      // Get initial theme and set active route
      const savedTheme = localStorage.getItem("theme") || "light";
      setTheme(savedTheme);
      document.documentElement.setAttribute("data-theme", savedTheme);
      setActiveRoute(window.location.pathname);
    }, []);
  
    const toggleTheme = () => {
      const newTheme = theme === "light" ? "dark" : "light";
      setTheme(newTheme);
      localStorage.setItem("theme", newTheme);
      document.documentElement.setAttribute("data-theme", newTheme);
      window.dispatchEvent(new Event('theme-change')); // Add this line
    };
  
    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
  
    const navLinks = [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/contact", label: "Contact" }
    ];
  
    return (
      <nav className="w-full p-4 bg-foreground text-background sticky top-0 z-50 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          {/* Logo or Brand Name with animation */}
          <div className="text-2xl font-bold hover:scale-105 transition-transform">
            <Link href="/home">Portfolio</Link>
          </div>
  
          {/* Desktop Menu - Hidden on mobile */}
          <div className="hidden sm:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-gray-300 transition-colors ${
                  activeRoute === link.href ? "border-b-2 border-background" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={toggleTheme}
              className="bg-background text-foreground px-4 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200 hover:scale-105"
              aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? "🌙" : "☀️"}
            </button>
          </div>
  
          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="sm:hidden text-background focus:outline-none hover:opacity-75 transition-opacity"
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
  
        {/* Mobile Menu - Dropdown with animation */}
        <div
          className={`${
            isMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          } sm:hidden flex-col gap-4 mt-4 border-t border-gray-600 overflow-hidden transition-all duration-300 ease-in-out`}
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block py-2 hover:text-gray-300 transition-colors ${
                activeRoute === link.href ? "bg-background/10" : ""
              }`}
              onClick={() => {
                setIsMenuOpen(false);
                setActiveRoute(link.href);
              }}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="bg-background text-foreground px-4 py-2 rounded-lg transition-colors duration-300 hover:bg-gray-200 w-full text-left"
          >
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </nav>
    );
  }