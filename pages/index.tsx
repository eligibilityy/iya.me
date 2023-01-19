import Container, { TextItem, LinkItem } from "@/components/Hero/Container";
import Link from "next/link";

import { motion } from "framer-motion";

import { Desktop } from "phosphor-react";

export default function Home() {
  return (
    <>
      <Container>
        <motion.div>
          <p className="text-xl">
            Liya<span className="text-orange-400 spin">+</span>
          </p>
          <h1 className="text-2xl md:text-7xl font-[Recoleta]">
              Front-end Developer
          </h1>
        </motion.div>
        <p className="text-2xl flex items-center justify-end">
          I&apos;m an aspiring&nbsp;<span className="font-bold"><TextItem text="front-end" icon={<Desktop size={32} />} classes="text-orange-400" /></span>&nbsp;developer from&nbsp;<span className="font-bold text-orange-400">The Philippines</span>.
        </p>
        <Link href="/test">
          Hey
        </Link>
      </Container>
    
    </>
  )
}
