import { FunctionComponent } from "react";
import Heading from "../../shared/Heading";
import personWithWrench from "@/assets/howItWork/personWithWrench.png";
import HowItWorkList from "./howItWork/List";
import CardSection from "../../shared/CardSection";

const HowItWork: FunctionComponent = () => {
  return (
    <CardSection.Wrap id="how-it-work">
      <CardSection.Content.Wrap gap={"lg"} layout={"contentLeft"}>
        <CardSection.Content.Text label="How it work">
          <Heading>Building the best space for collaboration.</Heading>
        </CardSection.Content.Text>
        <CardSection.Content.Image
          alt="Person with wrench"
          aspect="7/10"
          src={personWithWrench.src}
          widths={{
            DEFAULT: 280,
            lg: 420,
            xl: 498,
            "2xl": 490,
          }}
        />
      </CardSection.Content.Wrap>
      <CardSection.ListWrap layout={"contentLeft"}>
        <HowItWorkList className="lg:w-8/12 xl:w-6/12" />
      </CardSection.ListWrap>
    </CardSection.Wrap>
  );
};

export default HowItWork;
