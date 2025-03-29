interface Experience {
    title: string;
    company: string;
    date: string;
    description: string;
    icon: string;
}

const experiences: Experience[] = [
    {
        title: "App Developer",
        company: "Vectr.",
        date: "Dec 2024 - Present",
        description: "Developing a mobile application for a startup using React Native.",
        icon: "/experiences/vectr.webp"
    },
    {
        title: "Web & App Team",
        company: "Google Developer Groups VIT-AP",
        date: "Nov 2024 - Present",
        description: "Contributing to the development of website for the GDG VIT-AP.",
        icon: "/experiences/gdg.webp"
    }
]

export default experiences;