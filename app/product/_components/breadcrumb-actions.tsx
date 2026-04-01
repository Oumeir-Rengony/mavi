"use client"

import { ChevronRight, Heart, Share2, GitCompare } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { cn } from "@/lib/utils"

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Fishing Rods", href: "#" },
  { label: "Combos", href: "#" },
  { label: "PLUSINNO Carbon Fibre Combo", href: "#" },
]

export function BreadcrumbActions() {
  const [wishlisted, setWishlisted] = useState(false)

  return (
    <div className="flex items-center justify-between gap-4 py-3">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-0.5 flex-1 min-w-0 overflow-hidden">
        {breadcrumbs.map((crumb, i) => (
          <div key={crumb.label} className="flex items-center gap-0.5 shrink-0">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-muted-foreground shrink-0" />}
            <Link
              href={crumb.href}
              className={cn(
                "text-xs transition-colors truncate",
                i === breadcrumbs.length - 1
                  ? "text-foreground font-medium pointer-events-none max-w-[120px] sm:max-w-[200px]"
                  : "text-muted-foreground hover:text-foreground"
              )}
              aria-current={i === breadcrumbs.length - 1 ? "page" : undefined}
            >
              {crumb.label}
            </Link>
          </div>
        ))}
      </nav>

      {/* Actions */}
      <div className="flex items-center gap-1 shrink-0">
        <button
          onClick={() => setWishlisted((w) => !w)}
          aria-label={wishlisted ? "Remove from wishlist" : "Add to wishlist"}
          className={cn(
            "w-8 h-8 flex items-center justify-center rounded-full border transition-all",
            wishlisted
              ? "bg-red-50 border-red-200 text-red-500"
              : "border-border hover:bg-muted text-muted-foreground"
          )}
        >
          <Heart className={cn("h-3.5 w-3.5", wishlisted && "fill-red-500")} />
        </button>
        <button
          aria-label="Share product"
          className="w-8 h-8 flex items-center justify-center rounded-full border border-border hover:bg-muted text-muted-foreground transition-all"
        >
          <Share2 className="h-3.5 w-3.5" />
        </button>
        <button
          aria-label="Compare product"
          className="hidden sm:flex w-8 h-8 items-center justify-center rounded-full border border-border hover:bg-muted text-muted-foreground transition-all"
        >
          <GitCompare className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  )
}
