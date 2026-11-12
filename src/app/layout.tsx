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
  title: "vseducare | Premier Coaching for CBSE, ICSE & Foreign Board (Class 6 - 12)",
  description: "Join vseducare for Maths, Science & Social Science. Interactive Online Google Meet & Offline classroom batches, 24/7 Doubt solving with Sir, Topper Notes & Parent Performance Portal.",
  keywords: ["vseducare", "CBSE coaching", "ICSE coaching", "Foreign Board coaching", "Maths tuition", "Science tuition", "Online Google Meet classes", "Class 6 to 12 batches", "Study Notes"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
