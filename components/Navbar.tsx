"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

// Inline SVG for social icons
function InstagramIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

const NAV_LINKS = [
  { label: "Study Hall", href: "#study-hall" },
  { label: "Xerox & Print", href: "#xerox" },
  { label: "Distance Edu", href: "#distance-education" },
  { label: "Digital Studio", href: "#digital-studio" },
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
            <div className="flex flex-col leading-tight cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <span className="text-[#1E3A8A] font-extrabold text-base sm:text-lg tracking-tight">
                Ashok Yadav
              </span>
              <span className="text-[#F59E0B] font-semibold text-xs sm:text-sm tracking-widest uppercase">
                Study Hall · Xerox · Distance Edu
              </span>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-5">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-slate-600 hover:text-[#1E3A8A] font-medium text-xs xl:text-sm transition-colors cursor-pointer"
                >
                  {link.label}
                </button>
              ))}
            </nav>

            {/* Social Icons & CTA Buttons (desktop) */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/ashok_yadav_xerox_distance_edu/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Instagram"
                aria-label="Instagram"
                className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
              >
                <InstagramIcon size={16} />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/AshokyadaXerox/"
                target="_blank"
                rel="noopener noreferrer"
                title="Follow on Facebook"
                aria-label="Facebook"
                className="w-8 h-8 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-colors"
              >
                <FacebookIcon size={16} />
              </a>

              <a
                href="tel:+919963095103"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold text-xs xl:text-sm hover:bg-[#1E3A8A] hover:text-white transition-colors"
              >
                <Phone size={14} />
                Call Now
              </a>
              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20enquire%20about%20Ashok%20Yadav%20Study%20Hall%20%2F%20Distance%20Education%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#25D366] text-white font-semibold text-xs xl:text-sm hover:bg-[#128C7E] transition-colors"
              >
                <MessageCircle size={14} />
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
          <div className="lg:hidden bg-white border-t border-slate-200 shadow-lg max-h-[85vh] overflow-y-auto">
            <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left px-4 py-2.5 rounded-lg text-slate-700 hover:bg-slate-50 hover:text-[#1E3A8A] font-medium text-base transition-colors min-h-[44px]"
                >
                  {link.label}
                </button>
              ))}

              {/* Social Media Row in Mobile */}
              <div className="flex items-center gap-3 px-4 py-2 my-1 border-t border-slate-100">
                <span className="text-xs font-semibold text-slate-500">Follow Us:</span>
                <a
                  href="https://www.instagram.com/ashok_yadav_xerox_distance_edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-pink-600 bg-pink-50 px-3 py-1.5 rounded-lg border border-pink-200"
                >
                  <InstagramIcon size={14} /> Instagram
                </a>
                <a
                  href="https://www.facebook.com/AshokyadaXerox/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-xs font-bold text-[#1877F2] bg-blue-50 px-3 py-1.5 rounded-lg border border-blue-200"
                >
                  <FacebookIcon size={14} /> Facebook
                </a>
              </div>

              <div className="flex gap-3 mt-2 pt-3 border-t border-slate-100">
                <a
                  href="tel:+919963095103"
                  className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-[#1E3A8A] text-[#1E3A8A] font-semibold text-sm min-h-[48px]"
                >
                  <Phone size={16} /> Call Now
                </a>
                <a
                  href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20enquire%20about%20Ashok%20Yadav%20Study%20Hall%20%2F%20Distance%20Education"
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
