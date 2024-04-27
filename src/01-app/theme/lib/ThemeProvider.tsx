'use client'

import { ChakraProvider } from '@chakra-ui/react'
import { type ReactNode } from 'react'

import { theme } from '@/06-shared/lib/theme'

export function ThemeProvider({ children }: { children: ReactNode }) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>
}
