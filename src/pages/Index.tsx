import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import ContactSection from "@/components/ContactSection";
import heroImage from "@/assets/hero-clinic.jpg";
import {
  Heart, Brain, Scale, Sun, Syringe, Stethoscope,
  Clock, Users, Shield, CalendarCheck, Phone, Star, ArrowRight,
  CheckCircle2, AlertTriangle, MapPin, ChevronDown
} from "lucide-react";

const services = [
  { icon: Heart, title: "Women's Health & Menopause", desc: "Specialized care for women's health needs including menopause management and hormone therapy.", path: "/womens-health-menopause" },
  { icon: Scale, title: "Weight & Lifestyle Medicine", desc: "Evidence-based weight management and lifestyle modification programs for lasting results.", path: "/obesity-medicine" },
  { icon: Sun, title: "Skin Cancer Screening", desc: "Comprehensive skin examinations for early detection and prevention of skin cancer.", path: "/skin-care" },
  { icon: Syringe, title: "Pain Clinic", desc: "Trigger point injections, joint injections, and comprehensive pain management solutions.", path: "/pain-clinic" },
  { icon: Brain, title: "Mind Science", desc: "Mental wellness support integrating modern approaches to psychological health.", path: "/mind-science" },
  { icon: Stethoscope, title: "Family Medicine", desc: "Complete primary care services for registered patients, including extended weekday and Saturday hours.", path: "/clinic-information" },
];

const testimonials = [
  { name: "Sarah M.", text: "Exceptional care from the entire team. The extended hours make it so convenient for my family.", rating: 5 },
  { name: "James K.", text: "The specialized clinics saved me from having to travel to multiple doctors. Everything under one roof.", rating: 5 },
  { name: "Linda R.", text: "Compassionate, thorough, and professional. I've been a patient for years and wouldn't go anywhere else.", rating: 5 },
];

const benefits = [
  { icon: Clock, text: "Extended Hours — Mon–Fri 8AM–7PM" },
  { icon: CalendarCheck, text: "Saturday Walk-in Clinic 8AM–2PM" },
  { icon: Users, text: "Now Accepting New Patients" },
  { icon: Shield, text: "6 Specialized Clinics Under One Roof" },
  { icon: Stethoscope, text: "Family Medicine + Specialized Care" },
  { icon: Syringe, text: "New: Trigger Point & Joint Injections" },
];

const Index = () => {
  return (
    <Layout>
      {/* ═══════════════════════════════════════════════════
          1. HOOK — Full-screen hero, single focus
      ═══════════════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImage} alt="Westside Medical Associates Clinic" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/75 to-foreground/95" />
        </div>
        <div className="container mx-auto px-5 relative z-10 text-center py-20">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-secondary/25 border border-secondary/40 rounded-full px-5 py-2 mb-8">
              <span className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-sm font-semibold text-secondary tracking-wide uppercase">Now Accepting New Patients</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-background leading-[1.1] mb-6">
              Your Family's Health,<br />Our Priority
            </h1>
            <p className="text-lg md:text-xl text-background/75 mb-10 leading-relaxed max-w-2xl mx-auto">
              Comprehensive, Concise, Compassionate, Competent & Continuous Care — West Kelowna's trusted Family Health & Wellness Centre.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="cta" size="xl" className="w-full sm:w-auto text-lg px-12">
                  <CalendarCheck className="h-5 w-5" /> Book Your Appointment
                </Button>
              </Link>
              <a href="tel:2507686920">
                <Button variant="outline" size="xl" className="w-full sm:w-auto bg-background/10 border-background/30 text-background hover:bg-background/20 rounded-full text-lg">
                  <Phone className="h-5 w-5" /> 250-768-6920
                </Button>
              </a>
            </div>
            <a href="#problem" className="inline-flex flex-col items-center text-background/50 hover:text-background/80 transition-colors">
              <span className="text-xs uppercase tracking-widest mb-2">Learn More</span>
              <ChevronDown className="h-5 w-5 animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          2. PROBLEM — Identify the pain
      ═══════════════════════════════════════════════════ */}
      <section id="problem" className="funnel-section bg-background">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-destructive/10 mb-6">
            <AlertTriangle className="h-8 w-8 text-destructive" />
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-6">
            Tired of Juggling Multiple Clinics?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-4">
            Finding quality healthcare shouldn't mean visiting multiple clinics across town. Long wait times, limited hours, and fragmented care leave families frustrated and underserved.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            You deserve a single, trusted medical home where your entire family's health needs are met — from routine check-ups to specialized care — without the runaround.
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          3. AGITATION — Deepen the urgency
      ═══════════════════════════════════════════════════ */}
      <section className="funnel-section funnel-dark">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">
              What Happens When Care Is Fragmented?
            </h2>
            <div className="funnel-divider mt-6" />
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { title: "Missed Diagnoses", desc: "Without comprehensive screening — from skin cancer to women's health — conditions go undetected longer." },
              { title: "Wasted Time", desc: "Driving between specialists, repeating medical history, coordinating records across clinics." },
              { title: "Delayed Treatment", desc: "Limited clinic hours mean waiting days or weeks for appointments that could happen today." },
            ].map((item) => (
              <div key={item.title} className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-secondary">{item.title}</h3>
                <p className="opacity-75 leading-relaxed text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          4. SOLUTION — Present the answer
      ═══════════════════════════════════════════════════ */}
      <section className="funnel-section funnel-primary">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">
            Complete Healthcare Under One Roof
          </h2>
          <p className="text-lg opacity-90 leading-relaxed mb-6">
            Westside Medical Associates brings together family medicine and five specialized clinics — all in one convenient West Kelowna location with extended hours designed to fit your schedule.
          </p>
          <p className="opacity-80 leading-relaxed mb-10">
            From routine check-ups to specialized care in women's health, weight management, skin cancer screening, pain management, and mental wellness, our team delivers the comprehensive care your family deserves.
          </p>
          <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="cta" size="xl" className="text-lg px-12">
              <CalendarCheck className="h-5 w-5" /> Book an Appointment Now
            </Button>
          </Link>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          5. BENEFITS — Value breakdown
      ═══════════════════════════════════════════════════ */}
      <section className="funnel-section bg-background">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Why Families Choose Us</h2>
            <div className="funnel-divider mt-4" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => (
              <div key={b.text} className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card shadow-sm">
                <div className="w-11 h-11 rounded-full bg-secondary/15 flex items-center justify-center flex-shrink-0">
                  <b.icon className="h-5 w-5 text-secondary" />
                </div>
                <p className="font-medium text-foreground text-sm">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          6. TRUST — Social proof
      ═══════════════════════════════════════════════════ */}
      <section className="funnel-section funnel-accent">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">What Our Patients Say</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Trusted by families across West Kelowna for compassionate, comprehensive care.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card rounded-2xl p-8 shadow-md border border-border">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-secondary text-secondary" />
                  ))}
                </div>
                <p className="text-foreground/80 italic mb-5 leading-relaxed">"{t.text}"</p>
                <p className="font-semibold text-foreground">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          7. OFFER — Services breakdown
      ═══════════════════════════════════════════════════ */}
      <section className="funnel-section bg-background">
        <div className="container mx-auto px-5 max-w-6xl">
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-semibold text-foreground mb-4">Our Services</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Specialized clinics and comprehensive family medicine to meet every healthcare need.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.path}
                onClick={() => window.scrollTo(0, 0)}
                className="group bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                <div className="mt-4 flex items-center text-primary text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          8. CTA — Primary action block
      ═══════════════════════════════════════════════════ */}
      <section className="funnel-section funnel-primary-dark">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-lg opacity-85 mb-8 max-w-xl mx-auto leading-relaxed">
            Join our growing family of patients and discover comprehensive care designed around your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="cta" size="xl" className="w-full sm:w-auto text-lg px-12">
                Book Your Appointment
              </Button>
            </Link>
            <a href="tel:2507686920">
              <Button variant="outline" size="xl" className="w-full sm:w-auto bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 rounded-full text-lg">
                Call 250-768-6920
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          9. REINFORCEMENT — New services + AI notice + hours
      ═══════════════════════════════════════════════════ */}
      <section className="funnel-section bg-background">
        <div className="container mx-auto px-5 max-w-4xl space-y-10">
          {/* New Services Highlight */}
          <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-10 md:p-14 text-center text-primary-foreground">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">New Services Available</h2>
            <p className="text-lg opacity-85 mb-6">
              We're now offering <strong>Trigger Point Injections</strong> and <strong>Joint Injections</strong> for our registered patients. These services provide targeted pain relief and are available through our Pain Clinic.
            </p>
            <Link to="/pain-clinic" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="cta" size="lg">
                Learn About Pain Clinic <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Hours & AI Notice */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Extended Hours</h3>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Monday–Friday: 8AM–7PM — By Appointment Only</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-4 w-4 text-secondary flex-shrink-0" />
                  <span className="text-foreground">Saturday: 8AM–2PM — Walk-in and Appointments</span>
                </div>
                <p className="text-muted-foreground text-xs mt-3">
                  Clinic patients will be seen by the Family Physician on duty. The clinic on Saturday is on a 'walk-in' and pre-booked appointments basis.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 border border-border shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <Brain className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">Innovative Care Technology</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Please note that our clinic uses "Artificial Intelligence" for clinic note transcription. We would appreciate you providing consent to use this during your visit and are happy to answer any questions that you may have about this innovative approach.
              </p>
            </div>
          </div>

          {/* Family medicine notice */}
          <div className="text-center bg-accent/50 rounded-xl p-6 border border-primary/10">
            <p className="text-sm text-muted-foreground font-medium">
              Family Medicine Services are only for patients registered with this clinic. Online booking is available to all patients with a family physician at our clinic.
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════
          10. CONTACT + FINAL CTA
      ═══════════════════════════════════════════════════ */}
      <div className="section-alt">
        <ContactSection />
      </div>

      {/* Final CTA */}
      <section className="funnel-section funnel-dark">
        <div className="container mx-auto px-5 text-center max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Don't Wait — Your Health Can't
          </h2>
          <p className="text-lg opacity-75 mb-10 max-w-xl mx-auto leading-relaxed">
            Westside Medical Associates is West Kelowna's Family Health & Wellness Centre. Book online or call today.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="cta" size="xl" className="w-full sm:w-auto text-lg px-12">
                <CalendarCheck className="h-5 w-5" /> Book Now
              </Button>
            </Link>
            <a href="tel:2507686920">
              <Button variant="outline" size="xl" className="w-full sm:w-auto bg-background/10 border-background/30 text-background hover:bg-background/20 rounded-full text-lg">
                <Phone className="h-5 w-5" /> 250-768-6920
              </Button>
            </a>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm opacity-60">
            <MapPin className="h-4 w-4" />
            <span>103 - 1135 Stevens Road, West Kelowna, BC V1Z 2S8</span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
