import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";
import { User } from "lucide-react";

const staff = [
  { name: "Family Physicians", role: "Primary Care", desc: "Our team of experienced family physicians provides comprehensive primary care services for all registered patients." },
  { name: "Nursing Staff", role: "Patient Care", desc: "Dedicated nursing professionals supporting patient care, assessments, and clinic procedures." },
  { name: "Administrative Team", role: "Clinic Operations", desc: "Friendly and efficient administrative staff ensuring smooth clinic operations and patient scheduling." },
  { name: "Specialists", role: "Specialized Clinics", desc: "Practitioners running our specialized clinics in women's health, weight management, skin care, pain management, and mind science." },
];

const ClinicStaff = () => {
  return (
    <Layout>
      <PageHero
        title="Our Clinic Staff"
        subtitle="Meet the dedicated team at Westside Medical Associates committed to your health and wellbeing."
      />

      <section className="section-padding">
        <div className="container mx-auto px-5 max-w-5xl">
          <div className="grid sm:grid-cols-2 gap-6">
            {staff.map((member) => (
              <div key={member.name} className="bg-card rounded-2xl p-8 shadow-sm border border-border hover:shadow-md transition-shadow">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-5">
                  <User className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-muted-foreground leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="section-alt">
        <ContactSection />
      </div>
    </Layout>
  );
};

export default ClinicStaff;
