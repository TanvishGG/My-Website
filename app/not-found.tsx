"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";

export default function NotFound() {
  return (
    <div className="relative min-h-[85vh] flex flex-col items-center justify-center p-6 text-center animate-fadeIn overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="z-10"
      >
        <h1 className="text-8xl md:text-9xl font-extrabold text-white mb-4 tracking-tighter">
          404
        </h1>
        
        <div className="mb-8">
          <ShinyText 
            text="Page Not Found" 
            disabled={false} 
            speed={3} 
            className="text-2xl md:text-3xl font-bold"
          />
        </div>

        <p className="text-zinc-400 text-lg mb-10 max-w-md mx-auto leading-relaxed">
          The page you are looking for doesn&apos;t exist or has been moved to another universe.
        </p>

        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-target px-8 py-3 rounded-2xl bg-white text-black font-bold text-sm hover:bg-teal-400 hover:text-white transition-all duration-300 shadow-xl shadow-white/5"
          >
            Return Home
          </motion.button>
        </Link>
      </motion.div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-teal-500/10 blur-[120px] rounded-full -z-10 opacity-50" />
    </div>
  );
}
