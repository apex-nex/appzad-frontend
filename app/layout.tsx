import { ReactNode } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AppZad - Web Development Agency | Travel, Health & Hotel Solutions',
  description: 'AppZad is a professional web development agency specializing in creating cutting-edge websites and web applications for Travel, Health, and Hotel industries.',
  keywords: ['web development', 'web agency', 'travel websites', 'healthcare platforms', 'hotel management systems', 'React', 'Next.js', 'TypeScript'],
  authors: [{ name: 'AppZad' }],
  creator: 'AppZad',
  publisher: 'AppZad',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://appzad.com',
    title: 'AppZad - Web Development Agency',
    description: 'Professional web development for Travel, Health, and Hotel industries',
    siteName: 'AppZad',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AppZad - Web Development Agency',
    description: 'Professional web development for Travel, Health, and Hotel industries',
  },
};

type Props = {
  children: ReactNode;
};

export default function RootLayout({ children }: Props) {
  return children;
}