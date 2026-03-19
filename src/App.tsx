import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import ClinicInformation from "./pages/ClinicInformation";
import OnlineBooking from "./pages/OnlineBooking";
import ClinicStaff from "./pages/ClinicStaff";
import WomensHealth from "./pages/WomensHealth";
import WeightLifestyle from "./pages/WeightLifestyle";
import SkinCare from "./pages/SkinCare";
import PainClinic from "./pages/PainClinic";
import MindScience from "./pages/MindScience";
import PhysicianPhotos from "./pages/PhysicianPhotos";
import ClinicPhotos from "./pages/ClinicPhotos";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/clinic-information" element={<ClinicInformation />} />
          <Route path="/online-booking" element={<OnlineBooking />} />
          <Route path="/clinic-staff" element={<ClinicStaff />} />
          <Route path="/womens-health-menopause" element={<WomensHealth />} />
          <Route path="/obesity-medicine" element={<WeightLifestyle />} />
          <Route path="/skin-care" element={<SkinCare />} />
          <Route path="/pain-clinic" element={<PainClinic />} />
          <Route path="/mind-science" element={<MindScience />} />
          <Route path="/physician-photos" element={<PhysicianPhotos />} />
          <Route path="/clinic-photos" element={<ClinicPhotos />} />
          {/* Legacy URL redirects */}
          <Route path="/clinic%20information.html" element={<ClinicInformation />} />
          <Route path="/online%20booking.html" element={<OnlineBooking />} />
          <Route path="/clinic%20staff.html" element={<ClinicStaff />} />
          <Route path="/Women%20Health%20-%20Menopause.html" element={<WomensHealth />} />
          <Route path="/ObesityMedicine.html" element={<WeightLifestyle />} />
          <Route path="/Skin%20Care.html" element={<SkinCare />} />
          <Route path="/Pain%20Clinic.html" element={<PainClinic />} />
          <Route path="/Mind%20Science.html" element={<MindScience />} />
          <Route path="/physicianphotos.html" element={<PhysicianPhotos />} />
          <Route path="/photos.html" element={<ClinicPhotos />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
