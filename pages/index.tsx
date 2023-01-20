import Container from "@/components/Content/Container";
import Link from "next/link";

import { motion } from "framer-motion";
import LinkItem from "@/components/Decor/LinkItem";
import Repos from "@/components/Github/Repos";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Container>
        <div>
          <p className="text-lg md:text-xl">
            Hello! You can call me <span className="underline underline-offset-2 text-orange-400">Elijah</span> or <span className="underline underline-offset-2 text-orange-400">Liya</span>. I&apos;m a
          </p>
          <h1 className="text-6xl md:text-7xl font-[Recoleta]">
            Front-end Developer<span className="text-xs md:text-sm font-sans">(somewhat)</span>
          </h1>
        </div>
        <Repos username="eligibilityy" />
        <Footer />
      </Container>
      {/* <Container>
        <div className="flex flex-col space-y-2">
          <h1 className="text-4xl md:text-5xl font-[Recoleta]">
            <span className="text-orange-400">📝</span> Blog
          </h1>
          <p className="text-lg md:text-xl">
            I&apos;m currently working on a blog, but it&apos;s not ready yet. I&apos;ll update this page when it&apos;s ready.
          </p>
          <LinkItem href="/blog">Go to blog</LinkItem>
        </div>
      </Container> */}
    </>
  )
}
