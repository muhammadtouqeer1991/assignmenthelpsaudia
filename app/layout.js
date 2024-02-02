import { Montserrat } from 'next/font/google'
// import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from '@/components/Topbar'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'
import ChatCode from '@/components/ChatCode'
import FixedButton from '@/components/FixedButton'

const inter = Montserrat({ subsets: ['latin'] })

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Topbar />
        <Navigation />
        {children}
        <Footer />
        <ChatCode />
        <FixedButton />
      </body>
    </html>
  )
}
