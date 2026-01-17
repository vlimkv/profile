import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.startsWith("http")
    ? process.env.NEXT_PUBLIC_SITE_URL
    : "https://alimkhan-slambek.vercel.app";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#fafafa", // bg-zinc-50
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Alimkhan Slambek — Product-Oriented Fullstack Engineer",
  description:
    "Product-oriented fullstack engineer building real products end-to-end. Next.js, Node.js, PostgreSQL, Swift (iOS). Production systems used by thousands.",

  icons: {
    icon: [
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon.ico" },
    ],
    apple: [{ url: "/icons/apple-touch-icon.png" }],
  },

  openGraph: {
    type: "website",
    url: "/", // ок, потому что metadataBase задан
    title: "Alimkhan Slambek — Product Engineer",
    description:
      "Product-oriented fullstack engineer building real products end-to-end. Next.js, Node.js, PostgreSQL, Swift (iOS).",
    siteName: "Alimkhan Slambek",
    images: [
      {
        url: "/icons/og.png",
        width: 1200,
        height: 630,
        alt: "Alimkhan Slambek — Product Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Alimkhan Slambek — Product Engineer",
    description:
      "Product-oriented fullstack engineer building real products end-to-end. Next.js, Node.js, PostgreSQL, Swift (iOS).",
    images: ["/icons/og.png"],
  },

  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
