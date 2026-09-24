"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  BarChart3,
  Settings,
  ShieldCheck,
  Compass,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
}

const NAV_ITEMS: NavItemProps[] = [
  {
    href: "/quiz",
    label: "Practice Quizzes",
    icon: BookOpen,
  },
  {
    href: "/dashboard",
    label: "Analytics & Stats",
    icon: BarChart3,
  },
  {
    href: "/admin",
    label: "Admin Studio",
    icon: Settings,
    badge: "Admin",
  },
];

export function AppSidebar({
  className,
  onNavigate,
}: {
  className?: string;
  onNavigate?: () => void;
}) {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "flex flex-col h-full bg-card/60 backdrop-blur-xl border-r border-border/40 select-none",
        className
      )}
    >
      {/* Brand Header */}
      <div className="p-6 border-b border-border/40 flex items-center gap-3">
        <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-sky-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-sky-500/20 text-white font-bold ring-1 ring-white/20">
          <ShieldCheck className="h-5 w-5" />
        </div>
        <div>
          <h1 className="font-bold text-sm tracking-wide text-foreground flex items-center gap-1.5">
            BAF WRITTEN <span className="text-xs px-1.5 py-0.5 rounded bg-sky-500/10 text-sky-400 font-mono">v1</span>
          </h1>
          <p className="text-xs text-muted-foreground font-medium">
            Air Force Exam Practice
          </p>
        </div>
      </div>

      {/* Nav List */}
      <div className="flex-1 py-6 px-3 space-y-1.5 overflow-y-auto">
        <div className="px-3 pb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">
          Main Navigation
        </div>
        {NAV_ITEMS.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));

          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "group flex items-center justify-between px-3.5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20 font-semibold"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/60"
              )}
            >
              <div className="flex items-center gap-3">
                <Icon
                  className={cn(
                    "h-4 w-4 transition-transform group-hover:scale-110",
                    isActive ? "text-primary-foreground" : "text-muted-foreground"
                  )}
                />
                <span>{item.label}</span>
              </div>
              {item.badge && (
                <span
                  className={cn(
                    "text-[10px] uppercase font-mono px-1.5 py-0.5 rounded-md",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-muted text-muted-foreground"
                  )}
                >
                  {item.badge}
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Bottom Mission Card */}
      <div className="p-4 border-t border-border/40">
        <div className="rounded-xl p-3.5 bg-gradient-to-br from-sky-500/10 via-indigo-500/5 to-transparent border border-sky-500/20 space-y-1.5">
          <div className="flex items-center gap-2 text-sky-400 font-semibold text-xs">
            <Compass className="h-3.5 w-3.5" />
            <span>Mission Objective</span>
          </div>
          <p className="text-[11px] text-muted-foreground leading-relaxed">
            Target 90%+ accuracy on all chapters before the final written test date.
          </p>
        </div>
      </div>
    </aside>
  );
}
