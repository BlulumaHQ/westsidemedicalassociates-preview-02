import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import { User } from "lucide-react";

const PhysicianPhotos = () => {
  return (
    <Layout>
      <PageHero
        title="Physician Photo Gallery"
        subtitle="Meet the physicians at Westside Medical Associates."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="text-center mb-14">
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our dedicated team of physicians is committed to providing comprehensive, compassionate care to the West Kelowna community.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Physician 1", "Physician 2", "Physician 3", "Physician 4", "Physician 5", "Physician 6"].map((name, i) => (
              <div key={i} className="text-center group">
                <div className="w-40 h-40 mx-auto rounded-full bg-accent flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                  <User className="h-16 w-16 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-semibold text-foreground">{name}</h3>
                <p className="text-sm text-muted-foreground">Family Physician</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-muted-foreground mt-12">
            For detailed physician information, please contact our clinic at 250-768-6920.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default PhysicianPhotos;
