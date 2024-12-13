import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, PropsWithChildren } from "react";

const card = cva(
  "min-h-[40rem] flex flex-col justify-between border p-4 pb-10 pt-12.5",
  {
    variants: {
      theme: {
        outline: "border-dark",
        dark: "border-dark bg-dark text-white",
        light: "border-white bg-white text-dark",
      },
    },
  }
);

const Wrap: FunctionComponent<
  PropsWithChildren & VariantProps<typeof card>
> = ({ theme, children }) => {
  return <li className={card({ theme })}>{children}</li>;
};

const Content: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="space-y-15">{children}</div>;
};

const Header: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="space-y-5">{children}</div>;
};

const HeaderDescription: FunctionComponent<PropsWithChildren> = ({
  children,
}) => {
  return <div className="*:block">{children}</div>;
};

const HeaderPrice: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex items-end gap-3 font-bold">
      <div className="flex">
        <span className="text-xl">$</span>
        <span className="inline-block text-8xl leading-none">{children}</span>
      </div>
      <span className="text-xl">per/mo</span>
    </div>
  );
};

const WrapButton: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return <div className="px-6">{children}</div>;
};

const PricingCardItem = {
  Wrap,
  Content,
  Header,
  HeaderDescription,
  HeaderPrice,
  WrapButton,
};
export default PricingCardItem;
