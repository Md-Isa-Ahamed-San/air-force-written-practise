"use client";

import Link from "next/link";
import { useState } from "react";
import {
  ArrowLeft,
  Play,
  Layers,
  FileText,
  Calendar,
  Sparkles,
} from "lucide-react";
import { api } from "~/trpc/react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ImageUploadSection } from "./ImageUploadSection";
import { MdxUploadSection } from "./MdxUploadSection";
import { AnswerList } from "./AnswerList";
import { EditQuizSetSkeleton } from "@/components/skeletons/EditQuizSetSkeleton";

export function EditQuizSetPage({ quizSetId }: { quizSetId: string }) {
  const { data: quizSet, isLoading } = api.quizSet.getById.useQuery({
    id: quizSetId,
  });

  const [activeTab, setActiveTab] = useState<string>("images");

  if (isLoading) {
    return <EditQuizSetSkeleton />;
  }

  if (!quizSet) {
    return (
      <div className="max-w-xl mx-auto text-center py-20 space-y-4">
        <h2 className="text-2xl font-bold text-foreground">Quiz Set Not Found</h2>
        <p className="text-sm text-muted-foreground">
          The requested quiz set does not exist or may have been deleted.
        </p>
        <Link href="/admin" className={buttonVariants()}>
          Return to Admin
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-8 max-w-6xl mx-auto">
      {/* Top Navigation & Status */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-border/40 pb-5">
        <div className="space-y-1">
          <Link
            href="/admin"
            className="text-xs text-muted-foreground hover:text-foreground flex items-center gap-1.5 transition-colors mb-2"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to All Sets</span>
          </Link>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground flex items-center gap-2.5">
            <span>{quizSet.title}</span>
          </h1>
          <div className="flex items-center gap-3 pt-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1 font-mono">
              <Calendar className="h-3.5 w-3.5" />
              Created {new Date(quizSet.createdAt).toLocaleDateString()}
            </span>
            <span>•</span>
            <span className="font-mono text-sky-400">
              {quizSet.images.length} Pages
            </span>
            <span>•</span>
            <span className="font-mono text-indigo-400">
              {quizSet.answers.length} Questions
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href={`/quiz/${quizSet.id}`}
            className={buttonVariants({
              className:
                "gap-2 bg-gradient-to-r from-sky-600 to-indigo-600 hover:from-sky-500 hover:to-indigo-500 text-white shadow-lg shadow-sky-500/20",
            })}
          >
            <Play className="h-4 w-4 fill-current" />
            <span>Launch Quiz Practice</span>
          </Link>
        </div>
      </div>

      {/* Main Tabs Area */}
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="bg-muted/50 p-1 rounded-xl">
          <TabsTrigger value="images" className="gap-2 rounded-lg text-xs sm:text-sm">
            <Layers className="h-4 w-4" />
            <span>Book Pages ({quizSet.images.length})</span>
          </TabsTrigger>
          <TabsTrigger value="answers" className="gap-2 rounded-lg text-xs sm:text-sm">
            <FileText className="h-4 w-4" />
            <span>MDX Answer Sheet ({quizSet.answers.length})</span>
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images" className="space-y-6 mt-0">
          <ImageUploadSection quizSetId={quizSet.id} images={quizSet.images} />
        </TabsContent>

        <TabsContent value="answers" className="space-y-8 mt-0">
          <MdxUploadSection
            quizSetId={quizSet.id}
            currentAnswerCount={quizSet.answers.length}
          />
          <AnswerList quizSetId={quizSet.id} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
