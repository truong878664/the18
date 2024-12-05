import { FunctionComponent } from "react";
import Tag from "../../shared/Tag";
import Illustration from "../../shared/Illustration";
import objectImage from "@/assets/aboutUs/illustration_person.png";
import background from "@/assets/aboutUs/background.png";
import UlDot from "../../shared/UlDot";

interface AboutUsProps {}

const AboutUs: FunctionComponent<AboutUsProps> = () => {
  return (
    <section className="space-y-10">
      <div className="space-y-10 lg:flex lg:flex-row-reverse">
        <div className="space-y-10 lg:w-7/12">
          <Tag>About us</Tag>
          <div className="space-y-5">
            <h2 className="text-[2.75rem] leading-none tracking-[-4px]">
              Faster, friendlier feedback loops make life easier.
            </h2>
            <p>
              Add a Viewer to your team so they can see everything you share, or
              invite people to individual documents. It’s up to you.
              Stakeholders can check out designs in their web browser, test
              prototypes and leave feedback for free.
            </p>
          </div>
        </div>
        <Illustration
          containerClassName="items-end border"
          bgImage={{ alt: "bg", src: background.src }}
          height={320}
          width={370}
          subjectImage={{
            src: objectImage.src,
            alt: "",
            width: 267,
            height: 249,
          }}
        />
      </div>
      <UlDot.Wrap>
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
    </section>
  );
};

export default AboutUs;
