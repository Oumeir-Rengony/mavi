import { Star, BadgeCheck, Clock, Store, MessageCircle, ExternalLink } from "lucide-react"
import { product } from "../_data/product"

const { seller } = product

export function SellerCard() {
  return (
    <section className="py-10 lg:py-14 border-t border-border">
      <h2 className="text-xl lg:text-2xl font-bold mb-6">Sold By</h2>

      <div className="rounded-2xl border border-border bg-card p-5 lg:p-6">
        <div className="flex flex-col sm:flex-row gap-4">

          {/* Avatar & name */}
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center overflow-hidden border border-border">
              <img src={seller.avatar} alt={seller.name} className="w-10 h-10 object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-1.5 flex-wrap">
                <h3 className="font-bold text-base">{seller.name}</h3>
                {seller.verified && (
                  <span className="flex items-center gap-0.5 text-accent text-xs font-semibold">
                    <BadgeCheck className="h-3.5 w-3.5" />
                    Verified
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 mt-1 flex-wrap">
                <div className="flex items-center gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3 w-3 ${i < Math.floor(seller.rating) ? "fill-amber-400 text-amber-400" : "fill-none text-muted-foreground/30"}`}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground">{seller.rating} · {seller.reviewCount.toLocaleString()} reviews</span>
              </div>
              <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                <Clock className="h-3 w-3" />
                {seller.responseTime}
              </div>
            </div>
          </div>

          {/* Right stats */}
          <div className="sm:ml-auto flex flex-wrap sm:flex-col items-start sm:items-end gap-2 text-sm">
            <div className="flex items-center gap-1.5 text-muted-foreground text-xs">
              <Store className="h-3.5 w-3.5" />
              {seller.totalProducts} products listed
            </div>
            <div className="text-xs text-muted-foreground">{seller.location}</div>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-4">
          {seller.bio}
        </p>

        {/* Actions */}
        <div className="flex flex-wrap gap-2 mt-4">
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors">
            <Store className="h-3.5 w-3.5" />
            Visit Store
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-border hover:bg-muted transition-colors">
            <MessageCircle className="h-3.5 w-3.5 text-accent" />
            Message Seller
          </button>
          <button className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold border border-border hover:bg-muted transition-colors">
            <ExternalLink className="h-3.5 w-3.5 text-accent" />
            View All Products
          </button>
        </div>
      </div>
    </section>
  )
}
