import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rohan Srivastava | Full-Stack Blockchain Developer",
  description:
    "Full-stack blockchain developer specializing in smart contracts, decentralized apps, and microservices for secure, scalable digital solutions.",
  keywords: [
    "blockchain developer",
    "smart contracts",
    "web3",
    "solidity",
    "golang",
    "next.js",
    "full-stack developer",
    "decentralized applications",
    "microservices",
    "portfolio",
  ],
  authors: [{ name: "Rohan Srivastava" }],
  creator: "Rohan Srivastava",
  publisher: "Rohan Srivastava",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://rohan-srivastava.vercel.app"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rohan Srivastava | Full-Stack Blockchain Developer",
    description:
      "Full-stack blockchain developer specializing in smart contracts, decentralized apps, and microservices for secure, scalable digital solutions.",
    url: "https://rohan-srivastava.vercel.app",
    siteName: "Rohan Srivastava Portfolio",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rohan Srivastava - Full-Stack Blockchain Developer",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rohan Srivastava | Full-Stack Blockchain Developer",
    description:
      "Full-stack blockchain developer specializing in smart contracts, decentralized apps, and microservices for secure, scalable digital solutions.",
    creator: "@etsrohan",
    images: ["/images/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
