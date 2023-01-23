import Link from 'next/link'

export default function Info() {
  return (
    <div className='w-full'>
      <span className='text-lg font-bold text-orange-400'>4 0 4</span>
      <h1 className='text-2xl md:text-6xl font-bold font-[Recoleta]'>Page not found</h1>
      <p className='text-md lg:text-xl'>
        Lost?{' '}
        <Link href='/'>
          <span className='underline hover:no-underline'>Home</span>
        </Link>
        .
      </p>
    </div>
  )
}
