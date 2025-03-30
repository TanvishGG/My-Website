"use client";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="animate-fadeIn flex flex-col items-center justify-start w-full h-auto p-5 mt-8 bg-transparent overflow-y-auto">
      <div key="spacer" className="min-h-20 w-full"></div>
      <div className="flex-col sm:flex-row flex rounded-xl w-95/100 md:w-90/100 items-center justify-around p-4 bg-gray-900/50 backdrop-blur-xs shadow-lg border-2 border-gray-700/50">
       <div className="flex sm:w-1/2 flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-white mb-4">Contact Me</h1>
            <p className="text-white mb-4">Email: <Link className="text-cyan-300 font-bold" href="mailto:tanvish@tanvish.co.in">tanvish@tanvish.co.in</Link></p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link href="https://linkedin.com/in/tanvish-reddy">
                  <Image
                    src="/socials/linkedin.webp"
                    alt="LinkedIn"
                    width={50}
                    height={50}
                    className="hover:scale-110 transition-all"
                  />
                  </Link>
                  <Link href="https://github.com/TanvishGG">
                  <Image
                    src="/projects/github.webp"
                    alt="GitHub"
                    width={50}
                    height={50}
                    className="bg-white rounded-full hover:scale-110 transition-all"
                  />
                  </Link>
                  <Link href="https://instagram.com/tanvish00">
                  <Image
                    src="/socials/instagram.webp"
                    alt="Instagram"
                    width={50}
                    height={50}
                    className="hover:scale-110 transition-all"
                  />
                  </Link>
                  <Link href="https://www.fiverr.com/tanvish00">
                  <Image
                    src="/socials/fiverr.webp"
                    alt="Fiverr"
                    width={50}
                    height={50}
                    className="hover:scale-110 transition-all"
                  />
                  </Link>
                  <Link href="https://discord.com/users/923835610815430697">
                  <Image
                    src="/socials/discord.webp"
                    alt="Discord"
                    width={50}
                    height={50}
                    className="hover:scale-110 bg-white rounded-full transition-all"
                  />
                  </Link>
                  <Link href="https://www.youtube.com/@TanvishArts">
                  <Image
                    src="/socials/youtube.webp"
                    alt="YouTube"
                    width={50}
                    height={50}
                    className="hover:scale-110 transition-all"
                  />
                  </Link>
                </div>
            </div>
            <ContactForm />
              </div>
      <div key="spacer-2" className="min-h-20 w-full"></div>
    </div>
  );
}
