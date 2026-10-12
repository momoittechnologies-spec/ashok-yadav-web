"use client";

import Image from "next/image";
import { GraduationCap, Award, Calendar, CheckCircle2, MessageCircle, Phone, BookOpen, ExternalLink } from "lucide-react";

export default function DistanceEducation() {
  return (
    <section id="distance-education" className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-sm font-semibold mb-4">
            <GraduationCap size={16} /> Distance Education & University Admissions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Ashok Yadav <span className="text-[#1E3A8A]">Distance Education</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Authorized guidance and admissions center headed by{" "}
            <strong className="text-slate-900 font-bold">Dr. Ashok Yadav, MBA</strong>. We assist students,
            working professionals, and exam aspirants in obtaining recognized university degrees and professional certifications.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-sm font-medium">
            <Award size={16} className="text-[#F59E0B]" />
            Official Center for Andhra University & Acharya Nagarjuna University Courses
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Card 1: Andhra University Special Drive */}
          <div className="bg-white rounded-3xl border-2 border-blue-200 p-6 flex flex-col shadow-sm hover:shadow-xl transition-all group">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
              <Image
                src="/images/andhra-university-special-drive.jpg"
                alt="Andhra University Distance Education Special Drive Examinations 2026"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Special Drive 2026
              </span>
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Andhra University</span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1 mb-2">
                Special Drive Exams 2026
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Golden opportunity to clear all your pending/backlog subjects in Andhra University Distance Education:
              </p>

              <ul className="space-y-2 mb-5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>UG Batches:</strong> Eligible up to 2018</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>PG / Professional:</strong> Eligible up to 2021</span>
                </li>
                <li className="flex items-start gap-2 text-rose-600 font-semibold">
                  <Calendar size={16} className="mt-0.5 flex-shrink-0" />
                  <span><strong>Last Date:</strong> 17-10-2026 (Late fee ₹1,000)</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20want%20to%20enquire%20about%20Andhra%20University%20Special%20Drive%20Examinations%202026%20for%20clearing%20pending%20subjects."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#1E3A8A] text-white font-bold text-sm hover:bg-[#2563EB] transition-colors min-h-[48px]"
            >
              <MessageCircle size={16} /> Apply / Enquire on WhatsApp
            </a>
          </div>

          {/* Card 2: C.LI.SC Library Science */}
          <div className="bg-white rounded-3xl border-2 border-amber-200 p-6 flex flex-col shadow-sm hover:shadow-xl transition-all group">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
              <Image
                src="/images/clisc-library-science.jpg"
                alt="C.LI.SC Library Science Course Acharya Nagarjuna University"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                In Just 3 Months!
              </span>
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-amber-700">Acharya Nagarjuna University</span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1 mb-2">
                C.LI.SC Library Science Course
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Fast-track certificate course mandatory for government and public library job applications:
              </p>

              <ul className="space-y-2 mb-5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Duration:</strong> Only 3 Months</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Eligibility:</strong> Intermediate (10+2)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Career Value:</strong> Mandatory for Public Library Jobs</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20want%20to%20enquire%20about%20the%20C.LI.SC%20Library%20Science%203-month%20course%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F59E0B] text-white font-bold text-sm hover:bg-[#D97706] transition-colors min-h-[48px]"
            >
              <MessageCircle size={16} /> Enquire C.LI.SC Admission
            </a>
          </div>

          {/* Card 3: B.LI.SC & Degree Admissions */}
          <div className="bg-white rounded-3xl border-2 border-emerald-200 p-6 flex flex-col shadow-sm hover:shadow-xl transition-all group">
            <div className="relative w-full h-56 rounded-2xl overflow-hidden mb-5 bg-slate-100 border border-slate-200">
              <Image
                src="/images/dr-ashok-yadav-admissions.png"
                alt="B.LI.SC and Degree Admissions at Ashok Yadav Study Hall"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <span className="absolute top-3 left-3 bg-emerald-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Admissions Open
              </span>
            </div>

            <div className="flex-1">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">Degree & Professional</span>
              <h3 className="text-xl font-extrabold text-slate-900 mt-1 mb-2">
                B.LI.SC & Higher Degrees
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                Bachelor of Library Science & comprehensive distance degree programs with full material & exam guidance:
              </p>

              <ul className="space-y-2 mb-5 text-sm text-slate-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Courses:</strong> C.LI.SC, B.LI.SC, BA, B.Com, B.Sc, MA, MBA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Support:</strong> Complete printed study material & hall tickets</span>
                </li>
                <li className="flex items-start gap-2">
                  <Award size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Special Gift:</strong> Free TTD Agarbathis with admission!</span>
                </li>
              </ul>
            </div>

            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20want%20details%20about%20B.LI.SC%20and%20Degree%20distance%20education%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#10B981] text-white font-bold text-sm hover:bg-[#059669] transition-colors min-h-[48px]"
            >
              <MessageCircle size={16} /> Contact Dr. Ashok Yadav
            </a>
          </div>
        </div>

        {/* Coordinator Profile Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-amber-400 font-semibold text-sm mb-2">
              <BookOpen size={18} />
              Educational Consultancy & Study Hall Leadership
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold mb-3">
              Guided by Dr. Ashok Yadav, MBA
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-4">
              With over 6+ years of dedicated service in Kadapa, Dr. Ashok Yadav has helped thousands of students achieve their educational milestones through personalized counselling, genuine university enrollment, and test series printing.
            </p>
            <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                📍 Industrial Estate, RIMS Road, Kadapa
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-lg border border-slate-700">
                📞 Direct Phone: +91 99630 95103
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="tel:+919963095103"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors min-h-[48px]"
            >
              <Phone size={16} /> Call Dr. Ashok Yadav
            </a>
            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20need%20educational%20counselling%20and%20admission%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#128C7E] transition-colors min-h-[48px]"
            >
              <MessageCircle size={16} /> WhatsApp Direct
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
