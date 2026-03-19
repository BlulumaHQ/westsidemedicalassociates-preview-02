import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-5 section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
          {/* Col 1: Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-3">Westside Medical Associates</h3>
            <p className="text-sm opacity-75 leading-relaxed">
              Family Health & Wellness Centre — Comprehensive, Concise, Compassionate, Competent & Continuous Care.
            </p>
          </div>

          {/* Col 2: Spacer */}
          <div className="hidden lg:block" />

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Navigation</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Welcome", path: "/" },
                { label: "Clinic Information", path: "/clinic-information" },
                { label: "Online Booking", path: "/online-booking" },
                { label: "Our Staff", path: "/clinic-staff" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => window.scrollTo(0, 0)} className="opacity-75 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Services */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Services</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: "Women's Health", path: "/womens-health-menopause" },
                { label: "Weight & Lifestyle", path: "/obesity-medicine" },
                { label: "Skin Cancer Screening", path: "/skin-care" },
                { label: "Pain Clinic", path: "/pain-clinic" },
                { label: "Mind Science", path: "/mind-science" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} onClick={() => window.scrollTo(0, 0)} className="opacity-75 hover:opacity-100 transition-opacity">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Contact */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-4 opacity-80">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2.5 opacity-75">
                <Phone className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="tel:2507686920" className="hover:opacity-100">250-768-6920</a>
              </li>
              <li className="flex items-start gap-2.5 opacity-75">
                <Mail className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <a href="mailto:admin@wsmed.ca" className="hover:opacity-100">admin@wsmed.ca</a>
              </li>
              <li className="flex items-start gap-2.5 opacity-75">
                <MapPin className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <span>103 - 1135 Stevens Road, West Kelowna, BC V1Z 2S8</span>
              </li>
              <li className="flex items-start gap-2.5 opacity-75">
                <Clock className="h-4 w-4 mt-0.5 flex-shrink-0" />
                <div>
                  <p>Mon–Fri: 8AM–7PM</p>
                  <p>Sat: 8AM–2PM</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-5 py-5">
          <p className="text-xs opacity-50 text-center">
            © {year} Westside Medical Associates. All rights reserved. | Web Design by{" "}
            <a href="https://bluluma.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 underline">
              Bluluma
            </a>{" "}
            | Powered by{" "}
            <a href="https://swiftlift.app" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 underline">
              SwiftLift
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
