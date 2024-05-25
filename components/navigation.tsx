"use client";

import { usePathname, useRouter } from "next/navigation";
import { NavButton } from "./nav-button";
import { useMedia } from "react-use";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { Button } from "./ui/button";
import { LayoutDashboard, Menu } from "lucide-react";

const routes = [
  {
    href: "/",
    label: "Overview",
    // icon: <LayoutDashboard size={16} />,
  },
  {
    href: "/orders",
    label: "Orders",
    // icon: <LayoutDashboard size={16} />,
  },
  {
    href: "/transactions",
    label: "Transactions",
    // icon: <LayoutDashboard size={16} />,
  },
  {
    href: "/senders",
    label: "Senders",
    // icon: <LayoutDashboard size={16} />,
  },
  {
    href: "/partners",
    label: "Partners",
    // icon: <LayoutDashboard size={16} />,
  },
  // {
  //   href: "/sweepers",
  //   label: "Sweepers",
  //   icon: "besky",
  // },

  // {
  //   href: "/centers",
  //   label: "Centers",
  //   icon: "besky",
  // },
  // {
  //   href: "/hubs",
  //   label: "Hubs",
  //   icon: "besky",
  // },

  // {
  //   href: "/corportate",
  //   label: "Corportate",
  //   icon: "besky",
  // },

  // {
  //   href: "/couriers",
  //   label: "Couriers",
  //   icon: "besky",
  // },
  // {
  //   href: "/connection-fee",
  //   label: "Connection Fee",
  //   icon: "besky",
  // },
  // {
  //   href: "/tiers",
  //   label: "Tiers",
  //   icon: "besky",
  // },
  // {
  //   href: "/determinants",
  //   label: "Determinants",
  //   icon: "besky",
  // },
  // {
  //   href: "/notifications",
  //   label: "Notifications",
  //   icon: "besky",
  // },
  // {
  //   href: "/tracking",
  //   label: "Tracking",
  //   icon: "besky",
  // },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();
  const isMobile = useMedia("(max-width: 1024px)", false);

  const onClick = (href: string) => {
    router.push(href);
    setIsOpen(false);
  };

  if (isMobile) {
    return (
      <Sheet open={isOpen} onOpenChange={setIsOpen}>
        <SheetTrigger>
          <Button
            variant="outline"
            size="sm"
            className="font-normal bg-white/10 hover:bg-white/20 hover:text-white border-none focus-visible:ring-offset-0 focus-visible:ring-transparent outline-none text-white focus:bg-white/30 transition"
          >
            <Menu className="size-4" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="px-2">
          <nav className="flex flex-col gap-y-2 pt-6">
            {routes.map((route) => (
              <Button
                key={route.href}
                variant={route.href === pathname ? "secondary" : "ghost"}
                onClick={() => onClick(route.href)}
                className="w-full justify-start"
              >
                {route.label}
              </Button>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    );
  }
  return (
    <nav className="hidden lg:flex items-center gap-x-2">
      {routes.map((route) => (
        <NavButton
          key={route.href}
          href={route.href}
          label={route.label}
          // icon={route.icon}
          isActive={pathname === route.href}
        />
      ))}
    </nav>
  );
};
