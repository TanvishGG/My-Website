"use client";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";

export default function Home() {
  return (
    <div className="bg-transparent animate-fadeIn flex w-full flex-col">
      <Hero />
      <FeaturedProjects />
      <Experience />
      <Skills />
    </div>
  );
}
