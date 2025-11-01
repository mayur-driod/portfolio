export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Projects",
    href: "#project",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const myProjects = [
  {
    id: 1,
    title: "TerraQuest",
    desc: "This platform is inspired by eBird and iNaturalist, built to foster interest in wildlife, conservation, birdwatching, and photography. It allows users to share their wildlife observations, photos, and experiences with a global community.",
    subdesc:
      "Built to encourage wildlife enthusiasts to document and share their observations, TerraQuest combines the power of Vite (React), and TailwindCSS, Cloudinary to create a seamless user experience.",
    href: "https://github.com/kalviumcommunity/S68_MayurKSetty_Capstone_TerraQuest?tab=readme-ov-file",
    texture: "/textures/project/project1.mp4",
    banner: "/assets/Banners/TerraQuestBanner.png",
    logo: "/assets/project-logo1.png",
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "Vite",
        path: "/assets/vite.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongoDb.png",
      },
    ],
    // new fields
    overview:
      "TerraQuest is a community-first platform for documenting wildlife observations. It streamlines photo uploads, geotagging, and species identification while providing a lightweight, performant UI for discovery and contribution.",
    techstack: [
      "React (Vite)",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Cloudinary",
      "Google Maps API",
      "Google Oauth",
    ],
    links: {
      source:
        "https://github.com/kalviumcommunity/S68_MayurKSetty_Capstone_TerraQuest?tab=readme-ov-file",
      live: "https://terraquest.netlify.app/",
      demo: "", // optional
    },
    projectOutline: [
      {
        title: "Problem Statement",
        content:
          "Naturalists and casual observers lack a simple, modern tool to record and share sightings with a beautiful interface.",
      },
      {
        title: "Solution",
        content:
          "A performant, mobile-first web app that makes logging observations quick and rewarding, with media uploads, location, and species meta-data.",
      },
      {
        title: "Core Features",
        content: [
          "Quick photo + observation uploads",
          "Map-based discovery and filters",
          "User profiles and galleries",
          "Cloud-hosted image storage via Cloudinary",
        ],
      },
      {
        title: "Challenges & Learnings",
        content: [
          "Balancing image quality and upload performance",
          "Designing a responsive map-first experience",
          "Securely handling user media and metadata",
        ],
      },
      {
        title: "Outcome",
        content:
          "A polished MVP that simplifies wildlife documentation and encourages repeat contributions through a delightful UI.",
      },
    ],
    gallery: [
      "/assets/ProjectGallery/Terraquest_1.png",
      "/assets/ProjectGallery/Terraquest_2.png",
      "/assets/ProjectGallery/Terraquest_3.png",
      "/assets/ProjectGallery/Terraquest_4.png",
      "/assets/ProjectGallery/Terraquest_5.png",
    ],
    reflection:
      "TerraQuest taught me how to design for observational workflows — prioritizing fast media uploads, clear metadata, and a map-centric discovery experience. I also improved my approach to image performance and progressive-loading techniques.",
    stats: {
      duration: "8 weeks",
      team: "Solo Project",
      role: "Full Stack Developer",
      date: "Feb 2025",
    },
  },

  {
    id: 2,
    title: "Byte-2-Bite AI powered generative AI Recipe App",
    desc: "Byte-2-Bite is an innovative recipe application that leverages the power of generative AI to create personalized recipes based on user preferences and dietary restrictions. It offers a unique blend of culinary creativity and technology.",
    subdesc:
      "This app is designed to revolutionize the way users discover and create recipes, making it easier to find meals that suit their tastes and nutritional needs. Built with Vite (react), TailwindCSS, and Gemini AI, Byte-2-Bite combines cutting-edge technology with a user-friendly interface. Uses RAG (Retrieval Augmented Generation) to provide users with a seamless experience in generating recipes.",
    href: "https://github.com/kalviumcommunity/Byte-2-Bite_MayurKSetty_S68_GenAI",
    texture: "/textures/project/project2.mp4",
    banner: "/assets/ProjectGallery/Byte-2-Bite_1.png",
    logo: "/assets/Byte-2-Bite.png",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "vite",
        path: "/assets/vite.svg",
      },
      {
        id: 4,
        name: "Gemini AI",
        path: "/assets/gemini.png",
      },
    ],
    // new fields
    overview:
      "Byte-2-Bite uses a generative LLM (Gemini) combined with a Retrieval-Augmented Generation pipeline to produce tailored recipes from a user's available ingredients, dietary constraints, and cuisine preferences.",
    techstack: [
      "React (Vite)",
      "TailwindCSS",
      "Gemini API (Embeddings + LLM)",
      "Node.js",
      "Express",
      "AstraDB",
      "Puppeteer",
    ],
    links: {
      source:
        "https://github.com/kalviumcommunity/Byte-2-Bite_MayurKSetty_S68_GenAI",
      live: "https://byte-2-bite-mayur-k-setty-s68-gen-a.vercel.app/",
      demo: "",
    },
    projectOutline: [
      {
        title: "Problem Statement",
        content:
          "Users often have leftover ingredients and struggle to compose balanced, interesting meals quickly.",
      },
      {
        title: "Solution",
        content:
          "An AI-driven recipe generator that tailors suggestions to inputs like ingredients, diet, and cuisine, allowing fast regeneration and refinements.",
      },
      {
        title: "Core Features",
        content: [
          "Ingredient-based recipe generation",
          "Dietary filters and preference profiles",
          "Recipe regeneration with different constraints",
          "Fast, responsive UI with Tailwind",
        ],
      },
      {
        title: "Challenges & Learnings",
        content: [
          "Designing a safe prompt + retrieval strategy for consistent outputs",
          "Handling API rate limits and caching responses",
          "Polishing the UX for iterative recipe refinement",
        ],
      },
      {
        title: "Outcome",
        content:
          "A usable prototype that delivers practical, creative recipes and demonstrates a robust RAG + LLM integration.",
      },
    ],
    gallery: [
      "/assets/ProjectGallery/Byte-2-Bite_1.png",
      "/assets/ProjectGallery/Byte-2-Bite_2.png",
      "/assets/ProjectGallery/Byte-2-Bite_3.png",
    ],
    reflection:
      "Building Byte-2-Bite deepened my understanding of RAG pipelines, prompt design for culinary domains, and pragmatic caching strategies for LLM-driven features. It also reinforced the importance of clear UI affordances for regenerated content.",
    stats: {
      duration: "3 weeks",
      team: "Solo Project",
      role: "Full Stack Developer",
      date: "May 2025",
    },
  },

  {
    id: 3,
    title: "Attacus and Psyche - Nightwalks booking system",
    desc: "Attacus and Psyche is a sophisticated booking system designed for Nightwalks, a unique experience that combines nature and technology. This platform allows users to book guided night walks, enhancing their connection with the environment.",
    subdesc:
      "Built with Vite (react), TailwindCSS, and MongoDB, Attacus and Psyche offers a seamless booking experience. It integrates advanced features like user authentication, real-time availability checks, and secure payment processing to ensure a smooth user journey.",
    href: "https://github.com/mayur-driod/NightWalks",
    texture: "/textures/project/project3.mp4",
    banner: "/assets/ProjectGallery/Attacus_1.png",
    logo: "/assets/Logo.webp",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "vite",
        path: "/assets/vite.svg",
      },
      {
        id: 4,
        name: "MongoDB",
        path: "/assets/mongoDb.png",
      },
    ],
    // new fields
    overview:
      "A reliable booking platform tailored to night-time guided experiences. Focus is on availability management, secure checkout, and a streamlined booking flow for both organizers and participants.",
    techstack: [
      "React (Vite)",
      "TailwindCSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Razorpay (payment gateway)",
      "Cloudinary",
    ],
    links: {
      source: "https://github.com/mayur-driod/NightWalks",
      live: "https://attacus-and-psyche.vercel.app/",
      demo: "",
    },
    projectOutline: [
      {
        title: "Problem Statement",
        content:
          "Operators need a lightweight system to manage bookings, capacity, and payments for scheduled nightwalks.",
      },
      {
        title: "Solution",
        content:
          "A bookings-first web app with calendar availability, client-side validation, and secure payment integration.",
      },
      {
        title: "Core Features",
        content: [
          "Real-time availability and booking calendar",
          "Secure payments and receipts",
          "Admin dashboard for schedule management",
          "Responsive design for intuitive booking on any device",
        ],
      },
      {
        title: "Challenges & Learnings",
        content: [
          "Ensuring availability consistency across concurrent bookings",
          "Building a simple admin UX for non-technical operators",
          "Streamlining payment flows to reduce friction",
        ],
      },
      {
        title: "Outcome",
        content:
          "A practical booking MVP that reduced manual scheduling tasks and improved customer booking conversions.",
      },
    ],
    gallery: [
      "/assets/ProjectGallery/Attacus_1.png",
      "/assets/ProjectGallery/Attacus_2.png",
      "/assets/ProjectGallery/Attacus_3.png",
      "/assets/ProjectGallery/Attacus_4.png",
      "/assets/ProjectGallery/Attacus_5.png",
    ],
    reflection:
      "This project emphasized the importance of robust availability logic and a forgiving booking UX. I refined strategies for concurrency control and payment reconciliation.",
    stats: {
      duration: "5 weeks",
      team: "Solo Project",
      role: "Frontend / Backend",
      date: "Jan 2025",
    },
  },

  {
    id: 4,
    title: "TradeX - Online Stock tracking platform",
    desc: "real-time stock market app with live prices, search, personalized alerts, interactive charts, AI-powered insights, daily news summary, watchlists, powered by Next.js, Better Auth, and Inngest for seamless automation.",
    subdesc:
      "Built with Next.js, TypeScript, shadcn/ui, Inngest, Google Gemini and MongoDB TradeX offers a comprehensive solution for stock market enthusiasts. It combines real-time data with the power of AI to provide users with actionable insights and a personalized experience.",
    href: "https://github.com/mayur-driod/TradeX",
    texture: "/textures/project/project4.mp4",
    banner: "/assets/ProjectGallery/Tradex_5.png",
    logo: "/assets/TradeXLogo.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "Next.js",
        path: "/assets/NextJS.png",
      },
      {
        id: 2,
        name: "TypeScript",
        path: "/assets/typescript.svg",
      },
      {
        id: 3,
        name: "shadcn/ui",
        path: "/assets/shadcn.png",
      },
      {
        id: 4,
        name: "Inngest",
        path: "/assets/Inngest.png",
      },
    ],
    // new fields
    overview:
      "TradeX provides near real-time market data, curated AI summaries, and personalized alerts to help users monitor positions and discover trading ideas with minimal noise.",
    techstack: [
      "Next.js",
      "TypeScript",
      "shadcn/ui",
      "Inngest",
      "Node.js",
      "MongoDB",
      "Charting libraries",
    ],
    links: {
      source: "https://github.com/mayur-driod/TradeX",
      live: "https://tradex-mayur.vercel.app/",
      demo: "https://www.linkedin.com/posts/mayurksetty_feeling-stuck-in-the-loop-of-monotonous-linkedin-activity-7388915601773346817-x2G7?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFELEm4BYJeGn7lg7h6lbDMN1dH1zDzgAig",
    },
    projectOutline: [
      {
        title: "Problem Statement",
        content:
          "Retail traders need consolidated, reliable data and concise insights without being overwhelmed by noise.",
      },
      {
        title: "Solution",
        content:
          "A lightweight dashboard combining real-time quotes, alerting, and AI-generated summaries to surface actionable signals.",
      },
      {
        title: "Core Features",
        content: [
          "Live price streaming and interactive charts",
          "Personalized alerts and watchlists",
          "AI-powered daily summaries and highlights",
          "Secure auth and user settings",
        ],
      },
      {
        title: "Challenges & Learnings",
        content: [
          "Handling streaming data efficiently in the browser",
          "Balancing update frequency with bandwidth and UX",
          "Integrating AI safely for market commentary",
        ],
      },
      {
        title: "Outcome",
        content:
          "A focused trading dashboard that surfaces relevant market information while minimizing information overload.",
      },
    ],
    gallery: [
      "/assets/ProjectGallery/Tradex_1.png",
      "/assets/ProjectGallery/Tradex_2.png",
      "/assets/ProjectGallery/Tradex_3.png",
      "/assets/ProjectGallery/Tradex_4.png",
      "/assets/ProjectGallery/Tradex_5.png",
    ],
    reflection:
      "TradeX was an exercise in handling streaming data and designing concise AI-driven summaries. I improved patterns for realtime UI updates and learned to tune AI outputs for brevity and utility.",
    stats: {
      duration: "6 weeks",
      team: "Solo Project (Inspired by Javascript Mastery)",
      role: "Full Stack Developer",
      date: "Sep 2025",
    },
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
        ? [5, -5, 0]
        : isTablet
          ? [5, -5, 0]
          : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
        ? [5, 4, 0]
        : isTablet
          ? [5, 4, 0]
          : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
        ? [-10, 10, 0]
        : isTablet
          ? [-12, 10, 0]
          : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
        ? [-9, -10, -10]
        : isTablet
          ? [-11, -7, -10]
          : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Framer",
    pos: "Lead Web Developer",
    duration: "2022 - Present",
    title:
      "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: "/assets/framer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Figma",
    pos: "Web Developer",
    duration: "2020 - 2022",
    title:
      "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: "/assets/figma.svg",
    animation: "clapping",
  },
  {
    id: 3,
    name: "Notion",
    pos: "Junior Web Developer",
    duration: "2019 - 2020",
    title:
      "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: "/assets/notion.svg",
    animation: "salute",
  },
];
