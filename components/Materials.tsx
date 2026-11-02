import { MessageCircle, ShoppingCart } from "lucide-react";

const MATERIALS = [
  {
    exam: "APPSC Group 1",
    items: ["Prelims Question Bank", "Mains Descriptive Papers", "General Studies Notes", "Current Affairs Digest"],
    color: "border-blue-200/90 bg-blue-50/50",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    exam: "APPSC Group 2 & 4",
    items: ["GK & Current Affairs", "Reasoning Practice", "Telugu Grammar Notes", "Previous Year Papers (10 yrs)"],
    color: "border-emerald-200/90 bg-emerald-50/50",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    exam: "AP Police SI / Constable",
    items: ["Law & Acts Reference", "Physical Standards Guide", "Reasoning & Arithmetic", "General Science Notes"],
    color: "border-purple-200/90 bg-purple-50/50",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    exam: "DSC / TET / CTET",
    items: ["Child Development & Pedagogy", "Content & Methodology", "Language Papers", "Practice Test Series"],
    color: "border-amber-200/90 bg-amber-50/50",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    exam: "SSC CGL / CHSL",
    items: ["Quantitative Aptitude", "English Language", "GK Compendium", "Reasoning Shortcuts"],
    color: "border-rose-200/90 bg-rose-50/50",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    exam: "NEET / JEE",
    items: ["Biology NCERT Digest", "Physics Formula Sheets", "Chemistry Notes", "Mock Test Papers"],
    color: "border-cyan-200/90 bg-cyan-50/50",
    badge: "bg-cyan-100 text-cyan-700",
  },
];

export default function Materials() {
  return (
    <section id="materials" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#10B981]/15 text-emerald-800 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            📖 Exam Study Materials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Get Your Study Materials <span className="text-[#10B981]">Printed & Ready</span>
          </h2>
          <p className="text-slate-600 max-w-3xl mx-auto text-base sm:text-lg leading-relaxed">
            Order printed copies of popular competitive exam materials directly — available for quick pickup at the Xerox counter. WhatsApp us your requirement and we'll have it spiral-bound and ready!
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-8 mb-14 lg:mb-16">
          {MATERIALS.map((material) => (
            <div
              key={material.exam}
              className={`rounded-3xl border-2 p-6 sm:p-8 ${material.color} flex flex-col justify-between hover:shadow-xl transition-all group`}
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-xs font-extrabold px-3 py-1 rounded-full ${material.badge}`}>
                    {material.exam}
                  </span>
                  <ShoppingCart size={18} className="text-slate-400 group-hover:text-slate-700 transition-colors" />
                </div>
                <ul className="space-y-2.5 mb-6">
                  {material.items.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/919963095103?text=Hi%2C%20I%20need%20printed%20study%20materials%20for%20${encodeURIComponent(material.exam)}.%20Please%20share%20availability%20and%20price.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white border border-slate-200 text-slate-800 font-bold text-xs sm:text-sm hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all min-h-[44px] shadow-xs hover:shadow-md"
              >
                <MessageCircle size={15} />
                <span>Order Printed Copy</span>
              </a>
            </div>
          ))}
        </div>

        {/* Custom Request Banner */}
        <div className="bg-white rounded-3xl border border-slate-200 p-8 sm:p-10 text-center shadow-sm max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 mb-2">
            Don't see your exam or course? No problem! 📋
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mb-6 max-w-xl mx-auto leading-relaxed">
            We can print and bind any syllabus or reference document you need — just send us your PDF, past question papers, or notes file on WhatsApp.
          </p>
          <a
            href="https://wa.me/919963095103?text=Hi%2C%20I%20need%20custom%20exam%20study%20materials%20printed.%20Please%20help%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#25D366] text-white font-extrabold text-sm hover:bg-[#128C7E] transition-colors shadow-md min-h-[48px]"
          >
            <MessageCircle size={16} />
            <span>Request Custom Material on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
