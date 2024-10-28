import Appilo from "./components/appilo";
import CoreFeature from "./components/core-features";
import FeaturesSection from "./components/features-section";
import { HeroSection } from "./components/hero";
import Integrations from "./components/integrations";
import Testimonial from "./components/testimonial";
// import SponsorBar from "./components/sponsor";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <CoreFeature />
      <Integrations />
      <FeaturesSection />
      <Appilo />
      <Testimonial />
    </div>
  );
}
