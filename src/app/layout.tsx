import { type ReactNode } from 'react'

import { ThemeProvider } from '@/01-app/theme/lib/ThemeProvider'

export default function RootLayout({
  children
}: Readonly<{
  children: ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
