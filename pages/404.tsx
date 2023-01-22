import Link from "next/link";

export default function Info() {
    return (
        <>
            <div className="flex flex-col justify-center">
                <span className="text-lg font-bold text-orange-400">4 0 4</span>
                <h1 className="text-2xl md:text-6xl font-bold font-[Recoleta]">
                    Page not found
                </h1>
                <p>
                    Either you&apos;re lost or I&apos;m lost. Either way, you can go back <Link href="/" className="underline hover:no-underline">Home</Link>.
                </p>
            </div>
        </>
    )
}