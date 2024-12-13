import {
  CSSProperties,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
} from "react";
import Tag from "./Tag";
import Heading from "./Heading";
import objectImage from "@/assets/aboutUs/illustration_person.png";
import background from "@/assets/aboutUs/background.png";
import Illustration from "./Illustration";
import UlDot from "./UlDot";
import { dynamicVariableSpaces } from "@/lib/utils";
import { DynamicSpaces } from "@/lib/type";
import { cva } from "class-variance-authority";

/**
 *
 */
interface WrapProps {
  children?: ReactNode;
}

const Wrap: FunctionComponent<WrapProps> = ({ children }) => {
  return <section className="flex flex-col gap-10">{children}</section>;
};

/**
 *
 */
const contentWrap = cva("", {
  variants: {
    variant: {
      ltr: "",
      rtl: "",
    },
  },
  defaultVariants: {
    variant: "ltr",
  },
});

interface ContentWrapProps {}

const ContentWrap: FunctionComponent<ContentWrapProps & PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row-reverse xl:gap-[11.75rem]">
      {children}
    </div>
  );
};
interface ContentTextProps {}

const ContentText: FunctionComponent<ContentTextProps> = () => {
  return (
    <div className="space-y-10 lg:w-7/12 lg:shrink-0 xl:w-6/12">
      <Tag>About us</Tag>
      <div className="space-y-5">
        <Heading>Faster, friendlier feedback loops make life easier.</Heading>
        <p>
          Add a Viewer to your team so they can see everything you share, or
          invite people to individual documents. It’s up to you. Stakeholders
          can check out designs in their web browser, test prototypes and leave
          feedback for free.
        </p>
      </div>
    </div>
  );
};

interface ImageProps {}

const ContentImage: FunctionComponent<ImageProps> = () => {
  return (
    <div className="relative">
      <div className="right-0 top-0 lg:absolute">
        <Illustration.Wrap className="px- h-80 min-w-[370px] lg:h-[432px] lg:w-[500px] lg:px-4.5 xl:h-[500px] xl:w-[580px]">
          <Illustration.Bg
            imageProps={{ src: background.src, alt: "Star background" }}
            className="md:inset-x-4"
          />
          <Illustration.Subject
            imageProps={{ src: objectImage.src, alt: "Person in the moon" }}
            className="aspect-[14/13] w-[267px] lg:w-[360px] xl:w-[418px]"
          />
        </Illustration.Wrap>
      </div>
    </div>
  );
};

interface ListProps extends PropsWithChildren {}

const ListWrap: FunctionComponent<ListProps> = ({ children }) => {
  return (
    <div className="lg:flex lg:justify-end">
      <div className="lg:w-7/12 xl:w-6/12">{children}</div>
    </div>
  );
};

/**
 *
 */
interface CardSectionProps {
  width: DynamicSpaces;
}

const CardSection: FunctionComponent<CardSectionProps> = ({ width }) => {
  return (
    <Wrap>
      <ContentWrap>
        <ContentText />
        <ContentImage />
      </ContentWrap>
      <ListWrap>
        <UlDot.Ul>
          <UlDot.Li>
            Shared Cloud Libraries, for a single source of truth
          </UlDot.Li>
          <UlDot.Li>Prototype previews for user testing and research</UlDot.Li>
          <UlDot.Li>Easy organization with projects</UlDot.Li>
          <UlDot.Li>Free developer handoff, right inside the browser</UlDot.Li>
          <UlDot.Li>Two-factor authentication and SSO</UlDot.Li>
        </UlDot.Ul>
      </ListWrap>
    </Wrap>
  );
};

export default CardSection;
