import { FunctionComponent, PropsWithChildren } from "react";

const Tag: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <span className="inline-block cursor-default border border-black px-5 py-2 text-sm font-extrabold uppercase">
      {children}
    </span>
  );
};

export default Tag;
