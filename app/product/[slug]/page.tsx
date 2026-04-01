import { Header } from "@/components/header/header"
import { Footer } from "@/components/footer/footer"
import { BreadcrumbActions } from "../_components/breadcrumb-actions"
import { ProductGallery } from "../_components/product-gallery"
import { PurchaseCard } from "../_components/purchase-card"
import { TrustStrip } from "../_components/trust-strip"
import { ProductHighlights } from "../_components/product-highlights"
import { ProductTabs } from "../_components/product-tabs"
import { SellerCard } from "../_components/seller-card"
import { DeliveryCard } from "../_components/delivery-card"
import { ReviewsSection } from "../_components/reviews-section"
import { FaqAccordion } from "../_components/faq-accordion"
import { ProductCarousels } from "../_components/product-carousels"
import { StickyMobileBar } from "../_components/sticky-mobile-bar"
import { products } from "../_data/product"
import { Suspense } from "react"
import { notFound } from "next/navigation"

const navItems = [
  {
    label: "Shop By Categories",
    items: [
      "Fishing Rods",
      "Reels",
      "Lures & Baits",
      "Boats & Kayaks",
      "Safety Gear",
      "Electronics",
      "Tools & Accessories",
      "Apparel",
    ],
  },
  {
    label: "Shop by Activity",
    items: [
      "Freshwater Fishing",
      "Saltwater Fishing",
      "Fly Fishing",
      "Ice Fishing",
      "Kayak Fishing",
      "Boating",
    ],
  },
  {
    label: "Fishing Gear",
    items: [
      "Fishing Rods",
      "Reels",
      "Lures & Baits",
      "Fishing Lines",
      "Hooks & Sinkers",
      "Tackle Boxes",
    ],
  },
]

export default async function ProductPage({
  params
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const product = products.find(p => p?.slug === slug);

  if (!product) {
    notFound()
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header navItems={navItems} />

      <main className="pb-24 lg:pb-12">
        {/* Breadcrumb + actions */}
        <div className="max-w-372 mx-auto px-4 lg:px-8">
          <BreadcrumbActions />
        </div>

        {/* Hero — Gallery + Purchase Card */}
        <section className="max-w-372 mx-auto px-4 lg:px-8 py-4 lg:py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <ProductGallery
              images={product.images}
              badges={product.badges}
              name={product.name}
            />
            <PurchaseCard />
          </div>
        </section>

        {/* Trust strip */}
        <TrustStrip />

        {/* Content sections */}
        <div className="max-w-372 mx-auto px-4 lg:px-8">
          <ProductHighlights />
          <ProductTabs />
          <SellerCard />
          <DeliveryCard />
          <ReviewsSection />
          <FaqAccordion />
          <ProductCarousels />
        </div>
      </main>

      <Footer />

      {/* Sticky mobile CTA */}
      <StickyMobileBar />
    </Suspense>
  )
}
