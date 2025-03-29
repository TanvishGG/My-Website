"use client"
import React from 'react';
import menuItems from "@/data/menu";
import Link from 'next/link';
export default function Menu({visible,callback}: {visible: boolean,callback: React.Dispatch<React.SetStateAction<boolean>>}) {
    if (!visible) return null; // Don't render anything if not visible
    return (
        <div>
            <div className="fixed flex top-0 left-0 w-full h-full bg-transparent z-100 cursor-pointer" onClick={() => callback(false)}></div>
            <div className="fixed flex top-22 backdrop-blur-xs right-6 rounded-tl-3xl p-5 rounded-b-3xl items-center justify-center bg-gray-700/60 z-100">
                <div className="flex flex-col items-center justify-center space-y-4">
                    {
                        menuItems.map((item) => (
                            <Link key={item.title} href={item.href}><button key={item.title} className="text-white text-xl cursor-pointer" onClick={() => callback(false)}>{item.title}</button></Link>
                        ))
                    }
                </div>
                </div>
        </div>
    );
};