import { FunctionComponent, HTMLAttributes, PropsWithChildren } from "react";
import ShapeIcon from "@/assets/howItWork/icon/shape.svg";
import ChartIcon from "@/assets/howItWork/icon/shape.svg";
import RocketIcon from "@/assets/howItWork/icon/rocket.svg";
import ArrowInBox from "@/assets/howItWork/icon/arrowInBox.svg";
import { cn } from "@/lib/utils";

interface HowItWorkListProps extends HTMLAttributes<HTMLUListElement> {}

const HowItWorkList: FunctionComponent<HowItWorkListProps> = ({
  className,
  ...rest
}) => {
  return (
    <ul className={cn("mt-10 space-y-10", className)} {...rest}>
      <Li>
        <Icon>
          <ShapeIcon />
        </Icon>
        <Content>
          <Head className="whitespace-nowrap md:whitespace-normal">
            Shared Cloud Libraries
          </Head>
          <p>
            Navigate to the Your work panel in the left sidebar. Select the
            library you want to share. Select the Share icon in the upper right
            to share the library.
          </p>
        </Content>
      </Li>

      <Li>
        <Icon>
          <ChartIcon />
        </Icon>
        <Content>
          <Head>Free developer handoff, right inside</Head>
          <p>
            Cloud Inspector makes it easy for developers to get the information
            they need to turn pixels into code — all in the browser and, most
            importantly, for free.
          </p>
        </Content>
      </Li>

      <Li>
        <Icon>
          <RocketIcon />
        </Icon>
        <Content>
          <Head>Real-time collaborative editing</Head>
          <p>
            Room Service helps you build real-time collaborative features. Add
            real-time data sync! Let users edit the same data at the same time.
          </p>
        </Content>
      </Li>

      <Li>
        <Icon>
          <ArrowInBox />
        </Icon>
        <Content>
          <Head>Integrations with the Cloud API</Head>
          <p>
            Unlocking that value requires an iPaaS that delivers the
            transformative power of APIs and integration.
          </p>
        </Content>
      </Li>
    </ul>
  );
};

const Li: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <li className="flex flex-col gap-5 md:flex-row md:gap-7">{children}</li>
);

const Icon: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="">{children}</div>
);

const Content: FunctionComponent<PropsWithChildren> = ({ children }) => (
  <div className="space-y-4 md:inline-block">{children}</div>
);

const Head: FunctionComponent<
  PropsWithChildren & HTMLAttributes<HTMLSpanElement>
> = ({ className, ...rest }) => (
  <span
    className={cn("text-[1.75rem] leading-[1.4645]", className)}
    {...rest}
  />
);

export default HowItWorkList;
