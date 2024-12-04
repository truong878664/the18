import Image from "next/image";
import { FunctionComponent } from "react";
import logoDark from "@/assets/logo_dark.png";
import Button from "../shared/Button";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="container mt-5 flex justify-between">
      <nav className="inline-flex lg:gap-5">
        <div className="relative size-[3.25rem]">
          <Image fill src={logoDark.src} alt="logo" />
        </div>
        <ul className="sr-only flex lg:not-sr-only lg:gap-5">
          <li className="px-5 py-[0.875rem]">About Us</li>
          <li className="px-5 py-[0.875rem]">How it work</li>
          <li className="px-5 py-[0.875rem]">Pricing</li>
          <li className="px-5 py-[0.875rem]">FAQs</li>
        </ul>
      </nav>
      <div className="sr-only space-x-5 lg:not-sr-only">
        <Button size={"lg"}>Login</Button>
        <Button size={"lg"} fill={"dark"}>
          Sign Up
        </Button>
      </div>
      <button className="flex size-[3.25rem] flex-col items-center justify-center gap-1.5 lg:sr-only">
        <div className="h-0.5 w-7 bg-dark"></div>
        <div className="h-0.5 w-7 bg-dark"></div>
      </button>
    </header>
  );
};

export default Header;
