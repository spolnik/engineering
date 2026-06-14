import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="mx-auto grid min-h-[60svh] max-w-3xl place-items-center px-4 py-20 text-center sm:px-6 lg:px-8">
      <div>
        <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-primary">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight">That route is not in the system map.</h1>
        <p className="mt-4 text-muted-foreground">
          The page may have moved, or it may not exist yet.
        </p>
        <Link href="/" className={cn(buttonVariants({ size: "lg" }), "mt-8 h-11 px-4")}>
          Back home
        </Link>
      </div>
    </div>
  );
}
