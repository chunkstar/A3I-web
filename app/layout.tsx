import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AgentAnchor - The AI Governance Operating System',
  description: 'Building trust between humans and AI agents through transparent governance, earned autonomy, and immutable accountability.',
  keywords: ['AI governance', 'AI agents', 'trust score', 'AI accountability', 'AI transparency', 'agent training'],
  authors: [{ name: 'AgentAnchor Team' }],
  openGraph: {
    title: 'AgentAnchor - The AI Governance Operating System',
    description: 'Building trust between humans and AI agents through transparent governance, earned autonomy, and immutable accountability.',
    url: 'https://agentanchorai.com',
    siteName: 'AgentAnchor',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AgentAnchor - The AI Governance Operating System',
    description: 'Building trust between humans and AI agents.',
    creator: '@agentanchor',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-950 text-white antialiased`}>
        {children}
      </body>
    </html>
  )
}
