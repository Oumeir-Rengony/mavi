import { Truck, Store, ShieldCheck, CreditCard, Headphones } from "lucide-react"

const trustItems = [
  {
    icon: Truck,
    title: "Fast Delivery",
    desc: "2–4 day Mauritius-wide",
  },
  {
    icon: Store,
    title: "In-Store Pickup",
    desc: "Port Louis & Curepipe",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Retailers",
    desc: "Verified local sellers",
  },
  {
    icon: CreditCard,
    title: "Secure Payment",
    desc: "SSL encrypted checkout",
  },
  {
    icon: Headphones,
    title: "Local Support",
    desc: "Mon–Sat, 8 am–6 pm",
  },
]

export function TrustStrip() {
  return (
    <section className="border-y border-accent/20 bg-linear-to-r from-accent/5 via-accent/10 to-accent/5">
      <div className="max-w-372 mx-auto px-4 lg:px-8 py-4">
        <div className="flex flex-wrap justify-between gap-y-3 gap-x-4">
          {trustItems.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex items-center gap-2.5 min-w-30">
              <div className="shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center">
                <Icon className="h-4 w-4 text-accent" />
              </div>
              <div>
                <p className="text-xs font-semibold text-foreground leading-tight">{title}</p>
                <p className="text-[11px] text-muted-foreground leading-tight">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
