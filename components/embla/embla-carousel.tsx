"use client"

import {
   Carousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { ProductCard } from "@/components/product-card/product-card"
import { Button } from "../ui/button";
import { useEffect, useState } from "react";
import Link from "next/link";

export interface CarouselItem {
   id: number;
   name: string;
   image: string;
   price: string;
   originalPrice?: string;
   rating: number;
   reviewCount: number;
   onSale?: boolean;
   delivery: string;
}

export interface FeaturedItem {
   imgSrc: string;
   imgAlt: string;
   title: string;
   description?: string;
   ctaText: string;
}

export function EmblaCarousel({
   featuredItem,
   carouselItems
}: {
   featuredItem?: FeaturedItem;
   carouselItems: CarouselItem[];
}) {
   const [api, setApi] = useState<CarouselApi>()
   const [current, setCurrent] = useState(0)
   const [count, setCount] = useState(0)

   useEffect(() => {
      if (!api) {
         return
      }
      setCount(api.scrollSnapList().length)
      setCurrent(api.selectedScrollSnap() + 1)
      api.on("select", () => {
         setCurrent(api.selectedScrollSnap() + 1)
      })
   }, [api])


   return (
      <div className="relative px-10">
         <Carousel className="w-full" setApi={setApi}>
            <CarouselContent className="-ml-1">
               <CarouselItem className={`basis-full sm:basis-1/2 lg:basis-1/4 pl-1`}>
               {
                  featuredItem &&
                     <div className="relative shrink-0 rounded-xl">
                        <img
                           src={featuredItem?.imgSrc}
                           alt="Fishing Essentials"
                           className="inset-0 w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/20 rounded-xl" />
                        <div className="absolute inset-0 p-5 flex flex-col justify-between text-[#ffffff]">
                           <div className="px-3 py-1">
                              <span className="inline-block text-[#ffffff] text-md font-bold rounded-md w-fit mb-4">
                                 {featuredItem?.description}
                              </span>
                               <h3 className="text-xl lg:text-3xl font-bold mb-4 text-balance">
                                 {featuredItem?.title}
                              </h3>
                           </div>
                           <div>
                              <Link href="#" className="inline-block bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#192F5D] font-semibold py-3 px-6 rounded-full cursor-pointer">
                                 {featuredItem?.ctaText}
                              </Link>
                           </div>
                        </div>
                     </div>
               }
               </CarouselItem>
               {carouselItems.map((product, index) => (
                  <CarouselItem key={index} className={`basis-full sm:basis-1/2 lg:basis-1/4 pl-1`}>
                     <div className="p-1">
                        <div className="h-full flex flex-col items-center justify-center">
                           <ProductCard {...product} />
                        </div>
                     </div>
                  </CarouselItem>
               ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
            <div className="py-2 text-center text-sm text-muted-foreground">
               Slide {current} of {count}
            </div>
         </Carousel>
      </div>
   )
}