"use client";

import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import SkillSet from "@/components/SkillSet";
export default function Home() {
  return (
    <>
      <div className="bg-transparent animate-fadeIn flex w-full h-auto flex-col items-center justify-items-start justify-evenly overflow-y-auto">
        <div key="spacer" className="min-h-30 w-full"/>
        <Hero/>
        <SkillSet/>
        <Experience/>
        <div key="spacer-2" className="min-h-10 w-full"/>
      </div>
    </>
  );
}
