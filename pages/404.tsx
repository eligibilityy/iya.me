import Container from "@/components/Content/Container";
import Link from "next/link";

export default function Info() {
    return (
        <Container>
            <div className="flex flex-col">
                <span className="flex text-lg font-bold justify-end">4 0 4</span>
                <h1 className="text-2xl md:text-6xl font-bold font-sans lg:font-[Recoleta]">
                    Page not found
                </h1>
                <p>
                    ermm
                </p>
            </div>
            <Link href="/" className="text-lg md:text-4xl underline underline-offset-2 hover:no-underline">
                Go back home
            </Link>
        </Container>
    )
}