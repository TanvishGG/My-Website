"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import TextType from "./ui/TypeText";
import VariableProximity from "./ui/VariableProximity";

export default function Hero() {
    const containerRef = useRef(null);

    return (
        <section className="relative w-full min-h-[85vh] flex items-center justify-center overflow-hidden py-20">

            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            </div>

            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
                <div
                    ref={containerRef}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-center lg:text-left"
                    style={{ position: 'relative' }}
                >

                    <div className="lg:col-span-8 flex flex-col items-center lg:items-start">
                        <motion.h1
                            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl font-extrabold tracking-tight leading-[1.1] mb-6"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                        >
                            <span className="text-white">Hi, I&apos;m </span>
                            <TextType
                                text={["Tanvish Reddy", "a Full-Stack Developer", "an App Developer", "a Tech Enthusiast"]}
                                typingSpeed={75}
                                pauseDuration={1500}
                                showCursor
                                cursorCharacter="_"
                            />
                        </motion.h1>

                        <motion.div
                            className="mb-10 cursor-default"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                        >
                            <VariableProximity
                                label={'I am a Web and App Developer skilled in Node.js, React Native, and Express. Pursuing a BTech in Computer Science at VIT-AP University, I am passionate about Technology, Nature, and blending creativity with Portrait Sketching.'}
                                fromFontVariationSettings="'wght' 400, 'opsz' 14"
                                toFontVariationSettings="'wght' 1000, 'opsz' 40"
                                containerRef={containerRef}
                                radius={150}
                                falloff='gaussian'
                                className="text-zinc-400 text-lg md:text-xl lg:text-xl leading-relaxed max-w-2xl"
                            />
                        </motion.div>

                        <motion.div
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 w-full sm:w-auto"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            <Link
                                href="/projects"
                                className="cursor-target px-8 py-4 rounded-full bg-white text-black font-semibold text-base text-center hover:scale-105 active:scale-[0.97] transition-all duration-200"
                            >
                                View My Work
                            </Link>
                            <Link
                                href="/contact"
                                className="cursor-target px-8 py-4 rounded-full border border-white/20 text-white font-semibold text-base text-center hover:bg-white/10 active:scale-[0.97] transition-all duration-200"
                            >
                                Get in Touch
                            </Link>
                        </motion.div>
                    </div>

                    <div className="hidden lg:block lg:col-span-4" />
                </div>
            </div>
        </section>
    );
}
