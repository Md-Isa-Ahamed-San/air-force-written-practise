"use client";

import { useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import {
  ShieldCheck,
  ArrowRight,
  Loader2,
  AlertCircle,
  Eye,
  EyeOff,
  BookOpen,
  Lock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const from = searchParams.get("from") ?? "/admin";

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!password) {
      setError("Please enter the admin password.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null) as { error?: string } | null;
        throw new Error(data?.error ?? "Incorrect password. Access denied.");
      }

      router.push(from);
      router.refresh();
    } catch (err: unknown) {
      setError(
        err instanceof Error ? err.message : "Authentication failed. Try again."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 bg-background relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none" />

      <div className="relative w-full max-w-md space-y-0">
        {/* Card */}
        <div className="rounded-3xl border border-border/60 bg-card shadow-2xl overflow-hidden">
          {/* Top accent */}
          <div className="h-1 w-full bg-gradient-to-r from-primary via-blue-500 to-violet-500" />

          <div className="p-8 sm:p-10 space-y-7">
            {/* Brand */}
            <div className="text-center space-y-4">
              <div className="h-16 w-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-blue-600 flex items-center justify-center shadow-xl shadow-primary/25 ring-1 ring-white/10 text-white">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <div>
                <h1 className="text-2xl font-extrabold tracking-tight text-foreground">
                  Admin Clearance
                </h1>
                <p className="text-sm text-muted-foreground mt-2 leading-relaxed">
                  Enter your master password to access question uploads and answer keys.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <label
                  htmlFor="password"
                  className="text-xs font-bold uppercase tracking-widest text-muted-foreground flex items-center gap-1.5"
                >
                  <Lock className="h-3 w-3" />
                  Master Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="h-12 bg-background pr-11 font-mono text-sm rounded-xl border-border/60 focus:border-primary/50"
                    autoFocus
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4" />
                    ) : (
                      <Eye className="h-4 w-4" />
                    )}
                  </button>
                </div>
                {error && (
                  <div className="flex items-center gap-2 text-xs text-destructive pt-1 px-1">
                    <AlertCircle className="h-3.5 w-3.5 flex-shrink-0" />
                    <span>{error}</span>
                  </div>
                )}
              </div>

              <Button
                type="submit"
                disabled={isLoading || !password}
                className="w-full h-12 gap-2 bg-gradient-to-r from-primary to-blue-600 hover:from-primary/90 hover:to-blue-600/90 text-primary-foreground font-bold shadow-lg shadow-primary/20 rounded-xl text-sm"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    <span>Verifying credentials…</span>
                  </>
                ) : (
                  <>
                    <span>Access Admin Studio</span>
                    <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </Button>
            </form>

            {/* Back link */}
            <div className="pt-1 border-t border-border/40 text-center">
              <Link
                href="/quiz"
                className="text-xs text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5 transition-colors font-medium"
              >
                <BookOpen className="h-3.5 w-3.5 text-primary/60" />
                <span>Return to Practice Quizzes</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center text-muted-foreground text-sm">
          Loading clearance portal…
        </div>
      }
    >
      <LoginForm />
    </Suspense>
  );
}