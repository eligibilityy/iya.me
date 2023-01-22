import { House, Notebook, User } from "phosphor-react";
import { ReactNode } from "react";
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ItemProps {
    icon: ReactNode;
    href: string;
}

export function NavItem({ icon, href }: ItemProps) {
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

export default function Navbar() {
    return (
        <div className="sticky top-5 flex items-center justify-center h-14 w-full">
            <nav className="w-44 lg:w-48 px-5 py-2 rounded-md bg-gray-200/50 backdrop-blur-md">
                <div className="flex flex-row items-center justify-center space-x-4">
                    <NavItem href="/" icon={<House size={24} />} />
                    <NavItem href="/blog" icon={<Notebook size={24} />} />
                    <NavItem href="/me" icon={<User size={24} />} />
                </div>
            </nav>
        </div>
    );
}
