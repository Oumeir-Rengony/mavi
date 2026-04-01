"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import { product } from "../_data/product"

export function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-10 lg:py-14 border-t border-border">
      <h2 className="text-xl lg:text-2xl font-bold mb-6">Frequently Asked Questions</h2>
      <div className="flex flex-col gap-2">
        {product.faqs.map((faq, i) => (
          <div
            key={i}
            className={cn(
              "rounded-xl border transition-colors overflow-hidden",
              openIndex === i ? "border-accent/50 bg-card" : "border-border bg-card"
            )}
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
              aria-expanded={openIndex === i}
            >
              <span className="text-sm font-semibold leading-snug">{faq.question}</span>
              <div className="shrink-0" >
                <ChevronDown className="h-4 w-4 text-muted-foreground" />
              </div>
            </button>
              {openIndex === i && (
                <div>
                  <p className="px-5 pb-4 text-sm text-muted-foreground leading-relaxed border-t border-border pt-3">
                    {faq.answer}
                  </p>
                </div>
              )}
          </div>
        ))}
      </div>
    </section>
  )
}
