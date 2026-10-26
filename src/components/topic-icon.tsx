import {
  Briefcase,
  Car,
  GraduationCap,
  HeartHandshake,
  Home,
  Landmark,
  Scale,
  Shield,
  ShoppingBag,
  Smartphone,
  Users,
  type LucideIcon,
} from "lucide-react";
import type { Topic } from "@/data/content";

const iconMap: Record<Topic["icon"], LucideIcon> = {
  smartphone: Smartphone,
  shoppingBag: ShoppingBag,
  heartHandshake: HeartHandshake,
  graduationCap: GraduationCap,
  briefcase: Briefcase,
  home: Home,
  shield: Shield,
  car: Car,
  users: Users,
  landmark: Landmark,
  scale: Scale,
};

export function TopicIcon({
  icon,
  className,
}: {
  icon: Topic["icon"];
  className?: string;
}) {
  const Icon = iconMap[icon];
  return <Icon className={className} aria-hidden="true" />;
}
