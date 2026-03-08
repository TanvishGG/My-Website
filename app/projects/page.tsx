"use client";
import React from "react";
import { motion } from "framer-motion";
import projects from "@/data/projects";
import { ProjectListItem } from "@/components/ProjectList";

export default function Projects() {
  return (
    <div className="animate-fadeIn w-full flex flex-col min-h-screen">
      <section className="pt-12 pb-10 md:pt-20 md:pb-14 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-bold tracking-[0.3em] text-teal-400 uppercase mb-4">Portfolio</p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 tracking-tight">
            All Projects<span className="text-teal-500">.</span>
          </h1>
        </motion.div>
      </section>

      <section className="pb-32 px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {projects.map((project, i) => (
            <ProjectListItem key={project.title} project={project} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}
