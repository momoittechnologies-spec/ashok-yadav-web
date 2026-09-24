"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const NAV_LINKS = [
  { label: "Study Hall", href: "#study-hall" },
  { label: "Xerox & Print", href: "#xerox" },
  { label: "QuickPrint", href: "#quickprint" },
  { label: "Materials", href: "#materials" },
  { label: "Reviews", href: "#reviews" },
  { label: "Location", href: "#location" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200"
            : "bg-white/80 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex flex-col leading-tight">
              <span className="text-[#1E3A8A] font-bold text-base sm:text-lg tracking-tight">
                Ashok Yadav
              </span>
              <span className="text-[#F59E0B] font-semibold text-xs sm:text-sm tracking-widest uppercase">
                Study Hall & Xerox
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-6">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-slate-600 hover:text-[#1E3A8A] font-medium text-sm transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* CTA Buttons (desktop) */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919963095103"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold text-sm hover:bg-[#1E3A8A] hover:text-white transition-colors"
              >
                <Phone size={15} />
                Call Now
              </a>
              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Study%20Hall"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#25D366] text-white font-semibold text-sm hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle size={15} />
                WhatsApp
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-2 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Drawer */}
        {open && (
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-3 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#1E3A8A] font-medium text-base transition-colors min-h-[48px]"
                >
                  {link.label}
                </button>
              ))}
              <div className="flex gap-3 mt-3 pt-3 border-t border-slate-100">
                <a
                  href="tel:+919963095103"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold text-sm min-h-[48px]"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20enquire%20about%20the%20Study%20Hall"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-semibold text-sm min-h-[48px]"
                >
                  <MessageCircle size={16} /> WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
