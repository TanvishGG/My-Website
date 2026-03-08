interface Experience {
  title: string;
  company: string;
  date: string;
  description: string;
  icon: string;
}

const experiences: Experience[] = [
  {
    title: "Backend Developer Intern",
    company: "Vyuha Innovation Foundation",
    date: "Feb 2026 - Present",
    description: "Building Scalable Websites and APIs using Node.js, Express, and MongoDB.",
    icon: "/experiences/vyuha.webp"
  },
  {
    title: "App Developer Intern",
    company: "Vyuha Innovation Foundation",
    date: "Oct 2025 - Jan 2026",
    description: "Developed a cross-platform mobile applications using React Native.",
    icon: "/experiences/vyuha.webp",
  },
  {
    title: "App Developer Intern",
    company: "Vectr.",
    date: "Dec 2024 - Dec 2025",
    description:
      "Developing a mobile application for a startup using React Native.",
    icon: "/experiences/vectr.webp",
  }
];

export default experiences;
