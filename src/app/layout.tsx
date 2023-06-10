import Header from '@/components/Header'
import './globals.css'
import { Inter } from 'next/font/google'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Portafolio',
  description: 'Un demo sencillo de un portafolio',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header title='Header' description='demo header' />
        <>
          {children}
        </>
        <Footer />
      </body>
    </html>
  )
}
