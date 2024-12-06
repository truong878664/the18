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
    <section className="space-y-10">
      <div className="space-y-10 lg:flex lg:flex-row-reverse lg:space-y-0">
        <div className="space-y-10 lg:w-7/12 lg:shrink-0">
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
        {/* <div className="flex w-full justify-center">
          <div
            className={
              "relative flex h-80 min-w-[370px] items-end justify-center self-start p-1 lg:h-[432px] lg:w-[500px] lg:px-[1.125rem]"
            }
          >
            <div className="pointer-events-none absolute inset-0 md:inset-x-4">
              <Image
                src={background.src}
                className="object-contain"
                alt={"bg"}
                fill
              />
            </div>
            <div className="relative h-[249px] w-[267px] lg:h-[337px] lg:w-[360px]">
              <Image
                src={objectImage.src}
                className="object-contain"
                alt={"object"}
                fill
              />
            </div>
          </div>
        </div> */}
      </div>
      <div className="lg:flex lg:justify-end">
        <UlDot.Wrap className="lg:w-7/12">
          <UlDot.Item>
            Shared Cloud Libraries, for a single source of truth
          </UlDot.Item>
          <UlDot.Item>
            Prototype previews for user testing and research
          </UlDot.Item>
          <UlDot.Item>Easy organization with projects</UlDot.Item>
          <UlDot.Item>
            Free developer handoff, right inside the browser
          </UlDot.Item>
          <UlDot.Item>Two-factor authentication and SSO</UlDot.Item>
        </UlDot.Wrap>
      </div>
    </section>
  );
};

export default AboutUs;
