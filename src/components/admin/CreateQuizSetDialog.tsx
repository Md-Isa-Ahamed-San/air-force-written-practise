"use client";

import { useState } from "react";
import { PlusCircle, Loader2 } from "lucide-react";
import { api } from "~/trpc/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export function CreateQuizSetDialog({
  onCreated,
}: {
  onCreated?: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState<string | null>(null);

  const utils = api.useUtils();
  const createMutation = api.quizSet.create.useMutation({
    onSuccess: (data) => {
      setTitle("");
      setError(null);
      setOpen(false);
      void utils.quizSet.getAll.invalidate();
      if (onCreated) {
        onCreated(data.id);
      }
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
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger
        render={
          <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20">
            <PlusCircle className="h-4 w-4" />
            <span>New Quiz Set</span>
          </Button>
        }
      />
      <DialogContent className="sm:max-w-md bg-card border-border/50">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">
            Create New Quiz Set
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Enter a title for this test subject or book chapter (e.g. &ldquo;Physics
            Ch-3: Dynamics&rdquo; or &ldquo;IQ Test Set 1&rdquo;).
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4 py-2">
          <div className="space-y-2">
            <label
              htmlFor="quiz-title"
              className="text-xs font-semibold uppercase tracking-wider text-muted-foreground"
            >
              Quiz Set Title
            </label>
            <Input
              id="quiz-title"
              placeholder="e.g. Physics Ch-3 (Motion & Force)"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-background/80"
              autoFocus
            />
            {error && <p className="text-xs text-destructive">{error}</p>}
          </div>

          <DialogFooter className="pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => setOpen(false)}
              disabled={createMutation.isPending}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={createMutation.isPending || !title.trim()}
              className="gap-2"
            >
              {createMutation.isPending ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Creating...</span>
                </>
              ) : (
                <span>Create & Configure</span>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
