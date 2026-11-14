import React from 'react';
import type { Metadata } from 'next';
import '@/styles/bootstrap.css';
import '@/styles/style.css';
import '@/styles/responsive.css';

export const metadata: Metadata = {
  title: 'Brighton - A Perfect Learning Center For Your Kids',
  description: 'Brighton Learning Center - High quality education and care for your children.',
  icons: {
    icon: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Lato:400,700|Poppins:400,700|Roboto:400,700&display=swap"
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
