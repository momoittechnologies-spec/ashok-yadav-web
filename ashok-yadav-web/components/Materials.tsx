import { MessageCircle, ShoppingCart } from "lucide-react";

const MATERIALS = [
  {
    exam: "APPSC Group 1",
    items: ["Prelims Question Bank", "Mains Descriptive Papers", "General Studies Notes", "Current Affairs Digest"],
    color: "border-blue-200 bg-blue-50",
    badge: "bg-blue-100 text-blue-700",
  },
  {
    exam: "APPSC Group 2 & 4",
    items: ["GK & Current Affairs", "Reasoning Practice", "Telugu Grammar Notes", "Previous Year Papers (10 yrs)"],
    color: "border-emerald-200 bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-700",
  },
  {
    exam: "AP Police SI / Constable",
    items: ["Law & Acts Reference", "Physical Standards Guide", "Reasoning & Arithmetic", "General Science Notes"],
    color: "border-purple-200 bg-purple-50",
    badge: "bg-purple-100 text-purple-700",
  },
  {
    exam: "DSC / TET / CTET",
    items: ["Child Development & Pedagogy", "Content & Methodology", "Language Papers", "Practice Test Series"],
    color: "border-amber-200 bg-amber-50",
    badge: "bg-amber-100 text-amber-700",
  },
  {
    exam: "SSC CGL / CHSL",
    items: ["Quantitative Aptitude", "English Language", "GK Compendium", "Reasoning Shortcuts"],
    color: "border-rose-200 bg-rose-50",
    badge: "bg-rose-100 text-rose-700",
  },
  {
    exam: "NEET / JEE",
    items: ["Biology NCERT Digest", "Physics Formula Sheets", "Chemistry Notes", "Mock Test Papers"],
    color: "border-cyan-200 bg-cyan-50",
    badge: "bg-cyan-100 text-cyan-700",
  },
];

export default function Materials() {
  return (
    <section id="materials" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#10B981]/15 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            📖 Exam Study Materials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Get Your Study Materials{" "}
            <span className="text-[#10B981]">Printed & Ready</span>
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
            Order printed copies of popular exam materials directly — available for
            quick pickup at the Xerox counter. WhatsApp us your requirement and we'll
            have it ready!
          </p>
        </div>

        {/* Materials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {MATERIALS.map((material) => (
            <div
              key={material.exam}
              className={`rounded-2xl border-2 p-6 ${material.color} hover:shadow-lg transition-shadow`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-bold px-3 py-1 rounded-full ${material.badge}`}>
                  {material.exam}
                </span>
                <ShoppingCart size={16} className="text-slate-400" />
              </div>
              <ul className="space-y-2 mb-5">
                {material.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-400 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href={`https://wa.me/919963095103?text=Hi%2C%20I%20need%20printed%20study%20materials%20for%20${encodeURIComponent(material.exam)}.%20Please%20share%20availability%20and%20price.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white border border-slate-200 text-slate-700 font-semibold text-sm hover:bg-[#25D366] hover:text-white hover:border-[#25D366] transition-all min-h-[44px]"
              >
                <MessageCircle size={15} />
                Order Printed Copy
              </a>
            </div>
          ))}
        </div>

        {/* Custom Request Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 text-center shadow-sm">
          <h3 className="text-lg font-bold text-slate-900 mb-2">
            Don't see your exam? No problem! 📋
          </h3>
          <p className="text-slate-600 text-sm mb-5">
            We can print any material you need — just send us your PDF, question paper,
            or notes file and we'll have it ready quickly.
          </p>
          <a
            href="https://wa.me/919963095103?text=Hi%2C%20I%20need%20custom%20exam%20study%20materials%20printed.%20Please%20help%20me."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#128C7E] transition-colors min-h-[48px]"
          >
            <MessageCircle size={16} />
            Request Custom Material
          </a>
        </div>
      </div>
    </section>
  );
}
