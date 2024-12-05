import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, HTMLAttributes } from "react";

const button = cva("text-lg py-[0.875rem] leading-6 whitespace-nowrap", {
  variants: {
    size: {
      md: "px-5",
      lg: "px-6",
      xl: "px-9",
    },
    width: {
      full: "w-full",
      fit: "w-fit",
    },
    fill: {
      light: "bg-white text-dark",
      dark: "bg-dark text-gray",
    },
  },
  defaultVariants: {
    fill: "light",
    size: "md",
    width: "fit",
  },
});

interface ButtonProps
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

const Button: FunctionComponent<ButtonProps> = ({
  className,
  size,
  width,
  fill,
  ...rest
}) => {
  return (
    <button
      {...rest}
      className={cn(button({ size, width, fill }), className)}
    />
  );
};

export default Button;
