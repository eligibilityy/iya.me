import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="flex flex-row items-center justify-center w-1/2 h-12 border-t border-t-neutral-900/20">
            <Link href="/" className='text-lg font-bold font-[Recoleta]'>
                Liya
            </Link>
        </footer>
    )
}
