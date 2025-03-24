"use client";

import { createContext, useEffect } from "react";

export default function ThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    document.body.classList.add("dark");
  }, []);
  return <>{children}</>;
}
