"use client";

import type { ReactNode } from "react";

export function FieldLabel({ children }: { children: ReactNode }) {
  return <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{children}</span>;
}
