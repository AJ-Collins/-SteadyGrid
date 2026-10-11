"use client";

import { useState } from "react";

export function usePasswordVisibility(): { show: boolean; toggle: () => void } {
  const [show, setShow] = useState(false);
  return { show, toggle: () => setShow((s) => !s) };
}
