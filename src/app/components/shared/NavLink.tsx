import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { FunctionComponent, HTMLAttributes } from "react";

const navLinkUl = cva("hover:*:underline", {
  variants: {
    variant: {
      header: "flex gap-5 *:px-5 *:py-3.5",
      footer: "2xl:order-2 space-y-6 *:block text-center lg:text-left",
    },
  },
  defaultVariants: {
    variant: "header",
  },
});

interface NavLinkProps
  extends HTMLAttributes<HTMLUListElement>,
    VariantProps<typeof navLinkUl> {}

const NavLink: FunctionComponent<NavLinkProps> = ({
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
    <ul className={cn(navLinkUl({ variant }), className)} {...rest}>
      {links.map(({ id, title }) => (
        <a href={id} key={id}>
          <li>{title}</li>
        </a>
      ))}
    </ul>
  );
};

export default NavLink;
