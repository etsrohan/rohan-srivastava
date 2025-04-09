import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { FaServer, FaDatabase, FaLayerGroup, FaGamepad } from "react-icons/fa6";

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
    icon: <FaServer className="text-green-500" size={24} />,
  },
  {
    title: "Blockchain",
    icon: <FaDatabase className="text-green-500" size={24} />,
  },
  {
    title: "Web Development",
    icon: <FaLayerGroup className="text-green-500" size={24} />,
  },
  {
    title: "Game Development",
    icon: <FaGamepad className="text-green-500" size={24} />,
  },
];

// Project data
export const projects = [
  {
    title: "Token Money Magnet App",
    description:
      "A blockchain-based token and airdrop system with smart contracts developed in Golang and integrated with a Nest.js backend. Features include token distribution, airdrop management, and user wallet integration.",
    image: "/images/projects/tmm-app.jpg",
    category: "Blockchain",
    technologies: ["Golang", "NestJS", "Solidity", "MongoDB", "Web3.js"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/etsrohan/token-money-magnet",
        icon: (
          <FaGithub className="text-gray-200 hover:text-purple-500" size={20} />
        ),
      },
      {
        name: "Live Demo",
        url: "https://tmm.example.com",
        icon: (
          <FaExternalLinkAlt
            className="text-gray-200 hover:text-blue-500"
            size={20}
          />
        ),
      },
    ],
  },
  {
    title: "Kalp Studio API Gateway",
    description:
      "A microservice that extracts solidity-like ABI.json using Express.js and Golang. Integrated with fabric-network and Hashicorp Vault for secure identity management and access control.",
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
        name: "GitHub",
        url: "https://github.com/etsrohan/kalp-api-gateway",
        icon: (
          <FaGithub className="text-gray-200 hover:text-purple-500" size={20} />
        ),
      },
    ],
  },
  {
    title: "Notification Engine",
    description:
      "A high-throughput notification service built with TypeScript, Node.js, MongoDB, and RabbitMQ. Handles millions of notifications with real-time delivery and analytics.",
    image: "/images/projects/notification-engine.jpg",
    category: "Backend",
    technologies: ["TypeScript", "Node.js", "MongoDB", "RabbitMQ", "Redis"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/etsrohan/notification-engine",
        icon: (
          <FaGithub className="text-gray-200 hover:text-purple-500" size={20} />
        ),
      },
    ],
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
        name: "GitHub",
        url: "https://github.com/etsrohan/poket-app",
        icon: (
          <FaGithub className="text-gray-200 hover:text-purple-500" size={20} />
        ),
      },
      {
        name: "Live Demo",
        url: "https://poket.example.com",
        icon: (
          <FaExternalLinkAlt
            className="text-gray-200 hover:text-blue-500"
            size={20}
          />
        ),
      },
    ],
  },
  {
    title: "Arcade Network",
    description:
      "A staking contract on Polygon with vesting schedules and rewards distribution. Includes a frontend dashboard for users to manage their staked tokens.",
    image: "/images/projects/arcade-network.jpg",
    category: "Blockchain",
    technologies: ["Solidity", "Hardhat", "React", "TypeScript", "Web3.js"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/etsrohan/arcade-network",
        icon: (
          <FaGithub className="text-gray-200 hover:text-purple-500" size={20} />
        ),
      },
    ],
  },
  {
    title: "Chumbi Valley",
    description:
      "A blockchain game with ERC-20 tokens for pets, ERC-1155 for items and chests, and a breeding contract where two parents are required to breed new pets.",
    image: "/images/projects/chumbi-valley.jpg",
    category: "Game Development",
    technologies: ["Unity", "C#", "Solidity", "Web3.js", "ERC-20", "ERC-1155"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/etsrohan/chumbi-valley",
        icon: (
          <FaGithub className="text-gray-200 hover:text-purple-500" size={20} />
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
        url: "https://github.com/etsrohan/ev-charging",
        icon: (
          <FaGithub className="text-gray-200 hover:text-purple-500" size={20} />
        ),
      },
    ],
  },
  {
    title: "Attribute Based Access Control",
    description:
      "Smart contracts implementing ABAC into Solidity with bloom filters for identity checks. Includes test automation with PyTest, threading, and asyncio.",
    image: "/images/projects/abac.jpg",
    category: "Backend",
    technologies: ["Solidity", "Python", "Bloom Filters", "PyTest", "asyncio"],
    links: [
      {
        name: "GitHub",
        url: "https://github.com/etsrohan/abac",
        icon: (
          <FaGithub className="text-gray-200 hover:text-purple-500" size={20} />
        ),
      },
    ],
  },
];
