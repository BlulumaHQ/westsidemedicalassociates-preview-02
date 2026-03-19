import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { Clock, MapPin, Phone, Mail, Stethoscope, CalendarCheck, Info } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ClinicInformation = () => {
  return (
    <Layout>
      <PageHero
        title="Clinic Information"
        subtitle="Everything you need to know about visiting Westside Medical Associates."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-8 mb-14">
            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Clock className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Clinic Hours</h2>
              </div>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium text-foreground">Monday – Friday</span>
                  <span>8:00 AM – 7:00 PM</span>
                </div>
                <p className="text-sm">By appointment only</p>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium text-foreground">Saturday</span>
                  <span>8:00 AM – 2:00 PM</span>
                </div>
                <p className="text-sm">Walk-in and pre-booked appointments</p>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="font-medium text-foreground">Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>

            <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-xl font-semibold text-foreground">Location & Contact</h2>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <p>103 - 1135 Stevens Road<br />West Kelowna, BC V1Z 2S8</p>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="tel:2507686920" className="hover:text-primary transition-colors">250-768-6920</a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <a href="mailto:admin@wsmed.ca" className="hover:text-primary transition-colors">admin@wsmed.ca</a>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-accent/30 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Stethoscope className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Family Medicine Services</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Family medicine services are only for patients registered with this clinic. Westside Medical Clinic is open from 8AM–7PM (Mon–Fri) and on Saturdays, 8AM–2PM. Clinic patients will be seen by the Family Physician on duty. The Saturday clinic operates on a walk-in and pre-booked appointments basis.
              </p>
              <div className="flex items-center gap-2 p-4 bg-secondary/10 rounded-xl border border-secondary/20">
                <CalendarCheck className="h-5 w-5 text-secondary flex-shrink-0" />
                <p className="text-sm font-medium text-foreground">We are now taking new patients!</p>
              </div>
            </div>

            <div className="bg-accent/30 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">Online Booking</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Online booking is now available to all patients with a family physician at our clinic. You can book your appointments conveniently online.
              </p>
              <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="default" size="lg" className="rounded-full">Book Online Now</Button>
              </Link>
            </div>

            <div className="bg-accent/30 rounded-2xl p-8 border border-primary/10">
              <div className="flex items-center gap-3 mb-4">
                <Info className="h-5 w-5 text-primary" />
                <h2 className="text-xl font-semibold text-foreground">AI Transcription Notice</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Please note that our clinic uses "Artificial Intelligence" for clinic note transcription. We would appreciate you providing consent to use this during your visit and are happy to answer any questions that you may have about this innovative approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="section-alt">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default ClinicInformation;
