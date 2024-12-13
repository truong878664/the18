import { FunctionComponent } from "react";
import pigPerson from "@/assets/pricing/pigPerson.png";
import Tag from "../../shared/Tag";
import Heading from "../../shared/Heading";
import Image from "next/image";
import illustration from "@/assets/faqs/illustration.png";
import * as ToggleList from "./FAQs/ToggleList";

const FAQs: FunctionComponent = () => {
  return (
    <section id="faqs" className="relative space-y-10 lg:space-y-15">
      <div className="xl:relative xl:max-w-[700px]">
        <div className="space-y-10 lg:max-w-[554px] xl:max-w-[739px] 2xl:max-w-[840px]">
          <Tag>FAQs</Tag>
          <div className="space-y-5">
            <Heading>Common Questions</Heading>
            <p className="space-x-2 *:tracking-[-0.005em] lg:space-x-0">
              The online form also provides links to a set of frequently asked
              questions, other information materials related to the financial
              disclosure programme.
            </p>
          </div>
        </div>

        <div className="flex justify-center lg:absolute lg:right-0 lg:top-0 lg:-z-10 xl:left-full xl:right-auto 2xl:ml-4.5">
          <div className="relative h-[372px] w-[360px] lg:h-[404px] lg:w-[380px] xl:h-[496px] xl:w-[480px] 2xl:h-[620px] 2xl:w-[600px]">
            <Image src={illustration.src} fill alt="" />
          </div>
        </div>
      </div>
      <ToggleList.Ul className="lg:max-w-[700px]">
        <ToggleList.Li></ToggleList.Li>
        <ToggleList.Divider />
        <ToggleList.Li></ToggleList.Li>
        <ToggleList.Divider />
        <ToggleList.Li></ToggleList.Li>
        <ToggleList.Divider />
        <ToggleList.Li></ToggleList.Li>
      </ToggleList.Ul>

      <div className="h-20"></div>
    </section>
  );
};

export default FAQs;
