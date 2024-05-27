import { StaticImageData } from "next/image";
import {
  BotMessageSquare,
  BatteryCharging,
  Fingerprint,
  ShieldHalf,
  PlugZap,
  GlobeLock,
} from "lucide-react";

export const startingFeatures = [
  "Find a world that suits you and you want to enter",
  "Enter the world by reading basmalah to be safe",
  "No need to beat around the bush, just stay on the gas and have fun",
];

// import user1 from "../assets/profile-pictures/user1.jpg";
// import user2 from "../assets/profile-pictures/user2.jpg";
// import user3 from "../assets/profile-pictures/user3.jpg";
// import user4 from "../assets/profile-pictures/user4.jpg";
// import user5 from "../assets/profile-pictures/user5.jpg";
// import user6 from "../assets/profile-pictures/user6.jpg";

interface NavItem {
  label: string;
  href: string;
}

interface Testimonial {
  user: string;
  company: string;
  image: StaticImageData;
  text: string;
}

interface Feature {
  icon: JSX.Element;
  text: string;
  description: string;
}

interface ChecklistItem {
  title: string;
  description: string;
}

interface PricingOption {
  title: string;
  price: string;
  features: string[];
}

interface ResourceLink {
  href: string;
  text: string;
}

export const navItems: NavItem[] = [
  { label: "Features", href: "#" },
  { label: "Workflow", href: "#" },
  { label: "Pricing", href: "#" },
  { label: "Testimonials", href: "#" },
];

// export const testimonials: Testimonial[] = [
//   {
//     user: "John Doe",
//     company: "Stellar Solutions",
//     image: user1,
//     text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
//   },
//   {
//     user: "Jane Smith",
//     company: "Blue Horizon Technologies",
//     image: user2,
//     text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life.",
//   },
//   {
//     user: "David Johnson",
//     company: "Quantum Innovations",
//     image: user3,
//     text: "Working with this company was a pleasure. Their attention to detail and commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
//   },
//   {
//     user: "Ronee Brown",
//     company: "Fusion Dynamics",
//     image: user4,
//     text: "Working with the team at XYZ Company was a game-changer for our project. Their attention to detail and innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
//   },
//   {
//     user: "Michael Wilson",
//     company: "Visionary Creations",
//     image: user5,
//     text: "I am amazed by the level of professionalism and dedication shown by the team. They were able to exceed our expectations and deliver outstanding results.",
//   },
//   {
//     user: "Emily Davis",
//     company: "Synergy Systems",
//     image: user6,
//     text: "The team went above and beyond to ensure our project was a success. Their expertise and dedication are unmatched. I look forward to working with them again in the future.",
//   },
// ];

export const features: Feature[] = [
  {
    icon: <BotMessageSquare />,
    text: "Dashboard with market bechmarking",
    description:
      "Insights from the market to understand the opportunties and leverage them to grow business.",
  },
  {
    icon: <Fingerprint />,
    text: "Multi-Platform Compatibility",
    description:
      "Build VR applications that run seamlessly across multiple platforms, including mobile, desktop, and VR headsets.",
  },
  {
    icon: <PlugZap />,
    text: "Leaderboards to drive Performance",
    description:
      "Involve, Recognise and Reward your team and build future leaders",
  },

  {
    icon: <BatteryCharging />,
    text: "Hassle free Tips Management",
    description:
      "Manage Tips with ease through choosing from our predefined best practices",
  },
  {
    icon: <ShieldHalf />,
    text: "Track & drive Operational Excellence",
    description:
      "Tools to track, manage and improve operational efficiency and improve profitability",
  },
  {
    icon: <GlobeLock />,
    text: "Integrated Marketing that delivers Real Growth",
    description:
      "Gain valuable insights into user interactions and behavior within your VR applications with an integrated analytics dashboard.",
  },
];

export const checklistItems: ChecklistItem[] = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions: PricingOption[] = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks: ResourceLink[] = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks: ResourceLink[] = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks: ResourceLink[] = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
export const exploreWorlds = [
  {
    id: "world-1",
    desc: "Track the entire digital journey every step of the way and boost your Online Takeaway sales and Cart conversions",
    imgUrl: "/ex1.jpg",
    title: "Cutting-edge Online Ordering",
  },
  {
    id: "world-2",
    desc: "Manage and update the 3rd Party menu on the fly with precise reports and settlements like never before",
    imgUrl: "/ex2.jpg",
    title: "Seamless 3rd Party integrations",
  },
  {
    id: "world-3",
    desc: "Get real time insights of what is working and what is not on your menu to drive the right marketing strategies",
    imgUrl: "/ex3.jpg",
    title: "Data Insights like never before",
  },
  {
    id: "world-4",
    desc: "Reports curated and built with Restaurant owners to get what really matters and save the manual efforts",

    imgUrl: "/ex4.jpg",
    title: "Reports that drive Business",
  },
  {
    id: "world-5",
    desc: "No questions asked coverage against customer disputes and chargebacks",

    imgUrl: "/ex5.jpg",
    title: "Protection against Disputes",
  },
];
export const faqs = [
  {
    question: "What is a Point of Sale (POS) system?",
    answer:
      "A Point of Sale (POS) system is a combination of software and hardware that enables businesses to conduct transactions with customers. It typically includes a software interface to process sales, manage inventory, and track customer data, along with hardware components like a cash register, barcode scanner, and receipt printer.",
  },
  {
    question: "What are the benefits of using a POS system?",
    answer:
      "Using a POS system offers several benefits, including improved efficiency in processing transactions, better inventory management through real-time tracking, enhanced customer experience with features like quick checkouts and loyalty programs, and detailed reporting and analytics for business insights.",
  },
  {
    question: "How does a POS system differ from a traditional cash register?",
    answer:
      "While a traditional cash register is primarily used to ring up sales and handle cash transactions, a POS system is a more advanced solution that integrates various functionalities. POS systems can process multiple payment types, manage inventory levels in real-time, generate detailed sales reports, and even handle customer relationship management tasks.",
  },
  {
    question: "What types of businesses can benefit from using a POS system?",
    answer:
      "POS systems are versatile and can benefit a wide range of businesses across industries, including retail stores, restaurants, cafes, bars, salons, spas, grocery stores, and more. Any business that conducts transactions with customers can benefit from the features and capabilities offered by a POS system.",
  },
  {
    question: "What features should I look for in a POS system?",
    answer:
      "When choosing a POS system, consider features such as ease of use, compatibility with your business type, inventory management capabilities, integration with other software (such as accounting or ecommerce platforms), security features for processing payments, customer support options, and scalability to accommodate your business's growth.",
  },
  // Add more FAQs as needed
];

// FEATURES SECTION
export const FEATURES = [
  {
    title: "Real maps can be offline",
    icon: "/map.svg",
    variant: "green",
    description:
      "We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location",
  },
  {
    title: "Set an adventure schedule",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Schedule an adventure with friends. On holidays, there are many interesting offers from Hilink. That way, there's no more discussion",
  },
  {
    title: "Technology using augment reality",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection",
  },
  {
    title: "Many new locations every month",
    icon: "/location.svg",
    variant: "orange",
    description:
      "Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing",
  },
];
