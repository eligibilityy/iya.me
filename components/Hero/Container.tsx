import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

import NextLink from "next/link";

type DecorProps = {
    text: ReactNode;
    icon: ReactNode;
    classes?: string;
}

type LinkProps = {
    href: string;
    text: ReactNode;
    icon: ReactNode;
    classes?: string;
}

// Cute little quote component to put on top of the hero component
export function Quote() {
    const [quote, setQuote] = useState("Loading...");

    // Fetch a random quote from the API
    const fetchQuote = async () => {
        const res = await fetch("https://api.quotable.io/random?minLength=20&maxLength=35");
        const data = await res.json();
        // set quote to the quote and the author
        setQuote(`${data.content} - ${data.author}`);
    };

    // Fetch a quote on component mount
    useEffect(() => {
        fetchQuote();
    }, []);

    return (
        <h1 className="text-lg italic">
            {quote}
        </h1>
    )
}

export function TextItem({ text, icon, classes }: DecorProps) {
    return (
        <li className={`flex items-center space-x-1 underline ${classes}`}>
            <span className="mb-1">{icon}</span>
            <span>{text}</span>
        </li>
    )
}

export function LinkItem({ href, text, icon, classes }: LinkProps) {
    return (
        <NextLink href={href}>
            <li className="flex items-center space-x-1 underline hover:opacity-80">
                <span>{icon}</span>
                <span>{text}</span>
            </li>
        </NextLink>
    )
}

type Props = {
    children: ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className="flex flex-col justify-center min-h-screen space-y-2 px-5 text-white">
            {children}
        </div>
    )
}
