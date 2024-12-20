import { forwardRef, FunctionComponent, HTMLAttributes } from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";

interface EmailFieldProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  btnProps?: HTMLAttributes<HTMLButtonElement>;
  inputProps?: HTMLAttributes<HTMLInputElement>;
}

const EmailField = forwardRef<HTMLInputElement, EmailFieldProps>(
  (props, ref) => {
    const {
      btnProps,
      inputProps: { className: inputClassName, ...inputPropsRest } = {},
      className,
      ...rest
    } = props;

    return (
      <div className={cn("flex", className)} {...rest}>
        <input
          ref={ref}
          type="text"
          placeholder="Enter your email"
          className={cn(
            "w-[200px] min-w-0 rounded-none px-4 text-lg text-dark placeholder:font-neue focus:outline-none md:w-auto lg:w-[22.5rem]",
            inputClassName
          )}
          {...inputPropsRest}
        />
        <Button theme={"dark"} {...btnProps} />
      </div>
    );
  }
);

export default EmailField;
