"use client"

import {
   Carousel as EmblaCarousel,
   CarouselApi,
   CarouselContent,
   CarouselItem,
   CarouselNext,
   CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";



export function Carousel<TItem, TFeatured>({
   featuredItem,
   carouselItems,
   children,
   renderFeatured,
   classNames
}: {
   featuredItem?: TFeatured;
   carouselItems: TItem[];
   children: (item: TItem, index: number) => React.ReactNode;
   renderFeatured?: (item: TFeatured) => React.ReactNode;
   classNames?: {
      featuredCarouselItem?: string;
      featuredBase?: string;
      carouselItem?: string;
      carouselBase?: string;
   }
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
         <EmblaCarousel className="w-full" setApi={setApi}>
            <CarouselContent className="-ml-1">
               {
                  (featuredItem && renderFeatured) && (
                     <CarouselItem className={cn("basis-full sm:basis-1/2 lg:basis-1/4 pl-1", classNames?.featuredCarouselItem)}>
                        <div className={cn("relative shrink-0 rounded-xl", classNames?.featuredBase)}>
                           {renderFeatured?.(featuredItem)}
                        </div>
                     </CarouselItem>

                  )
               }
               {carouselItems.map((item, index) => (
                  <CarouselItem key={index} className={cn("basis-full sm:basis-1/2 lg:basis-1/4 pl-1", classNames?.carouselItem)}>
                     <div className="p-1">
                        <div className={cn("h-full flex flex-col items-center justify-center", classNames?.carouselBase)}>
                           {children(item, index)}
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
         </EmblaCarousel>
      </div>
   )
}