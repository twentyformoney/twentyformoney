import '../styles/globals.scss'
import { Inter } from '@next/font/google'
import Navbar from './components/navbar'

const inter = Inter({ subsets: ['latin']})
export default function App({ Component, pageProps }) {
  return (
    <main className={inter.className}>
      <Navbar/>
        <Component {...pageProps} />
    </main>
  )
}
