"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import projects from "@/data/projects";

function ProjectListItem({ project, index }: { project: typeof projects[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col p-6 md:p-8 rounded-3xl border border-white/[0.08] bg-[#0a0a0a]/40 backdrop-blur-md hover:bg-white/[0.02] transition-all duration-500 shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]"
    >
      {}
      <div className="flex items-center gap-6 mb-8">
        <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-2xl overflow-hidden border border-white/10 shadow-xl bg-white flex-shrink-0">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-contain p-2 group-hover:scale-110 transition-transform duration-700"
          />
        </div>
        
        <div className="flex flex-col gap-3">
          <h3 className="text-2xl md:text-3xl font-extrabold text-white group-hover:text-teal-400 transition-colors tracking-tight">
            {project.title}
          </h3>
          <div className="flex flex-wrap gap-2.5">
            {project.deploy_link && (
              <a
                href={project.deploy_link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-black font-bold text-xs hover:bg-teal-400 hover:text-white transition-all duration-300 shadow-lg shadow-white/5 group/btn"
              >
                <span>Live Demo</span>
                <svg className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </a>
            )}
            {project.github_link && (
              <a
                href={project.github_link}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target flex items-center gap-2 px-4 py-2 rounded-xl border border-white/10 bg-white/5 text-zinc-300 font-bold text-xs hover:bg-white/10 hover:text-white transition-all duration-300 shadow-lg group/btn"
              >
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>GitHub</span>
              </a>
            )}
          </div>
        </div>
      </div>

      {}
      <div className="mb-5">
        <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-4xl">
          {project.description}
        </p>
      </div>

      {}
      <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-6 border-t border-white/[0.05]">
        {}
        <div className="flex flex-wrap gap-2">
          {project.languages?.map(lang => (
            <span key={lang} className="px-2.5 py-1 rounded-md bg-teal-500/10 text-teal-400 text-[10px] font-bold uppercase tracking-wider border border-teal-500/20">
              {lang}
            </span>
          ))}
        </div>
        
        {}
        {project.languages?.length && project.frameworks?.length ? <div className="hidden sm:block w-1 h-1 rounded-full bg-zinc-800" /> : null}

        {}
        <div className="flex flex-wrap gap-2">
          {project.frameworks?.map(tech => (
            <span key={tech} className="px-2.5 py-1 rounded-md bg-white/[0.04] text-zinc-500 text-[10px] font-bold uppercase tracking-wider border border-white/[0.08]">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export { ProjectListItem };
