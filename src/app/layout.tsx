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
  title: 'Flashcards',
  description: 'Flashcard app for Toddlers and Pre-Schoolers',
  applicationName: 'App | Flashcards',
  alternates: {
    canonical: "https://flashlearning.netlify.app"
  },
  openGraph: {
    title: 'Flashcards',
    description: 'Flashcard app for Toddlers and Pre-Schoolers',
    images: [
      {
        url: 'https://res.cloudinary.com/dw1mtnug2/image/upload/v1752262512/export_hh2reu.png',
        width: 1200,
        height: 60,
        alt: 'Flashcards',
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: "index, follow"
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Flashcards',
    description: 'Flashcard app for Toddlers and Pre-Schoolers',
    images: ['https://res.cloudinary.com/dw1mtnug2/image/upload/v1752262512/export_hh2reu.png'],
  },
  other: {
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      "name": "Flashcards",
      "description": "Interactive flashcard app for Toddlers and Pre-Schoolers to learn numbers, letters, shapes, and colors",
      "url": "https://flashlearning.netlify.app",
      "applicationCategory": "EducationalApplication",
      "operatingSystem": "Web Browser",
      "audience": {
        "@type": "Audience",
        "audienceType": "Children"
      },
      "educationalUse": ["Learning", "Memory Training"],
      "learningResourceType": ["Flashcards", "Interactive Media"],
      "teaches": ["Numbers", "Letters", "Shapes", "Colors", "Early Learning"],
      "author": {
        "@type": "Organization",
        "name": "Flashcards App"
      },
      "publisher": {
        "@type": "Organization",
        "name": "Flashcards App"
      },
      "datePublished": "2024",
      "inLanguage": "en",
      "screenshot": "https://res.cloudinary.com/dw1mtnug2/image/upload/v1752262512/export_hh2reu.png"
    })
  }
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
