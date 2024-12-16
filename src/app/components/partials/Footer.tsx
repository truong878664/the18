import Image from "next/image";
import { FunctionComponent } from "react";
import logoWhite from "@/assets/logo_white.png";
import Heading from "../shared/Heading";
import EmailField from "../shared/EmailField";
import Facebook from "@/assets/footer/social_fb.svg";
import Google from "@/assets/footer/social_gl.svg";
import LinkIn from "@/assets/footer/social_in.svg";
import Twitter from "@/assets/footer/social_tw.svg";
import Youtube from "@/assets/footer/social_yt.svg";
import LinkList from "../shared/LinkList";

const Footer: FunctionComponent = () => {
  return (
    <footer className="flex justify-center bg-dark py-8 text-white selection:bg-white selection:text-dark">
      <div className="container space-y-10 xl:space-y-[4.5rem]">
        {/*  */}
        <div className="flex flex-col items-center gap-15 lg:flex-row lg:justify-between">
          <div className="space-y-10 lg:max-w-[484px]">
            <div className="relative size-13">
              <Image src={logoWhite.src} fill alt="Logo white" />
            </div>
            <div className="space-y-5">
              <Heading theme={"light"} size={"sm"}>
                Want to recieve our awesome stories?
              </Heading>
              <EmailField
                btnProps={{ children: "Subscribe" }}
                className="border border-white sm:w-fit"
              />
            </div>
          </div>
          {/*  */}
          <div className="flex flex-col justify-end gap-15 text-center lg:flex-row lg:flex-wrap lg:gap-x-20 lg:text-start 3xl:space-x-25">
            <LinkList variant={"col"} className="2xl:order-2" />
            {/* <ul className="space-y-6 2xl:order-2">
              <li>About us</li>
              <li>How it works</li>
              <li>Pricing</li>
              <li>FAQs</li>
            </ul> */}
            {/*  */}
            {/* <LinkList variant={"col"} className="min-w-52 2xl:order-3" /> */}
            <ul className="min-w-52 space-y-6 2xl:order-3">
              <li>Lead generation</li>
              <li>Customer engagement</li>
              <li>Customer support</li>
              <li>Help Center Articles</li>
              <li>Outbound Messages</li>
            </ul>
            {/*  */}
            <div className="min-w-52 space-y-6 *:block 2xl:order-1">
              <span className="font-bold">Email</span>
              <span>info@the18.design</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between">
          <ul className="flex justify-between gap-2.5 lg:gap-5">
            <li>
              <Facebook />
            </li>
            <li>
              <Twitter />
            </li>
            <li>
              <Google />
            </li>
            <li>
              <LinkIn />
            </li>
            <li>
              <Youtube />
            </li>
          </ul>
          <div className="text-center *:block lg:space-x-2 lg:*:inline-block">
            <span>© The 18 Design,</span>
            <span>All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
