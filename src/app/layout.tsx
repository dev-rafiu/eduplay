import type { Metadata } from "next";
import { Comic_Neue, Quicksand } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/header";
import Footer from "@/components/footer";
import { WEBSITE_HOST_URL } from "./sitemap";

const comic_neue = Comic_Neue({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

const quicksand = Quicksand({
  subsets: ["latin-ext"],
});

const meta = {
  title: "EduPlay",
  description:
    "Transform traditional education into interactive games, making learning journey for your little ones as thrilling as their favorite adventures.",
};

export const metadata: Metadata = {
  metadataBase: new URL(`${WEBSITE_HOST_URL}`),
  title: {
    default: meta.title,
    template: `${meta.title} | %s`,
  },
  description: meta.description,

  openGraph: {
    title: meta.title,
    description: meta.description,
    url: WEBSITE_HOST_URL,
    locale: "en-US",
    siteName: meta.title,
    type: "website",
  },

  twitter: {
    title: meta.title,
    description: meta.description,
    card: "summary_large_image",
  },

  alternates: {
    canonical: WEBSITE_HOST_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={quicksand.className}>
        <div className="flex flex-col">
          <Header />
          <main className="grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
