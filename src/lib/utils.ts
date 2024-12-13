import classNames from "classnames";
import { CSSProperties } from "react";
import { twMerge } from "tailwind-merge";
import { DynamicSpaces } from "./type";

/**
 *
 * @param arg
 * @returns
 */
const cn = (...arg: classNames.ArgumentArray) => twMerge(classNames(arg));

/**
 *
 * @param o
 * @returns
 */
const objectKeys = <O extends { [key: string]: unknown }>(o: O) => {
  return Object.keys(o) as Array<keyof O>;
};

/**
 *
 * @param variableSpaces
 * @returns {CSSProperties}
 */
const dynamicVariableSpaces = (variableSpaces: DynamicSpaces) => {
  variableSpaces = objectKeys(variableSpaces).reduce((result, key) => {
    const current = variableSpaces[key];
    return {
      ...result,
      [key]: typeof current === "number" ? `${current}px` : current,
    };
  }, {});
  return {
    "--default": variableSpaces.DEFAULT,
    "--md": variableSpaces.md,
    "--lg": variableSpaces.lg,
    "--xl": variableSpaces.xl,
    "--2xl": variableSpaces["2xl"],
    "--3xl": variableSpaces["3xl"],
  } as CSSProperties;
};

export { cn, dynamicVariableSpaces, objectKeys };
