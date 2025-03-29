import Image from "next/image";

export default function NotFound() {
    return (
        <div className="p-20 flex flex-col justify-center align-middle items-center">
            <div className="flex flex-col items-center justify-center w-full p-4 h-full">
                <Image
                    src="/404.gif"
                    alt="404"
                    width={50}
                    height={50}
                    className="w-full h-fullobject-cover rounded-2xl cursor-pointer"
                ></Image>
            </div>
            <p className="text-center text-2xl font-bold mt-4">Page Not Found</p>
            <a href="/" className="text-center text-xl font-bold mt-2 hover:underline"><button className="bg-fore rounded-xl p-2 text-white cursor-pointer">Go Back</button></a>
        </div>
    )
}