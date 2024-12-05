import { cn } from "@/lib/utils";
import Image, { StaticImageData, ImageProps } from "next/image";
import { FunctionComponent } from "react";

interface IllustrationProps {
  bgImage: Omit<ImageProps, "width" | "height">;
  subjectImage: ImageProps;
  width: number;
  height: number;
  containerClassName?: string;
  wrapClassName?: string;
}

const Illustration: FunctionComponent<IllustrationProps> = ({
  bgImage,
  subjectImage,
  height,
  width,
  containerClassName,
  wrapClassName,
}) => {
  return (
    <div
      className={cn(
        "relative flex flex-shrink-0 items-start justify-center",
        containerClassName
      )}
      style={{ height }}
    >
      <div
        className="absolute bottom-0 left-1/2 -z-10 -translate-x-[55%]"
        style={{ width, height }}
      >
        <Image
          src={bgImage.src}
          className="object-contain"
          alt={bgImage.alt}
          fill
        />
      </div>
      <Image {...subjectImage} />
    </div>
  );
};

export default Illustration;
