import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import {
  FaServer,
  FaDatabase,
  FaLayerGroup,
  FaGamepad,
  FaAndroid,
} from "react-icons/fa6";

export interface Project {
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  links: ProjectLink[];
}

export interface ProjectLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}

// Project categories
export const projectCategories = [
  {
    title: "Backend",
    icon: FaServer,
  },
  {
    title: "Blockchain",
    icon: FaDatabase,
  },
  {
    title: "Frontend",
    icon: FaLayerGroup,
  },
  {
    title: "Game Development",
    icon: FaGamepad,
  },
];

// Project data
export const projects = [
  {
    title: "Token Money Magnet App",
    description:
      "Developed the TMM token and airdrop system with smart contracts written in Golang and integrated with a Nest.js backend. Features include token distribution, airdrop management, and user wallet integration.",
    image: "/images/projects/tmm-app.jpg",
    category: "Blockchain",
    technologies: ["Golang", "NestJS", "Solidity", "MongoDB", "Web3.js"],
    links: [
      {
        name: "Android App",
        url: "https://play.google.com/store/apps/details?id=com.tmm.user",
        icon: (
          <FaAndroid className="text-gray-200 hover:text-green-500" size={20} />
        ),
      },
      {
        name: "Article",
        url: "https://www.wionews.com/token-money-magnet",
        icon: (
          <FaExternalLinkAlt
            className="text-gray-200 hover:text-green-500"
            size={20}
          />
        ),
      },
    ],
  },
  {
    title: "Kalp Studio API Gateway",
    description:
      "Developed a microservice that extracts solidity-like ABI.json using Express.js and Golang. Generates automatic routes for easy integration of any smart contract with any frontend. Integrated with fabric-network and Hashicorp Vault for secure identity management and access control.",
    image: "/images/projects/api-gateway.jpg",
    category: "Backend",
    technologies: [
      "Express.js",
      "Golang",
      "Hashicorp Vault",
      "Docker",
      "Kubernetes",
    ],
    links: [
      {
        name: "Kalp Studio",
        url: "https://console.kalp.studio/smart-contract-app/api-gateway",
        icon: (
          <FaExternalLinkAlt
            className="text-gray-200 hover:text-green-500"
            size={20}
          />
        ),
      },
    ],
  },
  {
    title: "Notification Engine",
    description:
      "A high-throughput notification service built with TypeScript, Node.js, MongoDB, Redis, Amazon S3, and RabbitMQ. Handles millions of notifications with real-time delivery and analytics. Not able to share the code due to being part of a private codebase for Mai Labs. This is mostly used internally, and is used in the TMM app as well Kalp Studio.",
    image: "/images/projects/notification-engine.jpg",
    category: "Backend",
    technologies: [
      "TypeScript",
      "Node.js",
      "MongoDB",
      "Redis",
      "Amazon S3",
      "RabbitMQ",
    ],
    links: [],
  },
  {
    title: "Poket App",
    description:
      "A decentralized marketplace with collateralized stablecoin and liquidity pool smart contracts on BSC and Polygon. Includes a comprehensive Express.js backend with various features.",
    image: "/images/projects/poket-app.jpg",
    category: "Blockchain",
    technologies: ["Solidity", "Hardhat", "Express.js", "MongoDB", "Web3.js"],
    links: [
      {
        name: "Website",
        url: "https://poket.finance",
        icon: (
          <FaExternalLinkAlt
            className="text-gray-200 hover:text-green-500"
            size={20}
          />
        ),
      },
    ],
  },
  {
    title: "Chumbi Valley",
    description:
      "A blockchain game with ERC-721 tokens for pets, ERC-1155 for items and chests, and a breeding contract where two parents are required to breed new pets. Not able to share the code due to being part of a private codebase for NonceBlox.",
    image: "/images/projects/chumbi-valley.jpg",
    category: "Blockchain",
    technologies: [
      "Solidity",
      "Hardhat",
      "ERC-20",
      "ERC-1155",
      "Breeding Contract",
    ],
    links: [
      {
        name: "Website",
        url: "https://chumbivalley.com/",
        icon: (
          <FaExternalLinkAlt
            className="text-gray-200 hover:text-green-500"
            size={20}
          />
        ),
      },
    ],
  },
  {
    title: "EV Charging System",
    description:
      "A double-auction EV charging system on Ethereum with smart contracts developed using Brownie, Web3.py, and Py-Solc-X. Integrated with a Python backend for event-driven bidding architecture.",
    image: "/images/projects/ev-charging.jpg",
    category: "Blockchain",
    technologies: ["Solidity", "Python", "Brownie", "Web3.py", "Py-Solc-X"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/etsrohan/blockchain-EVCS",
        icon: (
          <FaGithub className="text-gray-200 hover:text-green-500" size={20} />
        ),
      },
    ],
  },
  {
    title: "Attribute Based Access Control",
    description:
      "Smart contracts implementing ABAC into Solidity with bloom filters for identity checks. Includes test automation with PyTest, threading, and asyncio.",
    image: "/images/projects/abac.jpg",
    category: "Blockchain",
    technologies: ["Solidity", "Python", "Bloom Filters", "PyTest", "asyncio"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/etsrohan/blockchain-ABAC",
        icon: (
          <FaGithub className="text-gray-200 hover:text-green-500" size={20} />
        ),
      },
    ],
  },
  {
    title: "Metafinity",
    description:
      "Frontend for Metafinity Games. A website featuring all their latest and featured games, about the company, and a contact section.",
    image: "/images/projects/metafinity.jpg",
    category: "Frontend",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Node.js",
      "Shadcn UI",
    ],
    links: [
      {
        name: "Website",
        url: "https://metafinity.space",
        icon: (
          <FaExternalLinkAlt
            className="text-gray-200 hover:text-green-500"
            size={20}
          />
        ),
      },
    ],
  },
  {
    title: "Pocket Carrom",
    description:
      "Used Unity to create a 2D carrom game with realistic physics and animations. Playable on Android. Play against the computer or with your friends.",
    image: "/images/projects/pocket-carrom.jpg",
    category: "Game Development",
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "React",
      "Node.js",
      "Shadcn UI",
    ],
    links: [
      {
        name: "Website",
        url: "https://github.com/etsrohan/pocket-carrom",
        icon: (
          <FaGithub className="text-gray-200 hover:text-green-500" size={20} />
        ),
      },
      {
        name: "Android",
        url: "https://play.google.com/store/apps/details?id=com.Metafinity.PocketCarrom",
        icon: (
          <FaAndroid className="text-gray-200 hover:text-green-500" size={20} />
        ),
      },
    ],
  },
];
