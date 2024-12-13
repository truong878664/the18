import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
} from "react";

const ulDot = cva("flex items-start leading-7 lg:whitespace-nowrap", {
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
  },
});

/**
 * WRAP UL
 */
interface WrapProps
  extends PropsWithChildren,
    VariantProps<typeof ulDot>,
    HTMLAttributes<HTMLUListElement> {}
const Ul: FunctionComponent<WrapProps> = ({
  size,
  children,
  className,
  ...rest
}) => {
  return (
    <ul className={cn("space-y-6", className)} {...rest}>
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<any>, { size })
          : child
      )}
    </ul>
  );
};

/**
 * UL ITEM
 */
const Li: FunctionComponent<PropsWithChildren & VariantProps<typeof ulDot>> = ({
  children,
  size,
}) => {
  return (
    <li className={ulDot({ size })}>
      <span className="m-[9px] size-2.5 flex-shrink-0 bg-current"></span>
      {children}
    </li>
  );
};

const UlDot = { Ul, Li };

export default UlDot;
