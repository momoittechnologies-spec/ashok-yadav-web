import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";

// Inline SVG for social icons not available in this lucide-react version
function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}



export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-4">
              <div className="text-xl font-extrabold text-white">Ashok Yadav</div>
              <div className="text-[#F59E0B] font-semibold text-sm tracking-widest uppercase">
                Study Hall & Xerox
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Kadapa's most trusted study hall and xerox centre — serving students and
              professionals since 2018 from Industrial Estate, RIMS Road.
            </p>
            <div className="flex gap-3">
              <a
                href="https://wa.me/919963095103"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity"
              >
                <MessageCircle size={16} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-slate-700 flex items-center justify-center hover:bg-slate-600 transition-colors"
              >
              <FacebookIcon />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              {[
                "Study Hall / Reading Room",
                "Photocopying & Colour Xerox",
                "Bulk Printing",
                "Scanning & Document Services",
                "Spiral & Book Binding",
                "Stationery & Books",
                "Exam Material Printing",
              ].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Hours
            </h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#F59E0B] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-300 font-medium">Study Hall</div>
                  <div className="text-slate-400">5:00 AM – 11:00 PM</div>
                  <div className="text-slate-500 text-xs">Monday – Sunday</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Clock size={14} className="text-[#10B981] mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-300 font-medium">Xerox Centre</div>
                  <div className="text-[#10B981] font-semibold">Open 24 Hours</div>
                  <div className="text-slate-500 text-xs">Monday – Sunday</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-2">
                <MapPin size={14} className="text-[#1E3A8A] mt-0.5 flex-shrink-0" style={{ color: "#60A5FA" }} />
                <span className="text-slate-400">
                  Industrial Estate, RIMS Road,<br />
                  Kadapa – 516004, AP
                </span>
              </div>
              <a
                href="tel:+919963095103"
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Phone size={14} className="text-blue-400" />
                +91 99630 95103
              </a>
              <a
                href="https://wa.me/919963095103"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-300 hover:text-[#25D366] transition-colors"
              >
                <MessageCircle size={14} className="text-[#25D366]" />
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <span>
            © {year} Ashok Yadav Study Hall & Xerox, Kadapa. All rights reserved.
          </span>
          <span>
            Designed & developed by{" "}
            <a
              href="mailto:momoit.technologies@gmail.com"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Momo IT Technologies
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
