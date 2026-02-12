"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const HEADING = "Hi, I'm Levy Omolo";
const BODY =
  "Senior Software Engineer specializing in full-stack development with expertise in Python, Django, React, and cloud technologies. I build scalable, secure, and high-performing applications that make a difference.";
const FULL_TEXT = HEADING + "\n" + BODY;
const TYPING_SPEED = 35;
const PAUSE_AFTER_HEADING = 400;

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const [displayedChars, setDisplayedChars] = useState(0);
  const [isClosing, setIsClosing] = useState(false);

  // Reset typing when modal opens
  useEffect(() => {
    if (isOpen) {
      setDisplayedChars(0);
      setIsClosing(false);
    }
  }, [isOpen]);

  // Typing effect
  useEffect(() => {
    if (!isOpen || displayedChars >= FULL_TEXT.length) return;

    // Pause after heading (the newline character)
    const delay =
      displayedChars === HEADING.length ? PAUSE_AFTER_HEADING : TYPING_SPEED;

    const timer = setTimeout(() => {
      setDisplayedChars((prev) => prev + 1);
    }, delay);

    return () => clearTimeout(timer);
  }, [isOpen, displayedChars]);

  // Close with animation
  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(onClose, 250);
  }, [onClose]);

  // Auto-close after 10 seconds
  useEffect(() => {
    if (!isOpen) return;
    const timer = setTimeout(handleClose, 10000);
    return () => clearTimeout(timer);
  }, [isOpen, handleClose]);

  // Escape key
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const typed = FULL_TEXT.slice(0, displayedChars);
  const headingPart = typed.slice(0, Math.min(displayedChars, HEADING.length));
  const bodyPart =
    displayedChars > HEADING.length + 1
      ? typed.slice(HEADING.length + 1)
      : "";
  const cursorInHeading = displayedChars <= HEADING.length;

  return createPortal(
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
    >
      {/* Modal — smartphone-sized, fullscreen on mobile */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`profile-modal relative w-full h-full sm:h-auto sm:w-[390px] sm:max-h-[85vh] bg-background sm:rounded-2xl border-0 sm:border border-foreground/10 shadow-2xl overflow-y-auto transition-all duration-300 ${
          isClosing ? "scale-95 opacity-0" : "scale-100 opacity-100"
        }`}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/40 hover:bg-black/60 transition-colors duration-200"
          aria-label="Close modal"
        >
          <svg
            className="w-5 h-5 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Profile Image — large, not rounded, ~70% of modal */}
        <div className="relative w-full aspect-[3/4] sm:aspect-[3/4] max-h-[65%] sm:max-h-none overflow-hidden sm:rounded-t-2xl">
          <Image
            src="/images/levy_omolo.png"
            alt="Levy Omolo"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Gradient fade at bottom for smooth transition to text */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
        </div>

        {/* Typing Text */}
        <div className="px-6 pb-8 pt-2 text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold mb-3">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {headingPart}
            </span>
            {cursorInHeading && (
              <span className="typing-cursor text-primary">|</span>
            )}
          </h2>
          {bodyPart && (
            <p className="text-foreground/70 text-sm sm:text-base leading-relaxed">
              {bodyPart}
              {!cursorInHeading && displayedChars < FULL_TEXT.length && (
                <span className="typing-cursor text-primary">|</span>
              )}
            </p>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}
