import 'nprogress/nprogress.css'
import '@/styles/styles.css'
import '@/public/fonts/css/fonts.css'

import NProgress from 'nprogress'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter, Router } from 'next/router'
import Cursor from '@/components/Decor/Cursor'
import Navbar from '@/components/Navbar/Navbar'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
    <AnimatePresence mode='wait' initial={false}>
      <motion.div
        key={router.route}
        initial='pageInitial'
        animate='pageAnimate'
        exit='pageExit'
        transition={{ duration: 0.75, ease: 'easeOut' }}
        variants={{
          pageInitial: {
            opacity: 0,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          },
          pageAnimate: {
            opacity: 1,
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)'
          },
          pageExit: {
            opacity: 1,
            clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)'
          }
        }}
        className='bg-gray-50 flex flex-col w-full min-h-screen items-center mx-auto px-8 lg:px-20'
      >
        <Navbar />
        <main className='flex flex-col my-auto mx-auto lg:items-center pb-12'>
          <Component {...pageProps} />
        </main>
      </motion.div>
      <Cursor />
    </AnimatePresence>
  )
}
