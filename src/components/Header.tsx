import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const mainNav = [
  { label: "Welcome", path: "/" },
  { label: "Clinic Info", path: "/clinic-information" },
  { label: "Online Booking", path: "/online-booking" },
  { label: "Our Staff", path: "/clinic-staff" },
];

const servicesNav = [
  { label: "Women's Health & Menopause", path: "/womens-health-menopause" },
  { label: "Weight & Lifestyle Medicine", path: "/obesity-medicine" },
  { label: "Skin Cancer Screening", path: "/skin-care" },
  { label: "Pain Clinic", path: "/pain-clinic" },
  { label: "Mind Science", path: "/mind-science" },
];

const galleryNav = [
  { label: "Physician Photos", path: "/physician-photos" },
  { label: "Clinic Photos", path: "/clinic-photos" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        <Link to="/" className="flex-shrink-0" onClick={() => window.scrollTo(0, 0)}>
          <img src={logo} alt="Westside Medical Associates" className="h-[70px] w-auto" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {mainNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => window.scrollTo(0, 0)}
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive(item.path)
                  ? "text-primary bg-accent"
                  : "text-foreground/80 hover:text-primary hover:bg-accent/50"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                servicesNav.some((s) => isActive(s.path))
                  ? "text-primary bg-accent"
                  : "text-foreground/80 hover:text-primary hover:bg-accent/50"
              }`}
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
              onClick={() => setServicesOpen(!servicesOpen)}
            >
              Services <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-64 bg-background rounded-lg shadow-xl border border-border py-2 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {servicesNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setServicesOpen(false); window.scrollTo(0, 0); }}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive(item.path) ? "text-primary bg-accent" : "text-foreground/80 hover:text-primary hover:bg-accent/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Gallery Dropdown */}
          <div className="relative group">
            <button
              className={`flex items-center gap-1 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                galleryNav.some((s) => isActive(s.path))
                  ? "text-primary bg-accent"
                  : "text-foreground/80 hover:text-primary hover:bg-accent/50"
              }`}
              onMouseEnter={() => setGalleryOpen(true)}
              onMouseLeave={() => setGalleryOpen(false)}
              onClick={() => setGalleryOpen(!galleryOpen)}
            >
              Gallery <ChevronDown className="h-3.5 w-3.5" />
            </button>
            {galleryOpen && (
              <div
                className="absolute top-full left-0 mt-1 w-52 bg-background rounded-lg shadow-xl border border-border py-2 z-50"
                onMouseEnter={() => setGalleryOpen(true)}
                onMouseLeave={() => setGalleryOpen(false)}
              >
                {galleryNav.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => { setGalleryOpen(false); window.scrollTo(0, 0); }}
                    className={`block px-4 py-2.5 text-sm transition-colors ${
                      isActive(item.path) ? "text-primary bg-accent" : "text-foreground/80 hover:text-primary hover:bg-accent/50"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="cta" size="default" className="ml-2">
              <Phone className="h-4 w-4" /> Book Now
            </Button>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="cta" size="sm">Book Now</Button>
          </Link>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="text-foreground p-2">
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-md">
          <nav className="container mx-auto px-5 py-4 space-y-1">
            {mainNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                className={`block px-4 py-3 rounded-md text-sm font-medium ${
                  isActive(item.path) ? "text-primary bg-accent" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Services</div>
            {servicesNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                className={`block px-4 py-3 rounded-md text-sm font-medium ${
                  isActive(item.path) ? "text-primary bg-accent" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2 pb-1 px-4 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Gallery</div>
            {galleryNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => { setMobileOpen(false); window.scrollTo(0, 0); }}
                className={`block px-4 py-3 rounded-md text-sm font-medium ${
                  isActive(item.path) ? "text-primary bg-accent" : "text-foreground/80"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
