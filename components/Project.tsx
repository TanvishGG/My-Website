import Image from "next/image";

export default function Project({title, description, image, link}: {title: string, description: string, image: string, link: string}) {
    return (
        <div className="flex border-2 transition-all border-cyan-100/30 hover:scale-105 hover:shadow-gray-700/50 items-center h-50 w-80 p-4 rounded-lg shadow-md bg-gray-900/40 backdrop-blur-xs">
            <a href={link} target="_blank" className="flex gap-3 items-center h-50 w-80 justify-center" rel="noopener noreferrer">
                <Image src={image} alt={title} width={100} height={100} className="rounded-3xl bg-white mb-4 border-2 border-gray-800/60" />
                <div className="flex flex-col align-middle justify-center h-2 w-full">
                <h2 className="text-xl font-bold text-gray-900 dark:text-white">{title}</h2>
                <p className="text-gray-700 dark:text-gray-400">{description}</p>
                </div>
            </a>
        </div>
    )
}