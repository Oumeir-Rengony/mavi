import Link from "next/link";

export interface FeaturedItem {
   imgSrc: string;
   imgAlt: string;
   title: string;
   description?: string;
   ctaText: string;
}

export function FeaturedProductCard({
   imgSrc,
   imgAlt,
   title,
   description,
   ctaText,
}: {
   imgSrc: string;
   imgAlt: string;
   title: string;
   description?: string;
   ctaText: string;
}) {

   return (

      <div className="relative shrink-0 rounded-xl">
         <img
            src={imgSrc}
            alt="Fishing Essentials"
            className="inset-0 w-full h-full object-cover rounded-xl"
         />
         <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/25 to-black/20 rounded-xl" />
         <div className="absolute inset-0 p-5 flex flex-col justify-between text-[#ffffff]">
            <div className="px-3 py-1">
               <span className="inline-block text-[#ffffff] text-md font-bold rounded-md w-fit mb-4">
                  {description}
               </span>
               <h3 className="text-xl lg:text-3xl font-bold mb-4 text-balance">
                  {title}
               </h3>
            </div>
            <div>
               <Link href="#" className="inline-block bg-[#ffffff] hover:bg-[#ffffff]/90 text-[#192F5D] font-semibold py-3 px-6 rounded-full cursor-pointer">
                  {ctaText}
               </Link>
            </div>
         </div>
      </div>

   )
}