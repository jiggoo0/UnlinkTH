"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { mainNav } from "@/constants/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

/**
 * 
 * Navbar: Tactical Desktop Navigation
 * ออกแบบมาเพื่อความแม่นยำและการแสดงผลแบบ Minimalist Specialist
 */
export const Navbar = () => {
  const pathname = usePathname();

  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList className="border-border/40 bg-muted/5 flex gap-1 rounded-full border p-1 backdrop-blur-sm">
        {mainNav.map((item) => {
          const isActive = pathname === item.href;

          return (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink
                  active={isActive}
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "relative h-9 rounded-full bg-transparent px-5 transition-all duration-300 ease-in-out",
                    isActive
                      ? "bg-primary/10 text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.1)]"
                      : "text-muted-foreground hover:bg-muted/10 hover:text-foreground"
                  )}
                >
                  <span className="text-[10px] font-bold tracking-[0.2em] uppercase">
                    {item.title}
                  </span>

                  {/* Operational Indicator: จุดสถานะการเข้าถึงหน้าปัจจุบัน */}
                  {isActive && (
                    <span
                      className="absolute -bottom-1.5 left-1/2 h-0.5 w-4 -translate-x-1/2 rounded-full bg-primary"
                      aria-hidden="true"
                    />
                  )}

                  {/* Decorative Scanline: ปรากฏเมื่อ Hover */}
                  <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity hover:opacity-100">
                    <span className="absolute inset-x-4 top-0 h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
                  </span>
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
