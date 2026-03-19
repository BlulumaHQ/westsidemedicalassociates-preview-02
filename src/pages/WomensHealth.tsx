import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Heart, CalendarCheck, ArrowRight } from "lucide-react";

const WomensHealth = () => {
  return (
    <Layout>
      <PageHero
        title="Women's Health & Menopause Clinic"
        subtitle="Specialized care for every stage of a woman's health journey."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="prose max-w-none">
            <div className="bg-card rounded-2xl p-10 shadow-sm border border-border mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-foreground">About This Clinic</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our Women's Health & Menopause Clinic provides specialized medical care tailored to the unique health needs of women at every stage of life. From preventive screenings to menopause management, our experienced team is here to support your wellbeing.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We offer comprehensive assessments, hormone therapy consultations, and personalized treatment plans designed to help you feel your best.
              </p>
              <p className="text-sm text-muted-foreground italic">
                This service is available to all patients with a family physician at our clinic.
              </p>
            </div>

            <div className="text-center">
              <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
                <Button variant="default" size="lg" className="rounded-full">
                  <CalendarCheck className="h-5 w-5" /> Book a Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section-alt section-padding">
        <div className="container mx-auto px-5 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Have Questions?</h2>
          <p className="text-muted-foreground mb-6">Contact our clinic to learn more about our Women's Health & Menopause services.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:2507686920">
              <Button variant="outline" size="lg" className="rounded-full">Call 250-768-6920</Button>
            </a>
            <Link to="/clinic-information" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="ghost" size="lg">Clinic Info <ArrowRight className="h-4 w-4" /></Button>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default WomensHealth;
