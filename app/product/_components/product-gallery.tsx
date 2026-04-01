"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react"
import { cn } from "@/lib/utils"

interface ProductGalleryProps {
  images: string[]
  badges?: string[]
  name: string
}

export function ProductGallery({ images, badges = [], name }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [zoomed, setZoomed] = useState(false)

  const prev = () => setActiveIndex((i) => (i - 1 + images.length) % images.length)
  const next = () => setActiveIndex((i) => (i + 1) % images.length)

  return (
    <div className="flex flex-col gap-3">
      {/* Main image */}
      <div
        className="relative overflow-hidden rounded-2xl bg-muted cursor-zoom-in group"
        onClick={() => setZoomed((z) => !z)}
      >
        {/* Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5">
          {badges.includes("Sale") && (
            <span className="bg-destructive text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">SALE</span>
          )}
          {badges.includes("Bestseller") && (
            <span className="bg-accent text-accent-foreground text-[11px] font-bold px-2.5 py-0.5 rounded-full">
              BESTSELLER
            </span>
          )}
          {badges.includes("New") && (
            <span className="bg-green-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full">NEW</span>
          )}
        </div>

        <div className="absolute top-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="bg-card/80 backdrop-blur-sm rounded-full p-1.5">
            <ZoomIn className="h-4 w-4 text-foreground" />
          </div>
        </div>

          <img
            key={activeIndex}
            src={images[activeIndex]}
            alt={`${name} — image ${activeIndex + 1}`}
            className={cn(
              "w-auto mx-auto object-cover transition-transform duration-300 p-15",
              zoomed ? "scale-150" : "scale-100 group-hover:scale-105"
            )}
           />

        {/* Arrow navigation */}
        <button
          onClick={(e) => { e.stopPropagation(); prev() }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          onClick={(e) => { e.stopPropagation(); next() }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-card/80 backdrop-blur-sm rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-card"
          aria-label="Next image"
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Dot indicators (mobile) */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 md:hidden">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={(e) => { e.stopPropagation(); setActiveIndex(i) }}
              aria-label={`View image ${i + 1}`}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all",
                i === activeIndex ? "bg-foreground w-4" : "bg-foreground/40"
              )}
            />
          ))}
        </div>
      </div>

      {/* Thumbnails */}
      <div className="hidden md:flex gap-2 overflow-x-auto pb-1">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActiveIndex(i)}
            aria-label={`View image ${i + 1}`}
            className={cn(
              "shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all",
              i === activeIndex
                ? "border-accent"
                : "border-transparent opacity-60 hover:opacity-100"
            )}
          >
            <img src={img} alt="" className="w-full h-full object-cover" aria-hidden="true" />
          </button>
        ))}
      </div>
    </div>
  )
}
