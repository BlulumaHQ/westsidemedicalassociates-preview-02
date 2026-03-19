import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Brain, CalendarCheck, ArrowRight } from "lucide-react";

const MindScience = () => {
  return (
    <Layout>
      <PageHero
        title="Mind Science"
        subtitle="Integrating modern approaches to mental wellness and psychological health."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-4xl">
          <div className="bg-card rounded-2xl p-10 shadow-sm border border-border mb-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground">About Mind Science</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Our Mind Science program integrates modern, evidence-based approaches to support your mental wellness and psychological health. We believe that mental health is an essential component of overall wellbeing.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Through personalized assessments and treatment plans, we help patients navigate mental health challenges with compassion, expertise, and the latest scientific understanding.
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
      </section>

      <section className="section-alt section-padding">
        <div className="container mx-auto px-5 text-center max-w-2xl">
          <h2 className="text-2xl font-semibold text-foreground mb-4">Take the First Step</h2>
          <p className="text-muted-foreground mb-6">Mental health matters. Contact us to learn how Mind Science can support your wellbeing.</p>
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

export default MindScience;
