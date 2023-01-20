import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [animate, setAnimate] = useState("default");

    useEffect(() => {
        const mouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        }
        const handleMouseDown = () => setAnimate("small")
        const handleMouseUp = () => setAnimate("default")

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mousedown", handleMouseDown);
        window.addEventListener("mouseup", handleMouseUp);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mousedown", handleMouseDown);
            window.removeEventListener("mouseup", handleMouseUp);
        };
    }, []);

    const variants = {
        default: {
            x: mousePosition.x - 6,
            y: mousePosition.y - 6,
        },
        small: {
            x: mousePosition.x - 7,
            y: mousePosition.y - 7,
            scale: 1.4,
        }
    }

    return (
        <motion.div
            className="bg-orange-400 h-3 w-3 rounded-full fixed top-0 left-0 pointer-events-none"
            variants={variants}
            animate={animate}
            transition={{ ease: 'backOut', duration: 0.2 }}
        />
    )
}
