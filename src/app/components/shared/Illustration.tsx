import { cn } from "@/lib/utils";
import Image, { StaticImageData, ImageProps } from "next/image";
import { FunctionComponent, HTMLAttributes, ReactNode } from "react";

import objectImage from "@/assets/aboutUs/illustration_person.png";
import background from "@/assets/aboutUs/background.png";

interface IllustrationProps {
  // bgImage: Omit<ImageProps, "width" | "height">;
  // subjectImage: ImageProps;
}

interface WrapProps extends HTMLAttributes<HTMLDivElement> {}

const Wrap: FunctionComponent<WrapProps> = ({ className, ...rest }) => {
  return (
    <div className="flex w-full justify-center">
      <div
        className={cn(
          "relative flex items-end justify-center self-start border p-1",
          className
        )}
        {...rest}
      />
    </div>
  );
};

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

const Illustration = {
  Wrap,
  Bg,
  Subject,
};
export default Illustration;
