import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Sun, CalendarCheck, ArrowRight } from "lucide-react";

const SkinCare = () => {
  return (
    <Layout>
      <PageHero
        title="Skin Cancer Screening Clinic"
        subtitle="Early detection and prevention through comprehensive skin examinations."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-card rounded-2xl p-10 shadow-sm border border-border mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Sun className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">About This Clinic</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Skin Cancer Screening Clinic provides comprehensive skin examinations designed for early detection and prevention of skin cancer. Early identification is key to successful treatment outcomes.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our trained physicians conduct thorough assessments and provide guidance on prevention strategies, helping you protect your skin health for the long term.
            </p>
            <p className="text-sm text-muted-foreground italic">
              This service is available to all patients with a family physician at our clinic.
            </p>
          </div>

          <div className="text-center">
            <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
              <Button variant="default" size="lg" className="rounded-full">
                <CalendarCheck className="h-5 w-5" /> Book a Screening
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="section-alt section-padding">
        <div className="container mx-auto px-5 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Questions About Screening?</h2>
          <p className="text-muted-foreground mb-6">Contact our clinic to learn more about skin cancer screening and prevention.</p>
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

export default SkinCare;
