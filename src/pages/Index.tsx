import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-clinic.jpg";
import {
  Heart, Brain, Scale, Sun, Syringe, Stethoscope,
  Clock, Users, Shield, CalendarCheck, Phone, Star, ArrowRight
} from "lucide-react";

const services = [
  { icon: Heart, title: "Women's Health & Menopause", desc: "Specialized care for women's health needs including menopause management and hormone therapy.", path: "/womens-health-menopause" },
  { icon: Scale, title: "Weight & Lifestyle Medicine", desc: "Evidence-based weight management and lifestyle modification programs for lasting results.", path: "/obesity-medicine" },
  { icon: Sun, title: "Skin Cancer Screening", desc: "Comprehensive skin examinations for early detection and prevention of skin cancer.", path: "/skin-care" },
  { icon: Syringe, title: "Pain Clinic", desc: "Trigger point injections, joint injections, and comprehensive pain management solutions.", path: "/pain-clinic" },
  { icon: Brain, title: "Mind Science", desc: "Mental wellness support integrating modern approaches to psychological health.", path: "/mind-science" },
  { icon: Stethoscope, title: "Family Medicine", desc: "Complete primary care services for registered patients, including extended weekday and Saturday hours.", path: "/clinic-information" },
];

const trustItems = [
  { icon: Clock, title: "Extended Hours", desc: "Open Mon–Fri 8AM–7PM and Saturdays 8AM–2PM" },
  { icon: Users, title: "Accepting New Patients", desc: "We are currently welcoming new patients to our practice" },
  { icon: Shield, title: "Comprehensive Care", desc: "Family medicine plus 5 specialized clinics under one roof" },
  { icon: CalendarCheck, title: "Walk-in Saturdays", desc: "Saturday walk-in clinic plus pre-booked appointments" },
];

const testimonials = [
  { name: "Sarah M.", text: "Exceptional care from the entire team. The extended hours make it so convenient for my family.", rating: 5 },
  { name: "James K.", text: "The specialized clinics saved me from having to travel to multiple doctors. Everything under one roof.", rating: 5 },
  { name: "Linda R.", text: "Compassionate, thorough, and professional. I've been a patient for years and wouldn't go anywhere else.", rating: 5 },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Westside Medical Associates Clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/85 via-foreground/60 to-foreground/30" />
        </div>
        <div className="container mx-auto px-5 relative z-10">
          <div className="max-w-2xl animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-secondary/20 border border-secondary/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-medium text-secondary">Now Accepting New Patients</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-background leading-tight mb-6">
              Your Family's Health, Our Priority
            </h1>
            <p className="text-lg md:text-xl text-background/80 mb-8 leading-relaxed">
              Comprehensive, Concise, Compassionate, Competent & Continuous Care — Westside Medical Associates is West Kelowna's trusted Family Health & Wellness Centre.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="cta" size="xl">
                  <CalendarCheck className="h-5 w-5" /> Book an Appointment
                </Button>
              </Link>
              <a href="tel:2507686920">
                <Button variant="outline" size="xl" className="bg-background/10 border-background/30 text-background hover:bg-background/20 rounded-full">
                  <Phone className="h-5 w-5" /> 250-768-6920
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="trust-bg section-padding">
        <div className="container mx-auto px-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4 p-6 bg-card rounded-xl shadow-sm border border-border">
                <div className="w-12 h-12 rounded-xl bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <item.icon className="h-6 w-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="section-padding">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Complete Healthcare Under One Roof
          </h2>
          <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
            Finding quality healthcare shouldn't mean visiting multiple clinics across town. At Westside Medical Associates, we bring together family medicine and five specialized clinics — all in one convenient West Kelowna location with extended hours designed to fit your schedule.
          </p>
          <p className="text-muted-foreground mb-8">
            From routine check-ups to specialized care in women's health, weight management, skin cancer screening, pain management, and mental wellness, our team delivers the comprehensive care your family deserves.
          </p>
          <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="default" size="lg" className="rounded-full">
              Schedule Your Visit <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-alt section-padding">
        <div className="container mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specialized clinics and comprehensive family medicine to meet every healthcare need.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                onClick={() => window.scrollTo(0, 0)}
                className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/20 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Highlight */}
      <section className="section-padding">
        <div className="container mx-auto px-5">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-10 md:p-14 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">New Services Available</h2>
            <p className="text-lg text-primary-foreground/85 mb-6">
              We're now offering <strong>Trigger Point Injections</strong> and <strong>Joint Injections</strong> for our registered patients. These services provide targeted pain relief and are available through our Pain Clinic.
            </p>
            <Link to="/pain-clinic" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="cta" size="lg">
                Learn About Pain Clinic <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-alt section-padding">
        <div className="container mx-auto px-5">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted by families across West Kelowna for compassionate, comprehensive care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-8 shadow-sm border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-4 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Notice */}
      <section className="section-padding">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <div className="bg-accent/50 rounded-2xl p-8 border border-primary/10">
            <h3 className="text-lg font-semibold text-foreground mb-3">Innovative Care Technology</h3>
            <p className="text-muted-foreground leading-relaxed">
              Please note that our clinic uses "Artificial Intelligence" for clinic note transcription. We would appreciate you providing consent to use this during your visit and are happy to answer any questions that you may have about this innovative approach.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <div className="section-alt">
        <ContactSection />
      </div>

      {/* Final CTA */}
      <section className="section-padding bg-primary">
        <div className="container mx-auto px-5 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join our growing family of patients and discover comprehensive care designed around your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="cta" size="xl">Book Your Appointment</Button>
            </Link>
            <a href="tel:2507686920">
              <Button variant="outline" size="xl" className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 rounded-full">
                Call 250-768-6920
              </Button>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
