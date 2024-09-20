import { url } from "inspector";
import { desktop, growth, home, human, innovation, money } from "./Icons";
import { Bungee_Outline } from "next/font/google";
export const bungee = Bungee_Outline({
  subsets: ["latin"],
  weight: ["400"],
});

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

export const aboutStats = [
  {
    title: "Happy Customers",
    count: "450.000+",
    ff: bungee.className,
  },

  {
    title: "Real Estate channel on Youtube",
    count: "#1",
  },

  {
    title: "Annual visits in 2023",
    count: "52M",
    ff: bungee.className,
  },

  {
    title: "Job opportunities were created annually",
    count: "1.1M+",
  },
];

export const baseText = [
  {
    text: "Unrivaled marketing",
  },
  {
    text: "Exclusive partnerships",
    outline: bungee.className,
  },
  {
    text: "Unmatched service",
  },
  {
    text: "Public relations powerhouse",
    outline: bungee.className,
  },
];

export const faqs = [
  {
    question:
      "How to Determine Your Non-Negotiables When Buying a Luxury Property",
    answer:
      "It’s essential to go into purchasing a new property with a list of must-haves, or non-negotiables, so your agent can more easily find houses that meet your needs and make your final decision-making process more streamlined. Determining what your list of non-negotiables might be, though, isn’t always so easy.",
  },

  {
    question: "How much rent can I afford?",
    answer:
      "To calculate how much you can spend on rent, you’ll need to know your gross income. Gross income, also called gross pay when it's on a paycheck, is an individual's total earnings before taxes or other deductions. This income comes from all sources, not just employment, and comes in the form of cash, property, or services. Once you’ve determined your gross income, you can then use the 30% or 50/30/20 rules to determine how much rent you can afford.",
  },

  {
    question: "What is the 50/30/20 rule?",
    answer:
      "One alternative to the 30% rule is the 50/30/20 rule. This rule divides your monthly net (after-tax) income into three spending categories: 50% for needs, 30% for wants, and 20% for savings or paying off debt.",
  },

  {
    question: "How much is too much rent?",
    answer:
      "Spending more on rent for a nicer home or apartment is tempting when looking for a place to live. However, experts recommend that you shouldn’t spend more than 30% of your monthly income on rent.",
  },

  {
    question: "How do you calculate your rent-to-income ratio?",
    answer:
      "To calculate your rent-to-income ratio, divide your monthly rent payment by your monthly gross income. For example, if you pay $1,000 per month and your gross income is $5,000 per month, your rent-to-income ratio is 20%.",
  },

  {
    question: "What percentage of my income should go to rent?",
    answer:
      "As a rule of thumb, your monthly rent shouldn’t exceed 30% of your gross monthly income. This leaves 70% of your gross monthly income to cover other expenses.For example, if you make $50,000 per year and follow the “30% rule,” you’d have $15,000 annually - up to $1,250 per month - to spend on rent. This leaves $2,900 per month for all other expenses",
  },
];
