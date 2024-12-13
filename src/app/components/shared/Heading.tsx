import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, HTMLAttributes } from "react";

const heading = cva([], {
  variants: {
    size: {
      lg: "text-[3.25rem] leading-[3.75rem] tracking-[-4px] lg:text-[4rem] lg:leading-[5rem]",
      md: "text-[2.75rem] leading-[3.5rem] tracking-[-4px] lg:text-6xl lg:tracking-[-3px]",
      sm: "text-[2rem] leading-10 tracking-[-1px] lg:text-[3.25rem] lg:leading-[3.75rem] lg:tracking-[-4px]",
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

interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof heading> {}

const Heading: FunctionComponent<HeadingProps> = ({
  size,
  className,
  children,
}) => {
  return <h1 className={cn(heading({ size }), className)}>{children}</h1>;
};

export default Heading;
