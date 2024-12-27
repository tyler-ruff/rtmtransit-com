
import type { Metadata } from 'next';
import { Hind_Vadodara, DM_Serif_Display } from 'next/font/google';

import Header from '@/components/header';
import Footer from '@/components/footer';

import { config } from '@/config/app';
import { Providers } from './providers';

import './globals.css';

const hind = Hind_Vadodara({
  variable: '--font-hind', 
  subsets: ["latin"], 
  weight: '400', 
  display: 'swap' 
});

const dm = DM_Serif_Display({
  variable: '--font-dm', 
  subsets: ["latin"], 
  weight: '400', 
  display: 'swap'
});

export const metadata: Metadata = {
  title: {
    template: `%s | ${config.name}`,
    default: config.name, 
  },
  applicationName: config.name,
  description: config.description,
  keywords: ['rtm', 'transit', 'shipping', 'trucking', 'company'],
  publisher: 'Blazed Labs LLC',
  icons: {
    icon: [
      { url: '/icons/favicon.png', sizes: '32x32', type: 'image/png'},
      { url: '/icons/favicon-96x96.png', sizes: '96x96', type: 'image/png'},
      { url: '/icons/favicon.svg', type: 'image/svg+xml'}
    ],
    shortcut: '/icons/favicon.ico',
    apple: [
      { url: '/icons/apple-touch-icon.png', type: 'image/png' },
    ],
    other: [
      {
        rel: "shortcut icon",
        url: "/icons/favicon.ico"
      },
      {
        type: "text/plain",
        rel: "author",
        url: "https://blazedlabs.com/humans"
      }
    ]
  },
  manifest: '/manifest.webmanifest',
};

const siteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  url: "https://rtmtransit.com",
  name: config.name,
  description: config.description,
  license: "https://blazedlabs.com/license"
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${dm.variable} ${hind.variable}`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteSchema) }}
        />
        <Providers>
          <section id="blz-app">
            <Header />
            <main role="main" className="bg-white dark:bg-gray-900">
              {children}
            </main>
            <Footer />
          </section>
        </Providers>
      </body>
    </html>
  )
}
