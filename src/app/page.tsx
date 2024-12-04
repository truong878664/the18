import Image from "next/image";
import illustration from "@/assets/cta/illustration_person.png";
import background from "@/assets/cta/background.png";
import EmailField from "@/app/components/shared/EmailField";
import PayCardList from "./components/partials/PayCardList";
import Tag from "@/app/components/shared/Tag";
import CTA from "./components/partials/sections/CTA";
import AboutUs from "./components/partials/sections/AboutUs";

export default function Home() {
  return (
    <>
      <CTA />
      <AboutUs />
    </>
  );
}
