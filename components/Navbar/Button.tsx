import clsx from "clsx";
import Link from "next/link";
import React, { forwardRef } from "react";

const baseStyles = {
  solid:
    "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors",
  outline:
    "inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors",
};

const variantStyles: Record<string, Record<string, string>> = {
  solid: {
    blue: "relative overflow-hidden bg-blue-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-blue-600 active:text-white/80 before:transition-colors",
    white:
      "bg-white text-blue-900 hover:bg-white/90 active:bg-white/90 active:text-blue-900/70",
    gray: "bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80",
  },
  outline: {
    gray: "border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80",
  },
};

interface ButtonPropsBase {
  variant?: "solid" | "outline";
  color?: "blue" | "white" | "gray";
  className?: string;
}

interface ButtonAsButtonProps extends ButtonPropsBase {
  href?: never;
}

interface ButtonAsLinkProps extends ButtonPropsBase {
  href: string;
}

type ButtonProps = ButtonAsButtonProps | ButtonAsLinkProps;

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  function Button(
    { variant = "solid", color = "gray", className, href, ...props },
    ref
  ) {
    const combinedClassName = clsx(
      baseStyles[variant],
      variantStyles[variant][color],
      className
    );

    if (href) {
      return (
        <Link href={href}>
          <a
            ref={ref as React.Ref<HTMLAnchorElement>}
            className={combinedClassName}
            {...props}
          />
        </Link>
      );
    }

    return (
      <button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={combinedClassName}
        {...props}
      />
    );
  }
);

export default Button;
