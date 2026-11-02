"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
  { label: "Home", href: "/" },
  { label: "Study Hall", href: "/study-hall" },
  { label: "Xerox & Print", href: "/xerox-printing" },
  { label: "Distance Education", href: "/distance-education" },
  { label: "Digital Studio", href: "/digital-studio" },
  { label: "Reviews", href: "/reviews" },
  { label: "Location", href: "/location" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isLinkActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/90 transition-all">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex items-center justify-between h-18 md:h-20 gap-3">
            {/* Logo & Brand Identity */}
            <Link
              href="/"
              className="flex items-center gap-3 group flex-shrink-0"
              onClick={() => setOpen(false)}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#1E3A8A] to-blue-700 text-white flex items-center justify-center font-black text-base shadow-xs group-hover:scale-105 transition-transform flex-shrink-0">
                AY
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex items-center gap-1.5">
                  <span className="text-[#1E3A8A] font-extrabold text-base sm:text-lg tracking-tight group-hover:text-blue-700 transition-colors">
                    Ashok Yadav
                  </span>
                  <span className="hidden sm:inline-flex text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-blue-100/70 text-[#1E3A8A] border border-blue-200/60">
                    Kadapa
                  </span>
                </div>
                <span className="text-[#F59E0B] font-semibold text-xs tracking-wider uppercase">
                  Study Hall · Xerox · Distance Edu
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-1 2xl:gap-1.5">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`font-semibold text-xs 2xl:text-sm px-2.5 2xl:px-3 py-2 rounded-xl transition-all whitespace-nowrap ${
                      active
                        ? "text-[#1E3A8A] bg-blue-50/90 shadow-2xs font-bold"
                        : "text-slate-600 hover:text-[#1E3A8A] hover:bg-slate-100/80"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Quick Actions & Social Icons */}
            <div className="hidden lg:flex items-center gap-2 xl:gap-3 flex-shrink-0">
              {/* Social Icons */}
              <div className="flex items-center gap-1.5 pr-2 border-r border-slate-200">
                <a
                  href="https://www.instagram.com/ashok_yadav_xerox_distance_edu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Instagram"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-lg bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-colors"
                >
                  <InstagramIcon size={15} />
                </a>
                <a
                  href="https://www.facebook.com/AshokyadaXerox/"
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Follow on Facebook"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-lg bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white flex items-center justify-center transition-colors"
                >
                  <FacebookIcon size={15} />
                </a>
              </div>

              {/* Call Now */}
              <a
                href="tel:+919963095103"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-slate-200 bg-white text-slate-800 font-semibold text-xs xl:text-sm hover:border-[#1E3A8A] hover:text-[#1E3A8A] hover:bg-blue-50/50 shadow-xs transition-all"
              >
                <Phone size={14} className="text-[#1E3A8A]" />
                <span>Call Now</span>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20enquire%20about%20Ashok%20Yadav%20Study%20Hall%20%2F%20Distance%20Education%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#25D366] text-white font-semibold text-xs xl:text-sm hover:bg-[#128C7E] shadow-xs hover:shadow transition-all"
              >
                <MessageCircle size={15} />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
              className="xl:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {open && (
          <div className="xl:hidden bg-white border-t border-slate-200 shadow-xl max-h-[85vh] overflow-y-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col gap-1">
              {NAV_LINKS.map((link) => {
                const active = isLinkActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-left px-4 py-3 rounded-xl font-semibold text-base transition-colors min-h-[44px] flex items-center justify-between ${
                      active
                        ? "text-[#1E3A8A] bg-blue-50/90 font-bold"
                        : "text-slate-700 hover:bg-slate-50 hover:text-[#1E3A8A]"
                    }`}
                  >
                    <span>{link.label}</span>
                    {active && <span className="w-2 h-2 rounded-full bg-[#1E3A8A]" />}
                  </Link>
                );
              })}

              {/* Social Media Row in Mobile */}
              <div className="flex items-center gap-3 px-4 py-3 my-1 border-t border-slate-100">
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

              {/* Mobile Direct Action Buttons */}
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
