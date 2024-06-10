import {
  LayoutDashboard,
  MonitorSmartphone,
  CircleGauge,
  Crown,
  MessageCircleHeart,
  BadgeDollarSign,
} from "lucide-react";

interface Feature {
  icon: JSX.Element;
  text: string;
  description: string;
}

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

export const navData = [
  { _id: 102, title: "Features", href: "#feat" },
  { _id: 101, title: "About Us", href: "/" },
];
