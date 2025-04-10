import { FaMedium, FaBook } from "react-icons/fa";
import { IconType } from "react-icons";

export interface Category {
  id: string;
  name: string;
  icon: IconType;
}

export interface BlogPost {
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  readTime: string;
  link: string;
}

export const categories: Category[] = [
  {
    id: "medium",
    name: "Medium",
    icon: FaMedium,
  },
  {
    id: "youtube",
    name: "YouTube",
    icon: FaBook,
  },
];

export const blogPosts: BlogPost[] = [
  {
    title:
      "Kalp DLT Airdrop Fails? Understanding Chaincode State Isolation and Batch Transfers",
    description:
      "Kalp DLT airdrop challenges stem from chaincode isolation. BatchTransferFrom and duplicate handling resolve balance and distribution errors efficiently in blockchain.",
    image: "/images/blog/airdrop-fails.jpg",
    category: "medium",
    date: "Feb 7, 2025",
    readTime: "11 min read",
    link: "https://medium.com/kalpstudio/kalp-dlt-airdrop-fails-understanding-chaincode-state-isolation-and-batch-transfers-a59c23a46ec7",
  },
  {
    title:
      "Upgrading Smart Contracts: A Guide to Proxy Contracts and Solidity Patterns",
    description:
      "Upgradeable contracts empower secure, flexible smart contracts, employing proxy patterns and libraries to separate storage from logic for safe, efficient upgrades.",
    image: "/images/blog/upgradable-contracts.jpg",
    category: "medium",
    date: "Nov 13, 2024",
    readTime: "5 min read",
    link: "https://medium.com/kalpstudio/upgrading-smart-contracts-a-guide-to-proxy-contracts-and-solidity-patterns-3124543dbd95",
  },
  {
    title:
      "Mastering Solidity Events: Building Blockchain Event Listeners for Real-time Notifications",
    description:
      "Ethereum contract events trigger off-chain listeners. Web3.js and Ethers.js empower dApps to receive real-time updates with filtering and error management.",
    image: "/images/blog/blockchain-events.jpg",
    category: "medium",
    date: "Nov 6, 2024",
    readTime: "4 min read",
    link: "https://medium.com/kalpstudio/mastering-solidity-events-building-blockchain-event-listeners-for-real-time-notifications-accc95619f35",
  },
  {
    title:
      "Build a Certification DApp on KALP Blockchain | Soulbound Tokens Explained",
    description:
      "A step-by-step guide to creating a on-blockchain certification dApp using KALP blockchain. We talk about soulbound tokens, and how to create a soulbound token on KALP blockchain.",
    image: "https://img.youtube.com/vi/cagy8mLLCAw/maxresdefault.jpg",
    category: "youtube",
    date: "March 24, 2025",
    readTime: "1 hour 52 min",
    link: "https://www.youtube.com/watch?v=cagy8mLLCAw",
  },
  {
    title:
      "Build a Crowdfunding DApp on KALP Blockchain | Smart Contracts with Golang & Next.js",
    description:
      "A step-by-step guide to creating a crowdfunding dApp on KALP blockchain using smart contracts with Golang & Next.js. We talk about fundraising in the blockchain space, and how to create your own crowdfunding dApp.",
    image: "https://img.youtube.com/vi/WNV7FuIuNxE/maxresdefault.jpg",
    category: "youtube",
    date: "Mar 26, 2025",
    readTime: "1 hour 20 min",
    link: "https://www.youtube.com/watch?v=WNV7FuIuNxE",
  },
  {
    title: "BUILD by KALP Studio, Blockchain Hackathons and Web3 Events.",
    description:
      "The 2nd episode of Behind The Studio, a series of videos where we talk about the latest trends in blockchain and web3. This time we are talking about BUILD by KALP Studio, Blockchain Hackathons and Web3 Events.",
    image: "https://img.youtube.com/vi/Hx_vW1UZ80g/maxresdefault.jpg",
    category: "youtube",
    date: "November 5, 2024",
    readTime: "35 min",
    link: "https://www.youtube.com/watch?v=Hx_vW1UZ80g",
  },
];
