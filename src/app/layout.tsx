import type { Metadata } from "next";
import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Next.js App",
  description: "A modern Next.js 15 application built with TypeScript and Tailwind CSS.",
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
