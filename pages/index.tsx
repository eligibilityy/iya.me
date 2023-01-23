import Repos from '@/components/Github/Repos'

export default function Home() {
  return (
    <>
      <div>
        <p className='text-sm md:text-xl text-orange-400'>Hello! You can call me Elijah or Liya. I&apos;m a</p>
        <h1 className='text-5xl md:text-7xl font-bold font-[Recoleta]'>
          Front-end Developer<span className='text-xs md:text-sm font-sans'>(somewhat)</span>
        </h1>
      </div>
      <Repos username='eligibilityy' />
    </>
  )
}
