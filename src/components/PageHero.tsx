import { ReactNode } from "react";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

const PageHero = ({ title, subtitle, children }: PageHeroProps) => {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="container mx-auto px-5 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-primary-foreground mb-4">{title}</h1>
        {subtitle && <p className="text-lg text-primary-foreground/80 max-w-2xl mx-auto">{subtitle}</p>}
        {children}
      </div>
    </section>
  );
};

export default PageHero;
