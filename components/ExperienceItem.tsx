import Image from "next/image";

export default function ExperienceItem({
  title,
  company,
  date,
  description,
  icon,
}: {
  title: string;
  date: string;
  company: string;
  description: string;
  icon: string;
}) {
  return (
    <div
      key={icon}
      className="flex items-start w-100 hover:scale-105 transition-all h-auto space-x-4 p-4 bg-gray-900/50 border-2 border-gray-700/50 backdrop-blur-2xl shadow-md rounded-lg"
    >
      <div className="flex-shrink-0">
        <Image
          src={icon}
          alt={`${company} logo`}
          width={48}
          height={48}
          className="rounded-xl"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <p className="text-sm text-gray-200">{company}</p>
        <p className="text-sm text-gray-300">{date}</p>
        <p className="mt-2 text-gray-400">{description}</p>
      </div>
    </div>
  );
}
