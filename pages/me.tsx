import Container from "@/components/Content/Container";
import { Section, ReversedSection } from "@/components/Content/Section";
import Link from "next/link";
import { ReactNode } from "react";


export default function Info() {
    return (
        <Container>
            <div className="flex flex-col lg:w-3/4 p-3">
                <div className="flex flex-col justify-center">
                    <p className="text-orange-400">About Me</p>
                    <h1 className="text-4xl md:text-6xl font-bold playfair lg:font-[Recoleta]">
                        Hello, I&apos;m eli
                    </h1>
                </div>
                <Section title="1 - Intro">
                    <p className="text-md lg:text-xl">
                        I&apos;m an aspiring 15 year old front-end developer. I&apos;m currently learning React (Next.js), Svelte, and Typescript, I&apos;m also learning Python on the side for school projects. I really enjoy exploring the web and learning new things, I&apos;m a fan of open source and I&apos;m always looking to improve to be to contribute.
                    </p>
                    <p className="text-md lg:text-xl">
                        I enjoy certain games like Brawlhalla, OMORI, Minecraft, rhythm games like Quaver, osu!, FNF, etc. I&apos;ve been watching a lot of Youtube lately, especially OfflineTV; I think I found my love for their content again.
                    </p>
                </Section>
                {/* <ReversedSection title="2 - Tech">
                    <p className="text-md lg:text-xl">
                        When it comes to my stack, I mostly use Next.js and Typescript. It&apos; what I&apos; most comfortable with, but I still have a lot to learn.
                    </p>
                    <p className="text-md lg:text-xl">
                        So far though, all the stuff I&apos;ve messed around with is listed: {' '}<Link href="https://nextjs.org" className="underline underline-offset-2 hover:no-underline">
                            Next.js
                        </Link>{''}, {' '}<Link href="https://reactjs.org" className="underline underline-offset-2 hover:no-underline">React</Link>
                    </p>
                </ReversedSection> */}
            </div>
            <Link href="/" className="text-lg md:text-4xl underline underline-offset-2 hover:no-underline">
                Go back home
            </Link>
        </Container>
    )
}