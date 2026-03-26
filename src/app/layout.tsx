import "../styles/globals.css";
import { LayoutProps } from "@/types/types";
import MainLayout from "@/components/layout/MainLayout";
import { ReactNode } from "react";

export const metadata = { title: "My Profile App" };

export default function RootLayout({ children }: LayoutProps) {
  return (
    <html>
      <body>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
