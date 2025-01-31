"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [theme, setTheme] = useState("");
  const [activeRoute, setActiveRoute] = useState("");

  useEffect(() => {
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
    window.dispatchEvent(new Event('theme-change'));
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" }
  ];

  return (
    <nav className="w-full p-4 bg-background/80 backdrop-blur-sm sticky top-0 z-50 border-b border-foreground/10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo - visible on all screens */}
        <Link href="/" className="text-xl font-bold">
          Portfolio
        </Link>

        {/* Desktop Menu - Hidden on mobile */}
        <div className="hidden sm:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-primary transition-colors ${
                activeRoute === link.href ? "text-primary" : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-foreground/10 transition-colors"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </div>

        {/* Mobile Profile Picture */}
        <div className="sm:hidden">
          <Image
            src="/profile-picture.jpg" // Make sure to add your profile picture
            alt="Profile"
            width={32}
            height={32}
            className="rounded-full"
          />
        </div>
      </div>
    </nav>
  );
}