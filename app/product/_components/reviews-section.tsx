"use client"

import { useState } from "react"
import { Star, ThumbsUp, BadgeCheck, PenLine } from "lucide-react"
import { cn } from "@/lib/utils"
import { reviews, ratingBreakdown, product } from "../_data/product"

const filterOptions = ["Most Recent", "Most Helpful", "Highest Rated", "Lowest Rated"]

export function ReviewsSection() {
  const [activeFilter, setActiveFilter] = useState("Most Helpful")

  return (
    <section id="reviews" className="py-10 lg:py-14 border-t border-border">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-8">
        <h2 className="text-xl lg:text-2xl font-bold">Customer Reviews</h2>
        <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-border hover:bg-muted transition-colors self-start">
          <PenLine className="h-3.5 w-3.5 text-accent" />
          Write a Review
        </button>
      </div>

      {/* Summary row */}
      <div className="flex flex-col lg:flex-row gap-8 p-5 rounded-2xl border border-border bg-card mb-8">

        {/* Average score */}
        <div className="flex flex-col items-center justify-center gap-1 min-w-[120px]">
          <span className="text-5xl font-extrabold">{product.rating}</span>
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={cn(
                  "h-4 w-4",
                  i < Math.floor(product.rating)
                    ? "fill-amber-400 text-amber-400"
                    : "fill-none text-muted-foreground/30"
                )}
              />
            ))}
          </div>
          <span className="text-xs text-muted-foreground">{product.reviewCount} reviews</span>
        </div>

        {/* Rating breakdown */}
        <div className="flex-1 flex flex-col gap-2">
          {ratingBreakdown.map(({ stars, count, percent }) => (
            <div key={stars} className="flex items-center gap-2.5">
              <span className="text-xs text-muted-foreground w-3 shrink-0">{stars}</span>
              <Star className="h-3 w-3 fill-amber-400 text-amber-400 shrink-0" />
              <div className="flex-1 h-2 rounded-full bg-muted overflow-hidden">
                <div className="h-full rounded-full bg-amber-400">
              </div>
              <span className="text-xs text-muted-foreground w-8 text-right shrink-0">{count}</span>
            </div>
            </div>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto pb-1 mb-6 -mx-4 px-4 lg:mx-0 lg:px-0">
        {filterOptions.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={cn(
              "shrink-0 px-3 py-1.5 rounded-full text-xs font-semibold border transition-all",
              activeFilter === f
                ? "bg-accent text-accent-foreground border-accent"
                : "border-border bg-card hover:border-accent/40"
            )}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Review cards */}
      <div className="flex flex-col gap-5">
        {reviews.map((review, idx) => (
          <div
            key={review.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.06 }}
            className="p-5 rounded-xl border border-border bg-card"
          >
            <div className="flex items-start justify-between gap-4 mb-3">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center text-xs font-bold text-accent shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-semibold">{review.author}</span>
                    {review.verified && (
                      <span className="flex items-center gap-0.5 text-[10px] text-accent font-medium">
                        <BadgeCheck className="h-3 w-3" />
                        Verified
                      </span>
                    )}
                  </div>
                  <span className="text-xs text-muted-foreground">{review.date}</span>
                </div>
              </div>
              <div className="flex shrink-0">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "h-3.5 w-3.5",
                      i < review.rating ? "fill-amber-400 text-amber-400" : "fill-none text-muted-foreground/30"
                    )}
                  />
                ))}
              </div>
            </div>

            <p className="text-sm font-semibold mb-1">{review.title}</p>
            <p className="text-sm text-muted-foreground leading-relaxed">{review.body}</p>

            <div className="flex items-center gap-1.5 mt-3 pt-3 border-t border-border">
              <button className="flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors">
                <ThumbsUp className="h-3.5 w-3.5" />
                Helpful ({review.helpful})
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
