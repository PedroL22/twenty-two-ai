'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'
import type { ComponentProps } from 'react'

export const ThemeProvider = ({ children, ...props }: ComponentProps<typeof NextThemesProvider>) => {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
