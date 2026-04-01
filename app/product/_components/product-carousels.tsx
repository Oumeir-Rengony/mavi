"use client"

import React, { useRef } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import Link from "next/link"
import { relatedProducts, boughtTogetherProducts, product as mainProduct } from "../_data/product"
import { Carousel } from "@/components/carousel/carousel"

interface CarouselProduct {
  id: number
  name: string
  image: string
  price: string
  originalPrice?: string
  rating: number
  reviewCount: number
  onSale?: boolean
  badge?: string
  delivery: string
}

function MiniProductCard({ item }: { item: CarouselProduct }) {
  return (
    <Link href="#" className="group shrink-0 min-w-44 sm:min-w-52 flex flex-col">
      <div className="relative rounded-xl overflow-hidden bg-muted aspect-square mb-2">
        {item.onSale && (
          <span className="absolute top-2 left-2 z-10 bg-destructive text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            Sale
          </span>
        )}
        {item.badge && (
          <span className="absolute top-2 left-2 z-10 bg-green-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {item.badge}
          </span>
        )}
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <p className="text-xs font-semibold line-clamp-2 leading-snug mb-1 group-hover:text-accent transition-colors">
        {item.name}
      </p>
      <div className="flex items-center gap-0.5 mb-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-2.5 w-2.5 ${i < Math.floor(item.rating) ? "fill-amber-400 text-amber-400" : "fill-none text-muted-foreground/30"}`}
          />
        ))}
        <span className="text-[10px] text-muted-foreground ml-0.5">({item.reviewCount})</span>
      </div>
      <div className="flex items-baseline gap-1.5">
        <span className="text-sm font-bold text-destructive">Rs {item.price}</span>
        {item.originalPrice && (
          <span className="text-[10px] text-muted-foreground line-through">Rs {item.originalPrice}</span>
        )}
      </div>
      <p className="text-[10px] text-muted-foreground mt-0.5">{item.delivery}</p>
    </Link>
  )
}

function SectionTitle({ title, children }: { title: string; children: React.ReactNode }) {


  return (
    <div className="py-10 lg:py-14 border-t border-border">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl lg:text-2xl font-bold">{title}</h2>
      </div>
      {children}
    </div>
  )
}

export function ProductCarousels() {
  const retailerItems: CarouselProduct[] = [
    ...relatedProducts.slice(0, 3),
    ...boughtTogetherProducts.slice(0, 2),
  ]

  return (
    <>

      <SectionTitle title="You May Also Like">
        <Carousel 
          carouselItems={relatedProducts}
          classNames={{
            carouselItem: "sm:basis-1/3 lg:basis-1/4 xl:basis-1/5",
          }}
        >
          {(item, index) => (
              <MiniProductCard key={index} item={item} />
            )}
        </Carousel>
      </SectionTitle>

      <SectionTitle title="Frequently Bought Together">
        <Carousel 
          carouselItems={boughtTogetherProducts}
          classNames={{
            carouselItem: "sm:basis-1/3 lg:basis-1/4 xl:basis-1/5",
          }}
        >
          {(item, index) => (
              <MiniProductCard key={index} item={item} />
            )}
        </Carousel>
      </SectionTitle>

      <SectionTitle title={`More from ${mainProduct.seller.name}`}>
        <Carousel 
          carouselItems={retailerItems}
          classNames={{
            carouselItem: "sm:basis-1/3 lg:basis-1/4 xl:basis-1/5",
          }}
        >
          {(item, index) => (
              <MiniProductCard key={index} item={item} />
            )}
        </Carousel>
      </SectionTitle>
    </>
  )
}
