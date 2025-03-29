import Link from "next/link";


export default function NavButton({ text, href }: { text: string; href: string }) {
    return (
        <Link href={href}><p className="hover:text-dark hover:cursor-pointer hover:underline-offset-2 font-bold text-fore">{text}</p></Link>
    )
}