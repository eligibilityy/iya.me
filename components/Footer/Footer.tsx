import Link from 'next/link'
import { Notebook, User } from 'phosphor-react';
import { ReactNode } from 'react';
import { motion } from 'framer-motion'

interface ItemProps {
    icon: ReactNode;
    href: string;
}

export function FooterItem({ icon, href }: ItemProps) {
    return (
            <Link href={href}>
                <motion.span
                        whileHover={{
                            scale: 1.2,
                            backgroundColor: "rgb(23 23 23)",
                            color: 'rgb(249 250 251)',
                            borderColor: 'rgb(23 23 23)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.2, ease: 'backOut' }}
                        className="flex flex-row items-center justify-center p-1 sm:p-2 rounded-md border border-neutral-900/50"
                    >
                    {icon}
                </motion.span>
            </Link>
    )
}

export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-between w-full lg:w-1/2 h-16 border-t border-t-neutral-900/20 px-1 md:px-5">
            <h1 className='text-md font-bold playfair lg:font-[Recoleta]'>
                &copy; 2023 Liya
            </h1>
            <div className="flex flex-row space-x-2">
                <FooterItem icon={<User size={18} />} href="/me"/>
                <FooterItem icon={<Notebook size={18} />} href="/blog"/>
            </div>
        </footer>
    )
}
