import { FunctionComponent } from "react";
import EmailField from "../../shared/EmailField";
import PayCardList from "../PayCardList";
import Image from "next/image";
import illustration from "@/assets/cta/illustration_person.png";
import background from "@/assets/cta/background.png";
import Illustration from "../../shared/Illustration";
import { cn } from "@/lib/utils";

interface CTAProps {}

const CTA: FunctionComponent<CTAProps> = () => {
  return (
    <section className="mt-10 md:mt-[7.5rem] lg:flex lg:items-center lg:justify-between lg:gap-6">
      <div className="space-y-10 self-start lg:max-w-[38.75rem] xl:max-w-[45rem]">
        <div className="space-y-5">
          <h1 className="text-[3.25rem] leading-[3.75rem] tracking-[-4px] lg:text-[4rem] lg:leading-[5rem]">
            Always Track & Analyze Your Business Statistics To Succeed.
          </h1>
          <p className="leading-[1.625rem]">
            A better way to manage your sales, team, clients & marketing — on a
            single platform. Powerful, affordable & easy.
          </p>
        </div>
        <div className="space-y-[3.75rem] lg:space-y-20">
          <EmailField btnProps={{ children: "Get started" }} />
          <PayCardList />
        </div>
      </div>
      <div
        className={cn("relative flex flex-shrink-0 items-start justify-center")}
        style={{ height: 580 }}
      >
        <div
          className="absolute bottom-0 left-1/2 -z-10 -translate-x-[55%]"
          style={{ width: 550, height: 580 }}
        >
          <Image
            src={background.src}
            className="border object-contain"
            alt={"background CTA"}
            fill
          />
        </div>
        <Image
          src={illustration.src}
          width={311}
          height={552}
          alt="illustration"
        />
      </div>
      {/* <Illustration
        containerClassName="hidden lg:block"
        bgImage={{ alt: "bg", src: background.src }}
        height={580}
        width={550}
        subjectImage={{
          src: illustration.src,
          width: 311,
          height: 552,
          alt: "illustration",
        }}
      /> */}
    </section>
  );
};

export default CTA;
