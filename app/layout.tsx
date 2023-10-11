import type { Metadata } from "next";

import { Lato } from "next/font/google";
// These styles apply to every route in the application
import "./globals.css";
const inter = Lato({
  weight: ["400"],
  subsets: ["latin-ext"]
});
// export const metadata: Metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.className}`}>
      
      <body>{children}</body>
    </html>
  );
}
