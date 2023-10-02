import "@/scss/globals.scss";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["600"],
  variable: "--font-poppins",
  subsets: ["latin-ext"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Matt Litherland - Design Engineer",
  description: "A breif look at the my world of design and web engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
