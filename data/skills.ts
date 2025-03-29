interface Skill {
    name: string;
    icon: string;
    animation?: string;
    background?: boolean;
}

const skills: Skill[] = [
    {
        name: "JavaScript",
        icon: "/skills/javascript.webp",
        animation: "bounce"
    },
    {
        name: "TypeScript",
        icon: "/skills/typescript.webp",
        animation: "bounce"
    },
    {
        name: "React",
        icon: "/skills/react.webp",
        animation: "spin"
    },
    {
        name: "NextJS",
        icon: "/skills/nextjs.webp",
        animation: "spin"
    },
    {
        name: "Node",
        icon: "/skills/node.webp",
        animation: "bounce",
        background: true
    },
    {
        name: "ExpressJS",
        icon: "/skills/express.webp",
        animation: "spin"
    },
    {
        name: "PostgreSQL",
        icon: "/skills/postgresql.webp",
        animation: "bounce"
    },
    {
        name: "Tailwind",
        icon: "/skills/tailwind.webp",
        animation: "bounce"
    },
    {
        name: "React-Native",
        icon: "/skills/react-native.webp",
        animation: "spin"
    },
    {
        name: "GitHub",
        icon: "/skills/github.webp",
        animation: "spin",
        background: true
    },
    {
        name: "Python",
        icon: "/skills/python.webp",
        animation: "spin"
    },
    {
        name: "Java",
        icon: "/skills/java.webp",
        animation: "bounce"
    },
    {
        name: "HTML5",
        icon: "/skills/html.webp",
        animation: "bounce"
    },
    {
        name: "CSS",
        icon: "/skills/css.webp",
        animation: "bounce"
    },
    {
        name: "Prisma",
        icon: "/skills/prisma.webp",
        animation: "bounce"
    }
];

export default skills;