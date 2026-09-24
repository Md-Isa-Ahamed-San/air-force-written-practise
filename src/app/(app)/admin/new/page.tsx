"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, PlusCircle, Loader2, Sparkles } from "lucide-react";
import { api } from "~/trpc/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function CreateQuizSetPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const utils = api.useUtils();
  const createMutation = api.quizSet.create.useMutation({
    onSuccess: (data) => {
      void utils.quizSet.getAll.invalidate();
      router.push(`/admin/${data.id}`);
    },
    onError: (err) => {
      setError(err.message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) {
      setError("Please provide a title for the quiz set.");
      return;
    }
    setError(null);
    createMutation.mutate({ title: title.trim() });
  };

  return (
    <div className="max-w-2xl mx-auto py-8 space-y-6">
      <Link
        href="/admin"
        className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        <span>Back to Admin Studio</span>
      </Link>

      <div className="p-8 rounded-3xl border border-border/50 bg-card/60 backdrop-blur-md shadow-2xl space-y-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-500/10 text-sky-400 text-xs font-semibold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Step 1 of 2</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
            Initialize New Quiz Set
          </h1>
          <p className="text-sm text-muted-foreground">
            Give this quiz set a clear name. After initializing, you will upload book page scans and the MDX answer sheet.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div className="space-y-2">
            <label
              htmlFor="title"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Quiz Set Title / Subject
            </label>
            <Input
              id="title"
              placeholder="e.g. Physics Ch-3 (Motion & Newton's Laws)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="h-12 bg-background/80 text-base"
              autoFocus
            />
            {error && <p className="text-xs text-destructive">{error}</p>}
          </div>

          <div className="pt-2 flex justify-end gap-3">
            <Link
              href="/admin"
              className={buttonVariants({ variant: "outline" })}
            >
              Cancel
            </Link>
            <Button
              type="submit"
              disabled={createMutation.isPending || !title.trim()}
              className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground min-w-36"
            >
              {createMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Creating...</span>
                </>
              ) : (
                <>
                  <PlusCircle className="h-4 w-4" />
                  <span>Next: Configure</span>
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
