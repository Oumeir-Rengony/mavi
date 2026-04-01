import { Zap, Droplets, Settings, Package, Shield, Wind } from "lucide-react"
import { product } from "../_data/product"

const iconMap: Record<string, React.ElementType> = {
  Zap,
  Droplets,
  Settings,
  Package,
  Shield,
  Wind,
}

export function ProductHighlights() {
  return (
    <section className="py-10 lg:py-14">
      <h2 className="text-xl lg:text-2xl font-bold mb-6">Key Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {product.highlights.map(({ icon, title, description }) => {
          const Icon = iconMap[icon] ?? Zap
          return (
            <div
              key={title}
              className="flex gap-3 p-4 rounded-xl border border-border bg-card hover:border-accent/40 transition-colors"
            >
              <div className="shrink-0 w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center">
                <Icon className="h-4.5 w-4.5 text-accent" />
              </div>
              <div>
                <p className="text-sm font-semibold mb-0.5">{title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
