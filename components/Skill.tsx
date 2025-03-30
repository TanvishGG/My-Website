import Image from "next/image";

export default function Skill({
  name,
  icon,
  animation,
  background,
}: {
  name: string;
  icon: string;
  animation?: string;
  background?: boolean;
}) {
  return (
    <Image
      src={icon}
      alt={name}
      title={name}
      key={name.toLowerCase()}
      loading="lazy"
      placeholder="empty"
      width={50}
      height={50}
      className={`md:h-18 hover:animate-${animation ?? "bounce"} ${background ? "bg-white rounded-full" : ""} w-20 rounded-2xl cursor-pointer`}
    ></Image>
  );
}
