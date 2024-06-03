import {
  BotMessageSquare,
  BatteryCharging,
  Fingerprint,
  ShieldHalf,
  PlugZap,
  GlobeLock,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

// interface PricingOption {
//   title: string;
//   price: string;
//   features: string[];
// }

interface Feature {
  icon: JSX.Element;
  text: string;
  description: string;
}

export const navItems: NavItem[] = [
  { label: "Features", href: "#feat" },
  { label: "FAQ", href: "#faq" },
  { label: "About Us", href: "#" },
];

// export const pricingOptions: PricingOption[] = [
//   {
//     title: "Free",
//     price: "$0",
//     features: [
//       "Private board sharing",
//       "5 Gb Storage",
//       "Web Analytics",
//       "Private Mode",
//     ],
//   },
//   {
//     title: "Pro",
//     price: "$10",
//     features: [
//       "Private board sharing",
//       "10 Gb Storage",
//       "Web Analytics (Advance)",
//       "Private Mode",
//     ],
//   },
//   {
//     title: "Enterprise",
//     price: "$200",
//     features: [
//       "Private board sharing",
//       "Unlimited Storage",
//       "High Performance Network",
//       "Private Mode",
//     ],
//   },
// ];

export const explore = [
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
export const FEATURESrow1 = [
  {
    title: "Cutting-edge Online Ordering",
    icon: "/map.svg",
    variant: "green",
    description:
      "Track the entire digital journey every step of the way and boost your Online Takeaway sales and Cart conversions",
    image: "/tech.jpg",
  },
  {
    title: "Seamless 3rd Party integrations",
    icon: "/map.svg",
    variant: "green",
    description:
      "Manage and update the 3rd Party menu on the fly with precise reports and settlements like never before",
    image: "/party.jpg",
  },
  {
    title: "Data Insights like never before",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Get real time insights of what is working and what is not on your menu to drive the right marketing strategies",
    image: "/insight.jpg",
  },
];
export const FEATURErow2 = [
  {
    title: "Reports that drive Business",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Reports curated and built with Restaurant owners to get what really matters and save the manual efforts",
    image: "/report.jpg",
  },
  {
    title: "Protection against Disputes",
    icon: "/location.svg",
    variant: "orange",
    description:
      "No questions asked coverage against customer disputes and chargebacks",
    image: "/disputes.jpg",
  },
];
export const FEATURES = [
  {
    title: "Cutting-edge Online Ordering",
    icon: "/map.svg",
    variant: "green",
    description:
      "Track the entire digital journey every step of the way and boost your Online Takeaway sales and Cart conversions",
    image: "/f1.jpg",
  },
  {
    title: "Seamless 3rd Party integrations",
    icon: "/map.svg",
    variant: "green",
    description:
      "Manage and update the 3rd Party menu on the fly with precise reports and settlements like never before",
    image: "/f2.jpg",
  },
  {
    title: "Data Insights like never before",
    icon: "/calendar.svg",
    variant: "green",
    description:
      "Get real time insights of what is working and what is not on your menu to drive the right marketing strategies",
    image: "/f3.jpg",
  },
  {
    title: "Reports that drive Business",
    icon: "/tech.svg",
    variant: "green",
    description:
      "Reports curated and built with Restaurant owners to get what really matters and save the manual efforts",
    image: "/f4.jpg",
  },
  {
    title: "Protection against Disputes",
    icon: "/location.svg",
    variant: "orange",
    description:
      "No questions asked coverage against customer disputes and chargebacks",
    image: "/jojo.jpg",
  },
];

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
