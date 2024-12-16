import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, HTMLAttributes } from "react";

const linkListUl = cva("", {
  variants: {
    variant: {
      row: "flex gap-5 *:px-5 *:py-3.5",
      col: "space-y-6 *:block text-center lg:text-left",
    },
  },
  defaultVariants: {
    variant: "row",
  },
});

interface LinkListProps
  extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof linkListUl> {}

const LinkList: FunctionComponent<LinkListProps> = ({
  className,
  variant,
  ...rest
}) => {
  const links = [
    { title: "About Us", id: "#about-us" },
    { title: "How it work", id: "#how-it-work" },
    { title: "Pricing", id: "#pricing" },
    { title: "FAQs", id: "#faqs" },
  ];
  return (
    <ul className={cn(linkListUl({ variant }), className)} {...rest}>
      {links.map((link) => (
        <a href={link.id} key={link.id}>
          <li className="hover:underline">{link.title}</li>
        </a>
      ))}
      {/* <a href="#about-us">
        <li className="px-5 py-3.5">About Us</li>
      </a>
      <a href="#how-it-work">
        <li className="px-5 py-3.5">How it work</li>
      </a>
      <a href="#pricing">
        <li className="px-5 py-3.5">Pricing</li>
      </a>
      <a href="#faqs">
        <li className="px-5 py-3.5">FAQs</li>
      </a> */}
    </ul>
  );
};

export default LinkList;
