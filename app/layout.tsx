import './globals.css';
import type { Metadata } from 'next';
import { SiteShell } from '@/components/SiteShell';
import { church } from '@/components/data';

export const metadata: Metadata = {
  metadataBase: new URL('https://nrpc.online'),
  title: {
    default: `${church.name} | Banora Point Church`,
    template: `%s | ${church.shortName}`
  },
  description:
    'A welcoming Pentecostal church in Banora Point, NSW. Join us Sundays at 10am and connect with our church family.',
  openGraph: {
    title: church.name,
    description:
      'A welcoming Pentecostal church in Banora Point, NSW. Plan your visit and find service times, beliefs and contact details.',
    url: 'https://nrpc.online',
    siteName: church.name,
    type: 'website'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Church',
    name: church.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: church.addressLine1,
      addressLocality: church.suburb,
      addressRegion: church.state,
      postalCode: church.postcode,
      addressCountry: 'AU'
    },
    event: [
      {
        '@type': 'Event',
        name: 'Sunday Service',
        startDate: '2026-03-29T10:00:00+11:00',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
        location: {
          '@type': 'Place',
          name: 'Banora Point Community Centre',
          address: `${church.addressLine1}, ${church.suburb} ${church.state} ${church.postcode}`
        }
      }
    ]
  };

  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
