import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/Components/navbar'
const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={"bg-[#ffe7e7]"}>
        <Navbar/>
        {children}
        </body>
    </html>
  )
}