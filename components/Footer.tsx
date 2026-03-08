"use client";

import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";

export default function Footer() {
    return (
        <motion.footer className="w-full border-t border-white/10 mt-auto py-6"
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1
        }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-sm text-gray-400">
                    © {new Date().getFullYear()} Tanvish Reddy. All rights reserved.
                </p>
                <div className="flex items-center gap-6">
                    <Link href="https://github.com/TanvishGG" target="_blank" className="cursor-target text-sm text-gray-400 hover:text-white transition-colors">
                        GitHub
                    </Link>
                    <Link href="https://linkedin.com/in/tanvishreddy" target="_blank" className="cursor-target text-sm text-gray-400 hover:text-white transition-colors">
                        LinkedIn
                    </Link>
                    <Link href="mailto:tanvish@tanvish.co.in" className="text-sm cursor-target text-gray-400 hover:text-white transition-colors">
                        Email
                    </Link>
                </div>
            </div>
        </motion.footer>
    );
}
