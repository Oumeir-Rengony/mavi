import { Banner } from "@/components/banner";
import { CategoryGrid } from "@/components/category";
import { Countdown } from "@/components/countdown";
import { Footer } from "@/components/footer/footer";
import { Header } from "@/components/header/header";
import { Hero } from "@/components/hero";
import { LatestGearSection } from "@/app/_components/latest-gear";
import { RetailerOffers } from "@/app/_components/retailer-offers";


const navItems = [
   {
      label: 'Shop By Categories',
      items: ['Fishing Rods', 'Reels', 'Lures & Baits', 'Boats & Kayaks', 'Safety Gear', 'Electronics', 'Tools & Accessories', 'Apparel'],
   },
   {
      label: 'Shop by Activity',
      items: ['Freshwater Fishing', 'Saltwater Fishing', 'Fly Fishing', 'Ice Fishing', 'Kayak Fishing', 'Boating'],
   },
   {
      label: 'Fishing Gear',
      items: ['Fishing Rods', 'Reels', 'Lures & Baits', 'Fishing Lines', 'Hooks & Sinkers', 'Tackle Boxes'],
   }
]

const categories = [
   { name: 'Fishing Rods', icon: '/category/fishing-rod.png', href: '#' },
   { name: 'Reels', icon: '/category/reel.png', href: '#' },
   { name: 'Lures & Baits', icon: '/category/bait.png', href: '#' },
   { name: 'Boats & Kayaks', icon: '/category/boat.png', href: '#' },
   { name: 'Safety Gear', icon: '/category/safety.png', href: '#' },
   { name: 'Electronics', icon: '/category/electronic.png', href: '#' },
   { name: 'Tools & Accessories', icon: '/category/tools.png', href: '#' },
   { name: 'Apparel', icon: '/category/apparel.png', href: '#' },
];

const newThisWeek = {
   featuredItem: {
      imgSrc: '/latest-gear/fishing-rod.webp',
      imgAlt: 'Fishing Essentials',
      title: 'Gear every Angler needs',
      slug: 'resifight-100-ledgering-combo-3-5m',
      description: 'Fishing Essentials',
      ctaText: 'Shop Fishing',
   },
   carouselItems: [
      {
         id: 1,
         name: 'Lure Fishing Reel - WXM 100 2500',
         slug: 'lure-fishing-reel-wxm-100-2500',
         image: '/latest-gear/reel.webp',
         price: '420.00',
         rating: 4.4,
         reviewCount: 92,
         onSale: true,
         delivery: 'Delivery \u2022 Ships in 1-2 days',
      },
      {
         id: 2,
         slug: "jtlb-squid-jigs-4pcs",
         name: 'JTLB Squid Jigs \u2013 4pcs',
         image: '/latest-gear/squid-jigs.webp',
         price: '589.00',
         originalPrice: '600.00',
         rating: 4.6,
         reviewCount: 128,
         onSale: true,
         delivery: 'Delivery \u2022 Ships in 2-3 days',
      },
      {
         id: 3,
         slug: "fltb-5-v2-fishing-float-tube",
         name: 'Fishing Float Tube FLTB-5 V2',
         image: '/latest-gear/float-tube.webp',
         price: '38,000',
         rating: 4.8,
         reviewCount: 37,
         onSale: true,
         delivery: 'Pickup only \u2022 Limited stock',
      },
      {
         id: 4,
         slug: "resifight-100-ledgering-combo-3-5m",
         name: 'Ledgering Combo 3.5 m - Resifight 100',
         image: '/latest-gear/resifight-rod.webp',
         price: '760.00',
         rating: 4.7,
         reviewCount: 211,
         onSale: true,
         delivery: 'Delivery \u2022 In stock',
      },
      {
         id: 5,
         slug: "jtlb-squid-jigs-4pcs",
         name: 'JTLB Squid Jigs \u2013 4pcs',
         image: '/latest-gear/squid-jigs.webp',
         price: '589.00',
         originalPrice: '600.00',
         rating: 4.6,
         reviewCount: 128,
         onSale: true,
         delivery: 'Delivery \u2022 Ships in 2-3 days',
      },
      {
         id: 6,
         slug: "fltb-5-v2-fishing-float-tube",
         name: 'Fishing Float Tube FLTB-5 V2',
         image: '/latest-gear/float-tube.webp',
         price: '38,000',
         rating: 4.8,
         reviewCount: 37,
         onSale: true,
         delivery: 'Pickup only \u2022 Limited stock',
      },
   ]
}

const retailerOffers = [
   {
      id: 1,
      name: 'PLUSINNO Fishing Rod and Reel Combos - Carbon Fiber',
      slug: 'plusinno-carbon-rod-reel-combo',
      image: '/retailer-offer/carbon-rod.webp',
      price: '420.00',
      rating: 4.4,
      reviewCount: 92,
      onSale: true,
      delivery: 'Delivery \u2022 Ships in 1-2 days',
   },
   {
      id: 2,
      slug: "kemimoto-boat-caddy-organizer-small",
      name: 'KEMIMOTO Boat Caddy Organizer, One Piece Small',
      image: '/retailer-offer/organizer.webp',
      price: '20.00',
      rating: 4.4,
      reviewCount: 92,
      badge: 'New',
      delivery: 'Delivery \u2022 Ships in 1-2 days',
   },
   {
      id: 3,
      slug: "plusinno-boat-rod-holder-clamp-large",
      name: 'PLUSINNO Fishing Boat Rods Holder Large Clamp Opening',
      image: '/retailer-offer/rod-clamp.webp',
      price: '420.00',
      rating: 4.4,
      reviewCount: 92,
      onSale: true,
      delivery: 'Delivery \u2022 Ships in 1-2 days',
   },
   {
      id: 4,
      slug: "wxm-100-2500-spinning-reel",
      name: 'Lure Fishing Reel - WXM 100 2500',
      image: '/retailer-offer/reel.webp',
      price: '420.00',
      rating: 4.4,
      reviewCount: 92,
      onSale: true,
      delivery: 'Delivery \u2022 Ships in 1-2 days',
   },
   {
      id: 5,
      slug: "goplus-inflatable-kayak-2-person-507lb",
      name: 'Goplus Inflatable Kayak, 2-Person Kayak Set for Adults with 507 LB...',
      image: '/retailer-offer/kayak.webp',
      price: '420.00',
      rating: 4.4,
      reviewCount: 92,
      onSale: true,
      delivery: 'Delivery \u2022 Ships in 1-2 days',
   },
   {
      id: 6,
      slug: "kemimoto-boat-caddy-organizer-small",
      name: 'KEMIMOTO Boat Caddy Organizer, One Piece Small',
      image: '/retailer-offer/organizer.webp',
      price: '20.00',
      rating: 4.4,
      reviewCount: 92,
      badge: 'New',
      delivery: 'Delivery \u2022 Ships in 1-2 days',
   }
]



export default function Page() {
   return (
      <>
         <Header navItems={navItems} />
         <main>
            <CategoryGrid categories={categories} classNames={{ base: "bg-muted/30 border-b" }} />
            <div className="max-w-372 mx-auto">
               <Hero />
               <LatestGearSection trending={newThisWeek} newThisWeek={newThisWeek} />
               <Countdown />
               <CategoryGrid
                  categories={categories}
                  classNames={{
                     link: "flex-row gap-2 border rounded-full p-2",
                     img: "w-12 lg:w-12"
                  }}
               />
               <Banner
                  title="Sell Your Fishing & Boating Gear Online"
                  description="Reach more customers, sell products & services, and grow your business on one marketplace."
                  ctaText="Join As A Retailer"
                  ctaLink="#"
               />
               <RetailerOffers products={retailerOffers} />
            </div>
         </main>
         <Footer />
      </>
   )
}