import Link from "next/link";
import { Home, Phone, ArrowLeft, Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="pt-28 pb-20 min-h-[75vh] flex items-center justify-center bg-slate-50">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <span className="inline-block text-6xl sm:text-7xl font-black text-[#1E3A8A] mb-4">
          404
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
          Page Not Found
        </h1>
        <p className="text-slate-600 text-sm sm:text-base mb-8 max-w-md mx-auto leading-relaxed">
          The page you are looking for might have been moved, renamed, or is temporarily unavailable. Explore our key educational services below:
        </p>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8 text-left">
          <Link
            href="/study-hall"
            className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-all"
          >
            📚 Study Hall
          </Link>
          <Link
            href="/xerox-printing"
            className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-all"
          >
            🖨️ 24/7 Xerox
          </Link>
          <Link
            href="/distance-education"
            className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-all"
          >
            🎓 Distance Edu
          </Link>
          <Link
            href="/digital-studio"
            className="p-3 bg-white rounded-xl border border-slate-200 text-xs font-bold text-slate-800 hover:text-[#1E3A8A] hover:border-[#1E3A8A] transition-all"
          >
            🎬 Digital Studio
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1E3A8A] text-white font-bold text-sm hover:bg-[#2563EB] transition-colors"
          >
            <Home size={16} />
            <span>Back to Homepage</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white border border-slate-200 text-slate-700 font-bold text-sm hover:border-slate-300 transition-colors"
          >
            <Phone size={16} />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
