import { FunctionComponent } from "react";
import Tag from "../../shared/Tag";
import Heading from "../../shared/Heading";
import Illustration from "../../shared/Illustration";
import subject from "@/assets/howItWork/subject.png";
import bg from "@/assets/howItWork/bg.png";
import ShapeIcon from "@/assets/howItWork/icon/shape.svg";
import ChartIcon from "@/assets/howItWork/icon/shape.svg";
import RocketIcon from "@/assets/howItWork/icon/rocket.svg";
import ArrowInBox from "@/assets/howItWork/icon/arrowInBox.svg";
import HowItWorkList from "./howItWork/List";
import Image from "next/image";

const HowItWork: FunctionComponent = () => {
  return (
    <section id="how-it-work">
      <div className="relative">
        <div className="space-y-[3.75rem] lg:w-5/12 xl:w-6/12">
          <div className="space-y-10">
            <Tag>How it work</Tag>
            <Heading>Building the best space for collaboration.</Heading>
          </div>
          <Illustration.Wrap className="h-[400px] w-[280px] lg:absolute lg:right-0 lg:top-0 lg:h-[600px] lg:w-[420px] xl:h-[700px] xl:w-[498px]">
            <Illustration.Bg imageProps={{ src: bg.src, alt: "" }} />
            <Illustration.Subject
              className="h-[399px] w-[258px] lg:h-[564px] lg:w-[300px]"
              imageProps={{ src: subject.src, alt: "" }}
            />
          </Illustration.Wrap>
        </div>
        <HowItWorkList className="lg:w-8/12 xl:w-6/12" />
      </div>
    </section>
  );
};

export default HowItWork;
