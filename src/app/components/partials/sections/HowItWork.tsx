import { FunctionComponent } from "react";
import Tag from "../../shared/Tag";
import Heading from "../../shared/Heading";
import Illustration from "../../shared/Illustration";
import subject from "@/assets/howItWork/subject.png";
import bg from "@/assets/howItWork/bg.png";

interface HowItWorkProps {}

const HowItWork: FunctionComponent = () => {
  return (
    <section>
      <div className="">
        <div className="space-y-10">
          <Tag>How it work</Tag>
          <Heading>Building the best space for collaboration.</Heading>
        </div>
        <Illustration.Wrap className="h-[400px] w-[280px]">
          <Illustration.Bg imageProps={{ src: bg.src, alt: "" }} />
          <Illustration.Subject
            className="h-[376px] w-[200px]"
            imageProps={{ src: subject.src, alt: "" }}
          />
        </Illustration.Wrap>
      </div>
    </section>
  );
};

export default HowItWork;
