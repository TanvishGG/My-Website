"use client";
import { motion, AnimatePresence } from "framer-motion";
import ShinyText from "./ui/ShinyText";
import GlassSurface from "./ui/GlassSurface";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navLinks: { name: string; href: string }[] = [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Contact", href: "/contact" },
];

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 10);
        onScroll();
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <div className="sticky top-0 z-50 w-full flex justify-center pt-3 pb-1 px-4 md:px-6">
            <motion.div
                className="w-full max-w-5xl"
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
                <GlassSurface
                    width="100%"
                    height="auto"
                    borderRadius={20}
                    className={`transition-all duration-300 ${scrolled
                            ? "border-white/10 shadow-lg shadow-black/20"
                            : "border-white/[0.08]"
                        }`}
                    brightness={scrolled ? 30 : 50}
                    opacity={scrolled ? 0.8 : 0.93}
                    displace={0.1}
                >
                    <div className="h-14 px-5 md:px-6 w-full flex flex-row items-center justify-between">
                        <Link href="/" className="cursor-target">
                            <ShinyText className="font-bold text-lg md:text-xl cursor-target" text="Tanvish Reddy" />
                        </Link>

                        <nav className="hidden md:flex items-center gap-0.5 text-sm font-medium">
                            {navLinks.map((link) => {
                                const isActive = pathname === link.href;
                                return (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className={`cursor-target px-4 py-2 rounded-xl relative transition-colors duration-200 ${isActive
                                                ? "text-white bg-white/10"
                                                : "text-zinc-400 hover:text-teal-400 hover:bg-teal-400/20"
                                            }`}
                                    >
                                        {link.name}
                                    </Link>
                                );
                            })}
                        </nav>

                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`md:hidden relative w-10 h-10 focus:outline-none z-50 cursor-target flex items-center justify-center rounded-xl transition-colors ${isOpen ? 'bg-teal-400/20' : 'hover:bg-white/10'}`}
                            aria-label="Toggle mobile menu"
                        >
                            <motion.span
                                animate={isOpen ? { rotate: 45, y: 0 } : { rotate: 0, y: -5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="absolute block w-4.5 h-[2px] bg-white rounded-full origin-center"
                            />
                            <motion.span
                                animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="absolute block w-4.5 h-[2px] bg-white rounded-full"
                            />
                            <motion.span
                                animate={isOpen ? { rotate: -45, y: 0 } : { rotate: 0, y: 5 }}
                                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                className="absolute block w-4.5 h-[2px] bg-white rounded-full origin-center"
                            />
                        </button>
                    </div>

                </GlassSurface>
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            className="md:hidden absolute top-full left-0 w-full overflow-hidden border-t border-white/[0.08] z-40 bg-black/80"
                        >
                            <nav className="flex flex-col py-3 px-3 space-y-1">
                                {navLinks.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={`cursor-target p-3 rounded-xl text-sm font-medium transition-colors text-center block ${isActive
                                                    ? "text-white bg-white/10"
                                                    : "text-zinc-400 hover:text-teal-400 hover:bg-teal-400/20"
                                                }`}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </div>
    )
}
