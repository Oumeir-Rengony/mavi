import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star } from 'lucide-react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

export interface ProductCardItem {
  name: string
  slug: string
  image: string
  price: string
  originalPrice?: string
  rating: number
  reviewCount: number
  onSale?: boolean
  badge?: string
  delivery: string
  className?:string
}

export function ProductCard({
  name,
  slug,
  image,
  price,
  originalPrice,
  rating,
  reviewCount,
  onSale,
  badge,
  delivery,
  className
}: ProductCardItem) {
  return (
    <Link href={`/product/${slug}`} className={cn("group block w-full h-full", className)}>
      <div className="relative bg-muted rounded-xl">
        {onSale && (
          <Badge className="absolute top-2 left-2 bg-destructive hover:bg-destructive text-[#ffffff] z-10 text-xs">
            Sale
          </Badge>
        )}
        {badge && (
          <Badge className="absolute top-2 left-2 bg-green-500 hover:bg-green-500 text-[#ffffff] z-10 text-xs">
            {badge}
          </Badge>
        )}
        <img
          src={image}
          alt={name}
          className="inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-3 lg:p-4 flex flex-col flex-1 gap-1.5">
        <h3 className="font-semibold text-xs lg:text-sm line-clamp-2 group-hover:text-accent transition-colors">
          {name}
        </h3>

        <div className="flex items-center gap-0.5">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 lg:h-3.5 lg:w-3.5 ${
                i < Math.floor(rating)
                  ? 'fill-amber-400 text-amber-400'
                  : i < rating
                    ? 'fill-amber-400/50 text-amber-400'
                    : 'fill-none text-gray-300'
              }`}
            />
          ))}
          <span className="text-[10px] lg:text-xs text-muted-foreground ml-1">
            {rating} ({reviewCount})
          </span>
        </div>

        <div className="flex items-baseline gap-2">
          <span className="text-sm lg:text-base font-bold text-destructive">Rs {price}</span>
          {originalPrice && (
            <span className="text-xs text-muted-foreground line-through">
              Rs{originalPrice}
            </span>
          )}
        </div>

        <p className="text-[10px] lg:text-xs text-muted-foreground mt-auto">{delivery}</p>
      </CardContent>
    </Link>
  )
}
