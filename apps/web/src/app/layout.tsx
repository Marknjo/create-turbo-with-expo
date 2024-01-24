import type { Metadata, Viewport } from 'next'
import { GeistMono } from 'geist/font/mono'
import { GeistSans } from 'geist/font/sans'

import { cn } from '@mj/ui-web'
import { ThemeProvider, ThemeToggle } from '@mj/ui-web/theme'
import { Toaster } from '@mj/ui-web/toast'

import { env } from '~/env'

import '@mj/tailwind/css'

export const metadata: Metadata = {
  metadataBase: new URL(
    env.VERCEL_ENV === 'production'
      ? 'https://marknjoroge.vercel.app'
      : 'http://localhost:3005',
  ),
  title: 'Turbo with Expo & NextJs',
  description: 'Simple monorepo with shared backend for web & mobile apps',
  openGraph: {
    title: 'Turbo with Expo & NextJs',
    description: 'Simple monorepo with shared backend for web & mobile apps',
    url: 'https://marknjoroge.vercel.app',
    siteName: 'Mark Njoroge',
  },
  // twitter: {
  //   card: 'summary_large_image',
  //   site: '@marknjo',
  //   creator: '@marknjo',
  // },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'min-h-screen bg-background font-sans text-foreground antialiased',
          GeistSans.variable,
          GeistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {props.children}
          <div className="absolute bottom-4 right-4">
            <ThemeToggle />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
