import skills from "@/data/skills";
import Skill from "./Skill";


export default function SkillSet() {
    return (
        <div className="flex flex-col w-90/100 p-5 h-auto items-center gap-2 justify-center mt-8 bg-gray-900/70 border-gray-700/50 border-2 rounded-xl backdrop-blur-sm">
            <h2 className="text-xl font-bold text-white">Tech Stack</h2>
            <div className="no-scroll items-center w-full h-30 bg-gray-700/40 rounded-2xl p-2 flex flex-row gap-5 overflow-x-auto">
                {
                    skills.map((skill) => <Skill key={skill.name} name={skill.name} icon={skill.icon} animation={skill.animation} background={skill.background}/>)
                }
            </div>
        </div>
    )
}