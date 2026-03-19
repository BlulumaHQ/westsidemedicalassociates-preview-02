import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import heroImage from "@/assets/hero-clinic.jpg";
import { Camera } from "lucide-react";

const ClinicPhotos = () => {
  return (
    <Layout>
      <PageHero
        title="Clinic Photo Gallery"
        subtitle="Take a virtual tour of our modern facilities."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our clinic features modern, comfortable facilities designed for your healthcare needs. Located at 103 - 1135 Stevens Road, West Kelowna.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-md border border-border group">
              <img src={heroImage} alt="Clinic Reception" className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="p-4">
                <p className="text-sm font-medium text-foreground">Reception Area</p>
              </div>
            </div>
            {["Waiting Area", "Consultation Room", "Treatment Room", "Hallway", "Entrance"].map((name, i) => (
              <div key={i} className="rounded-2xl overflow-hidden shadow-md border border-border group">
                <div className="w-full h-56 bg-accent flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Camera className="h-10 w-10 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <div className="p-4">
                  <p className="text-sm font-medium text-foreground">{name}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-12">
            Visit us in person to experience our welcoming clinic environment.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default ClinicPhotos;
