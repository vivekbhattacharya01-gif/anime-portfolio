'use client'

import { ThemeProvider as NextThemesProvider } from 'next-themes'

/**
 * Theme provider wrapper for the application
 * Enables dark/light mode switching and persistent theme preference
 */
export function ThemeProvider({ children, ...props }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
