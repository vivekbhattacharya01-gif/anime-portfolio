import { useState, useEffect } from 'react'

const MOBILE_BREAKPOINT = 768

/**
 * Hook to detect if the user's device is mobile
 * Returns false during SSR to prevent hydration mismatch
 * Updates to actual mobile status on client-side
 */
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(undefined)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    // Mark that we're on the client now
    setIsClient(true)

    // Check initial viewport width
    const checkMobileWidth = () => {
      return window.innerWidth < MOBILE_BREAKPOINT
    }

    // Setup media query listener for responsive changes
    const mediaQuery = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)

    const handleMediaChange = () => {
      setIsMobile(checkMobileWidth())
    }

    // Listen for viewport changes
    mediaQuery.addEventListener('change', handleMediaChange)
    
    // Set initial mobile status
    setIsMobile(checkMobileWidth())

    // Cleanup
    return () => mediaQuery.removeEventListener('change', handleMediaChange)
  }, [])

  // Return false on server, actual value on client
  if (!isClient) return false

  return !!isMobile
}
