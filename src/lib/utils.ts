import classNames from "classnames";
import { twMerge } from "tailwind-merge";

const cn = (...arg: classNames.ArgumentArray) => twMerge(classNames(arg));

export { cn };
