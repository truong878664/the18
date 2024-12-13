import { FunctionComponent } from "react";
import Tag from "../../shared/Tag";
import Illustration from "../../shared/Illustration";
import objectImage from "@/assets/aboutUs/illustration_person.png";
import background from "@/assets/aboutUs/background.png";
import UlDot from "../../shared/UlDot";
import Heading from "../../shared/Heading";
import Image from "next/image";

interface AboutUsProps {}

const AboutUs: FunctionComponent<AboutUsProps> = () => {
  return (
    <section id="about-us" className="space-y-10">
      <div className="space-y-10 lg:flex lg:flex-row-reverse lg:gap-10 lg:space-y-0 xl:gap-[11.75rem]">
        <div className="space-y-10 lg:w-7/12 lg:shrink-0 xl:w-6/12">
          <Tag>About us</Tag>
          <div className="space-y-5">
            <Heading>
              Faster, friendlier feedback loops make life easier.
            </Heading>
            <p>
              Add a Viewer to your team so they can see everything you share, or
              invite people to individual documents. It’s up to you.
              Stakeholders can check out designs in their web browser, test
              prototypes and leave feedback for free.
            </p>
          </div>
        </div>
        <div className="relative">
          <Illustration.Wrap className="right-0 top-0 h-80 min-w-[370px] lg:absolute lg:h-[432px] lg:w-[500px] lg:px-[1.125rem] xl:h-[500px] xl:w-[580px]">
            <Illustration.Bg
              imageProps={{ src: background.src, alt: "Star background" }}
              className="md:inset-x-4"
            />
            <Illustration.Subject
              imageProps={{ src: objectImage.src, alt: "Person in the moon" }}
              className="h-[249px] w-[267px] lg:h-[337px] lg:w-[360px] xl:h-[390px] xl:w-[418px]"
            />
          </Illustration.Wrap>
        </div>
      </div>
      <div className="lg:flex lg:justify-end">
        <UlDot.Ul className="lg:w-7/12 xl:w-6/12">
          <UlDot.Li>
            Shared Cloud Libraries, for a single source of truth
          </UlDot.Li>
          <UlDot.Li>Prototype previews for user testing and research</UlDot.Li>
          <UlDot.Li>Easy organization with projects</UlDot.Li>
          <UlDot.Li>Free developer handoff, right inside the browser</UlDot.Li>
          <UlDot.Li>Two-factor authentication and SSO</UlDot.Li>
        </UlDot.Ul>
      </div>
    </section>
  );
};

export default AboutUs;
