import "../styles/globals.css";
import { Providers } from "./provider";
import { LayoutProps } from "@/types/types";
import MainLayout from "@/components/layout/MainLayout";
import { ReactNode } from "react";

export const metadata = { title: "My Profile App" };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <Providers>
          <MainLayout>{children}</MainLayout>
        </Providers>
      </body>
    </html>
  );
}
