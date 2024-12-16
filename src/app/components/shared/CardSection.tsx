import {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
  ReactNode,
} from "react";
import Tag from "./Tag";
import Heading from "./Heading";
import objectImage from "@/assets/aboutUs/illustration_person.png";
import background from "@/assets/aboutUs/background.png";
import Illustration from "./Illustration";
import UlDot from "./UlDot";
import { DynamicSpaces } from "@/lib/type";
import { cva, VariantProps } from "class-variance-authority";
import Image, { ImageLoader, ImageLoaderProps, ImageProps } from "next/image";
import { dynamicVariableSpaces } from "@/lib/utils";

/**
 *
 */
const Wrap: FunctionComponent<HTMLAttributes<HTMLScriptElement>> = ({
  children,
  className,
  ...rest
}) => {
  return (
    <section className="flex flex-col gap-10 lg:gap-15" {...rest}>
      {children}
    </section>
  );
};

/**
 *
 */
const contentWrap = cva(
  "flex flex-col  lg:gap-0 2xl:gap-10 3xl:gap-[11.75rem]",
  {
    variants: {
      layout: {
        contentRight: "lg:flex-row-reverse",
        contentLeft: "lg:flex-row *:inline-block justify-between ",
      },
      gap: {
        lg: "gap-15",
        md: "gap-10",
      },
    },
    defaultVariants: {
      layout: "contentRight",
      gap: "md",
    },
  }
);

interface ContentWrapProps extends VariantProps<typeof contentWrap> {}

const ContentWrap: FunctionComponent<ContentWrapProps & PropsWithChildren> = ({
  children,
  layout,
}) => {
  return <div className={contentWrap({ layout })}>{children}</div>;
};

/**
 *
 */
const contentText = cva([], {
  variants: {
    align: {
      end: "text-right flex flex-col gap-5 items-right",
      start: "space-y-5",
    },
  },
  defaultVariants: {
    align: "start",
  },
});
interface ContentTextProps extends VariantProps<typeof contentText> {
  label: string;
  children?: ReactNode;
}

const ContentText: FunctionComponent<ContentTextProps> = ({
  label,
  children,
  align,
}) => {
  return (
    <div className="space-y-10 lg:w-7/12 lg:shrink-0 xl:w-6/12">
      <Tag>{label}</Tag>
      <div className={contentText({ align })}>{children}</div>
    </div>
  );
};

/**
 *
 * @param param0
 * @returns
 */
const ContentImage: FunctionComponent<
  ImageProps & { aspect: string; widths: DynamicSpaces }
> = ({ fill: _fill, aspect, widths, ...rest }) => {
  return (
    <div className="relative">
      <div className="right-0 top-0 flex items-center justify-center lg:absolute">
        <div
          className="w-dynamic relative min-w-var-default"
          style={{ aspectRatio: aspect, ...dynamicVariableSpaces(widths) }}
        >
          <Image {...rest} fill />
        </div>
      </div>
    </div>
  );
};

/**
 *
 */
const listWrap = cva("lg:flex", {
  variants: {
    layout: {
      contentRight: "lg:justify-end",
      contentLeft: "lg:justify-start",
    },
  },
  defaultVariants: {
    layout: "contentRight",
  },
});
interface ListProps extends PropsWithChildren, VariantProps<typeof listWrap> {}

const ListWrap: FunctionComponent<ListProps> = ({ children, layout }) => {
  return <div className={listWrap({ layout })}>{children}</div>;
};

/**
 *
 */
const Content = {
  Wrap: ContentWrap,
  Text: ContentText,
  Image: ContentImage,
};

const CardSection = {
  Wrap,
  Content,
  ListWrap,
};

export default CardSection;
