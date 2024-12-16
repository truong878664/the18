import { FunctionComponent } from "react";
import Tag from "../../shared/Tag";
import Illustration from "../../shared/Illustration";
import objectImage from "@/assets/aboutUs/illustration_person.png";
import background from "@/assets/aboutUs/background.png";
import UlDot from "../../shared/UlDot";
import Heading from "../../shared/Heading";
import CardSection from "../../shared/CardSection";
import personOnMoon from "@/assets/aboutUs/personOnMoon.png";

interface AboutUsProps {}

const AboutUs: FunctionComponent<AboutUsProps> = () => {
  return (
    <CardSection.Wrap id="about-us">
      <CardSection.Content.Wrap>
        <CardSection.Content.Text label="About us">
          <Heading>Faster, friendlier feedback loops make life easier.</Heading>
          <p>
            Add a Viewer to your team so they can see everything you share, or
            invite people to individual documents. It’s up to you. Stakeholders
            can check out designs in their web browser, test prototypes and
            leave feedback for free.
          </p>
        </CardSection.Content.Text>
        <CardSection.Content.Image
          aspect="125/108"
          widths={{ DEFAULT: 370, lg: 500, xl: 580 }}
          src={personOnMoon.src}
          alt="Person on the moon"
        />
      </CardSection.Content.Wrap>
      <CardSection.ListWrap>
        <UlDot.Ul className="lg:w-7/12 xl:w-6/12">
          <UlDot.Li>
            Shared Cloud Libraries, for a single source of truth
          </UlDot.Li>
          <UlDot.Li>Prototype previews for user testing and research</UlDot.Li>
          <UlDot.Li>Easy organization with projects</UlDot.Li>
          <UlDot.Li>Free developer handoff, right inside the browser</UlDot.Li>
          <UlDot.Li>Two-factor authentication and SSO</UlDot.Li>
        </UlDot.Ul>
      </CardSection.ListWrap>
    </CardSection.Wrap>
  );
};

export default AboutUs;
