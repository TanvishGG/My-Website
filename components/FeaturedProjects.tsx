"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import projects from "@/data/projects";

function ProjectCard({ project, index, size = "sm" }: { project: typeof projects[0]; index: number; size?: "sm" | "md" }) {
    const isSm = size === "sm";

    return (
        <motion.div
            className="group cursor-target rounded-2xl border border-white/[0.08] bg-[#0a0a0a]/40 backdrop-blur-md overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)] transition-all duration-300 flex flex-col"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
        >
            <div className={isSm ? "p-3 pb-0" : "p-4 pb-0"}>
                <div className={`relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-white`}>
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-contain p-4"
                    />
                </div>
            </div>

            <div className={`${isSm ? "p-4 pt-3" : "p-5 pt-4"} flex flex-col flex-1`}>
                <h3 className={`text-white font-bold ${isSm ? "text-sm" : "text-base"} mb-1.5`}>{project.title}</h3>
                <p className={`text-zinc-400 ${isSm ? "text-xs" : "text-sm"} leading-relaxed mb-4 flex-1 ${isSm ? "line-clamp-2" : ""}`}>
                    {project.description}
                </p>

                <div className="flex flex-col gap-3 mb-4">
                    {project.languages && project.languages.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 align-center">
                            <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mr-1 py-0.5">Languages:</span>
                            {project.languages.map((lang) => (
                                <span
                                    key={lang}
                                    className={`${isSm ? "px-1.5 py-0.5 text-[9px]" : "px-2 py-0.5 text-[10px]"} rounded bg-teal-500/10 border border-teal-500/20 text-teal-400 font-medium`}
                                >
                                    {lang}
                                </span>
                            ))}
                        </div>
                    )}

                    {project.frameworks && project.frameworks.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 align-center">
                            <span className="text-[10px] text-zinc-500 font-semibold uppercase tracking-wider mr-1 py-0.5">Tech:</span>
                            {project.frameworks.map((tech) => (
                                <span
                                    key={tech}
                                    className={`${isSm ? "px-1.5 py-0.5 text-[9px]" : "px-2 py-0.5 text-[10px]"} rounded bg-white/[0.06] border border-white/[0.08] text-zinc-400 font-medium`}
                                >
                                    {tech}
                                </span>
                            ))}
                        </div>
                    )}
                </div>

                <div className={`flex items-center ${isSm ? "gap-2" : "gap-2.5"}`}>
                    {project.deploy_link && (
                        <a
                            href={project.deploy_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`cursor-target inline-flex items-center gap-1.5 ${isSm ? "px-3 py-1.5 text-[11px]" : "px-4 py-2 text-xs"} rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 active:scale-[0.97] transition-all duration-200`}
                        >
                            Live Demo
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6m0 0v6m0-6L10 14" />
                            </svg>
                        </a>
                    )}
                    {project.github_link && (
                        <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className={`cursor-target inline-flex items-center gap-1.5 ${isSm ? "px-3 py-1.5 text-[11px]" : "px-4 py-2 text-xs"} rounded-lg bg-white text-black font-semibold hover:bg-zinc-200 active:scale-[0.97] transition-all duration-200`}
                        >
                            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                            </svg>
                            Source Code
                        </a>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export { ProjectCard };

export default function FeaturedProjects() {
    const featured = projects.filter(p => p.featured).slice(0, 4);

    return (
        <section className="relative w-full py-20 md:py-28">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="flex items-end justify-between mb-12">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-xs font-medium tracking-widest text-zinc-500 uppercase mb-3">Portfolio</p>
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Featured Projects</h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Link
                            href="/projects"
                            className="cursor-target hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-white/15 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all font-medium"
                        >
                            View All
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    {featured.map((project, i) => (
                        <ProjectCard key={project.title} project={project} index={i} size="sm" />
                    ))}
                </div>
                <motion.div
                    className="mt-8 flex justify-center sm:hidden"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <Link
                        href="/projects"
                        className="cursor-target px-6 py-3 rounded-xl border border-white/15 text-sm font-medium text-zinc-300 hover:text-white hover:bg-white/[0.06] transition-all"
                    >
                        View All Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
