"use client"

import { Carousel } from '@/components/carousel/carousel'
import { ProductCard, type ProductCardItem } from '@/components/product-card/product-card';
import { type FeaturedItem, FeaturedProductCard } from '@/components/product-card/featured-product-card';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';


export function RetailerOffers({
   products,
   featuredItem,
}:{
   products: ProductCardItem[];
   featuredItem?: FeaturedItem;
}) {

   return (
      <section className="px-4 lg:px-6 py-10 lg:py-12 ">
         <div className="mx-auto px-4 lg:px-6 xl:px-12">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
               <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-1">Shop our retailers offers</h2>
                  <p className="text-sm text-muted-foreground">
                     Traditional divides between personal and professional space.
                  </p>
               </div>
               <Link href="#" className="text-md font-semibold hover:underline flex items-center gap-1 shrink-0">
                  Shop All Products
                  <ChevronRight className="h-4 w-4" />
               </Link>
            </div>
            <Carousel
               featuredItem={featuredItem}
               carouselItems={products}
            >
               {(item, index) => (
                  <ProductCard key={index} {...item} />
               )}
            </Carousel>
         </div>
      </section>
   )
}