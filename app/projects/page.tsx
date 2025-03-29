import Project from "@/components/Project";
import projects from "@/data/projects";


export default function Projects() {
    return (
        <div className="animate-fadeIn flex flex-wrap items-center justify-center gap-4 h-auto w-full bg-transparent overflow-y-auto">
            <div key="spacer" className="h-20 w-full"></div>
        {
            projects.map((project) => (
                <Project
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    image={project.image}
                    link={project.link}
                />
            ))
        }
        </div>
    )
}