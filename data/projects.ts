const projects: Project[] = [
    {
        title: "Tenord",
        description: "Discord inspired Social Media Application",
        image: "/projects/tenord.webp",
        link: "https://tenord.xyz"
    },
    {
        title: "Text Encryption Tool",
        description: "An Open-Source Tool for Encrypting Text",
        image: "/projects/lock.webp",
        link: "https://text-encryption-tool.js.org"
    },
    {
        title: "Senova",
        description: "Verified Discord Bot",
        image: "/projects/senova.webp",
        link: "https://github.com/TanvishGG/Senova"
    },
    {
        title: "discord-mini-games.js",
        description: "Full-fledged Discord Mini-Games Package",
        image: "/projects/game.webp",
        link: "https://discord-mini-games.js.org"
    },
    {
        title: "Github Stats Api",
        description: "GitHub Stats Image Generator",
        image: "/projects/github.webp",
        link: "https://github.com/TanvishGG/GitHub-Stats-Api"
    },
    {
        title: "Simple CDN",
        description: "Simple CDN using express",
        image: "/projects/cdn.webp",
        link: "https://github.com/TanvishGG/Simple-CDN"
    },
    {
        title: "Discord Bot Template",
        description: "Template for Discord Bot using discord.js v14",
        image: "/projects/bot.webp",
        link: "https://github.com/TanvishGG/Discord-Bot-Template"
    },
    {
        title: "Portfolio Website",
        description: "Portfolio Website for me",
        image: "/logo.webp",
        link: "javascript:alert('You\\'re already in the portfolio lmao')"
    },
    {
        title: "Kawaii Chan Bot",
        description: "Advanced Multi Utility Bot",
        image: "/projects/bot.webp",
        link: "javascript:alert('It\\'s a Private Bot :/')"
    }
];

interface Project {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default projects;