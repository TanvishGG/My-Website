"use client";
import Image from "next/image";
import NavButton from "./NavButton";
import Menu from "./Menu";
import menuItems from "@/data/menu";
import { useState } from "react";
import Link from "next/link";

export default function Header() {
    const [menu, setMenu] = useState<boolean>(false);
    const toggleMenu = () => {
        setMenu(!menu);
    };

    return (
        <>
            <nav className="z-100 border-2 border-gray-700/60 fixed rounded-2xl backdrop-blur-xs h-16 top-5 left-5 right-5 flex p-4 items-center justify-between bg-gray-900/60">
                <Link href="/"
                       className="flex hover:cursor-pointer items-center h-auto"
                >
                    <Image
                        src="/logo.webp"
                        alt="Logo"
                        width={60}
                        height={60}
                        placeholder="empty"
                        className="mr-2"
                    />
                    <span className="text-white text-xl font-bold">Tanvish :)</span>
                </Link>
                <div className="hidden md:flex items-center space-x-4">
                    {menuItems.map((item) => (
                        <NavButton key={item.title} text={item.title} href={item.href} />
                    ))}
                </div>
                <div className="flex md:hidden">
                    <Image
                        src="/menu.png"
                        alt="Menu"
                        width={40}
                        height={40}
                        placeholder="empty"
                        className="cursor-pointer"
                        onClick={toggleMenu}
                    />
                </div>
            </nav>
            <Menu visible={menu} callback={setMenu} />
        </>
    );
}