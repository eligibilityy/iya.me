import '@/styles/styles.css'
import type { AppProps } from 'next/app'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()
  return (
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          transition={{ duration: 0.75, ease: [0.43, 0.13, 0.23, 0.96] }}
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
            },
          }}
          className="overflow-hidden px-20 space-y-5"
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
  )
}
