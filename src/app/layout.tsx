import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Youssef Horo – DevOps Engineer AI Cloud',
  description: 'Resume and profile of Youssef Horo, DevOps Engineer with focus on Cloud Native, DevOps & AI.',
  icons: {
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
    shortcut: '/icon.svg',
    apple: '/apple-icon.svg',
  },
  manifest: '/site.webmanifest',
  metadataBase: new URL('https://yhoro.de'),
  openGraph: {
    title: 'Youssef Horo – DevOps Engineer AI Cloud',
    description: 'Resume and profile of Youssef Horo, DevOps Engineer with focus on Cloud Native, DevOps & AI.',
    url: 'https://yhoro.de',
    siteName: 'Youssef Horo',
    images: [
      {
        url: '/icon.svg',
        width: 512,
        height: 512,
        alt: 'Youssef Horo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans bg-slate-50 text-gray-900">{children}</body>
    </html>
  )
}
