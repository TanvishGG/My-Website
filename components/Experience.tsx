import experiences from "@/data/experience";
import ExperienceItem from "./ExperienceItem";

export default function Experience() {
    return (
        <div className="w-90/100 mt-8 h-auto bg-grya-900/50 border-gray-700/50 border-2 rounded-2xl backdrop-blur-2xl p-5 gap-2 flex flex-col items-center justify-center">
            <h2 className="text-xl font-bold text-white">Experience</h2>
            <div className="w-full h-auto p-2 flex flex-wrap gap-4 items-center justify-center">
            {
                experiences.map((experience) => <ExperienceItem key={experience.icon} title={experience.title} company={experience.company} description={experience.description} date={experience.date} icon={experience.icon} />)
            }
        </div>
        </div>
    );
}