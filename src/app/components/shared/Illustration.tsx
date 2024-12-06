import { cn } from "@/lib/utils";
import Image, { StaticImageData, ImageProps } from "next/image";
import { FunctionComponent } from "react";
import * as styleX from "@stylexjs/stylex";
import { screenBreakpoints } from "@/app/constants";

const style = styleX.create({
  wrap({ minWidth }: { minWidth: number }) {
    return {
      minWidth,
      [`@query (min-width: ${screenBreakpoints.lg})`]: "",
    };
  },
});

interface IllustrationProps {
  bgImage: Omit<ImageProps, "width" | "height">;
  subjectImage: ImageProps;
}

const Illustration: FunctionComponent<IllustrationProps> = ({
  bgImage,
  subjectImage,
}) => {
  return (
    <div className="flex w-full justify-center">
      <div
        className={
          "relative flex h-80 min-w-[370px] items-end justify-center self-start p-1 lg:h-[432px] lg:w-[500px] lg:px-[1.125rem]"
        }
      >
        <div className="pointer-events-none absolute inset-0 md:inset-x-4">
          <Image src={""} className="object-contain" alt={"bg"} fill />
        </div>
        <div className="relative h-[249px] w-[267px] lg:h-[337px] lg:w-[360px]">
          <Image src={""} className="object-contain" alt={"object"} fill />
        </div>
      </div>
    </div>
  );
};

export default Illustration;
