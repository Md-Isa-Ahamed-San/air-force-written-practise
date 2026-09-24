"use client";

import { usePathname } from "next/navigation";
import { Menu, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

const ROUTE_TITLES: Record<string, { title: string; subtitle: string }> = {
  "/quiz": {
    title: "Exam Practice",
    subtitle: "Select a question set to begin your practice session",
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
  const { theme, toggleTheme, mounted } = useTheme();

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
    <header className="h-16 px-4 sm:px-6 border-b border-border/50 bg-card/70 backdrop-blur-xl flex items-center justify-between sticky top-0 z-30 shadow-sm">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={onOpenMobileMenu}
          className="md:hidden h-9 w-9 text-muted-foreground hover:text-foreground hover:bg-accent rounded-xl"
        >
          <Menu className="h-5 w-5" />
        </Button>
        <div>
          <h2 className="font-bold text-sm sm:text-[15px] text-foreground tracking-tight leading-tight">
            {routeInfo.title}
          </h2>
          <p className="text-[11px] text-muted-foreground hidden sm:block mt-0.5 font-medium">
            {routeInfo.subtitle}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2.5">
        {/* System Ready Badge */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 text-emerald-500 dark:text-emerald-400 text-xs font-semibold">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>LIVE</span>
        </div>

        {/* Theme Switcher */}
        {mounted && (
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="relative h-9 w-9 rounded-xl flex items-center justify-center border border-border/60 bg-background hover:bg-accent hover:border-primary/30 transition-all duration-200 text-muted-foreground hover:text-foreground group"
          >
            <div className="absolute inset-0 rounded-xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            {theme === "dark" ? (
              <Sun className="h-4 w-4 transition-transform group-hover:rotate-12" />
            ) : (
              <Moon className="h-4 w-4 transition-transform group-hover:-rotate-12" />
            )}
          </button>
        )}
      </div>
    </header>
  );
}