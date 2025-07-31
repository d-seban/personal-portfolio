import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dawn Seban - Portfolio',
  description: 'Personal portfolio showcasing projects, photos, and writing',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-white dark:bg-[#0A0A0A] transition-colors">
        {children}
      </body>
    </html>
  )
} 