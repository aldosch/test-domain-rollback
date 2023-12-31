import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Test domain rollback",
  description:
    "Testing a potential bug when a deployment is rolled back with a custom domain ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
