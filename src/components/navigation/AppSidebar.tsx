"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  BarChart3,
  Settings,
  ShieldCheck,
  Target,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface NavItemProps {
  href: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  badge?: string;
  description?: string;
}

const NAV_ITEMS: NavItemProps[] = [
  {
    href: "/quiz",
    label: "Practice Quizzes",
    icon: BookOpen,
    description: "Chapter question sets",
  },
  {
    href: "/dashboard",
    label: "Analytics & Stats",
    icon: BarChart3,
    description: "Performance overview",
  },
  {
    href: "/admin",
    label: "Admin Studio",
    icon: Settings,
    badge: "Admin",
    description: "Upload & manage content",
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
        "flex flex-col h-full select-none",
        "bg-sidebar/95 backdrop-blur-xl border-r border-sidebar-border",
        className
      )}
    >
      {/* Brand Header */}
      <div className="p-5 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-lg shadow-primary/25 text-white ring-1 ring-white/15 flex-shrink-0">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <h1 className="font-extrabold text-sm tracking-tight text-sidebar-foreground">
                BAF WRITTEN
              </h1>
              <span className="text-[10px] px-1.5 py-0.5 rounded-md bg-primary/15 text-primary font-bold font-mono">
                v1
              </span>
            </div>
            <p className="text-[11px] text-sidebar-foreground/50 font-medium mt-0.5 truncate">
              Air Force Exam Practice
            </p>
          </div>
        </div>
      </div>

      {/* Nav List */}
      <div className="flex-1 py-5 px-3 space-y-1 overflow-y-auto">
        <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-widest text-sidebar-foreground/35">
          Navigation
        </p>
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
                "group flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-150",
                isActive
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/25"
                  : "text-sidebar-foreground/60 hover:text-sidebar-foreground hover:bg-sidebar-accent"
              )}
            >
              <div className="flex items-center gap-3 min-w-0">
                <div
                  className={cn(
                    "h-7 w-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all",
                    isActive
                      ? "bg-white/20"
                      : "bg-sidebar-accent group-hover:bg-sidebar-accent/80"
                  )}
                >
                  <Icon
                    className={cn(
                      "h-3.5 w-3.5",
                      isActive
                        ? "text-primary-foreground"
                        : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground"
                    )}
                  />
                </div>
                <div className="min-w-0">
                  <div className="truncate font-semibold text-[13px]">{item.label}</div>
                  {item.description && (
                    <div
                      className={cn(
                        "text-[10px] truncate font-normal mt-0.5 leading-none",
                        isActive ? "text-white/60" : "text-sidebar-foreground/35"
                      )}
                    >
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
              {item.badge && (
                <span
                  className={cn(
                    "text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded-md flex-shrink-0",
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-sidebar-accent text-sidebar-foreground/40"
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
      <div className="p-3 border-t border-sidebar-border">
        <div className="rounded-xl p-3.5 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border border-primary/20 space-y-2">
          <div className="flex items-center gap-2 text-primary font-bold text-xs">
            <Target className="h-3.5 w-3.5" />
            <span>Mission Target</span>
          </div>
          <p className="text-[11px] text-sidebar-foreground/50 leading-relaxed">
            Achieve 90%+ accuracy on all chapters before the final exam.
          </p>
          <div className="w-full h-1.5 rounded-full bg-sidebar-accent overflow-hidden">
            <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-primary to-blue-500" />
          </div>
          <p className="text-[10px] text-sidebar-foreground/35 font-mono">72% overall mastery</p>
        </div>
      </div>
    </aside>
  );
}