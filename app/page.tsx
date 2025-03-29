"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="bg-transparent flex w-full h-200 flex-col items-center justify-center">
        <div className="flex-col md:flex-row flex rounded-xl w-90/100 items-center justify-around align-middle p-4 bg-gray-900/50 backdrop-blur-xs shadow-lg border-2 border-gray-700/50">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-4xl font-bold text-white">Hey, I&apos;m Tanvish</h1>
            <Image
              src="/logo.webp"
              alt="Profile Picture"
              width={150}
              height={150}
              className="rounded-full mt-4"
            />
          </div>
          <div className="md:mb-4 mr-4 flex flex-col items-center justify-center">
            <p className="text-xl text-gray-300 mt-4">Explore my projects and skills</p>
            <Link href="/projects">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                View Projects
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
