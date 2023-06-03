import SideBar from '@/components/sidebar'
import './globals.css'
import { Figtree } from 'next/font/google'

const font = Figtree({ subsets: ['latin'] })

export const metadata = {
  title: 'Lyrically',
  description: 'Digital music streaming service!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <SideBar>
        {children}
        </SideBar>
      </body>
    </html>
  )
}
