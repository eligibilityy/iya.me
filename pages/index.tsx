import Repos from "@/components/Github/Repos";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <p className="text-md md:text-xl">
            Hello! You can call me <span className="underline underline-offset-2 text-orange-400">Elijah</span> or <span className="underline underline-offset-2 text-orange-400">Liya</span>. I&apos;m a
          </p>
          <h1 className="text-5xl md:text-7xl font-bold font-[Recoleta]">
            Front-end Developer<span className="text-xs md:text-sm font-sans">(somewhat)</span>
          </h1>
        </div>
        <Repos username="eligibilityy" />
      </div>
    </>
  )
}
