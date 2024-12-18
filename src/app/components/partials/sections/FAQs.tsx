import { FunctionComponent } from "react";
import pigPerson from "@/assets/pricing/pigPerson.png";
import Tag from "../../shared/Tag";
import Heading from "../../shared/Heading";
import Image from "next/image";
import illustration from "@/assets/faqs/illustration.png";
import * as ToggleList from "./FAQs/ToggleList";
import CardSection from "../../shared/CardSection";

const FAQs: FunctionComponent = () => {
  return (
    <CardSection.Wrap id="faqs">
      <CardSection.Content.Wrap layout={"contentLeft"}>
        <CardSection.Content.Text label="FAQs">
          <Heading>Common Questions</Heading>
          <p className="space-x-2 *:tracking-[-0.005em] lg:space-x-0">
            The online form also provides links to a set of frequently asked
            questions, other information materials related to the financial
            disclosure programme.
          </p>
        </CardSection.Content.Text>
        <CardSection.Content.Image
          alt=""
          aspect="30/31"
          src={illustration.src}
          widths={{
            DEFAULT: 360,
            lg: 380,
            xl: 480,
            "2xl": 600,
          }}
        />
      </CardSection.Content.Wrap>
      <CardSection.ListWrap layout={"contentLeft"}>
        <ToggleList.Ul className="lg:max-w-[700px]">
          <ToggleList.Li></ToggleList.Li>
          <ToggleList.Divider />
          <ToggleList.Li></ToggleList.Li>
          <ToggleList.Divider />
          <ToggleList.Li></ToggleList.Li>
          <ToggleList.Divider />
          <ToggleList.Li></ToggleList.Li>
        </ToggleList.Ul>
      </CardSection.ListWrap>
    </CardSection.Wrap>
  );
};

export default FAQs;
