import { Montserrat } from 'next/font/google'
import Topbar from '@/components/Topbar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Topbar />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
