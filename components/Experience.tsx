"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import experiences from "@/data/experience";

export default function Experience() {
    return (
        <section className="relative w-full  overflow-hidden">
            <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
                <motion.div
                    className="mb-20 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tighter mt-4">My Experience</h2>
                </motion.div>
                <div className="relative max-w-5xl mx-auto">
                    <div className="absolute left-[20px] md:left-1/4 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/5 to-transparent -translate-x-1/2" />

                    <div className="space-y-12 md:space-y-16">
                        {experiences.map((exp, i) => (
                            <motion.div
                                key={exp.title + exp.company}
                                className="relative flex flex-col md:flex-row items-start justify-start"
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7, delay: i * 0.1 }}
                            >
                                <div className="absolute left-[20px] md:left-1/4 top-12 w-10 h-10 -translate-x-1/2 z-20 flex items-center justify-center">
                                    <div className="w-3 h-3 rounded-full bg-white ring-4 ring-white/10 shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                                </div>

                                <div className="hidden md:flex flex-col items-end w-1/4 pr-12 pt-8">
                                    <span className="text-2xl font-black text-white tabular-nums">0{i + 1}</span>
                                    <p className="text-sm font-bold text-zinc-500 tracking-wider uppercase mt-1">{exp.date}</p>
                                </div>
                                <div className="w-full md:w-3/4 pl-12 md:pl-12">
                                    <div className="group relative p-8 cursor-target rounded-3xl border border-white/10 bg-[#0a0a0a]/40 backdrop-blur-md transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05),0_10px_40px_-15px_rgba(0,0,0,0.5)] overflow-hidden">
                                        
                                        <div className="relative z-10">
                                            <div className="md:hidden mb-2">
                                                <span className="text-xs font-bold text-zinc-500 uppercase tracking-widest">{exp.date}</span>
                                            </div>
                                            
                                            <div className="flex items-center gap-4 mb-6">
                                                <div className="relative w-14 h-14 rounded-2xl overflow-hidden bg-zinc-900 border border-white/10 transition-all duration-500">
                                                    <Image
                                                        src={exp.icon}
                                                        alt={exp.company}
                                                        fill
                                                        className="object-cover transition-all duration-700"
                                                    />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">{exp.title}</h3>
                                                    <p className="text-zinc-400 font-medium">{exp.company}</p>
                                                </div>
                                            </div>
                                            
                                            <p className="text-zinc-400 leading-relaxed text-sm md:text-base transition-colors duration-500">
                                                {exp.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
