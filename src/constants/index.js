export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#project',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const myProjects = [
  {
    title: 'TerraQuest',
    desc: 'This platform is inspired by eBird and iNaturalist, built to foster interest in wildlife, conservation, birdwatching, and photography. It allows users to share their wildlife observations, photos, and experiences with a global community.',
    subdesc:
      'Built to encourage wildlife enthusiasts to document and share their observations, TerraQuest combines the power of Vite (React), and TailwindCSS, Cloudinary to create a seamless user experience.',
    href: 'https://github.com/kalviumcommunity/S68_MayurKSetty_Capstone_TerraQuest?tab=readme-ov-file',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Vite',
        path: '/assets/vite.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongoDb.png',
      },
    ],
  },
  {
    title: 'Byte-2-Bite AI powered generative AI Recipe App',
    desc: 'Byte-2-Bite is an innovative recipe application that leverages the power of generative AI to create personalized recipes based on user preferences and dietary restrictions. It offers a unique blend of culinary creativity and technology.',
    subdesc:
      'This app is designed to revolutionize the way users discover and create recipes, making it easier to find meals that suit their tastes and nutritional needs. Built with Vite (react), TailwindCSS, and Gemini AI, Byte-2-Bite combines cutting-edge technology with a user-friendly interface. Uses RAG (Retrieval Augmented Generation) to provide users with a seamless experience in generating recipes.',
    href: 'https://github.com/kalviumcommunity/Byte-2-Bite_MayurKSetty_S68_GenAI',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/Byte-2-Bite.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'vite',
        path: '/assets/vite.svg',
      },
      {
        id: 4,
        name: 'Gemini AI',
        path: '/assets/gemini.png',
      },
    ],
  },
  {
    title: 'Attacus and Psyche - Nightwalks booking system',
    desc: 'Attacus and Psyche is a sophisticated booking system designed for Nightwalks, a unique experience that combines nature and technology. This platform allows users to book guided night walks, enhancing their connection with the environment.',
    subdesc:
      'Built with Vite (react), TailwindCSS, and MongoDB, Attacus and Psyche offers a seamless booking experience. It integrates advanced features like user authentication, real-time availability checks, and secure payment processing to ensure a smooth user journey.',
    href: 'https://github.com/mayur-driod/NightWalks',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/Logo.webp',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'vite',
        path: '/assets/vite.svg',
      },
      {
        id: 4,
        name: 'MongoDB',
        path: '/assets/mongoDb.png',
      },
    ],
  },
  {
    title: 'TradeX - Online Stock tracking platform',
    desc: 'real-time stock market app with live prices, search, personalized alerts, interactive charts, AI-powered insights, daily news summary, watchlists, powered by Next.js, Better Auth, and Inngest for seamless automation.',
    subdesc:
      'Built with Next.js, TypeScript, shadcn/ui, Inngest, Google Gemini and MongoDB TradeX offers a comprehensive solution for stock market enthusiasts. It combines real-time data with the power of AI to provide users with actionable insights and a personalized experience.',
    href: 'https://github.com/mayur-driod/TradeX',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/TradeXLogo.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/NextJS.png',
      },
      {
        id: 2,
        name: 'TypeScript',
        path: 'assets/typescript.svg',
      },
      {
        id: 3,
        name: 'shadcn/ui',
        path: '/assets/shadcn.png',
      },
      {
        id: 4,
        name: 'Inngest',
        path: '/assets/Inngest.png',
      },
    ],
  },
  // {
  //   title: 'Imaginify - AI Photo Manipulation App',
  //   desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
  //   subdesc:
  //     'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
  //   href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
  //   texture: '/textures/project/project5.mp4',
  //   logo: '/assets/project-logo5.png',
  //   logoStyle: {
  //     backgroundColor: '#1C1A43',
  //     border: '0.2px solid #252262',
  //     boxShadow: '0px 0px 60px 0px #635BFF4D',
  //   },
  //   spotlight: '/assets/spotlight5.png',
  //   tags: [
  //     {
  //       id: 1,
  //       name: 'React.js',
  //       path: '/assets/react.svg',
  //     },
  //     {
  //       id: 2,
  //       name: 'TailwindCSS',
  //       path: 'assets/tailwindcss.png',
  //     },
  //     {
  //       id: 3,
  //       name: 'TypeScript',
  //       path: '/assets/typescript.png',
  //     },
  //     {
  //       id: 4,
  //       name: 'Framer Motion',
  //       path: '/assets/framer.png',
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
];