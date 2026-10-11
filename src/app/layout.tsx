import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/shared/components/query-provider";
import { Toaster } from "@/shared/components/ui/toaster";

export const metadata: Metadata = {
  title: "SteadyGrid Solar",
  description: "End-to-end solar, built around you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <QueryProvider>
          {children}
          <Toaster />
        </QueryProvider>
      </body>
    </html>
  );
}
