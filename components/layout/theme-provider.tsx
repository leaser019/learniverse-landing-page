"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import * as React from "react";

export function ThemeProvider({
  children,
  ...props
}: ThemeProviderProps & {
  forcedTheme?: string;
  disableTransitionOnChange?: boolean;
}) {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
    
    const applyThemeClass = () => {
      document.documentElement.classList.add("theme-transition");
      return () => {
        document.documentElement.classList.remove("theme-transition");
      };
    };
    
    const cleanup = applyThemeClass();
    return () => cleanup();
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange={false}
      {...props}
    >
      {children}
    </NextThemesProvider>
  );
}