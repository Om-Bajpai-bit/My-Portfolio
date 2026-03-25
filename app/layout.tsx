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
  title: "Om Bajpai - Data Science Student",
  description: "Data Science Student passionate about machine learning, data analysis, and AI. Building predictive models and extracting insights from complex datasets.",
  keywords: ["Data Science", "Machine Learning", "Python", "Data Analysis", "AI", "Deep Learning", "Statistics", "Data Visualization"],
  authors: [{ name: "Om Bajpai" }],
  openGraph: {
    title: "Om Bajpai - Data Science Student",
    description: "Data Science Student specializing in machine learning, data analysis, and AI",
    type: "website",
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
