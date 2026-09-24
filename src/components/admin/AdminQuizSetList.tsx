"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  FileText,
  Image as ImageIcon,
  Clock,
  Trash2,
  Edit3,
  Play,
  Layers,
  Calendar,
} from "lucide-react";
import { api } from "~/trpc/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CreateQuizSetDialog } from "./CreateQuizSetDialog";
import { AdminQuizSetListSkeleton } from "@/components/skeletons/AdminQuizSetListSkeleton";

export function AdminQuizSetList() {
  const router = useRouter();
  const utils = api.useUtils();
  const { data: quizSets, isLoading } = api.quizSet.getAll.useQuery();

  const deleteMutation = api.quizSet.delete.useMutation({
    onSuccess: () => {
      void utils.quizSet.getAll.invalidate();
    },
  });

  const handleDelete = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete quiz set "${title}"? This will remove all associated images, answers, and session records.`)) {
      deleteMutation.mutate({ id });
    }
  };

  if (isLoading) {
    return <AdminQuizSetListSkeleton />;
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border/40 pb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-2.5">
            <Layers className="h-7 w-7 text-sky-400" />
            <span>Quiz Sets Management</span>
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Create and organize written test chapters with book page images and MDX answer keys.
          </p>
        </div>

        <CreateQuizSetDialog
          onCreated={(newId) => router.push(`/admin/${newId}`)}
        />
      </div>

      {/* Quiz Set Cards List */}
      {!quizSets || quizSets.length === 0 ? (
        <div className="text-center py-16 px-4 border border-dashed border-border/60 rounded-3xl bg-card/20 space-y-4">
          <div className="h-16 w-16 mx-auto rounded-2xl bg-sky-500/10 border border-sky-500/20 flex items-center justify-center text-sky-400">
            <FileText className="h-8 w-8" />
          </div>
          <div className="space-y-1">
            <h3 className="font-bold text-lg text-foreground">
              No Quiz Sets Created Yet
            </h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
              Get started by creating your first quiz set. You will be able to upload book page scans to Cloudinary and upload MDX answer sheets.
            </p>
          </div>
          <div className="pt-2">
            <CreateQuizSetDialog
              onCreated={(newId) => router.push(`/admin/${newId}`)}
            />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {quizSets.map((qs) => {
            const hasAnswers = qs._count.answers > 0;
            const hasImages = qs._count.images > 0;

            return (
              <div
                key={qs.id}
                className="group relative rounded-2xl border border-border/50 bg-card/60 backdrop-blur-sm p-6 hover:border-sky-500/40 transition-all duration-200 hover:shadow-xl hover:shadow-sky-500/5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <h2 className="text-lg font-bold text-foreground group-hover:text-sky-400 transition-colors line-clamp-2">
                      {qs.title}
                    </h2>
                    <span className="flex-shrink-0 text-[11px] text-muted-foreground flex items-center gap-1 font-mono">
                      <Calendar className="h-3 w-3" />
                      {new Date(qs.createdAt).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Metadata Badges */}
                  <div className="flex flex-wrap items-center gap-2 pt-4">
                    <Badge
                      variant="secondary"
                      className="gap-1.5 font-medium py-1 px-2.5 bg-background/80"
                    >
                      <ImageIcon className="h-3.5 w-3.5 text-sky-400" />
                      <span>{qs._count.images} Pages</span>
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="gap-1.5 font-medium py-1 px-2.5 bg-background/80"
                    >
                      <FileText className="h-3.5 w-3.5 text-indigo-400" />
                      <span>{qs._count.answers} Questions</span>
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="gap-1.5 font-medium py-1 px-2.5 bg-background/80"
                    >
                      <Clock className="h-3.5 w-3.5 text-amber-400" />
                      <span>{qs._count.sessions} Sessions</span>
                    </Badge>
                  </div>

                  {/* Readiness status */}
                  <div className="pt-3">
                    {hasAnswers && hasImages ? (
                      <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block" />
                        Ready for practice
                      </span>
                    ) : (
                      <span className="text-xs font-medium text-amber-400/90 flex items-center gap-1">
                        <span className="h-1.5 w-1.5 rounded-full bg-amber-400 inline-block" />
                        {!hasImages && !hasAnswers
                          ? "Requires images & answer sheet"
                          : !hasImages
                          ? "Upload page images"
                          : "Upload MDX answer sheet"}
                      </span>
                    )}
                  </div>
                </div>

                {/* Actions Footer */}
                <div className="flex items-center justify-between pt-6 border-t border-border/30 mt-6">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/${qs.id}`}
                      className={buttonVariants({
                        variant: "outline",
                        size: "sm",
                        className: "gap-1.5 text-xs hover:border-sky-500/50",
                      })}
                    >
                      <Edit3 className="h-3.5 w-3.5" />
                      <span>Manage & Upload</span>
                    </Link>

                    <Link
                      href={`/quiz/${qs.id}`}
                      className={buttonVariants({
                        variant: "secondary",
                        size: "sm",
                        className:
                          "gap-1.5 text-xs bg-sky-500/10 text-sky-400 hover:bg-sky-500/20",
                      })}
                    >
                      <Play className="h-3.5 w-3.5 fill-current" />
                      <span>Test Quiz</span>
                    </Link>
                  </div>

                  <Button
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                    onClick={() => handleDelete(qs.id, qs.title)}
                    disabled={deleteMutation.isPending}
                    title="Delete Quiz Set"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
