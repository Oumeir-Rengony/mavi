import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils';

export function Hero({
  className
}:{
  className?: string;
}) {
  return (
    <section className={cn("px-4 lg:px-6", className)}>
      <div className="relative w-full h-62.5 md:h-87.5 lg:h-105 overflow-hidden rounded-2xl">
         <img
          src="/hero.webp"
          alt="Fishing boat on open water"
          className="absolute inset-0 w-full h-full object-cover brightness-[0.6]"
         />
        <div className="relative h-full flex flex-col items-center justify-center text-center text-[#ffffff]">
          <p className="text-xs md:text-sm uppercase tracking-widest mb-2 text-[#ffffff]/80">Everything in Fishing & Boating</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 text-balance max-w-4xl">
            Gear from Trusted Retailers
          </h1>
          <Button size="lg" className="bg-[#ffffff] text-foreground hover:bg-[#ffffff]/90 font-semibold cursor-pointer">
            Shop By Category
          </Button>
        </div>
      </div>
    </section>
  )
}
