import { Link } from "react-router-dom";
import { Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const StickyCTA = () => {
  return (
    <>
      {/* Desktop: Fixed right-side button */}
      <div className="hidden md:flex fixed right-0 top-1/2 -translate-y-1/2 z-40 flex-col gap-3">
        <Link to="/online-booking" onClick={() => window.scrollTo(0, 0)}>
          <Button variant="cta-sticky" size="lg" className="rounded-l-xl rounded-r-none shadow-2xl px-5 flex-col h-auto py-4 gap-1">
            <Calendar className="h-5 w-5" />
            <span className="text-xs">Book</span>
          </Button>
        </Link>
        <a href="tel:2507686920">
          <Button variant="cta-sticky" size="lg" className="rounded-l-xl rounded-r-none shadow-2xl px-5 flex-col h-auto py-4 gap-1">
            <Phone className="h-5 w-5" />
            <span className="text-xs">Call</span>
          </Button>
        </a>
      </div>

      {/* Mobile: Sticky bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-primary-dark/95 backdrop-blur-md border-t border-primary/20 shadow-2xl">
        <div className="flex gap-2 p-3">
          <a href="tel:2507686920" className="flex-1">
            <Button variant="outline" size="lg" className="w-full bg-background/10 border-background/20 text-primary-foreground hover:bg-background/20 rounded-full">
              <Phone className="h-4 w-4 mr-2" /> Call Now
            </Button>
          </a>
          <Link to="/online-booking" className="flex-1" onClick={() => window.scrollTo(0, 0)}>
            <Button variant="cta" size="lg" className="w-full rounded-full">
              <Calendar className="h-4 w-4 mr-2" /> Book Online
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default StickyCTA;
