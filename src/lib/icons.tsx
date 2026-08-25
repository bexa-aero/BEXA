import {
  Robot,
  Wind,
  Engine,
  AirplaneTilt,
  Thermometer,
  CubeTransparent,
  SlidersHorizontal,
  Cpu,
  Briefcase,
  Wrench,
  Users,
  Trophy,
  GraduationCap,
  Eye,
  Handshake,
  FilePdf,
  ArrowsClockwise,
  UsersThree,
  MagnifyingGlass,
  type IconProps,
} from "@phosphor-icons/react";
import type { ComponentType } from "react";

const iconMap: Record<string, ComponentType<IconProps>> = {
  Robot,
  Wind,
  Engine,
  AirplaneTilt,
  Thermometer,
  CubeTransparent,
  SlidersHorizontal,
  Cpu,
  Briefcase,
  Wrench,
  Users,
  Trophy,
  GraduationCap,
  Eye,
  Handshake,
  FilePdf,
  ArrowsClockwise,
  UsersThree,
  MagnifyingGlass,
};

export function getIcon(name: string): ComponentType<IconProps> {
  return iconMap[name] || Robot;
}
