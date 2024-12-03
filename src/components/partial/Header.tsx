import Image from "next/image";
import { FunctionComponent } from "react";
import logoDark from "@/assets/logo_dark.png";

interface HeaderProps {}

const Header: FunctionComponent<HeaderProps> = () => {
  return (
    <header className="mt-5">
      <Image width={52} height={52} src={logoDark.src} alt="logo" />
      <ul></ul>
      <button>
        <div className="h-0.5 w-7"></div>
      </button>
    </header>
  );
};

export default Header;
