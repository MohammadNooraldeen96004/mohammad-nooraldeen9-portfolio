import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohammad Nooraldeen | AI & Software Engineer",
  description:
    "Portfolio of Mohammad Nooraldeen — AI & Software Engineer building intelligent systems across AI, data, computer vision, and production-ready software.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}