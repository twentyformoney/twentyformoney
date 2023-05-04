import '../styles/globals.scss'
import { Inter } from '@next/font/google'
import Navbar from './components/navbar'
import { Analytics } from '@vercel/analytics/react';
const inter = Inter({ subsets: ['latin']})
export default function App({ Component, pageProps }) {
  return (
    
    <main className={inter.className}>
      
      <Navbar/>
        <Component {...pageProps} />
        <Analytics/>
    </main>
  )
}
