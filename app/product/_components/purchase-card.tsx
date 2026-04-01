"use client"

import { useState } from "react"
import { Star, ShoppingCart, Zap, MessageCircle, Shield, RotateCcw, MapPin, Truck, Check } from "lucide-react"
import { cn } from "@/lib/utils"
import { product } from "../_data/product"

const trustBadges = [
  { icon: Shield, label: "Secure Checkout" },
  { icon: RotateCcw, label: "30-Day Returns" },
  { icon: Truck, label: "Mauritius Delivery" },
  { icon: MapPin, label: "Local Pickup" },
]

export function PurchaseCard() {
  const [selectedLength, setSelectedLength] = useState(product.variants.length[1])
  const [selectedPower, setSelectedPower] = useState(product.variants.power[1])
  const [quantity, setQuantity] = useState(1)
  const [addedToCart, setAddedToCart] = useState(false)

  const handleAddToCart = () => {
    setAddedToCart(true)
    setTimeout(() => setAddedToCart(false), 2000)
  }

  return (
    <div className="lg:sticky lg:top-24 flex flex-col gap-5">

      {/* Title & brand */}
      <div>
        <p className="text-sm font-medium text-accent mb-1">
          {product.brand}
        </p>
        <h1 className="text-xl lg:text-2xl font-bold leading-snug text-balance">
          {product.name}
        </h1>
      </div>

      {/* Rating */}
      <div className="flex items-center gap-2 flex-wrap">
        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={cn(
                "h-4 w-4",
                i < Math.floor(product.rating)
                  ? "fill-amber-400 text-amber-400"
                  : i < product.rating
                  ? "fill-amber-400/50 text-amber-400"
                  : "fill-none text-muted-foreground/30"
              )}
            />
          ))}
        </div>
        <span className="text-sm font-semibold">{product.rating}</span>
        <span className="text-sm text-muted-foreground">({product.reviewCount} reviews)</span>
        <a href="#reviews" className="text-sm text-accent underline-offset-2 hover:underline">
          See all reviews
        </a>
      </div>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-extrabold text-destructive">
          Rs {product.price.toLocaleString()}
        </span>
        <span className="text-base text-muted-foreground line-through">
          Rs {product.originalPrice.toLocaleString()}
        </span>
        <span className="bg-destructive/10 text-destructive text-xs font-bold px-2 py-0.5 rounded-full">
          -{product.discount}%
        </span>
      </div>

      {/* Stock status */}
      <div className="flex items-center gap-1.5 text-sm">
        <span className={cn(
          "inline-block w-2 h-2 rounded-full",
          product.stock > 10 ? "bg-green-500" : product.stock > 0 ? "bg-amber-500" : "bg-destructive"
        )} />
        <span className={cn(
          "font-medium",
          product.stock > 0 ? "text-foreground" : "text-destructive"
        )}>
          {product.stockLabel}
        </span>
      </div>

      {/* Delivery chips */}
      <div className="flex flex-wrap gap-2">
        <div className="flex items-center gap-1.5 bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium">
          <Truck className="h-3.5 w-3.5 text-accent" />
          Delivery available
        </div>
        <div className="flex items-center gap-1.5 bg-secondary text-secondary-foreground rounded-full px-3 py-1 text-xs font-medium">
          <MapPin className="h-3.5 w-3.5 text-accent" />
          Pickup in-store
        </div>
      </div>

      {/* Summary */}
      <p className="text-sm text-muted-foreground leading-relaxed border-l-2 border-accent pl-3">
        {product.summary}
      </p>

      {/* Variant — Length */}
      {/* <div>
        <p className="text-sm font-semibold mb-2">
          Length: <span className="text-accent">{selectedLength}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.variants.length.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedLength(v)}
              className={cn(
                "px-3 py-1.5 rounded-lg border text-sm font-medium transition-all",
                selectedLength === v
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card hover:border-accent/60"
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div> */}

      {/* Variant — Power */}
      {/* <div>
        <p className="text-sm font-semibold mb-2">
          Power: <span className="text-accent">{selectedPower}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {product.variants.power.map((v) => (
            <button
              key={v}
              onClick={() => setSelectedPower(v)}
              className={cn(
                "px-3 py-1.5 rounded-lg border text-sm font-medium transition-all",
                selectedPower === v
                  ? "border-accent bg-accent text-accent-foreground"
                  : "border-border bg-card hover:border-accent/60"
              )}
            >
              {v}
            </button>
          ))}
        </div>
      </div> */}

      {/* Quantity */}
      <div className="flex items-center gap-3">
        <p className="text-sm font-semibold">Quantity:</p>
        <div className="flex items-center border border-border rounded-lg overflow-hidden">
          <button
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
            className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-colors text-lg font-medium"
            aria-label="Decrease quantity"
          >
            −
          </button>
          <span className="w-10 text-center text-sm font-semibold">{quantity}</span>
          <button
            onClick={() => setQuantity((q) => Math.min(product.stock, q + 1))}
            className="w-9 h-9 flex items-center justify-center hover:bg-muted transition-colors text-lg font-medium"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col gap-2">
        <button
          onClick={handleAddToCart}
          className={cn(
            "w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold transition-all",
            addedToCart
              ? "bg-green-600 text-white"
              : "bg-primary text-primary-foreground hover:bg-primary/90"
          )}
        >
          {addedToCart ? (
            <>
              <Check className="h-4 w-4" />
              Added to Cart
            </>
          ) : (
            <>
              <ShoppingCart className="h-4 w-4" />
              Add to Cart
            </>
          )}
        </button>

        <button className="w-full flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold bg-accent text-accent-foreground hover:bg-accent/90 transition-all">
          <Zap className="h-4 w-4" />
          Buy Now
        </button>

        <button className="w-full flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-medium border border-border hover:bg-muted transition-all">
          <MessageCircle className="h-4 w-4 text-accent" />
          Chat with Retailer
        </button>
      </div>

      {/* Trust badges */}
      <div className="grid grid-cols-2 gap-2 pt-1">
        {trustBadges.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-2 text-xs text-muted-foreground">
            <Icon className="h-3.5 w-3.5 text-accent shrink-0" />
            {label}
          </div>
        ))}
      </div>
    </div>
  )
}
