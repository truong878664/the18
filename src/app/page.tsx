import CTA from "./components/partials/sections/CTA";
import AboutUs from "./components/partials/sections/AboutUs_";
import HowItWork from "./components/partials/sections/HowItWork_";
import Pricing from "./components/partials/sections/Pricing_";
import FAQs from "./components/partials/sections/FAQs";

export default function Home() {
  return (
    <>
      <CTA />
      <AboutUs />
      <HowItWork />
      <Pricing />
      <FAQs />
    </>
  );
}
