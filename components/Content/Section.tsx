import { ReactNode } from "react";

interface SectionProps {
    title: string;
    children: ReactNode;
}

export function Section({ title, children }: SectionProps) {
    return (
        <div className="space-y-3 my-5">
            <h3 className="text-2xl lg:text-3xl font-bold playfair lg:font-[Recoleta] flex justify-start">{title}</h3>
            <div className="flex flex-col space-y-3">
                {children}
            </div>
        </div>
    )
}

export function ReversedSection({ title, children }: SectionProps) {
    return (
        <div className="space-y-3 my-5">
            <h3 className="text-2xl lg:text-3xl font-bold playfair lg:font-[Recoleta] text-right flex justify-end">{title}</h3>
            <div className="flex flex-col text-right space-y-3">
                {children}
            </div>
        </div>
    )
}

