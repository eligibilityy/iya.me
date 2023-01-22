import { HouseSimple, NotePencil, User } from 'phosphor-react'
import { ReactNode } from 'react'
import NextLink from 'next/link'
import { motion } from 'framer-motion'

interface ItemProps {
  icon: ReactNode
  href: string
}

export function NavItem({ icon, href }: ItemProps) {
  return (
    <NextLink href={href}>
      <motion.span
        whileHover={{
          scale: 1.2,
          backgroundColor: 'rgb(23 23 23)',
          color: 'rgb(249 250 251)'
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2, ease: 'backOut' }}
        className='flex flex-row rounded-md p-2'
      >
        {icon}
      </motion.span>
    </NextLink>
  )
}

export default function Navbar() {
  return (
    <div className='sticky top-5 flex items-center justify-center w-full z-50'>
      <nav className='rounded-md bg-gray-200/50 backdrop-blur-xl p-3'>
        <div className='flex flex-row items-center justify-center space-x-3'>
          <NavItem href='/' icon={<HouseSimple size={24} />} />
          <NavItem href='/me' icon={<User size={24} />} />
          <NavItem href='/devlog' icon={<NotePencil size={24} />} />
        </div>
      </nav>
    </div>
  )
}
