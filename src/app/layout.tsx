import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { StickyWhatsApp } from "@/components/StickyWhatsApp";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BYTESOOL | Leading IT & AI Solutions Company in India",
  description: "Transform your business with BYTESOOL, the premier IT company in India. We deliver cutting-edge AI solutions and smart digital technologies to scale your growth.",
  keywords: ["IT company in India", "website development company Delhi NCR", "digital marketing services India", "AI solutions company", "private cloud India", "Google Workspace reseller India", "Microsoft 365 India", "CCTV installation Delhi NCR", "IT hardware supplier Delhi", "cybersecurity services Delhi NCR", "cloud email solutions India", "cybersecurity company Noida"],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "BYTESOOL",
  "url": "https://www.bytesool.com",
  "description": "Smart IT, AI & Digital Solutions Company in India.",
  "address": {
    "@type": "PostalAddress",
    "addressRegion": "Delhi NCR",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} h-full antialiased`}>
      <head suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-background text-foreground overflow-x-hidden">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <StickyWhatsApp />
        </ThemeProvider>

        {/* Google Analytics — loaded after page is interactive */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-50VJ6F164F"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-50VJ6F164F');
          `}
        </Script>

        {/* Google AdSense */}
        <Script
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8547227129388871"
          strategy="afterInteractive"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  );
}
