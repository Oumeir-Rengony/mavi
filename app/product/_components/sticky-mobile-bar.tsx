"use client"

import { ShoppingCart, Zap } from "lucide-react"
import { product } from "../_data/product"

export function StickyMobileBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t border-border px-4 py-3 safe-area-pb">
      <div className="flex items-center gap-3">
        {/* Price & stock */}
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline gap-1.5">
            <span className="text-base font-extrabold text-destructive">
              Rs {product.price.toLocaleString()}
            </span>
            <span className="text-xs text-muted-foreground line-through">
              Rs {product.originalPrice.toLocaleString()}
            </span>
          </div>
          <p className="text-[11px] text-muted-foreground truncate">{product.stockLabel}</p>
        </div>

        {/* CTAs */}
        <div className="flex gap-2 shrink-0">
          <button
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            aria-label="Add to Cart"
          >
            <ShoppingCart className="h-4 w-4" />
            <span className="hidden xs:inline">Add to Cart</span>
          </button>
          <button
            className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-bold bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
            aria-label="Buy Now"
          >
            <Zap className="h-4 w-4" />
            <span className="hidden xs:inline">Buy Now</span>
          </button>
        </div>
      </div>
    </div>
  )
}
