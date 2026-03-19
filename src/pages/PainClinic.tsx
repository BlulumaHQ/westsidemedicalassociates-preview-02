import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Syringe, CalendarCheck, ArrowRight } from "lucide-react";

const PainClinic = () => {
  return (
    <Layout>
      <PageHero
        title="Pain Clinic"
        subtitle="Comprehensive pain management including trigger point and joint injections."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-card rounded-2xl p-10 shadow-sm border border-border mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Syringe className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">About This Clinic</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Pain Clinic provides targeted pain relief solutions through advanced treatment options. We specialize in helping patients manage chronic and acute pain with evidence-based approaches.
            </p>
            <h3 className="text-lg font-semibold text-foreground mb-3 mt-6">New Services Available</h3>
            <div className="grid sm:grid-cols-2 gap-4 mb-6">
              <div className="bg-secondary/10 rounded-xl p-5 border border-secondary/20">
                <h4 className="font-semibold text-foreground mb-2">Trigger Point Injections</h4>
                <p className="text-sm text-muted-foreground">Targeted injections to relieve pain in muscle trigger points and knots.</p>
              </div>
              <div className="bg-secondary/10 rounded-xl p-5 border border-secondary/20">
                <h4 className="font-semibold text-foreground mb-2">Joint Injections</h4>
                <p className="text-sm text-muted-foreground">Injections to reduce joint inflammation and provide pain relief.</p>
              </div>
            </div>
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
      </section>

      <section className="section-alt section-padding">
        <div className="container mx-auto px-5 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Living With Pain?</h2>
          <p className="text-muted-foreground mb-6">Don't suffer in silence. Contact us to discuss your pain management options.</p>
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

export default PainClinic;
