"use client";

import { usePathname } from "next/navigation";
import { Menu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const ROUTE_TITLES: Record<string, { title: string; subtitle: string }> = {
  "/quiz": {
    title: "Exam Practice",
    subtitle: "Select a question set to begin practice session",
  },
  "/dashboard": {
    title: "Performance Analytics",
    subtitle: "Track your scores, timing, and weak areas",
  },
  "/admin": {
    title: "Admin Studio",
    subtitle: "Manage quiz sets, book pages, and answer sheets",
  },
  "/admin/new": {
    title: "Create Quiz Set",
    subtitle: "Initialize a new chapter or question bank",
  },
};

export function TopBar({ onOpenMobileMenu }: { onOpenMobileMenu: () => void }) {
  const pathname = usePathname();

  // Find matching route or fallback
  let routeInfo = ROUTE_TITLES[pathname];
  if (!routeInfo) {
    if (pathname.startsWith("/quiz/")) {
      routeInfo = {
        title: "Active Examination",
        subtitle: "Practice session in progress",
      };
    } else if (pathname.startsWith("/admin/")) {
      routeInfo = {
        title: "Quiz Set Configuration",
        subtitle: "Configure images and MDX answer sheets",
      };
    } else {
      routeInfo = {
        title: "Air Force Written Prep",
        subtitle: "Aviation Officer Candidate Training System",
      };
    }
  }

  return (
    <header className="h-16 px-6 border-b border-border/40 bg-card/40 backdrop-blur-md flex items-center justify-between sticky top-0 z-30">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenMobileMenu}
          className="md:hidden h-9 w-9 text-muted-foreground"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="font-semibold text-sm sm:text-base text-foreground">
            {routeInfo.title}
          </h2>
          <p className="text-xs text-muted-foreground hidden sm:block">
            {routeInfo.subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>SYSTEM READY</span>
        </div>
      </div>
    </header>
  );
}
