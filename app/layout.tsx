import "@/styles/globals.css";

import type { Metadata } from "next";

import { sans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/toaster";

export const metadata: Metadata = {
  title: "Movisea",
  description: "Front-end implementation of The Movie Database (TMDB)",
};

export const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          sans.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  );
};

type RootLayoutProps = {
  children: React.ReactNode;
};

export default RootLayout;
