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
    <section id="location" className="py-20 lg:py-24 bg-slate-50">
      <div className="max-w-7xl 2xl:max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-14 lg:mb-16">
          <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-[#10B981]/15 text-emerald-800 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider mb-4">
            📍 Location & Contact Details
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Find Us in <span className="text-[#1E3A8A]">Kadapa</span>
          </h2>
          <p className="text-slate-600 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Conveniently situated in Industrial Estate on RIMS Road, just ~1.5 km from Kadapa Railway Station.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-stretch">
          {/* Info Panel: 5 columns */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Official Address */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#1E3A8A]/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={22} className="text-[#1E3A8A]" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 mb-1.5 text-base">Official Address</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    D.No. 43, Industrial Estate, 281-1-8,<br />
                    RIMS Road, Railway Colony,<br />
                    Kadapa – 516004, Andhra Pradesh<br />
                    <strong className="text-slate-900 mt-1 block">Proprietor: Dr. Ashok Yadav, MBA</strong>
                  </p>
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Clock size={22} className="text-amber-700" />
                </div>
                <div className="w-full">
                  <h3 className="font-extrabold text-slate-900 mb-3 text-base">Operating Timings</h3>
                  <div className="space-y-2.5">
                    <div className="flex justify-between text-sm py-1 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Study Hall & Reading Rooms</span>
                      <span className="font-bold text-slate-900">5:00 AM – 11:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm py-1 border-b border-slate-100">
                      <span className="text-slate-600 font-medium">Xerox & Print Services</span>
                      <span className="font-bold text-[#10B981]">Open 24 Hours</span>
                    </div>
                    <div className="flex justify-between text-sm py-1">
                      <span className="text-slate-600 font-medium">Distance Edu & Digital Studio</span>
                      <span className="font-bold text-blue-600">9:00 AM – 9:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Accessibility & Landmark */}
            <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-7 shadow-xs">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Train size={22} className="text-emerald-700" />
                </div>
                <div>
                  <h3 className="font-extrabold text-slate-900 mb-1.5 text-base">Nearby Landmarks</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    ~1.5 km from Cuddapah (Kadapa) Railway Station<br />
                    Right on RIMS Road near Industrial Estate junction<br />
                    Convenient auto & bus connectivity from all Kadapa localities
                  </p>
                </div>
              </div>
            </div>

            {/* Direct Contact Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href="tel:+919963095103"
                className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-[#1E3A8A] text-white font-bold text-sm hover:bg-[#2563EB] transition-colors min-h-[50px] shadow-sm"
              >
                <Phone size={17} />
                <span>Call: 9963095103</span>
              </a>

              <a
                href="https://wa.me/919963095103?text=Hi%2C%20I%20need%20details%20about%20Ashok%20Yadav%20Study%20Hall%20%2F%20Distance%20Education%20in%20Kadapa."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 p-3.5 rounded-2xl bg-[#25D366] text-white font-bold text-sm hover:bg-[#128C7E] transition-colors min-h-[50px] shadow-sm"
              >
                <MessageCircle size={17} />
                <span>WhatsApp Chat</span>
              </a>
            </div>

            {/* Social & Maps Pills */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://maps.google.com/?q=Ashok+Yadav+Study+Hall+Kadapa+Industrial+Estate+RIMS+Road"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl bg-white border border-slate-200 text-slate-700 font-bold text-xs hover:border-[#1E3A8A] hover:text-[#1E3A8A] transition-colors"
              >
                <Navigation size={15} />
                <span>Google Maps Directions</span>
              </a>
              <a
                href="https://www.instagram.com/ashok_yadav_xerox_distance_edu/"
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram"
                className="w-11 h-11 rounded-2xl bg-pink-50 text-pink-600 hover:bg-pink-600 hover:text-white border border-pink-200 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <InstagramIcon size={17} />
              </a>
              <a
                href="https://www.facebook.com/AshokyadaXerox/"
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook"
                className="w-11 h-11 rounded-2xl bg-blue-50 text-[#1877F2] hover:bg-[#1877F2] hover:text-white border border-blue-200 flex items-center justify-center transition-colors flex-shrink-0"
              >
                <FacebookIcon size={17} />
              </a>
            </div>
          </div>

          {/* Interactive Google Map: 7 columns */}
          <div className="lg:col-span-7 rounded-3xl overflow-hidden border border-slate-200 shadow-md min-h-[460px] lg:min-h-full">
            <iframe
              title="Ashok Yadav Study Hall & Xerox Kadapa Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.7!2d78.8217!3d14.4673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDI4JzAyLjMiTiA3OMKwNDknMTguMSJF!5e0!3m2!1sen!2sin!4v1695000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "480px" }}
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
