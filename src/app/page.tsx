import CTA from "./components/partials/sections/CTA";
import AboutUs from "./components/partials/sections/AboutUs_";
import HowItWork from "./components/partials/sections/HowItWork";
import Pricing from "./components/partials/sections/Pricing";
import FAQs from "./components/partials/sections/FAQs";
import CardSection from "./components/shared/CardSection";

export default function Home() {
  return (
    <>
      <CTA />
      <AboutUs />
      <HowItWork />
      <Pricing />
      <FAQs />
      <CardSection
        width={{
          DEFAULT: 10,
          md: 50,
          lg: 200,
        }}
      />
    </>
  );
}
