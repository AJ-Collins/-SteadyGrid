import * as React from "react";
import { cn } from "@/shared/lib/utils";

export function Input({ className, ...props }: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      className={cn(
        "h-10 w-full rounded-md border border-border bg-white px-3 text-sm outline-none focus:ring-1 focus:ring-primary",
        className,
      )}
      {...props}
    />
  );
}
