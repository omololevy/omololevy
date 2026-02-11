"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [theme, setTheme] = useState("");
  const [activeRoute, setActiveRoute] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
    setActiveRoute(window.location.pathname);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <nav
      className={`w-full px-6 py-4 sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-xl border-b border-foreground/5"
          : "bg-background/80 backdrop-blur-md border-b border-foreground/10"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* Logo with profile picture — premium presentation */}
        <Link href="/" className="nav-brand flex items-center gap-4 group">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/30 to-accent/30 blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <Image
              src="/images/profile.png"
              alt="Levy Omolo"
              width={56}
              height={56}
              className="rounded-full w-14 h-14 object-cover border-2 border-primary/30 group-hover:border-primary transition-all duration-500 shadow-lg relative z-10"
            />
          </div>
          <span className="text-3xl font-black tracking-tight bg-gradient-to-br from-foreground to-primary bg-clip-text text-transparent">
            Levy<span className="text-primary">.</span>Omolo
          </span>
        </Link>

        {/* Desktop Menu - Premium styling */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`nav-link ${activeRoute === link.href ? "active" : ""}`}
              data-text={link.label}
            >
              {link.label}
            </Link>
          ))}
          <div className="w-px h-8 bg-foreground/20 mx-2"></div>
          <button
            onClick={toggleTheme}
            className="theme-toggle p-3 rounded-xl hover:bg-foreground/5 transition-all duration-300 group relative"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg className="w-6 h-6 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.002-2.082 9.718 9.718 0 003-3.916z" />
              </svg>
            ) : (
              <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
            <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></span>
          </button>
        </div>

        {/* Mobile theme toggle */}
        <div className="sm:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="theme-toggle p-2.5 rounded-lg hover:bg-foreground/5 transition-all duration-300"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg className="w-5 h-5 text-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.002-2.082 9.718 9.718 0 003-3.916z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
