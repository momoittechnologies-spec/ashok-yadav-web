"use client";

import Image from "next/image";
import { GraduationCap, Award, Calendar, CheckCircle2, MessageCircle, Phone, BookOpen } from "lucide-react";

export default function DistanceEducation() {
  return (
    <section id="distance-education" className="py-20 lg:py-24 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            <GraduationCap size={16} /> Distance Education & University Admissions
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Ashok Yadav <span className="text-[#1E3A8A]">Distance Education</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Authorized guidance and admissions center headed by{" "}
            <strong className="text-slate-900 font-bold">Dr. Ashok Yadav, MBA</strong>. We assist students,
            working professionals, and exam aspirants in obtaining recognized university degrees and professional certifications.
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-amber-50 border border-amber-200 rounded-xl text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
            <Award size={16} className="text-[#F59E0B]" />
            <span>Official Center for Andhra University & Acharya Nagarjuna University Courses</span>
          </div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-10 mb-16 lg:mb-20">
          {/* Card 1: Andhra University Special Drive */}
          <div className="bg-white rounded-3xl border-2 border-blue-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
            <div>
              <div className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
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

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-1">Andhra University</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  Special Drive Exams 2026
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Golden opportunity to clear all your pending/backlog subjects in Andhra University Distance Education:
                </p>

                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>UG Batches:</strong> Eligible up to 2018</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>PG / Professional:</strong> Eligible up to 2021</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-rose-600 font-semibold">
                    <Calendar size={16} className="mt-0.5 flex-shrink-0" />
                    <span><strong>Last Date:</strong> 17-10-2026 (Late fee ₹1,000)</span>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20want%20to%20enquire%20about%20Andhra%20University%20Special%20Drive%20Examinations%202026%20for%20clearing%20pending%20subjects."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#1E3A8A] text-white font-bold text-sm hover:bg-[#2563EB] transition-colors min-h-[48px] shadow-sm hover:shadow-md"
            >
              <MessageCircle size={16} />
              <span>Apply / Enquire on WhatsApp</span>
            </a>
          </div>

          {/* Card 2: C.LI.SC Library Science */}
          <div className="bg-white rounded-3xl border-2 border-amber-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
            <div>
              <div className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
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

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block mb-1">Acharya Nagarjuna University</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  C.LI.SC Library Science Course
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Fast-track certificate course mandatory for government and public library job applications:
                </p>

                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Duration:</strong> Only 3 Months</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Eligibility:</strong> Intermediate (10+2)</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Career Value:</strong> Mandatory for Public Library Jobs</span>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20want%20to%20enquire%20about%20the%20C.LI.SC%20Library%20Science%203-month%20course%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#F59E0B] text-white font-bold text-sm hover:bg-[#D97706] transition-colors min-h-[48px] shadow-sm hover:shadow-md"
            >
              <MessageCircle size={16} />
              <span>Enquire C.LI.SC Admission</span>
            </a>
          </div>

          {/* Card 3: B.LI.SC & Degree Admissions */}
          <div className="bg-white rounded-3xl border-2 border-emerald-200/90 p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all group">
            <div>
              <div className="relative w-full h-60 sm:h-64 rounded-2xl overflow-hidden mb-6 bg-slate-100 border border-slate-200">
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

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700 block mb-1">Degree & Higher Courses</span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
                  B.LI.SC & Higher Degrees
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">
                  Bachelor of Library Science & comprehensive distance degree programs with complete exam guidance:
                </p>

                <ul className="space-y-2.5 mb-6 text-sm text-slate-700">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Courses:</strong> C.LI.SC, B.LI.SC, BA, B.Com, B.Sc, MA, MBA</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Support:</strong> Complete printed study materials & hall tickets</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Award size={16} className="text-amber-600 mt-0.5 flex-shrink-0" />
                    <span><strong>Special Gift:</strong> Free TTD Agarbathis with every admission!</span>
                  </li>
                </ul>
              </div>
            </div>

            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20want%20details%20about%20B.LI.SC%20and%20Degree%20distance%20education%20admissions."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#10B981] text-white font-bold text-sm hover:bg-[#059669] transition-colors min-h-[48px] shadow-sm hover:shadow-md"
            >
              <MessageCircle size={16} />
              <span>Contact Dr. Ashok Yadav</span>
            </a>
          </div>
        </div>

        {/* Coordinator Profile Banner */}
        <div className="bg-slate-900 rounded-3xl p-8 sm:p-10 lg:p-12 text-white flex flex-col lg:flex-row items-center justify-between gap-8 shadow-xl">
          <div className="flex-1">
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs sm:text-sm uppercase tracking-wider mb-2">
              <BookOpen size={17} />
              <span>Educational Consultancy & Study Hall Leadership</span>
            </div>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-3 tracking-tight">
              Guided by Dr. Ashok Yadav, MBA
            </h3>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-3xl">
              With over 6+ years of dedicated service in Kadapa, Dr. Ashok Yadav has guided thousands of students and working professionals to achieve their educational and career milestones through personalized admission counseling and complete examination support.
            </p>
            <div className="flex flex-wrap gap-3 text-xs sm:text-sm text-slate-300">
              <span className="flex items-center gap-1.5 bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700">
                📍 D.No. 43, Industrial Estate, RIMS Road, Kadapa
              </span>
              <span className="flex items-center gap-1.5 bg-slate-800/90 px-3.5 py-2 rounded-xl border border-slate-700">
                📞 Direct Contact: +91 99630 95103
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto flex-shrink-0">
            <a
              href="tel:+919963095103"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-slate-900 font-extrabold text-sm hover:bg-slate-100 transition-colors min-h-[48px]"
            >
              <Phone size={16} className="text-[#1E3A8A]" />
              <span>Call Dr. Ashok Yadav</span>
            </a>
            <a
              href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20need%20educational%20counselling%20and%20admission%20guidance."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors min-h-[48px]"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
