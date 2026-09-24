"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  Maximize2,
  RotateCcw,
  ImageIcon,
  Maximize,
  Minimize,
  PanelRightClose,
  PanelRightOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface QuizImage {
  id: string;
  url: string;
  order: number;
}

interface QuizImageViewerProps {
  images: QuizImage[];
  currentImageIndex: number;
  onPageChange: (index: number) => void;
  isPanelCollapsed?: boolean;
  onTogglePanel?: () => void;
}

export function QuizImageViewer({
  images,
  currentImageIndex,
  onPageChange,
  isPanelCollapsed = false,
  onTogglePanel,
}: QuizImageViewerProps) {
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [fitMode, setFitMode] = useState<"height" | "width">("height");
  const [fullscreenOpen, setFullscreenOpen] = useState<boolean>(false);

  const currentImage = images[currentImageIndex];
  const totalPages = images.length;

  const handleZoomIn = () => {
    setZoomLevel((prev) => Math.min(Number((prev + 0.25).toFixed(2)), 3.0));
  };

  const handleZoomOut = () => {
    setZoomLevel((prev) => Math.max(Number((prev - 0.25).toFixed(2)), 0.5));
  };

  const handleResetZoom = () => {
    setZoomLevel(1);
    setFitMode("height");
  };

  const toggleFitMode = () => {
    setFitMode((prev) => (prev === "height" ? "width" : "height"));
    setZoomLevel(1);
  };

  if (!images || images.length === 0) {
    return (
      <div className="flex-1 h-full flex flex-col items-center justify-center p-8 bg-neutral-950/60 text-center space-y-3 select-none">
        <ImageIcon className="h-12 w-12 text-muted-foreground/40" />
        <h3 className="font-bold text-foreground text-sm">
          No Question Images Found
        </h3>
        <p className="text-xs text-muted-foreground max-w-sm">
          This quiz set doesn&apos;t have any book page scans uploaded yet.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col flex-1 h-full w-full min-h-0 bg-neutral-950/80 overflow-hidden relative select-none">
      {/* Top Floating/Attached Toolbar */}
      <div className="h-11 sm:h-12 px-3 sm:px-4 bg-muted/40 border-b border-border/40 flex items-center justify-between gap-2 flex-shrink-0 z-10">
        {/* Left: Page Navigator */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          <Badge
            variant="secondary"
            className="font-mono text-xs bg-background/90 text-foreground px-2.5 py-0.5"
          >
            Page {currentImageIndex + 1} of {totalPages}
          </Badge>

          <div className="flex items-center gap-0.5">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground hover:text-foreground"
              disabled={currentImageIndex === 0}
              onClick={() => onPageChange(currentImageIndex - 1)}
              title="Previous Page"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground hover:text-foreground"
              disabled={currentImageIndex === totalPages - 1}
              onClick={() => onPageChange(currentImageIndex + 1)}
              title="Next Page"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Right: Zoom, Fit, Fullscreen, and Maximize Panel */}
        <div className="flex items-center gap-1 sm:gap-1.5">
          {/* Fit Mode Toggle */}
          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-7 px-2 text-xs text-muted-foreground hover:text-foreground gap-1 hidden sm:flex"
            onClick={toggleFitMode}
            title={fitMode === "height" ? "Fit to Width (scroll down)" : "Fit to Screen"}
          >
            {fitMode === "height" ? (
              <>
                <Maximize className="h-3 w-3" />
                <span>Fit Width</span>
              </>
            ) : (
              <>
                <Minimize className="h-3 w-3" />
                <span>Fit Height</span>
              </>
            )}
          </Button>

          {/* Zoom Controls */}
          <div className="flex items-center gap-0.5 bg-background/80 rounded-lg p-0.5 border border-border/50">
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-foreground"
              onClick={handleZoomOut}
              disabled={zoomLevel <= 0.5}
              title="Zoom Out"
            >
              <ZoomOut className="h-3 w-3" />
            </Button>

            <span className="font-mono text-[10px] text-muted-foreground w-8 text-center select-none font-semibold">
              {Math.round(zoomLevel * 100)}%
            </span>

            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-6 w-6 text-muted-foreground hover:text-foreground"
              onClick={handleZoomIn}
              disabled={zoomLevel >= 3.0}
              title="Zoom In"
            >
              <ZoomIn className="h-3 w-3" />
            </Button>
          </div>

          {zoomLevel !== 1 && (
            <Button
              type="button"
              variant="ghost"
              size="icon"
              className="h-7 w-7 text-muted-foreground hover:text-foreground"
              onClick={handleResetZoom}
              title="Reset Zoom"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </Button>
          )}

          <Button
            type="button"
            variant="ghost"
            size="icon"
            className="h-7 w-7 text-muted-foreground hover:text-foreground"
            onClick={() => setFullscreenOpen(true)}
            title="Open Fullscreen Dialog"
          >
            <Maximize2 className="h-3.5 w-3.5" />
          </Button>

          {/* Quick toggle panel button on the viewer toolbar */}
          {onTogglePanel && (
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={onTogglePanel}
              className="h-7 px-2 text-xs gap-1 border-border/70 hidden lg:flex"
              title={isPanelCollapsed ? "Show Answer Panel" : "Maximize Question Image"}
            >
              {isPanelCollapsed ? (
                <>
                  <PanelRightOpen className="h-3.5 w-3.5 text-sky-400" />
                  <span>Show Panel</span>
                </>
              ) : (
                <>
                  <PanelRightClose className="h-3.5 w-3.5" />
                  <span>Max Image</span>
                </>
              )}
            </Button>
          )}
        </div>
      </div>

      {/* Main Image Display Canvas - Full Viewport Height */}
      <div className="relative flex-1 min-h-0 w-full overflow-auto bg-neutral-950/70 flex justify-center p-2 sm:p-4">
        {currentImage && (
          <div
            className={`transition-transform duration-100 ease-out origin-top flex justify-center ${
              fitMode === "height"
                ? "items-center min-h-full"
                : "items-start w-full"
            }`}
            style={{
              transform: zoomLevel !== 1 ? `scale(${zoomLevel})` : undefined,
            }}
          >
            <img
              src={currentImage.url}
              alt={`Book Page ${currentImageIndex + 1}`}
              className={`rounded-lg shadow-2xl select-none transition-all ${
                fitMode === "height"
                  ? "max-h-[calc(100vh-130px)] w-auto max-w-full object-contain"
                  : "w-full max-w-5xl h-auto object-contain"
              }`}
              draggable={false}
            />
          </div>
        )}
      </div>

      {/* Bottom Thumbnail Strip (if multiple pages) */}
      {totalPages > 1 && (
        <div className="h-12 px-3 bg-muted/20 border-t border-border/40 flex items-center gap-2 overflow-x-auto flex-shrink-0 z-10">
          <span className="text-[10px] uppercase font-mono text-muted-foreground mr-1 hidden sm:inline">
            Pages:
          </span>
          {images.map((img, idx) => (
            <button
              key={img.id}
              type="button"
              onClick={() => {
                onPageChange(idx);
                setZoomLevel(1);
              }}
              className={`relative h-8 w-6 sm:h-9 sm:w-7 rounded overflow-hidden flex-shrink-0 border-2 transition-all ${
                idx === currentImageIndex
                  ? "border-sky-400 ring-2 ring-sky-400/40 shadow-md scale-105"
                  : "border-border/40 opacity-50 hover:opacity-100"
              }`}
              title={`Jump to Page ${idx + 1}`}
            >
              <Image
                src={img.url}
                alt={`Thumb ${idx + 1}`}
                fill
                sizes="28px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}

      {/* Fullscreen Dialog */}
      <Dialog open={fullscreenOpen} onOpenChange={setFullscreenOpen}>
        <DialogContent className="max-w-[96vw] max-h-[96vh] p-2 bg-black/95 border-border/40 overflow-auto">
          <DialogHeader className="sr-only">
            <DialogTitle>Page Fullscreen View</DialogTitle>
          </DialogHeader>
          {currentImage && (
            <div className="flex items-center justify-center min-h-[90vh]">
              <img
                src={currentImage.url}
                alt={`Page ${currentImageIndex + 1}`}
                className="max-h-[92vh] w-auto max-w-full object-contain rounded-lg shadow-2xl"
              />
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
