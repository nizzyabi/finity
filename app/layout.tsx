import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ClerkProvider } from '@clerk/nextjs'

import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { CrispProvider } from '@/components/crisp-provider'
import './globals.css'
import logoIcon from '../public/yo.png' 
import { ImageLoader } from 'next/image'


const font = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'FinityAI',
  description: 'AI Platform',
}

const imageLoader: ImageLoader = ({ src }) => {
  return src;
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <CrispProvider />
        <body className={font.className}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}