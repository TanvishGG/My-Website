"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import skills from "@/data/skills";

export default function Skills() {
    return (
        <section className="relative w-full py-20 md:py-28 overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mt-4 mb-6">My Tech Stack</h2>
                </motion.div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                    {skills.map((skill, i) => (
                        <motion.div
                            key={skill.name}
                            className="group cursor-target relative flex items-center gap-4 p-4 rounded-xl border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-md transition-all duration-500 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.05 }}
                            whileHover={{ scale: 1.05, rotate: 2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <motion.div className={`relative w-10 h-10 shrink-0 z-10 transition-transform duration-500 ${skill.background ? "bg-white rounded-lg p-1" : ""}`}
                                whileHover={{ scale: 1.2 }}
                                transition={{ type: "spring", stiffness: 300 }}
                            >
                                <Image
                                    src={skill.icon}
                                    alt={skill.name}
                                    fill
                                    className="object-contain transition-all duration-500"
                                />
                            </motion.div>

                            <div className="relative z-10 flex flex-col justify-center">
                                <span className="text-sm font-bold text-zinc-400 transition-colors duration-300 truncate group-hover:text-white">{skill.name}</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
