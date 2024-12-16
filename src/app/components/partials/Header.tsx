import Image from "next/image";
import { FunctionComponent } from "react";
import logoDark from "@/assets/logo_dark.png";
import Button from "../shared/Button";
import LinkList from "../shared/LinkList";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="container mt-5 flex justify-between">
      <nav className="inline-flex lg:gap-5">
        <div className="relative size-13">
          <Image fill src={logoDark.src} alt="logo" />
        </div>
        <LinkList variant={"row"} className="sr-only lg:not-sr-only" />
        {/* <ul className="sr-only flex lg:not-sr-only lg:gap-5">
          <a href="#about-us">
            <li className="px-5 py-3.5">About Us</li>
          </a>
          <a href="#how-it-work">
            <li className="px-5 py-3.5">How it work</li>
          </a>
          <a href="#pricing">
            <li className="px-5 py-3.5">Pricing</li>
          </a>
          <a href="#faqs">
            <li className="px-5 py-3.5">FAQs</li>
          </a>
        </ul> */}
      </nav>
      <div className="sr-only space-x-5 lg:not-sr-only">
        <Button size={"lg"}>Login</Button>
        <Button size={"lg"} theme={"dark"}>
          Sign Up
        </Button>
      </div>
      <button className="flex size-13 flex-col items-center justify-center gap-1.5 lg:sr-only">
        <div className="h-0.5 w-7 bg-dark"></div>
        <div className="h-0.5 w-7 bg-dark"></div>
      </button>
    </header>
  );
};

export default Header;
