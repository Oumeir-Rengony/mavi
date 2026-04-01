import { cn } from '@/lib/utils';
import Link from 'next/link'

interface Category {
  name: string;
  icon: string;
  href: string;
}

export function CategoryGrid({
  categories,
  classNames
}: {
  categories: Category[];
  classNames?: {
    base?:string;
    wrapper?: string;
    link?: string;
    img?: string;
    grid?: string;
  }
}) {
  return (
    <div className={cn("py-6 px-4 lg:px-6 mb-12", classNames?.base)}>
      <div className={cn("lg:max-w-372 mx-auto", classNames?.wrapper)}>
        <div className={cn("flex justify-between gap-3 overflow-x-auto pb-2 scrollbar-auto", classNames?.grid)}>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className={cn("flex flex-col shrink-0 items-center gap-4 min-w-0 group", classNames?.link)}
            >
              <div className={cn("shrink-0 w-16 lg:w-20 text-muted-foreground transition-colors bg-[#ebf6ff] rounded-full", classNames?.img)}>
                <img src={category.icon} alt={category.name} className="w-full" />
              </div>
              <span className="min-w-0 text-xs lg:text-sm font-medium text-center text-foreground">
                {category.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
