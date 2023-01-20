import { useEffect, useState, ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
    children: ReactNode;
}

export default function Container({ children }: Props) {
    return (
        <div className="bg-gray-50 flex flex-col items-center justify-center min-h-screen w-full space-y-4 px-4 md:px-8 sm:px-20 text-neutral-900">
            {children}
        </div>
    )
}
