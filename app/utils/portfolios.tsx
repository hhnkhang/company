import { StaticImageData } from "next/image";
import imageSm1 from "@/public/images/house1_1.png";
import imageSm3 from "@/public/images/house1_3.png";
import imageSm2 from "@/public/images/house1_2.png";
import imageSm4 from "@/public/images/house1_4.png";
import imageSm5 from "@/public/images/house1_5.png";
import imageSm6 from "@/public/images/house1_6.png";

import imageSm2_1 from "@/public/images/house2_1.png";
import imageSm2_2 from "@/public/images/house2_2.png";
import imageSm2_3 from "@/public/images/house2_3.png";
import imageSm2_4 from "@/public/images/house2_4.png";
import imageSm2_5 from "@/public/images/house2_5.png";
interface IPortfolio {
  id: number;
  title: string;
  category: string;
  subtitle: string;
  date: string;
  previewImage: StaticImageData;
  bgColor?: string;
  challenges?: string[];
  property_type?: string;
  locations?: string[];
  projectDetails?: string;
  link: string;
  details: {
    paragraphs: string[];
    bulletPoints: { label: string; value: string | null }[];
    images: StaticImageData[];
    footer: string;
  };
}

const portfolios: IPortfolio[] = [
  {
    id: 1,
    category: "Switzerland",
    title: "Gingins, Vaud, 1276 Switzerland",
    subtitle: "An exceptional property near Geneva",
    date: "June 2024",
    previewImage: imageSm1,
    link: "gingins-gingins",
    bgColor: "bg-[#C6AFA2]",
    property_type: "Single Family Homes",
    locations: ["Switzerland"],
    details: {
      paragraphs: [
        "This magnificent property is set back from the charming commune of Gingins.",
        "This small Vaudois village, nestled in a green setting, is just a few minutes from Nyon. Enjoying a very private setting, yet only 15 minutes from Geneva and its international airport and 30 minutes from Lausanne, this estate will delight anyone looking for a unique and privileged location. Moreover, its proximity to the motorway network will make it easy for you to get around.",
      ],
      bulletPoints: [
        { label: "Bedrooms :", value: "10" },
        { label: "Interior :", value: "18,298 Sq Ft." },
        { label: "Exterior :", value: "10.11 Acre(s)" },
        { label: "Price :", value: "Price Upon Request" },
      ],
      images: [imageSm6, imageSm2, imageSm4, imageSm5, imageSm3],
      footer: "Try SnippetMaster: [SnippetMaster App](https://www.example.com)",
    },
  },
  {
    id: 2,
    category: "Colombia",
    title: "Canalete , Bolivar, 130002 Colombia",
    subtitle: "Extraordinary Development Opportunity in Cartagena, Bolívar ",
    date: "May 2023",
    previewImage: imageSm2_1,
    link: "hacienda-canalete-cartagena-bv-130002",
    bgColor: "bg-[#6fcf97]",
    property_type: "Hacienda and Estancia Home",
    locations: ["Hacienda Canalete-Colombia"],
    details: {
      paragraphs: [
        "We partnered with a high-end fashion brand to create a new identity that reflects luxury and elegance. Our branding strategy focused on minimalist design elements, sophisticated typography, and a monochrome color palette.",
        "The project also included the design of marketing collateral, including business cards, packaging, and a brand guideline document to ensure consistency across all platforms.",
      ],
      bulletPoints: [
        { label: "Bedrooms :", value: "10" },
        { label: "Interior :", value: "18,298 Sq Ft." },
        { label: "Exterior :", value: "10.11 Acre(s)" },
        { label: "Price :", value: "Price Upon Request" },
      ],
      images: [imageSm2_2, imageSm2_3, imageSm2_4, imageSm2_5],
      footer: "Discover more: [Luxury Fashion Brand](https://www.example.com)",
    },
  },
  // {
  //   id: 3,
  //   category: "Web Development",
  //   title: "ChatApp",
  //   subtitle: "A desktop messaging app for seamless communication",
  //   date: "April 2023",
  //   previewImage: imageChat1,
  //   link: "chatapp",
  //   bgColor: "bg-[#E4E7D8]",
  //   client: "Tech Solutions Ltd.",
  //   details: {
  //     paragraphs: [
  //       "ChatApp is a desktop messaging application similar to WhatsApp, designed for seamless communication across devices. The app supports real-time messaging, file sharing, and group chats, making it a comprehensive tool for both personal and professional use.",
  //       "Our team focused on delivering a highly responsive and intuitive user experience, with features like message encryption, notifications, and quick replies. The app is optimized for performance, ensuring fast and reliable communication even with large groups.",
  //     ],
  //     bulletPoints: [
  //       "Real-time messaging with file sharing capabilities",
  //       "Group chat support with notifications and quick replies",
  //       "End-to-end encryption for secure communication",
  //       "Optimized performance for desktop environments",
  //     ],
  //     images: [imageSm1, imageSm1, imageSm1],
  //     footer: "Learn more about ChatApp: [ChatApp](https://www.example.com)",
  //   },
  // },
  // {
  //   id: 4,
  //   category: "UI/UX Design",
  //   title: "Finance Manager Desktop App",
  //   subtitle: "Managing finances with ease and precision",
  //   date: "March 2023",
  //   previewImage: imageTodo1,
  //   link: "finance-manager",
  //   bgColor: "bg-[#F0DB4F]",
  //   client: "Money Matters Inc.",
  //   details: {
  //     paragraphs: [
  //       "The Finance Manager desktop app is designed to help users manage their personal and business finances with ease. It offers features like expense tracking, budget planning, and financial reporting, all within a user-friendly interface.",
  //       "The design emphasizes clarity and ease of use, allowing users to quickly enter and categorize expenses, monitor budgets, and generate detailed financial reports. The app supports multiple accounts and provides insightful analytics to help users make informed financial decisions.",
  //     ],
  //     bulletPoints: [
  //       "Comprehensive expense tracking and budget planning",
  //       "Detailed financial reporting with customizable analytics",
  //       "User-friendly interface with support for multiple accounts",
  //       "Designed for both personal and business finance management",
  //     ],
  //     images: [imageSm1, imageSm1, imageSm1],
  //     footer:
  //       "Manage your finances: [Finance Manager](https://www.example.com)",
  //   },
  // },
];

export default portfolios;
