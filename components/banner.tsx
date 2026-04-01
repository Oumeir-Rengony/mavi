import Link from 'next/link';

export function Banner({
   title,
   description,
   ctaText,
   ctaLink
}: {
   title: string;
   description: string;
   ctaText: string;
   ctaLink: string;
}) {
  return (
    <section className="px-4  lg:px-6 pb-8 lg:pb-12">
      <div className="bg-[#1D349A] rounded-2xl py-12 lg:py-16 px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#ffffff] mb-4 text-balance">
          {title}
        </h2>
        <p className="text-[#ffffff]/80 text-sm lg:text-base mb-8 max-w-xl mx-auto leading-relaxed">
          {description}
        </p>
        <Link href={ctaLink} className="bg-[#ffffff] text-foreground hover:bg-[#ffffff]/90 font-semibold rounded-full px-6 py-3 inline-block">
          {ctaText}
        </Link>
      </div>
    </section>
  )
}
