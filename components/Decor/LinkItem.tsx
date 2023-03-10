import { motion } from 'framer-motion'
import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkProps {
  children: ReactNode
  href: string
}

export default function LinkItem({ children, href }: LinkProps) {
  return (
    <Link href={href}>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.7 }}
        transition={{ duration: 0.2, ease: 'backOut' }}
        className='text-lg md:text-xl font-semibold'
      >
        {children}
      </motion.button>
    </Link>
  )
}
