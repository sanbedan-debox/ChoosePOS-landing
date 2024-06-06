import {
  LayoutDashboard,
  MonitorSmartphone,
  CircleGauge,
  Crown,
  MessageCircleHeart,
  BadgeDollarSign,
} from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

interface Feature {
  icon: JSX.Element;
  text: string;
  description: string;
}

export const navItems: NavItem[] = [
  { label: "Features", href: "#feat" },
  // { label: "FAQ", href: "#faq" },
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

export const features: Feature[] = [
  {
    icon: <LayoutDashboard />,
    text: "Dashboard with market bechmarking",
    description:
      "Insights from the market to understand the opportunties and leverage them to grow business.",
  },
  {
    icon: <MonitorSmartphone />,
    text: "Multi-Platform Compatibility",
    description:
      "Seamless Integration with the major 3rd party deliveries along with reports and settlements.",
  },
  {
    icon: <CircleGauge />,
    text: "Track & drive Operational Excellence",
    description:
      "Tools to track, manage and improve operational efficiency and improve profitability and process adherence",
  },

  {
    icon: <BadgeDollarSign />,
    text: "Hassle free Tips Management",
    description:
      "Manage Tips with ease through choosing from our predefined best practices and improve Employee Satisfaction and Happiness",
  },
  {
    icon: <Crown />,
    text: "Leaderboards to drive Performance",
    description:
      "Involve, Recognise and Reward your team and retain your best Talent and drive better Customer Experience",
  },
  {
    icon: <MessageCircleHeart />,
    text: "Integrated Marketing delivering Real Growth",
    description:
      "Data, Market Insights and a team with a decade plus of Restaurant marketing experience to deliver unmatched ROI",
  },
];

export const gridFeatItems = [
  {
    id: 1,
    title: "Cutting-edge Online Ordering",
    description:
      "Track the entire digital journey every step of the way and boost your Online Takeaway sales and Cart conversions",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/tech.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Seamless 3rd Party integrations",
    description:
      "Manage and update the 3rd Party menu on the fly with precise reports and settlements like never before",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-end ",
    img: "",
    // img: "/party.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Data Insights like never before",
    description:
      "Get real time insights of what is working and what is not on your menu to drive the right marketing strategies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-end ",
    // img: "/insight.jpg",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Protection against Disputes",
    description:
      "No questions asked coverage against customer disputes and chargebacks",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-end ",
    spareImg: "/grid.svg",
    // img: "/disputes.jpg",
    img: "",
  },

  {
    id: 5,
    title: "Reports that drive Business",
    description:
      "Reports curated and built with Restaurant owners to get what really matters and save the manual efforts",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    // imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 rounded-lg ",
    // titleClassName: "justify-center md:justify-start lg:justify-center",
    titleClassName: "justify-end ",
    img: "/reports.webp",
    spareImg: "",
  },
  {
    id: 6,
    title: "Know more",
    description: "And do note that we are just getting started!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "/grid.svg",
  },
];

export const gridFeatItems2 = [
  {
    id: 1,
    title: "Cutting-edge Online Ordering",
    description:
      "Track the entire digital journey every step of the way and boost your Online Takeaway sales and Cart conversions",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/tech.webp",
    spareImg: "",
  },
  {
    id: 2,
    title: "Seamless 3rd Party integrations",
    description:
      "Manage and update the 3rd Party menu on the fly with precise reports and settlements like never before",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-end ",
    img: "/f2.jpg",
    // img: "/party.jpg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Data Insights like never before",
    description:
      "Get real time insights of what is working and what is not on your menu to drive the right marketing strategies",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-end ",
    // img: "/insight.jpg",
    img: "/f3.jpg",
    spareImg: "",
  },
  {
    id: 4,
    title: "Protection against Disputes",
    description:
      "No questions asked coverage against customer disputes and chargebacks",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-end ",
    spareImg: "/grid.svg",
    // img: "/disputes.jpg",
    img: "/f4.jpg",
  },

  {
    id: 5,
    title: "Reports that drive Business",
    description:
      "Reports curated and built with Restaurant owners to get what really matters and save the manual efforts",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "",
    // imgClassName: "absolute right-0 bottom-0 md:w-96 w-60 rounded-lg ",
    // titleClassName: "justify-center md:justify-start lg:justify-center",
    titleClassName: "justify-end ",
    img: "/reports.webp",
    spareImg: "",
  },
  {
    id: 6,
    title: "Know more",
    description: "And do note that we are just getting started!",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "/grid.svg",
  },
];
