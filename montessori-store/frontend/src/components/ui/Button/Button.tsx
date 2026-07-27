import { ButtonHTMLAttributes } from "react";
import clsx from "clsx";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export default function Button({
  children,
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        "rounded-xl px-6 py-3 font-semibold transition-all duration-300",
        {
          "bg-[#B08A45] text-white hover:bg-[#9B7738]":
            variant === "primary",

          "bg-[#25D366] text-white hover:bg-[#20B557]":
            variant === "secondary",

          "border border-[#B08A45] text-[#B08A45] hover:bg-[#B08A45] hover:text-white":
            variant === "outline",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
