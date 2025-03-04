import clsx from "clsx";
import React from "react";

type DividerProps = React.HTMLAttributes<HTMLDivElement>;
export default function Divider({ className, ...props }: DividerProps) {
  return (
    <div
      className={clsx("w-[2px] h-[15px] bg-white", className)}
      {...props}
    ></div>
  );
}
