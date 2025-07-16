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
  title: 'Studycard',
  description: 'Studycard is a fun, interactive flashcard app for toddlers and preschoolers to learn letters, numbers, shapes, colors, and vocabulary.',
  applicationName: 'App | Flashcards',
  alternates: {
    canonical: "https://flashlearning.netlify.app"
  },
  openGraph: {
    title: 'Studycard',
    description: 'Studycard app for Toddlers and Pre-Schoolers',
    type: 'website',
    siteName: 'Studycard',
    images: [
      {
        url: 'https://res.cloudinary.com/dw1mtnug2/image/upload/v1752262512/export_hh2reu.png',
        width: 1200,
        height: 630,
        alt: 'Studycard',
      },
      // Add more images if available
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
    title: 'Studycard',
    description: 'Studycard app for Toddlers and Pre-Schoolers',
    images: ['https://res.cloudinary.com/dw1mtnug2/image/upload/v1752262512/export_hh2reu.png']
  },
  other: {
    keywords: 'studycard, flashcards, kids, children, learning, preschool, toddler, alphabet, numbers, shapes, colors, educational, phonics, vocabulary, reading, fun, interactive, study, school, early learning',
    'application/ld+json': JSON.stringify({
      "@context": "https://schema.org",
      "@type": "EducationalApplication",
      "name": "Studycard",
      "applicationCategory": "Educational",
      "operatingSystem": "All",
      "offers": {
        "@type": "Offer",
        "price": "0"
      },
      "description": "A fun, interactive flashcard app for toddlers and preschoolers."
    }),
    author: 'Macky Beltran',
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
        <script type="application/ld+json">
{`
{
  "@context": "https://schema.org",
  "@type": "EducationalApplication",
  "name": "Studycard",
  "applicationCategory": "Educational",
  "operatingSystem": "All",
  "offers": {
    "@type": "Offer",
    "price": "0"
  },
  "description": "A fun, interactive flashcard app for toddlers and preschoolers."
}
`}
</script>
      </body>
    </html>
  );
}
