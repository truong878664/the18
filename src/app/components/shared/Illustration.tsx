import { cn } from "@/lib/utils";
import Image from "next/image";
import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

/**
 * WRAP
 */
interface WrapProps extends HTMLAttributes<HTMLDivElement> {}

const Wrap: FunctionComponent<WrapProps> = ({ className, ...rest }) => {
  return (
    <div className="flex w-full justify-center">
      <div
        className={cn(
          "relative -z-10 flex items-end justify-center self-start p-1",
          className
        )}
        {...rest}
      />
    </div>
  );
};

/**
 * Background
 */
interface BgProps extends HTMLAttributes<HTMLDivElement> {
  imageProps: { src: string; alt: string };
}

const Bg: FunctionComponent<BgProps> = ({ className, imageProps, ...rest }) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 md:inset-x-4",
        className
      )}
      {...rest}
    >
      <Image
        src={imageProps.src}
        className="object-contain"
        alt={imageProps.alt}
        fill
      />
    </div>
  );
};

/**
 * Subject
 */
interface SubjectProps extends HTMLAttributes<HTMLDivElement> {
  imageProps: { src: string; alt: string };
}

const Subject: FunctionComponent<SubjectProps> = ({
  className,
  imageProps,
  ...rest
}) => {
  return (
    <div className={cn("relative", className)} {...rest}>
      <Image
        src={imageProps.src}
        className="object-contain"
        alt={imageProps.src}
        fill
      />
    </div>
  );
};

const Illustration = { Wrap, Bg, Subject };
export default Illustration;
