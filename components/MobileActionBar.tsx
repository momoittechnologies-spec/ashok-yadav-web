"use client";

import { Phone, MessageCircle, Calculator } from "lucide-react";

export default function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-white/95 backdrop-blur-md border-t border-slate-200 shadow-2xl">
      <div className="grid grid-cols-3 divide-x divide-slate-100">
        <a
          href="tel:+919963095103"
          className="flex flex-col items-center justify-center py-3 gap-1 text-[#1E3A8A] hover:bg-blue-50 transition-colors min-h-[60px]"
        >
          <Phone size={20} />
          <span className="text-xs font-semibold">Call Now</span>
        </a>
        <a
          href="https://wa.me/919963095103?text=Hi%2C%20I%20want%20to%20enquire%20about%20Ashok%20Yadav%20Study%20Hall%20%2F%20Xerox%2C%20Kadapa."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 bg-[#25D366] text-white hover:bg-[#128C7E] transition-colors min-h-[60px]"
        >
          <MessageCircle size={20} />
          <span className="text-xs font-semibold">WhatsApp</span>
        </a>
        <button
          onClick={() =>
            document.getElementById("quickprint")?.scrollIntoView({ behavior: "smooth" })
          }
          className="flex flex-col items-center justify-center py-3 gap-1 bg-[#F59E0B] text-white hover:bg-[#D97706] transition-colors min-h-[60px]"
        >
          <Calculator size={20} />
          <span className="text-xs font-semibold">QuickPrint</span>
        </button>
      </div>
      {/* Safe area inset for iOS home indicator */}
      <div className="h-safe-area-bottom bg-white" />
    </div>
  );
}
