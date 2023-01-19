import Link from "next/link";

export default function Info() {
    return (
        <div className="flex flex-col items-center text-center justify-center min-h-screen space-y-5">
            <h1 className="text-2xl md:text-6xl font-bold">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque corporis dolores autem unde atque, numquam consectetur voluptate dicta ducimus incidunt. Rerum consequatur reprehenderit nam ratione vero amet consectetur deleniti voluptate!
            </h1>
            <Link href="/" className="text-lg md:text-4xl font-bold underline underline-offset-2 hover:no-underline">
                Go back @ home
            </Link>
        </div>
    )
}