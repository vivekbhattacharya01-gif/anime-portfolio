import type { Metadata, Viewport } from 'next'
import { Inter, Bebas_Neue, Share_Tech_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const bebasNeue = Bebas_Neue({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-bebas-neue'
})

const shareTechMono = Share_Tech_Mono({ 
  weight: '400',
  subsets: ["latin"],
  variable: '--font-share-tech-mono'
})

export const metadata: Metadata = {
  title: 'Vivek Bhattacharya | MERN Stack Developer',
  description: 'Building modern, responsive, and scalable web applications with clean UI and smooth user experiences. Full-stack MERN developer portfolio.',
  keywords: ['MERN Stack', 'Full Stack Developer', 'React', 'Node.js', 'Web Development', 'Portfolio'],
  authors: [{ name: 'Vivek Bhattacharya' }],
  openGraph: {
    title: 'Vivek Bhattacharya | MERN Stack Developer',
    description: 'Building modern, responsive, and scalable web applications with clean UI and smooth user experiences.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#FAFAF5' },
    { media: '(prefers-color-scheme: dark)', color: '#0A0A1A' },
  ],
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${bebasNeue.variable} ${shareTechMono.variable} font-sans antialiased noise-overlay scan-lines theme-transition`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange={false}
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
