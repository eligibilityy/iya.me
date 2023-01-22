import Link from 'next/link'

export default function Info() {
  return (
    <>
      <div>
        <span className='text-lg font-bold text-orange-400'>4 0 4</span>
        <h1 className='text-2xl md:text-6xl font-bold font-[Recoleta]'>Page not found</h1>
        <p className='text-md lg:text-xl'>
          Lost?{' '}
          <Link href='/' className='underline hover:no-underline'>
            Home
          </Link>
          .
        </p>
      </div>
    </>
  )
}
