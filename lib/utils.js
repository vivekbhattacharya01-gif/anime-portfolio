import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/**
 * Merge Tailwind CSS classes intelligently
 * - Combines classes using clsx
 * - Handles conflicting Tailwind classes with twMerge
 * Useful for conditional styling while preventing CSS conflicts
 */
export function cn(...inputs) {
  return twMerge(clsx(inputs))
}
