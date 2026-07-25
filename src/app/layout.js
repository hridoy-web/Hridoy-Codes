import { Syne, Urbanist } from "next/font/google";
import 'devicon/devicon.min.css';
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const syne = Syne({
  subsets: ['latin'],
  weight: ['500', '700', '800'],
  variable: '--font-syne',
  display: 'swap',
})

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
  display: 'swap',
})

export const metadata = {

  title: {
    default: "Hridoy Codes | Hridoy Chowdhury - Full Stack & MERN Developer",
    template: "%s | Hridoy Codes",
  },

  // Meta Description
  description:
    "Official portfolio of Hridoy Chowdhury (Hridoy Codes). Expert Full Stack, MERN Stack, and Next.js Developer specializing in building high-performance web applications, Node.js backends, and custom website solutions.",

  // Target Keywords
  keywords: [
    "Hridoy Codes",
    "Hridoy Chowdhury",
    "Hridoy",
    "hridoycodes.site",
    "MERN Stack Developer",
    "Full Stack Developer",
    "Next.js Developer",
    "Node.js Developer",
    "MongoDB Developer",
    "Web Development",
    "Website Builder",
    "React Developer Bangladesh",
    "Custom Web Application Developer",
    "Frontend Developer",
    "Backend Developer"
  ],

  // Authors & Creator
  authors: [{ name: "Hridoy Chowdhury", url: "https://hridoycodes.site" }],
  creator: "Hridoy Chowdhury",
  publisher: "Hridoy Codes",

  // Open Graph
  openGraph: {
    title: "Hridoy Codes | Hridoy Chowdhury - Full Stack Web Developer",
    description:
      "Explore the portfolio of Hridoy Chowdhury, a passionate MERN & Next.js Developer building modern web experiences.",
    url: "https://hridoycodes.site",
    siteName: "Hridoy Codes",
    locale: "en_US",
    type: "website",
  },

  // Twitter Card Setup
  twitter: {
    card: "summary_large_image",
    title: "Hridoy Codes | Full Stack & MERN Developer",
    description:
      "Portfolio of Hridoy Chowdhury — Next.js, Node.js, and MERN Stack Web Development Services.",
    creator: "@hridoyChyWebDev",
  },

  // Canonical URL (Duplicate issue resolve)
  alternates: {
    canonical: "https://hridoycodes.site",
  },
};
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${urbanist.variable} antialiased`}
    >
      <body className="font-sans min-h-screen flex flex-col">
        <Navbar />

        <main className="grow">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
