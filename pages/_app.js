import '../styles/globals.scss'
import { Inter } from '@next/font/google'
import Navbar from './components/navbar'
import { Analytics } from '@vercel/analytics/react';
import { useEffect } from 'react';
import AOS from "aos";

import 'aos/dist/aos.css';

const inter = Inter({ subsets: ['latin']})
export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      offset: 100,
    });
  }, []);
  return (
    
    <main className={inter.className}>
      
      <Navbar/>
        <Component {...pageProps} />
        <Analytics/>
    </main>
  )
}
