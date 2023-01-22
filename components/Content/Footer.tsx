import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='text-md w-full mx-auto py-4 mt-8 text-neutral-900/80 border-t border-t-neutral-900/20 font-bold underline'>
      <div className='w-full flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3 md:justify-between'>
        <div className='flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 w-full md:max-w-max'>
          <Link href='/' passHref>
            Home
          </Link>
          <Link href='/me' passHref>
            Me
          </Link>
          <Link href='/devlog' passHref>
            Devlog
          </Link>
        </div>
        <div className='flex flex-col md:flex-row space-y-3 md:space-x-3 md:space-y-0 w-full md:max-w-max'>
          <Link href='https://github.com/eligibilityy' passHref rel='noreferrer'>
            Github
          </Link>
          <Link href='https://twitter.com/initngbuwan' passHref rel='noreferrer'>
            Twitter
          </Link>
          <Link href='https://youtube.com/@liyaplus' passHref rel='noreferrer'>
            Youtube
          </Link>
          <Link
            href='https://open.spotify.com/user/6s7egqw2p3cpjni6er2mocpsk?si=66352599a6fd45a7'
            passHref
            rel='noreferrer'
          >
            Spotify
          </Link>
        </div>
      </div>
    </footer>
  )
}
