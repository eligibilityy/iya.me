import { Section } from '@/components/Content/Section'
import { IconType } from 'react-icons'
import { motion } from 'framer-motion'
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiSass,
  SiTailwindcss,
  SiReact,
  SiNextdotjs,
  SiSvelte,
  SiNodedotjs,
  SiPython
} from 'react-icons/si'
import { GithubLogo, TwitterLogo, SpotifyLogo, YoutubeLogo } from 'phosphor-react'
import Link from 'next/link'
import Lanyard from '@/components/Discord/Lanyard'
import Footer from '@/components/Content/Footer'
import { ReactNode } from 'react'

interface ItemProps {
  name: string
  icon: IconType
}

interface SocialProps {
  icon: ReactNode
  href: string
}

export function SocialLink({ icon, href }: SocialProps) {
  return (
    // skipqc: JS-0394
    <Link href={href} className='mr-2 last-of-type:mr-0'>
      <motion.span
        whileHover={{
          scale: 1.1,
          backgroundColor: 'rgb(23 23 23)',
          color: 'rgb(249 250 251)'
        }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.2, ease: 'backOut' }}
        className='flex flex-row rounded-md p-1'
      >
        {icon}
      </motion.span>
    </Link>
  )
}

export function ProgramItem({ name, icon }: ItemProps) {
  return (
    <li className='flex items-center space-x-2 rounded-md px-4'>
      <span>{icon({ className: 'h-5 w-5' })}</span>
      <span className='font-bold'>{name}</span>
    </li>
  )
}

export default function Info() {
  return (
    <>
      <div className='w-full space-y-3 mt-10'>
        <div className='relative flex'>
          <div>
            <p className='text-orange-400'>About Me</p>
            <h1 className='text-4xl md:text-6xl font-bold font-[Recoleta]'>Hello, I&apos;m Eli.</h1>
            <div className='flex items-center text-2xl md:text-3xl max-w-max'>
              <span className='sr-only'>My social links</span>
              <SocialLink href='https://github.com/eligibilityy' icon={<GithubLogo />} />
              <SocialLink href='https://twitter.com/initngbuwan' icon={<TwitterLogo />} />
              <SocialLink href='https:/youtube.com/@liyaplus' icon={<YoutubeLogo />} />
              <SocialLink
                href='https://open.spotify.com/user/6s7egqw2p3cpjni6er2mocpsk?si=66352599a6fd45a7'
                icon={<SpotifyLogo />}
              />
            </div>
          </div>
        </div>
        <Section title='1 - Intro'>
          <p className='text-md lg:text-xl'>
            I&apos;m an aspiring 15 year old front-end developer. I&apos;m currently learning React (Next.js), Svelte,
            and Typescript, I&apos;m also learning Python on the side for school projects. I really enjoy exploring the
            web and learning new things, I&apos;m a fan of open source and I&apos;m always looking to improve to be to
            contribute.
          </p>
          <p className='text-md lg:text-xl'>
            I enjoy certain games like Brawlhalla, OMORI, Minecraft, rhythm games like Quaver, osu!, FNF, etc. I&apos;ve
            been watching a lot of Youtube lately, especially OfflineTV; I think I found my love for their content
            again.
          </p>
          <Lanyard />
        </Section>
        <Section title='2 - Languages & Tech'>
          <p className='text-md lg:text-xl'>
            As of now, I&apos;m putting most focus into learning Typescript but I still do some Python from time to
            time. I&apos;m taking a bunch of free online courses, and I&apos;m trying to learn as much as I can.
          </p>
          <div className='grid grid-cols-2 sm:grid-cols-4 gap-2'>
            <ProgramItem icon={SiPython} name='Python' />
            <ProgramItem icon={SiTypescript} name='Typescript' />
            <ProgramItem icon={SiJavascript} name='Javascript' />
            <ProgramItem icon={SiHtml5} name='HTML' />
            <ProgramItem icon={SiCss3} name='CSS' />
            <ProgramItem icon={SiSass} name='SCSS' />
            <ProgramItem icon={SiTailwindcss} name='Tailwind' />
            <ProgramItem icon={SiReact} name='React.js' />
            <ProgramItem icon={SiNextdotjs} name='Next.js' />
            <ProgramItem icon={SiSvelte} name='Svelte' />
            <ProgramItem icon={SiNodedotjs} name='Node.js' />
          </div>
        </Section>
      </div>
      <Footer />
    </>
  )
}
