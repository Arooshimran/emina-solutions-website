import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import './globals.css';

import { Chakra_Petch, Plus_Jakarta_Sans } from 'next/font/google';
import { Navbar } from '@/components/ui/navbar';

const chakra = Chakra_Petch({
  subsets: ['latin'],
  weight: ['700'],
  style: ['normal', 'italic'],
  variable: '--font-chakra',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jakarta',
});

export const metadata: Metadata = {
  title: 'Emina Solutions - BPO & Digital Transformation',
  description:
    'Strategic Business Process Outsourcing and digital transformation services. Staff augmentation, creative production, and custom software development.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-background">
      <body
        className={`font-sans antialiased ${chakra.variable} ${jakarta.variable}`}
      >
        {/* Navbar shown on all pages */}
        <Navbar />

        {/* Page content (padding prevents overlap with fixed navbar) */}
        <div className="pt-24">
          {children}
        </div>

        {/* Analytics only in production */}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  );
}