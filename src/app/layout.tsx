import type { Metadata } from "next";
import { Inter, Comic_Neue, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";

const comic_neue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const quicksand = Quicksand({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "EduPlay",
  description:
    "Transform traditional education into interactive games, making learning journey for your little ones as thrilling as their favorite adventures.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
