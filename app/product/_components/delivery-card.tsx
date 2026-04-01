import { Truck, MapPin, Package, RotateCcw } from "lucide-react"
import { product } from "../_data/product"

const deliveryItems = [
  {
    icon: Truck,
    title: "Standard Delivery",
    description: product.delivery,
    sub: product.shippingFee,
  },
  {
    icon: MapPin,
    title: "In-Store Pickup",
    description: product.pickup,
    sub: "Free — ready within 24 hours",
  },
  {
    icon: Package,
    title: "Packaging",
    description: "Packaged securely with bubble wrap and double-boxed for all rod combos.",
    sub: undefined,
  },
  {
    icon: RotateCcw,
    title: "Returns & Exchanges",
    description: product.returnPolicy,
    sub: "Items must be unused and in original packaging.",
  },
]

export function DeliveryCard() {
  return (
    <section className="py-10 lg:py-14 border-t border-border">
      <h2 className="text-xl lg:text-2xl font-bold mb-6">Delivery & Returns</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {deliveryItems.map(({ icon: Icon, title, description, sub }) => (
          <div key={title} className="flex gap-3 p-4 rounded-xl border border-border bg-card">
            <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
              <Icon className="h-4 w-4 text-accent" />
            </div>
            <div>
              <p className="text-sm font-semibold">{title}</p>
              <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{description}</p>
              {sub && <p className="text-xs text-accent font-medium mt-1">{sub}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
