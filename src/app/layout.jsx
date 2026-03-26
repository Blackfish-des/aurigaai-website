import { Inter } from 'next/font/google';
import NavBar from '@/components/layout/NavBar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://aurigaai.com.au'),
  title: {
    default: 'Auriga AI — AI Governance Consulting for Australian Organisations',
    template: '%s | Auriga AI',
  },
  description:
    'Auriga AI helps Australian organisations govern AI with confidence. Expert AI risk frameworks, policy suites, and regulatory compliance — built for the APS AI Policy and beyond.',
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://aurigaai.com.au',
    siteName: 'Auriga AI',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Auriga AI' }],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Auriga AI',
  description:
    'AI governance consulting for Australian organisations. AI risk frameworks, policy suites, and regulatory compliance.',
  url: 'https://aurigaai.com.au',
  email: 'hello@aurigaai.com.au',
  areaServed: 'AU',
  serviceType: 'AI Governance Consulting',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
