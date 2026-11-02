"use client";

import { useState } from "react";
import { MessageCircle, Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("Study Hall");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Build formatted WhatsApp message URL
    const text = `Hi Dr. Ashok Yadav,\n\nName: ${name}\nPhone: ${phone}\nService Interested: ${service}\nMessage: ${message || "Please provide details and pricing."}`;
    const waUrl = `https://wa.me/919963095103?text=${encodeURIComponent(text)}`;

    setSubmitted(true);
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-white rounded-3xl border border-slate-200 p-7 sm:p-9 shadow-sm">
      <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
        Send an Instant Message
      </h3>
      <p className="text-slate-500 text-xs sm:text-sm mb-6">
        Fill out this quick form to connect with our counter team or Dr. Ashok Yadav on WhatsApp.
      </p>

      {submitted ? (
        <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center">
          <CheckCircle2 size={36} className="text-emerald-600 mx-auto mb-2" />
          <h4 className="font-bold text-emerald-900 text-base mb-1">Inquiry Prepared!</h4>
          <p className="text-emerald-700 text-xs sm:text-sm mb-4">
            WhatsApp has been opened with your inquiry details. If it did not open automatically, tap below:
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs font-semibold text-emerald-800 underline cursor-pointer"
          >
            Send Another Inquiry
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Your Full Name *
            </label>
            <input
              id="name"
              type="text"
              required
              placeholder="e.g. Ramesh Kumar"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Mobile Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              required
              placeholder="e.g. 9876543210"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all"
            />
          </div>

          <div>
            <label htmlFor="service" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Service Interested In
            </label>
            <select
              id="service"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 outline-none text-sm bg-white transition-all"
            >
              <option value="Study Hall Desk Booking">Study Hall & Reading Rooms (5 AM – 11 PM)</option>
              <option value="24-Hour Xerox & Printing">24-Hour Xerox & Large-Scale Print</option>
              <option value="Distance Education Admissions">Distance Education (Andhra Univ & ANU)</option>
              <option value="C.LI.SC Library Science Course">C.LI.SC 3-Month Library Science Course</option>
              <option value="Digital Classroom Studio Rental">Digital Classroom Studio Rental (₹499/hr)</option>
              <option value="Competitive Exam Materials">Competitive Exam Materials / Spiral Binding</option>
            </select>
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Your Message or Specific Questions
            </label>
            <textarea
              id="message"
              rows={3}
              placeholder="Tell us what you are preparing for or what you need printed..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-[#1E3A8A] focus:ring-2 focus:ring-blue-100 outline-none text-sm transition-all resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] shadow-sm hover:shadow-md transition-all cursor-pointer min-h-[48px]"
          >
            <MessageCircle size={17} />
            <span>Submit Inquiry via WhatsApp</span>
          </button>
        </form>
      )}
    </div>
  );
}
