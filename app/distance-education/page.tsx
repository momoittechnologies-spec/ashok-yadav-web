import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";
import DistanceEducation from "@/components/DistanceEducation";
import { GraduationCap, Award, BookOpen, Phone, MessageCircle, HelpCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Andhra University & ANU Distance Education Admissions in Kadapa",
  description:
    "Official counseling & admission center for Andhra University Special Drive Exams 2026, Acharya Nagarjuna University C.LI.SC (3-month Library Science), B.LI.SC, Degree & PG courses in Kadapa. Headed by Dr. Ashok Yadav, MBA.",
  alternates: {
    canonical: "https://ashok-yadav-web.vercel.app/distance-education",
  },
  openGraph: {
    title: "Distance Education Admissions & University Guidance in Kadapa | Ashok Yadav",
    description:
      "Clear your pending university degrees or enroll in C.LI.SC / B.LI.SC courses in Kadapa under guidance of Dr. Ashok Yadav, MBA.",
    url: "https://ashok-yadav-web.vercel.app/distance-education",
  },
};

const DISTANCE_FAQS = [
  {
    q: "What is the Andhra University Special Drive Examination 2026?",
    a: "The AU Special Drive is a special golden opportunity created for candidate batches (UG batches up to 2018, PG & Professional batches up to 2021) who have pending backlogs to write exams and finally obtain their official university degrees.",
  },
  {
    q: "Why is the C.LI.SC Library Science course so popular?",
    a: "C.LI.SC (Certificate Course in Library and Information Science) through Acharya Nagarjuna University takes just 3 months to complete with Intermediate eligibility. It is an essential qualification required for government librarian and school/college library jobs in Andhra Pradesh.",
  },
  {
    q: "Do you supply the study material and hall tickets?",
    a: "Yes! When you enroll through Ashok Yadav Distance Education, we provide complete official study materials, past question papers, assignment guidance, and facilitate seamless hall ticket issuance.",
  },
  {
    q: "Can working professionals join distance courses without attending daily classes?",
    a: "Yes, all distance programs are designed specifically for working individuals, homemakers, and competitive exam students, with weekend contact sessions and flexible study hours.",
  },
];

export default function DistanceEducationPage() {
  return (
    <div className="pt-20 lg:pt-24 min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
      {/* Page Header */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 py-6">
          <Breadcrumb items={[{ label: "Distance Education & Admissions" }]} />
          <div className="mt-2 max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100 text-[#1E3A8A] text-xs font-bold uppercase tracking-wider mb-3">
              <GraduationCap size={14} /> Andhra University & ANU Admissions
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Recognized <span className="text-[#1E3A8A]">University Degrees</span> & Admissions in Kadapa
            </h1>
            <p className="text-slate-600 text-base sm:text-lg mt-3 leading-relaxed">
              Headed by <strong>Dr. Ashok Yadav, MBA</strong>. Official admission assistance for degree programs, backlog clearing, and professional library science qualifications.
            </p>
          </div>
        </div>
      </div>

      {/* Main Distance Education Component */}
      <DistanceEducation />

      {/* FAQs */}
      <section className="py-16 lg:py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="text-center mb-12">
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#1E3A8A]/10 text-[#1E3A8A] rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              <HelpCircle size={15} /> Admissions Help
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
              Distance Education Admissions FAQ
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {DISTANCE_FAQS.map((faq) => (
              <div key={faq.q} className="bg-slate-50 rounded-2xl p-6 sm:p-7 border border-slate-200/90 shadow-xs">
                <h3 className="font-extrabold text-slate-900 text-base mb-2">
                  {faq.q}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Admission Box */}
          <div className="mt-12 text-center bg-gradient-to-r from-blue-950 via-[#1E3A8A] to-blue-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-black mb-3">
              Book a Free One-on-One Educational Counseling Session
            </h3>
            <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto mb-6">
              Speak directly with Dr. Ashok Yadav, MBA, to discuss course eligibility, last submission dates, and career guidance.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:+919963095103"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-white text-[#1E3A8A] font-extrabold text-sm hover:bg-slate-100 transition-colors shadow-md min-h-[48px]"
              >
                <Phone size={16} />
                <span>Call Dr. Ashok Yadav: 9963095103</span>
              </a>
              <a
                href="https://wa.me/919963095103?text=Hi%20Dr.%20Ashok%20Yadav%2C%20I%20want%20to%20enquire%20about%20distance%20education%20admissions%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors shadow-md min-h-[48px]"
              >
                <MessageCircle size={16} />
                <span>Inquire on WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
