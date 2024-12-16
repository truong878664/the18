"use client";
import { cn } from "@/lib/utils";
import { Minus, Plus } from "lucide-react";
import {
  FunctionComponent,
  HTMLAttributes,
  PropsWithChildren,
  useRef,
  useState,
} from "react";

const Ul: FunctionComponent<HTMLAttributes<HTMLUListElement>> = ({
  className,
  ...rest
}) => {
  return <ul className={cn("space-y-5", className)} {...rest} />;
};

const Li: FunctionComponent<PropsWithChildren> = ({ children }) => {
  const [isShow, setShow] = useState(false);
  return (
    <li>
      <button
        className="flex w-full items-start justify-between text-start"
        onClick={() => setShow(!isShow)}
      >
        <span className="font-bold">
          How much does a Teams subscription cost?
        </span>
        <span className="p-0.5">{isShow ? <Minus /> : <Plus />}</span>
      </button>
      <div
        className={cn(
          "overflow-hidden transition-all duration-300",
          isShow ? "mt-5 max-h-96" : "max-h-0"
        )}
      >
        <p>
          Contributors are members of your team who need access to use the Mac
          app to create and edit Sketch documents. These prices don’t include
          sales tax, which may still apply. Head over to our pricing page to get
          full details.
        </p>
      </div>
    </li>
  );
};

const Divider = () => <div className="h-px bg-dark"></div>;

export { Ul, Li, Divider };
