import Image from "next/image";
import { FunctionComponent } from "react";
import logoDark from "@/assets/logo_dark.png";
import Button from "../shared/Button";
import NavLink from "../shared/NavLink";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <>
      <input type="checkbox" id="nav-link" className="peer hidden" />
      <header className="group container top-5 z-20 mt-5 flex justify-between peer-checked:sticky">
        <nav className="group inline-flex lg:gap-5">
          <div className="relative size-13">
            <Image fill src={logoDark.src} alt="logo" />
          </div>
          <div className="fixed bottom-0 left-30 right-0 top-0 z-20 translate-x-full border-l border-dark/20 bg-gray transition-transform peer-checked:group-[]:group-[]:translate-x-0 lg:relative lg:left-0 lg:w-fit lg:translate-x-0 lg:border-none">
            <NavLink
              variant={"header"}
              className="h-full flex-col justify-evenly text-center lg:flex-row"
            />
          </div>
        </nav>
        <div className="sr-only space-x-5 lg:not-sr-only">
          <Button size={"lg"}>Login</Button>
          <Button size={"lg"} theme={"dark"}>
            Sign Up
          </Button>
        </div>
        <label
          htmlFor="nav-link"
          className="group z-30 flex size-13 flex-col items-center justify-center gap-1.5 lg:sr-only"
        >
          <div className="h-0.5 w-7 bg-dark transition-all duration-300 peer-checked:group-[]:group-[]:translate-y-[185%] peer-checked:group-[]:group-[]:rotate-45" />
          <div className="h-0.5 w-7 bg-dark transition-all duration-300 peer-checked:group-[]:group-[]:-translate-y-[185%] peer-checked:group-[]:group-[]:rotate-[135deg]" />
        </label>
      </header>
    </>
  );
};

export default Header;
