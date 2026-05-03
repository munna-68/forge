import type { Metadata } from "next";
import { Preloader } from "@/components/Preloader";
import "./globals.css";

export const metadata: Metadata = {
  title: "Forge CLI — Deploy from the terminal. Nothing else.",
  description:
    "Forge CLI ships your code to production in one command. No dashboards. No YAML pipelines. No waiting.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Preloader />
        {children}
      </body>
    </html>
  );
}
