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

import imageSm3_1 from "@/public/images/house3_1.png";
import imageSm3_2 from "@/public/images/house3_2.png";
import imageSm3_3 from "@/public/images/house3_3.png";
import imageSm3_4 from "@/public/images/house3_4.png";
import imageSm3_5 from "@/public/images/house3_5.png";
import imageSm3_6 from "@/public/images/house3_6.png";

import imageSm4_1 from "@/public/images/house4_1.png";
import imageSm4_2 from "@/public/images/house4_2.png";
import imageSm4_3 from "@/public/images/house4_3.png";
import imageSm4_4 from "@/public/images/house4_4.png";
import imageSm4_5 from "@/public/images/house4_5.png";
import imageSm4_6 from "@/public/images/house4_6.png";
import imageSm4_7 from "@/public/images/house4_7.png";
import imageSm4_8 from "@/public/images/house4_8.png";
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
    bgColor: "bg-[#e2e8f0]",
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
    bgColor: "bg-[#a1a1aa]",
    property_type: "Hacienda and Estancia Home",
    locations: ["Hacienda Canalete-Colombia"],
    details: {
      paragraphs: [
        "Nestled in the vibrant city of Cartagena, Hacienda Canalete offers a prime location in an area with diverse zoning ordinances, allowing for various development opportunities such as hotel projects, rural housing, and tourist condominiums.",
        "Furthermore, upcoming developments like the state-of-the-art International airport hub add value to the property, making it a strategic investment choice. With an attractive unit mix and competitive pricing strategy, Hacienda Canalete presents an opportunity for investors to access high-quality products at accessible price points. Take advantage of this unique investment proposition, with 45% of units priced under USD $1 million and another 40% under USD $1.5 million",
      ],
      bulletPoints: [
        { label: "Bedrooms :", value: "5" },
        { label: "Interior :", value: "8,298 Sq Ft." },
        { label: "Exterior :", value: "3.998 Acre(s)" },
        { label: "Price :", value: "Price Upon Request" },
      ],
      images: [imageSm2_2, imageSm2_3, imageSm2_4, imageSm2_5],
      footer: "Discover more: [Luxury Fashion Brand](https://www.example.com)",
    },
  },
  {
    id: 3,
    category: "Korea",
    title: "Yongsan-gu, Seoul, Korea",
    subtitle:
      "Goyang is the largest of Seoul’s satellite cities with about one million residents. ",
    date: "October 2024",
    previewImage: imageSm3_1,
    link: "hannam-dong-yongsan-gu-seoul-korea-seoul-si-se",
    bgColor: "bg-[#fecaca]",
    property_type: "Condominiums",
    locations: ["Hannam-dong, Yongsan-gu, Seoul Si South Korea"],
    details: {
      paragraphs: [
        "Paarc Hannam, located in the prestigious UN Village of Yongsan-gu, is renowned for its luxurious design and panoramic Han River views. This exclusive community blends modern architectural aesthetics with traditional Korean elements, emphasizing natural light and spacious interiors.",
        " Proximity to cultural venues like Shinhan Art Hall and the National Theater ensures rich cultural experiences. With scenic views of the river and mountains, Paarc Hannam offers a perfect blend of urban convenience and natural beauty, making it a prime investment in one of Seoul's most desirable neighborhoods.",
      ],
      bulletPoints: [
        { label: "Bedrooms :", value: "10" },
        { label: "Full Bathrooms :", value: "2" },
        { label: "Lot Size Unit :", value: "Acre(s)" },
        { label: "Price :", value: "Price Upon Request" },
      ],
      images: [imageSm3_2, imageSm3_3, imageSm3_4, imageSm3_5, imageSm3_6],
      footer: "Learn more about ChatApp: [ChatApp](https://www.example.com)",
    },
  },
  {
    id: 4,
    category: "Switzerland",
    title: "Gingins, Vaud, 1276 Switzerland",
    subtitle: "An exceptional property near Geneva",
    date: "June 2024",
    previewImage: imageSm4_1,
    link: "palais-venitien-expansive-luxury-estate-in-cannes-with-panoramic-views-cannes-pr-06400",
    bgColor: "bg-[#e2e8f0]",
    property_type: "Single Family Homes",
    locations: ["Switzerland"],
    details: {
      paragraphs: [
        "For sale in Cannes, in the sought after area of La Croix des Gardes, one of the finest properties listed by Côte d'Azur Sotheby's International Realty. Discover Le Palais Vénitien, a prestigious estate inspired by Venitian and Byzantium architectures. ",
        "The Palais Vénitien overlooks a magnificent panorama of Cannes and the blue waters of the Mediterranean sea, stretching as far as the eye can see. Its 2,5 hectares encompass a wealth of luxurious amenities, including a lake, a tennis court, secluded woodlands, and an expansive outdoor pool. The luxuriant terraced grounds are a wonderful invitation to discover the villa’s sumptuous interiors. With over 3000 m2 of living space and featuring monumental columns as well as exquisite moldings, this property faithfully reflects the elegance and the greatness so characteristic of Venetian design. As the ultimate expression of contemporary refinement, this spectacular structure seamlessly and invisibly incorporates the very latest high-tech controls. ",
      ],
      bulletPoints: [
        { label: "Bedrooms :", value: "9" },
        { label: "Bathrooms :", value: "12 Full" },
        { label: "Interior :", value: "32.291 Sq Ft." },
        { label: "Exterior :", value: "6.18 Acre(s)" },
        {
          label: "Amenities :",
          value:
            "Balcony, Fitness Room, Library, Pool, Security System, Tennis Court, Walk-in Closet, ....",
        },
        { label: "Lot Features :", value: "Water View, Bay View" },
        { label: "Price :", value: "$133,333,333 / 120.000.000 €" },
      ],
      images: [
        imageSm4_2,
        imageSm4_3,
        imageSm4_4,
        imageSm4_5,
        imageSm4_6,
        imageSm4_7,
        imageSm4_8,
      ],
      footer:
        "Manage your finances: [Finance Manager](https://www.example.com)",
    },
  },
];

export default portfolios;
