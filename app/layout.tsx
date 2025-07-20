import type { Metadata } from "next";
import { Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata = {
  title: "Muadhim | Software Engineer",
  description:
    "Portfolio of Muadhim, a software engineer specializing in frontend and backend development.",
  keywords:
    "Muadhim, Software Engineer, Frontend Developer, Fullstack Developer, Portfolio",
  metadataBase: new URL("https://muadhim.vercel.app"),
  openGraph: {
    title: "Muadhim | Software Engineer",
    description:
      "Explore projects and skills of Muadhim, a passionate software engineer.",
    url: "https://muadhim.vercel.app",
    siteName: "Muadhim | Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muadhim Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muadhim | Software Engineer",
    description:
      "Portfolio of Muadhim, a software engineer specializing in frontend and backend development.",
    images: ["/og-image.png"],
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${orbitron.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
