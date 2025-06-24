import type { ReactNode } from 'react';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['cyrillic'] });

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="ru" className={inter.className}>
    <head />
    <body>{children}</body>
  </html>
);

export default RootLayout;
