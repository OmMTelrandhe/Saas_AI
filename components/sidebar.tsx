"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessageSquare,
  Music,
  Settings,
  VideoIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const routes = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
    current: true,
    color: "text-sky-400",
  },

  {
    label: "Conversation",
    href: "/conversation",
    icon: MessageSquare,
    color: "text-violet-400",
  },

  {
    label: "Image Generation",
    href: "/image",
    icon: ImageIcon,
    color: "text-green-400",
  },

  {
    label: "Video Generation",
    href: "/video",
    icon: VideoIcon,
    color: "text-orange-400",
  },

  {
    label: "Music Generation",
    href: "/music",
    icon: Music,
    color: "text-emerald-400",
  },

  {
    label: "Code Generation",
    href: "/code",
    icon: Code,
    color: "text-indigo-400",
  },

  {
    label: "Settings",
    href: "/settings",
    icon: Settings,
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className="text-2xl font-bold">Toolkit</h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              key={route.href}
              href={route.href}
              className={cn(
                "group flex w-full justify-start cursor-pointer hover:text-white hover:bg-white/10 items-center rounded-lg transition p-3 text-sm font-medium",
                { "bg-white/10 text-white": pathname === route.href }
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("w-5 h-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
