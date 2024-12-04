import { FunctionComponent, PropsWithChildren } from "react";

const Tag: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <label className="border border-black px-5 py-[0.6875rem] text-sm font-extrabold uppercase">
      {children}
    </label>
  );
};

export default Tag;
