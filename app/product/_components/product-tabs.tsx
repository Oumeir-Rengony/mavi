"use client"

import { useState } from "react"
import { Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { product } from "../_data/product"

const tabs = [
  { id: "overview", label: "Overview" },
  { id: "specs", label: "Specifications" },
  { id: "included", label: "What's Included" },
  { id: "shipping", label: "Shipping & Pickup" },
  { id: "care", label: "Care & Maintenance" },
]

export function ProductTabs() {
  const [active, setActive] = useState("overview")

  return (
    <section className="py-10 lg:py-14 border-t border-border">
      {/* Tab bar */}
      <div className="flex gap-0 border-b border-border overflow-x-auto mb-8 -mx-4 px-4 lg:mx-0 lg:px-0">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={cn(
              "relative shrink-0 px-4 py-2.5 text-sm font-semibold transition-colors whitespace-nowrap",
              active === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
            {active === tab.id && (
              <div  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab content */}
        <div>
          {active === "overview" && (
            <div className="prose prose-sm max-w-none text-foreground">
              <p className="text-base leading-relaxed text-muted-foreground">
                The <strong>PLUSINNO Carbon Fibre Spinning Combo</strong> is designed for anglers who demand performance without compromise. Built on an IM8 carbon fibre blank, this rod delivers exceptional sensitivity and strength — you feel every tap, every run. The matched WXM 2500 spinning reel is pre-spooled and ready to fish straight from the box.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mt-4">
                Whether you're targeting carangues along the reef, bonito offshore, or casting lures at dusk from the breakwater, this combo has the range, the backbone, and the finish to perform. Stainless steel guides and an EVA grip handle everything the Indian Ocean can throw at it.
              </p>
              <p className="text-base leading-relaxed text-muted-foreground mt-4">
                Backed by a 2-year manufacturer warranty and sold by a verified Mauritius retailer, this is gear you can trust for seasons to come.
              </p>
            </div>
          )}

          {active === "specs" && (
            <div className="overflow-hidden rounded-xl border border-border">
              <table className="w-full text-sm">
                <tbody>
                  {product.specifications.map((spec, i) => (
                    <tr key={spec.label} className={cn("border-b border-border last:border-0", i % 2 === 0 ? "bg-card" : "bg-muted/40")}>
                      <td className="px-4 py-3 font-medium text-muted-foreground w-2/5">{spec.label}</td>
                      <td className="px-4 py-3 font-semibold">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {active === "included" && (
            <ul className="flex flex-col gap-3">
              {product.whatsIncluded.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center">
                    <Check className="h-3 w-3 text-accent" />
                  </div>
                  <span className="text-sm text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          )}

          {active === "shipping" && (
            <div className="flex flex-col gap-4 text-sm">
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-semibold mb-1">Standard Delivery</p>
                <p className="text-muted-foreground">{product.delivery}</p>
                <p className="text-muted-foreground mt-1">{product.shippingFee}</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-semibold mb-1">In-Store Pickup</p>
                <p className="text-muted-foreground">{product.pickup}</p>
              </div>
              <div className="p-4 rounded-xl bg-card border border-border">
                <p className="font-semibold mb-1">Returns</p>
                <p className="text-muted-foreground">{product.returnPolicy}</p>
              </div>
            </div>
          )}

          {active === "care" && (
            <ol className="flex flex-col gap-3">
              {product.careInstructions.map((instruction, i) => (
                <li key={i} className="flex gap-3 text-sm">
                  <span className="shrink-0 w-6 h-6 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-xs">
                    {i + 1}
                  </span>
                  <span className="text-muted-foreground leading-relaxed">{instruction}</span>
                </li>
              ))}
            </ol>
          )}
        </div>
    </section>
  )
}
