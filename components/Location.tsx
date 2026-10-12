import { MapPin, Phone, MessageCircle, Clock, Navigation, Train } from "lucide-react";

// Inline SVG for social icons
function InstagramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
    </svg>
  );
}

function FacebookIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export default function Location() {
  return (
    <section id="location" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-block px-4 py-1.5 bg-[#10B981]/15 text-emerald-700 rounded-full text-sm font-semibold mb-4">
            📍 Location & Contact
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4">
            Find Us in <span className="text-[#1E3A8A]">Kadapa</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto">
            Conveniently situated in Industrial Estate on RIMS Road, just minutes from Kadapa Railway Station.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          {/* Info Panel */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Address */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#1E3A8A]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={18} className="text-[#1E3A8A]" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">Official Address</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    D.No. 43, Industrial Estate, 281-1-8,<br />
                    RIMS Road, Railway Colony,<br />
                    Kadapa – 516004, Andhra Pradesh<br />
                    <strong className="text-slate-800">Proprietor: Dr. Ashok Yadav, MBA</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={18} className="text-amber-600" />
                </div>
                <div className="w-full">
                  <h3 className="font-bold text-slate-900 mb-3 text-sm">Operating Timings</h3>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Study Hall</span>
                      <span className="font-semibold text-slate-900">5:00 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Xerox Centre</span>
                      <span className="font-semibold text-[#10B981]">Open 24 Hours</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-600">Distance Edu & Studio</span>
                      <span className="font-semibold text-blue-600">9:00 AM – 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Landmark */}
            <div className="bg-white rounded-2xl border border-slate-200 p-5 sm:p-6 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Train size={18} className="text-emerald-600" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">Easy Accessibility</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    ~1.5 km from Cuddapah Railway Station<br />
                    Near RIMS Kadapa Hospital & Industrial Estate<br />
                    Ganagapeta / Railway Colony area
                  </p>
                </div>
              </div>
            </div>

            {/* Contact & Social Links */}
            <div className="flex flex-col gap-2.5">
              <a
                href="tel:+919963095103"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#1E3A8A] text-white font-bold hover:bg-[#2563EB] transition-colors min-h-[50px]"
              >
                <Phone size={18} />
                <div>
                  <div className="text-xs font-normal text-blue-200">Call Directly</div>
                  <div>+91 99630 95103</div>
                </div>
              </a>

              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20need%20details%20about%20Ashok%20Yadav%20Study%20Hall%20%2F%20Distance%20Education%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-[#25D366] text-white font-bold hover:bg-[#128C7E] transition-colors min-h-[50px]"
              >
                <MessageCircle size={18} />
                <div>
                  <div className="text-xs font-normal text-green-100">WhatsApp Chat</div>
                  <div>9963095103</div>
                </div>
              </a>

              {/* Instagram Card */}
              <a
                href="https://www.instagram.com/ashok_yadav_xerox_distance_edu/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-gradient-to-r from-pink-50 to-rose-50 border border-pink-200 text-pink-700 font-bold hover:bg-pink-100 transition-colors min-h-[50px]"
              >
                <InstagramIcon size={18} />
                <div>
                  <div className="text-xs font-normal text-pink-600">Official Instagram</div>
                  <div>@ashok_yadav_xerox_distance_edu</div>
                </div>
              </a>

              {/* Facebook Card */}
              <a
                href="https://www.facebook.com/AshokyadaXerox/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-blue-50 border border-blue-200 text-[#1877F2] font-bold hover:bg-blue-100 transition-colors min-h-[50px]"
              >
                <FacebookIcon size={18} />
                <div>
                  <div className="text-xs font-normal text-blue-600">Official Facebook Page</div>
                  <div>facebook.com/AshokyadaXerox</div>
                </div>
              </a>

              <a
                href="https://maps.google.com/?q=Ashok+Yadav+Study+Hall+Kadapa+Industrial+Estate+RIMS+Road"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-3.5 rounded-xl bg-white border-2 border-slate-200 text-slate-700 font-bold hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors min-h-[50px]"
              >
                <Navigation size={18} />
                <div>
                  <div className="text-xs font-normal text-slate-400">Google Maps</div>
                  <div>Open Turn-by-Turn Navigation</div>
                </div>
              </a>
            </div>
          </div>

          {/* Map Embed */}
          <div className="lg:col-span-3 rounded-3xl overflow-hidden border border-slate-200 shadow-sm min-h-[450px]">
            <iframe
              title="Ashok Yadav Study Hall & Xerox Kadapa Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7!2d78.8217!3d14.4673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzAyLjMiTiA3OMKwNDknMTguMSJF!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "450px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
