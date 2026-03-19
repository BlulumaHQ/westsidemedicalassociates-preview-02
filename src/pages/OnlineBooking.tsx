import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { CalendarCheck, Phone, Clock, Info } from "lucide-react";
import { Button } from "@/components/ui/button";

const OnlineBooking = () => {
  return (
    <Layout>
      <PageHero
        title="Online Booking"
        subtitle="Book your appointment quickly and conveniently online."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-3xl text-center">
          <div className="bg-card rounded-2xl p-10 shadow-lg border border-border mb-10">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <CalendarCheck className="h-8 w-8 text-primary" />
            </div>
            <h2 className="text-2xl font-semibold text-foreground mb-4">Book Your Appointment</h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Online booking is available to all patients with a family physician at our clinic. Use our convenient online system to schedule your next visit.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <a href="https://www.wsmed.ca/online%20booking.html/" target="_blank" rel="noopener noreferrer">
                <Button variant="default" size="xl" className="rounded-full w-full sm:w-auto">
                  <CalendarCheck className="h-5 w-5" /> Book Online
                </Button>
              </a>
              <a href="tel:2507686920">
                <Button variant="outline" size="xl" className="rounded-full w-full sm:w-auto">
                  <Phone className="h-5 w-5" /> Call 250-768-6920
                </Button>
              </a>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-accent/30 rounded-xl p-6 border border-primary/10">
              <Clock className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Appointment Hours</h3>
              <p className="text-sm text-muted-foreground">Mon–Fri: 8AM–7PM by appointment<br />Sat: 8AM–2PM walk-in & appointments</p>
            </div>
            <div className="bg-accent/30 rounded-xl p-6 border border-primary/10">
              <Info className="h-6 w-6 text-primary mb-3" />
              <h3 className="font-semibold text-foreground mb-2">Important Note</h3>
              <p className="text-sm text-muted-foreground">Family medicine services are only for patients registered with this clinic.</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OnlineBooking;
