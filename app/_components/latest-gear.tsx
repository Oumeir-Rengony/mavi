'use client'

import { useState } from 'react'
import { Carousel } from '@/components/carousel/carousel'
import { ProductCard, type ProductCardItem } from '@/components/product-card/product-card';
import { type FeaturedItem, FeaturedProductCard } from '@/components/product-card/featured-product-card';


export function LatestGearSection({
   trending,
   newThisWeek,
}: {
   trending: {
      carouselItems: ProductCardItem[];
      featuredItem: FeaturedItem;
   },
   newThisWeek: {
      carouselItems: ProductCardItem[];
      featuredItem: FeaturedItem;
   }
}) {

   const [activeTab, setActiveTab] = useState<'new' | 'trending'>('new');


   return (
      <section className="px-4 lg:px-6 py-10 lg:py-12">
         <div className="mx-auto">

            {/* Header */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8">
               <div>
                  <h2 className="text-2xl lg:text-3xl font-bold mb-1">Latest Gear</h2>
                  <p className="text-muted-foreground text-sm lg:text-base">Fresh gear added by trusted retailers</p>
               </div>
               <div className="flex gap-1 border-b border-border">
                  <button
                     onClick={() => setActiveTab('new')}
                     className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'new'
                           ? 'border-foreground text-foreground'
                           : 'border-transparent text-muted-foreground hover:text-foreground'
                        }`}
                  >
                     New this week
                  </button>
                  <button
                     onClick={() => setActiveTab('trending')}
                     className={`px-4 py-2 text-sm font-semibold border-b-2 transition-colors ${activeTab === 'trending'
                           ? 'border-foreground text-foreground'
                           : 'border-transparent text-muted-foreground hover:text-foreground'
                        }`}
                  >
                     Trending now
                  </button>
               </div>
            </div>

            <Carousel
               featuredItem={activeTab === "new" ? newThisWeek?.featuredItem : trending?.featuredItem}
               carouselItems={activeTab === "new" ? newThisWeek?.carouselItems : trending?.carouselItems}
               renderFeatured={(item) => <FeaturedProductCard {...item} />}
            >
               {(item, index) => (
                 <ProductCard key={index} {...item} />
               )}
            </Carousel>

         </div>
      </section>
   )
}
