import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { FunctionComponent, PropsWithChildren } from "react";
const ulDot = cva("flex items-start leading-7", {
  variants: {
    size: {
      sm: "gap-3",
      md: "gap-5 text-xl ",
    },
    theme: {
      dark: "text-dark",
      light: "text-white",
    },
  },
  defaultVariants: {
    size: "md",
    theme: "dark",
  },
});

interface WrapProps extends PropsWithChildren, VariantProps<typeof ulDot> {}
const Wrap: FunctionComponent<WrapProps> = ({ size, children }) => {
  return (
    <ul className="space-y-6">
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { size })
          : child
      )}
    </ul>
  );
};

const Item: FunctionComponent<WrapProps> = ({ children, size }) => {
  return (
    <li className={ulDot({ size })}>
      <span className="m-[9px] size-2.5 flex-shrink-0 bg-current"></span>
      {children}
    </li>
  );
};

const UlDot = {
  Wrap,
  Item,
};

export default UlDot;
