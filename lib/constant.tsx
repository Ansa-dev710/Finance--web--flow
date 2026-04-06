import { BarChart3, LayoutDashboard, ShieldCheck, Users } from "lucide-react";

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Study", href: "/case-study" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export const SERVICES_DATA = [
  {
    id: 1,
    title: "Market Analysis",
    description: "Deep insights into market trends to help your business stay ahead.",
    icon: BarChart3,
  },
  {
    id: 2,
    title: "Accounting Advisor",
    description: "Expert financial advice tailored to your company's unique needs.",
    icon: LayoutDashboard,
  },
  {
    id: 3,
    title: "Financial Control",
    description: "Ensuring your business maintains healthy cash flow and compliance.",
    icon: ShieldCheck,
  },
  {
    id: 4,
    title: "General Business",
    description: "Helping you streamline operations and improve business efficiency.",
    icon: Users,
  },
];