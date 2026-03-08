interface Project {
  title: string;
  description: string;
  image: string;
  deploy_link?: string;
  github_link?: string;
  languages?: string[];
  frameworks?: string[];
  featured: boolean;
}

const projects: Project[] = [
  {
    "title": "Tenord-Social-Media-App",
    "description": "A real-time, Discord-inspired social media platform with WebSockets, channel management, and instant messaging.",
    "image": "/projects/tenord.webp",
    "deploy_link": "https://tenord.tanvish.co.in",
    "github_link": "https://github.com/TanvishGG/Tenord-Social-Media-App",
    "languages": [
      "TypeScript",
      "JavaScript"
    ],
    "frameworks": [
      "Next.js",
      "React",
      "Socket.io",
      "Tailwind CSS",
      "Prisma"
    ],
    "featured": true
  },
    {
    "title": "Krishi-Sakhi",
    "description": "Smart agriculture solution using Flutter and Flask to provide crop recommendations and disease detection.",
    "image": "https://opengraph.githubassets.com/1/TanvishGG/Krishi-Sakhi",
    "deploy_link": "",
    "github_link": "https://github.com/TanvishGG/Krishi-Sakhi",
    "languages": [
      "Dart",
      "Python",
      "TypeScript"
    ],
    "frameworks": [
      "Flutter",
      "Flask",
      "Hono",
      "Gemini AI",
      "Firebase",
    ],
    "featured": true
  },
  {
    "title": "Campus-Map-VIT-AP",
    "description": "Offline campus navigation for VIT-AP with intelligent pathfinding and real-time GPS tracking.",
    "image": "https://opengraph.githubassets.com/1/TanvishGG/Campus-Map-VIT-AP",
    "deploy_link": "",
    "github_link": "https://github.com/TanvishGG/Campus-Map-VIT-AP",
    "languages": [
      "Dart"
    ],
    "frameworks": [
      "Flutter",
      "OpenStreetMap"
    ],
    "featured": true
  },
  {
    "title": "Search-Agent-Using-Google-ADK",
    "description": "An autonomous AI search agent powered by Google ADK and Gemini, performing intelligent web searches and content extraction.",
    "image": "https://opengraph.githubassets.com/1/TanvishGG/Search-Agent-Using-Google-ADK",
    "deploy_link": "",
    "github_link": "https://github.com/TanvishGG/Search-Agent-Using-Google-ADK",
    "languages": [
      "Python"
    ],
    "frameworks": [
      "Google ADK",
      "Gemini AI"
    ],
    "featured": true
  },
    {
    "title": "Senova",
    "description": "A verified Discord bot serving 300+ servers with Mini-Games, Fun and Entertaiment Commands",
    "image": "/projects/senova.webp",
    "deploy_link": "https://discord.com/api/oauth2/authorize?client_id=951666837127577631&permissions=59392&scope=bot",
    "languages": [
      "JavaScript"
    ],
    "frameworks": [
      "Discord.js",
      "Node.js",
      "PostgreSQL"
    ],
    "featured": false
  },
  {
    "title": "Discord-Mini-Games.js",
    "description": "An NPM package for implementing various mini-games like TicTacToe and Connect4 in Discord bots.",
    "image": "/projects/game.webp",
    "deploy_link": "https://discord-mini-games.js.org/",
    "github_link": "https://github.com/TanvishGG/Discord-Mini-Games.js",
    "languages": [
      "JavaScript"
    ],
    "frameworks": [
      "Discord.js",
      "Node.js"
    ],
    "featured": false
  },
    {
    "title": "Healthy-Me",
    "description": "AI-based Medical Assistant for smart diagnosis, prescription analysis, and skin infection detection.",
    "image": "/projects/medic.webp",
    "deploy_link": "https://healthy-me-assist.vercel.app",
    "github_link": "https://github.com/TanvishGG/Healthy-Me",
    "languages": [
      "TypeScript",
      "JavaScript"
    ],
    "frameworks": [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Google Gemini AI"
    ],
    "featured": false
  },
  {
    "title": "Text-Encryption-Tool",
    "description": "A secure text encryption and decryption tool available as an NPM package with zero storage.",
    "image": "/projects/lock.webp",
    "deploy_link": "https://text-encryption-tool.js.org/",
    "github_link": "https://github.com/TanvishGG/Text-Encryption-Tool",
    "languages": [
      "JavaScript"
    ],
    "frameworks": [
      "Node.js",
      "Crypto"
    ],
    "featured": false
  },
  {
    "title": "GitHub-Stats-Api",
    "description": "A dynamic image generator fetching and displaying user GitHub statistics.",
    "image": "/projects/github.webp",
    "deploy_link": "",
    "github_link": "https://github.com/TanvishGG/GitHub-Stats-Api",
    "languages": [
      "JavaScript"
    ],
    "frameworks": [
      "Node.js",
      "Express",
      "GitHub API"
    ],
    "featured": false
  },
  {
    "title": "Discord-Bot-Template",
    "description": "A modular and easy-to-use template for building Discord bots with Discord.js v14.",
    "image": "/projects/bot.webp",
    "deploy_link": "https://discord.com/invite/xS8b8jQZZK",
    "github_link": "https://github.com/TanvishGG/Discord-Bot-Template",
    "languages": [
      "JavaScript"
    ],
    "frameworks": [
      "Discord.js",
      "Node.js"
    ],
    "featured": false
  },
  {
    "title": "Simple-CDN",
    "description": "A lightweight and efficient Content Delivery Network (CDN) built using Express.",
    "image": "/projects/cdn.webp",
    "github_link": "https://github.com/TanvishGG/Simple-CDN",
    "languages": [
      "JavaScript"
    ],
    "frameworks": [
      "Express",
      "Node.js"
    ],
    "featured": false
  },
];

export default projects;
