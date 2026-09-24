"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  UploadCloud,
  Loader2,
  Trash2,
  MoveUp,
  MoveDown,
  Layers,
  ZoomIn,
} from "lucide-react";
import { api } from "~/trpc/react";
import { env } from "~/env";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ImageItem {
  id: string;
  url: string;
  order: number;
  publicId?: string | null;
}

interface ImageUploadSectionProps {
  quizSetId: string;
  images: ImageItem[];
}

export function ImageUploadSection({
  quizSetId,
  images,
}: ImageUploadSectionProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [selectedPreview, setSelectedPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const utils = api.useUtils();

  const addImageMutation = api.image.addToQuizSet.useMutation({
    onSuccess: () => {
      void utils.quizSet.getById.invalidate({ id: quizSetId });
    },
  });

  const removeImageMutation = api.image.removeFromQuizSet.useMutation({
    onSuccess: () => {
      void utils.quizSet.getById.invalidate({ id: quizSetId });
    },
  });

  const reorderMutation = api.image.reorder.useMutation({
    onSuccess: () => {
      void utils.quizSet.getById.invalidate({ id: quizSetId });
    },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setUploadError(null);

    const cloudName = env.NEXT_PUBLIC_CLOUD_NAME;
    const preset = env.NEXT_PUBLIC_CLOUDINARY_PRESET;
    const folder = env.NEXT_PUBLIC_CLOUDINARY_FOLDER;

    const currentMaxOrder = images.reduce(
      (max, img) => Math.max(max, img.order),
      -1
    );

    try {
      for (let i = 0; i < files.length; i++) {
        const file = files[i];
        if (!file) continue;

        const formData = new FormData();
        formData.append("file", file);
        formData.append("upload_preset", preset);
        if (folder) {
          formData.append("folder", folder);
        }

        const res = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        if (!res.ok) {
          const errData = await res.json().catch(() => null);
          throw new Error(
            errData?.error?.message || `Failed to upload image ${file.name}`
          );
        }

        const data = await res.json();
        const secureUrl = data.secure_url as string;
        const publicId = data.public_id as string;

        await addImageMutation.mutateAsync({
          quizSetId,
          url: secureUrl,
          publicId,
          order: currentMaxOrder + 1 + i,
        });
      }
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : "Cloudinary upload failed";
      setUploadError(msg);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    }
  };

  const handleMove = (index: number, direction: "up" | "down") => {
    const targetIndex = direction === "up" ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= images.length) return;

    const currentImg = images[index];
    const targetImg = images[targetIndex];
    if (!currentImg || !targetImg) return;

    reorderMutation.mutate({
      items: [
        { id: currentImg.id, order: targetImg.order },
        { id: targetImg.id, order: currentImg.order },
      ],
    });
  };

  const handleDelete = (id: string, pageNum: number) => {
    if (confirm(`Remove Page ${pageNum}?`)) {
      removeImageMutation.mutate({ id });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
        <div>
          <h3 className="text-lg font-bold text-foreground flex items-center gap-2">
            <Layers className="h-5 w-5 text-sky-400" />
            <span>Book Page Images ({images.length})</span>
          </h3>
          <p className="text-xs text-muted-foreground mt-0.5">
            Upload clear photos or scans of the exam questions book pages.
          </p>
        </div>

        <div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={handleFileUpload}
            disabled={isUploading}
          />
          <Button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="gap-2 bg-sky-600 hover:bg-sky-500 text-white shadow-md shadow-sky-500/20"
          >
            {isUploading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Uploading to Cloudinary...</span>
              </>
            ) : (
              <>
                <UploadCloud className="h-4 w-4" />
                <span>Upload Page Scans</span>
              </>
            )}
          </Button>
        </div>
      </div>

      {uploadError && (
        <div className="p-3 rounded-xl bg-destructive/10 border border-destructive/20 text-xs text-destructive">
          {uploadError}
        </div>
      )}

      {images.length === 0 ? (
        <div
          onClick={() => fileInputRef.current?.click()}
          className="border-2 border-dashed border-border/70 hover:border-sky-500/60 rounded-2xl p-10 text-center cursor-pointer transition-colors bg-card/20 space-y-3"
        >
          <div className="h-12 w-12 mx-auto rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400">
            <UploadCloud className="h-6 w-6" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">
              Drop or click to upload page scans
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Supports JPG, PNG, WEBP. Upload multiple pages at once.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={img.id}
              className="group relative rounded-xl border border-border/50 bg-card/60 overflow-hidden flex flex-col justify-between"
            >
              <div
                className="relative aspect-[3/4] bg-muted/30 cursor-pointer overflow-hidden"
                onClick={() => setSelectedPreview(img.url)}
              >
                <Image
                  src={img.url}
                  alt={`Page ${idx + 1}`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <ZoomIn className="h-6 w-6 text-white" />
                </div>
                <div className="absolute top-2 left-2">
                  <Badge className="bg-black/70 backdrop-blur-md text-white border-white/10 font-mono text-[11px]">
                    Page {idx + 1}
                  </Badge>
                </div>
              </div>

              {/* Controls bar */}
              <div className="p-2 bg-card/90 border-t border-border/40 flex items-center justify-between">
                <div className="flex items-center gap-1">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                    disabled={idx === 0 || reorderMutation.isPending}
                    onClick={() => handleMove(idx, "up")}
                    title="Move earlier"
                  >
                    <MoveUp className="h-3.5 w-3.5" />
                  </Button>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                    disabled={
                      idx === images.length - 1 || reorderMutation.isPending
                    }
                    onClick={() => handleMove(idx, "down")}
                    title="Move later"
                  >
                    <MoveDown className="h-3.5 w-3.5" />
                  </Button>
                </div>

                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-muted-foreground hover:text-destructive hover:bg-destructive/10"
                  onClick={() => handleDelete(img.id, idx + 1)}
                  disabled={removeImageMutation.isPending}
                  title="Remove page"
                >
                  <Trash2 className="h-3.5 w-3.5" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Fullscreen Preview Modal */}
      <Dialog
        open={!!selectedPreview}
        onOpenChange={(open) => !open && setSelectedPreview(null)}
      >
        <DialogContent className="max-w-4xl max-h-[90vh] p-2 bg-black/95 border-border/30 overflow-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>Image Preview</DialogTitle>
          </DialogHeader>
          {selectedPreview && (
            <div className="relative w-full min-h-[70vh] flex items-center justify-center">
              <img
                src={selectedPreview}
                alt="Page Preview"
                className="max-h-[85vh] w-auto object-contain rounded-lg"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
