import { url } from "inspector";
import { desktop, growth, home, human, innovation, money } from "./Icons";

export const navLinks = [
  {
    name: "Home",
    url: "/",
  },
  {
    name: "Services",
    url: "#",
  },
  {
    name: "About",
    url: "#",
  },
  {
    name: "Portfolio",
    url: "#",
  },
  {
    name: "FAQs",
    url: "#",
  },
  {
    name: "Contact",
    url: "#",
  },
];
interface IService {
  title: string;
  icon: any;
  description: string;
  bulletPoints: string[];
}

export const services: IService[] = [
  {
    title: "Know how much you can afford",
    icon: money,
    description:
      "We'll help you estimate how much you can afford to spend on a home",
    bulletPoints: [
      "Connect with a lender to help determine your homebuying budget",
      "In-depth market and competitor analysis",
      "Understand your monthly costs",
      "Get help with your down payment",
    ],
  },
  {
    title: "Get professional help in your home search",
    icon: human,
    description:
      "We'll connect you with a local agent who can explore neighborhoods, find homes that fit your needs, and stay on budget.",
    bulletPoints: [
      "We have a team of humans to support you",
      "Local agent connections",
      "We work with thousands of agents nationwide",
      "We connect you with an agent for free",
    ],
  },
  {
    title: "Real value",
    icon: home,
    description:
      "Find out how you can sell without listing or stay in your home while you finance the purchase of your next one.",
    bulletPoints: [
      "Get current property estimates for your home",
      "Explore projects that could add the most value to your home",
      "Calculate an estimate of how much you could make selling your home",
      "Find skilled pros near you to assist you with your next remodeling project",
    ],
  },
];
