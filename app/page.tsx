"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-transparent animate-fadeIn flex w-full h-auto flex-col items-center justify-items-start justify-evenly">
        <div key="spacer" className="h-30 w-full"></div>
        <div className="flex-col sm:flex-row flex rounded-xl w-90/100 items-center justify-around p-4 bg-gray-900/50 backdrop-blur-xs shadow-lg border-2 border-gray-700/50">
          <div className="flex sm:w-1/2 flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Hey, I&apos;m  <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200">Tanvish</span></h1>
            <Image
              src="/logo.webp"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mt-4"
            />
          </div>
          <div className="mt-8 sm:w-1/2 flex flex-col border-2 border-cyan-200 items-center justify-center text-center bg-gray-800/30 p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Building Seamless Web and Mobile Experiences
            </h2>
            <p className="text-gray-300 leading-relaxed">
              I am a <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200">Web and App Developer</span> skilled in
              <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200"> Node.js</span>, 
              <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200"> React Native</span>, 
              and <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200"> Express</span>. Pursuing a 
              <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200"> BTech in Computer Science</span> at 
              <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200"> VIT-AP University</span>, I am passionate 
              about <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200"> Technology</span>, 
              <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200"> Nature</span>, 
              and blending creativity with <span className="text-cyan-400 font-bold hover:shadow-cyan-400 hover:scale-110 transition-transform duration-200"> Portrait Sketching</span>.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              <Link href="/projects">
                  <button className="hover:animate-bounce cursor-pointer bg-fore hover:bg-dark text-white font-bold py-2 px-6 rounded">
                    My Work
                  </button>
              </Link>
              <Link href="/contact">
                  <button className="hover:animate-bounce cursor-pointer bg-fore hover:bg-dark text-white font-bold py-2 px-6 rounded">
                    Connect with Me
                  </button>
  
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
