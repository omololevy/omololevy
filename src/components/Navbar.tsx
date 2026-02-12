"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import ProfileModal from "./ProfileModal";

export default function Navbar() {
  const [theme, setTheme] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);

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
    window.dispatchEvent(new Event("theme-change"));
  };

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav
      className={`w-full px-6 py-3.5 sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/90 backdrop-blur-xl shadow-xl border-b border-foreground/5"
          : "bg-background/70 backdrop-blur-md border-b border-foreground/10"
      }`}
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* ── Brand / Logo ── */}
        <div className="nav-brand flex items-center gap-3.5 group">
          <button
            onClick={() => setModalOpen(true)}
            className="relative cursor-pointer bg-transparent border-none p-0"
            aria-label="View profile"
          >
            {/* Soft ambient glow behind photo */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-tr from-primary/20 to-accent/20 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <Image
              src="/images/profile.png"
              alt="Levy Omolo"
              width={48}
              height={48}
              className="nav-profile-ring rounded-full w-12 h-12 object-cover shadow-lg relative z-10"
            />
          </button>
          <Link href="/" className="flex flex-col leading-none">
            <span className="nav-brand-name text-2xl sm:text-[1.7rem]">
              Levy<span className="text-primary">.</span>Omolo
            </span>
            <span className="text-[10px] font-medium text-foreground/40 tracking-widest uppercase mt-0.5 hidden sm:block">
              Software Engineer
            </span>
          </Link>
        </div>

        {/* ── Desktop Navigation ── */}
        <div className="hidden md:flex items-center gap-3">
          <div className="nav-pill-group">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="w-px h-8 bg-foreground/10 mx-1" />

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle p-2.5 rounded-xl"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg
                className="w-[22px] h-[22px]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.002-2.082 9.718 9.718 0 003-3.916z"
                />
              </svg>
            ) : (
              <svg
                className="w-[22px] h-[22px] text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ── Mobile: theme toggle only (nav is in BottomNav) ── */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleTheme}
            className="theme-toggle p-2.5 rounded-xl"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          >
            {theme === "light" ? (
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 006.002-2.082 9.718 9.718 0 003-3.916z"
                />
              </svg>
            ) : (
              <svg
                className="w-5 h-5 text-accent"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <ProfileModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </nav>
  );
}
