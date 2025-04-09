export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string; // Optional logo URL
}

export const experiences: Experience[] = [
  {
    role: "Full Stack Blockchain Developer",
    company: "Kalp Studio (Mai Labs)",
    period: "Dec 2022 - Present",
    description:
      "Token Money Magnet App (WION): Developed TMM token and Airdrop smart contracts (Golang). Integrated into Nest.js backend. \nAPI Gateway (Kalp Studio): Developed microservice to extract solidity-like ABI.json using Express.js and Golang. Integrated fabric-network + Hashicorp Vault for identity management.\nNotification Engine: High throughput notification service using TypeScript, Node.js, MongoDB, and RabbitMQ.\nLeadership: Currently leading DApp development team of 5 members.",
    technologies: [
      "Node.js",
      "NestJS",
      "Express.js",
      "TypeScript",
      "Golang",
      "Solidity",
      "Foundry",
      "Hardhat",
      "Smart Contracts",
      "MongoDB",
      "Postgres",
      "MongoDB",
      "RabbitMQ",
    ],
    logo: "/images/companies/kalp-studio.jpeg",
  },
  {
    role: "Blockchain Software Engineer",
    company: "GradientFI Inc.",
    period: "Apr 2022 - Dec 2022",
    description:
      "Smart Contracts(Poket App): Developed and tested collateralized stablecoin, multi-party marketplace and liquidity pool smart contracts on BSC and Polygon using Hardhat, mocha/chai.\nBackend(Poket App): Developed a Express.js backend with various features.\nAudit: Using Slither and Mythril generated reports.\nLeadership: Led the blockchain team of 3 members.",
    technologies: [
      "Hardhat",
      "mocha/chai",
      "Express.js",
      "Node.js",
      "TypeScript",
      "MongoDB",
      "Binance Smart Chain",
      "Polygon",
      "Solidity",
      "Slither",
      "Mythril",
    ],
    logo: "/images/companies/gradientfi.jpeg",
  },
  {
    role: "Blockchain Engineer",
    company: "Nonceblox Pvt. Ltd.",
    period: "Apr 2022 - Aug 2022",
    description:
      "Arcade Network: Developed staking contract on Polygon using Hardhat, mocha/chai.\nApex Atheletes: Developed ERC-721 and Airdrop smart contract and Ethereum.\nChumbi Valley: Developed ERC-20 contract for pets used in game, ERC-1155 for items and chests. Breeding contract for pets where 2 parents are required to breed.",
    technologies: [
      "ERC-20",
      "ERC-721",
      "ERC-1155",
      "Staking",
      "Vesting",
      "Hardhat",
      "Solidity",
      "Binance Smart Chain",
      "Polygon",
      "Ethereum",
      "Solana",
      "Polkadot",
      "mocha/chai",
    ],
    logo: "/images/companies/nonceblox.jpeg",
  },
  {
    role: "Blockchain Engineer",
    company: "NexG Exuberant Solutions Inc.",
    period: "Aug 2021 - Apr 2022",
    description:
      "Electric Vehicle Charging System: Developed smart contracts for double-auction EV charging system on Ethereum using Brownie, Web3.py, and Py-Solc-X. Integrated into Python backend for event driven bidding architecture.\nAttribute Based Access Control: Developed smart contracts to implement ABAC into Solidity smart contracts. Implemented bloom filter for identity checks and PyTest, threading and asyncio for test automation.",
    technologies: [
      "Solidity",
      "Python",
      "Brownie",
      "Web3.py",
      "Py-Solc-X",
      "asyncio",
      "pandas",
      "NumPy",
      "PyTest",
      "threading",
    ],
    logo: "/images/companies/nexg.jpeg",
  },
];

export const backgroundElements = [
  { width: 68, height: 68, left: 33, top: 79, opacity: 0.67 },
  { width: 47, height: 47, left: 10, top: 84, opacity: 0.41 },
  { width: 100, height: 100, left: 91, top: 29, opacity: 0.15 },
  { width: 12, height: 12, left: 55, top: 49, opacity: 0.23 },
  { width: 59, height: 59, left: 18, top: 62, opacity: 0.59 },
  { width: 34, height: 34, left: 77, top: 45, opacity: 0.36 },
  { width: 92, height: 92, left: 76, top: 5, opacity: 0.42 },
  { width: 17, height: 17, left: 30, top: 33, opacity: 0.55 },
  { width: 25, height: 25, left: 27, top: 59, opacity: 0.31 },
  { width: 63, height: 63, left: 96, top: 14, opacity: 0.38 },
  { width: 48, height: 48, left: 41, top: 71, opacity: 0.44 },
  { width: 84, height: 84, left: 8, top: 67, opacity: 0.15 },
  { width: 15, height: 15, left: 65, top: 53, opacity: 0.77 },
  { width: 37, height: 37, left: 34, top: 22, opacity: 0.75 },
  { width: 90, height: 90, left: 49, top: 100, opacity: 0.38 },
];
