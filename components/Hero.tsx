import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex-col sm:flex-row flex rounded-xl w-90/100 items-center justify-around p-4 bg-gray-900/50 backdrop-blur-xs shadow-lg border-2 border-gray-700/50">
      <div className="flex sm:w-1/2 flex-col items-center justify-center">
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Hey, I&apos;m <span className="text-cyan-400 font-bold">Tanvish</span>
        </h1>
        <Image
          src="/logo.webp"
          alt="Profile Picture"
          loading="eager"
          width={150}
          height={150}
          className="rounded-full mt-4 hover:scale-110 transition-all hover:shadow-cyan-400 shadow-lg"
        />
      </div>
      <div className="mt-8 sm:w-1/2 flex flex-col border-2 border-cyan-200 items-center justify-center text-center bg-gray-800/30 p-8 rounded-lg shadow-lg">
        <h2 className="text-xl md:text-2xl font-semibold text-white mb-4">
          Building Seamless Web and Mobile Experiences
        </h2>
        <p className="text-gray-300  text-sm md:text-lg leading-relaxed">
          I am a{" "}
          <span className="text-cyan-400 font-bold">Web and App Developer</span>{" "}
          skilled in
          <span className="text-cyan-400 font-bold"> Node.js</span>,
          <span className="text-cyan-400 font-bold"> React Native</span>, and{" "}
          <span className="text-cyan-400 font-bold"> Express</span>. Pursuing a
          <span className="text-cyan-400 font-bold">
            {" "}
            BTech in Computer Science
          </span>{" "}
          at
          <span className="text-cyan-400 font-bold"> VIT-AP University</span>, I
          am passionate about{" "}
          <span className="text-cyan-400 font-bold"> Technology</span>,
          <span className="text-cyan-400 font-bold"> Nature</span>, and blending
          creativity with{" "}
          <span className="text-cyan-400 font-bold"> Portrait Sketching</span>.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link href="/projects">
            <button className="hover:animate-bounce cursor-pointer bg-white hover:bg-white/80 text-black font-bold py-2 px-3 rounded">
              Projects
            </button>
          </Link>
          <Link href="/contact">
            <button className="hover:animate-bounce cursor-pointer bg-white hover:bg-white/80 text-black font-bold py-2 px-3 rounded">
              Contact Me
            </button>
          </Link>
          <div className="flex flex-row justify-center gap-4">
            <Link href="https://linkedin.com/in/tanvish-reddy">
              <Image
                src="/socials/linkedin.webp"
                alt="LinkedIn"
                width={40}
                height={40}
                className="rounded-xl bg-white hover:scale-110 transition-all shadow-lg"
              />
            </Link>
            <Link href="https://github.com/TanvishGG">
              <Image
                src="/skills/github.webp"
                alt="GitHub"
                width={40}
                height={40}
                className="rounded-xl bg-white hover:scale-110 transition-all shadow-lg"
              />
            </Link>
            <Link href="https://razorpay.me/@tanvish">
              <button className="animate-pulse cursor-pointer bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-6 rounded">
                Support &#x1F90D;
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
