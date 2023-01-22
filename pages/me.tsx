import { Section, ReversedSection } from "@/components/Content/Section";
import Link from "next/link";
import { ReactNode } from "react";
import { IconType } from "react-icons";
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
} from "react-icons/si";

interface Props {
    name: string;
    icon: IconType;
}

export function ProgramItem({ name, icon }: Props) {
    return (
        <li className="flex items-center space-x-2 rounded-md px-4">
            <span>{icon({ className: 'h-5 w-5' })}</span>
            <span className="font-bold">{name}</span>
        </li>
    )
}

export default function Info() {
    return (
        <>
            <div className="flex flex-col lg:w-3/4 gap-2">
                <div className="flex flex-col justify-center">
                    <p className="text-orange-400">About Me</p>
                    <h1 className="text-4xl md:text-6xl font-bold font-[Recoleta]">
                        Hello, I&apos;m Eli.
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
                <ReversedSection title="2 - Languages & Tech">
                    <p className="text-md lg:text-xl">
                        As of now, I am putting most focus into learning Typescript but I do know some Python. I am taking a bunch of free online courses, and I&apos;m trying to learn as much as I can.
                    </p>
                    <p className="text-2xl flex justify-center font-bold font-[Recoleta]">
                        Stuff Ive messed around with:
                    </p>
                    <div className="flex items-center justify-center">
                        <div className="grid grid-cols-2 sm:grid-cols-4 auto-cols-auto gap-4 w-3/4">
                            <ProgramItem icon={SiPython} name="Python" />
                            <ProgramItem icon={SiTypescript} name="Typescript" />
                            <ProgramItem icon={SiJavascript} name="Javascript" />
                            <ProgramItem icon={SiHtml5} name="HTML" />
                            <ProgramItem icon={SiCss3} name="CSS" />
                            <ProgramItem icon={SiSass} name="Sass" />
                            <ProgramItem icon={SiTailwindcss} name="TailwindCSS" />
                            <ProgramItem icon={SiReact} name="React.js" />
                            <ProgramItem icon={SiNextdotjs} name="Next.js" />
                            <ProgramItem icon={SiSvelte} name="Svelte" />
                            <ProgramItem icon={SiNodedotjs} name="Node.js" />
                        </div>
                    </div>
                </ReversedSection>
            </div>
        </>
    )
}