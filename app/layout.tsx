import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const italianPlate = localFont({
  src: [
    {
      path: '../public/fonts/Italian Plate No2 Expanded.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Italian Plate No2 Expanded Italic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../public/fonts/Italian Plate No2 Expanded Medium.ttf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../public/fonts/Italian Plate No2 Expanded Medium Italic.ttf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../public/fonts/Italian Plate No2 Expanded Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../public/fonts/Italian Plate No2 Expanded Bold Italic.ttf',
      weight: '700',
      style: 'italic',
    },
  ],
  variable: '--font-italian-plate',
});

export const metadata: Metadata = {
  title: 'Zeely Sidebar',
  description: 'Zeely Sidebar',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${italianPlate.variable} antialiased`}>{children}</body>
    </html>
  );
}
