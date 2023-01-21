import Container from "@/components/Content/Container";
import Link from "next/link";

export default function Info() {
    return (
        <Container>
            <h1 className="text-2xl md:text-6xl font-bold playfair lg:font-[Recoleta]">
                Nothing here yet... 🤷‍♂️
            </h1>
            <Link href="/" className="text-lg md:text-4xl underline underline-offset-2 hover:no-underline">
                Go back home
            </Link>
        </Container>
    )
}