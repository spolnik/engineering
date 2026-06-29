"use client";

import { useEffect, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";
import { ExternalLink, Maximize2, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type DiagramFigureProps = {
  src: string;
  alt: string;
  caption?: ReactNode;
  title?: string;
  className?: string;
};

export function DiagramFigure({
  src,
  alt,
  caption,
  title = "Diagram",
  className,
}: DiagramFigureProps) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <>
      <figure
        className={cn(
          "relative left-1/2 my-10 w-[min(100vw-2rem,72rem)] -translate-x-1/2 rounded-lg border border-white/10 bg-white/[0.025] p-3",
          className
        )}
      >
        <div className="relative">
          <img src={src} alt={alt} className="w-full rounded-md" />
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setOpen(true)}
            className="absolute right-3 top-3 border border-white/10 bg-background/90 text-foreground shadow-lg backdrop-blur hover:bg-background"
          >
            <Maximize2 className="size-3.5" />
            Expand
          </Button>
        </div>
        {caption ? (
          <figcaption className="mt-3 px-1 text-sm text-muted-foreground">
            {caption}
          </figcaption>
        ) : null}
      </figure>

      {open && typeof document !== "undefined"
        ? createPortal(
            <div
              className="fixed inset-0 z-50 bg-background/95 p-3 backdrop-blur-sm sm:p-6"
              role="dialog"
              aria-modal="true"
              aria-label={`${title} expanded view`}
              onClick={() => setOpen(false)}
            >
              <div
                className="mx-auto flex h-full max-w-[96rem] flex-col overflow-hidden rounded-lg border border-white/10 bg-background shadow-2xl"
                onClick={(event) => event.stopPropagation()}
              >
                <div className="flex items-center justify-between gap-3 border-b border-white/10 px-3 py-3 sm:px-4">
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-foreground">
                      {title}
                    </p>
                    {caption ? (
                      <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                        {caption}
                      </p>
                    ) : null}
                  </div>
                  <div className="flex shrink-0 items-center gap-2">
                    <a
                      href={src}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-white/10 px-2.5 text-sm font-medium text-muted-foreground transition hover:bg-white/5 hover:text-foreground"
                    >
                      <ExternalLink className="size-3.5" />
                      Open SVG
                    </a>
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      aria-label="Close expanded diagram"
                      onClick={() => setOpen(false)}
                    >
                      <X className="size-4" />
                    </Button>
                  </div>
                </div>
                <div className="min-h-0 flex-1 overflow-auto p-3 sm:p-5">
                  <img
                    src={src}
                    alt={alt}
                    className="mx-auto h-auto w-[75rem] max-w-none rounded-md"
                  />
                </div>
              </div>
            </div>,
            document.body
          )
        : null}
    </>
  );
}
