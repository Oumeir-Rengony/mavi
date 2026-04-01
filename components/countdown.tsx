'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'

export function Countdown() {
  const [time, setTime] = useState({
    days: 28,
    hours: 6,
    minutes: 58,
    seconds: 1,
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prev) => {
        let { days, hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else {
          seconds = 59
          if (minutes > 0) {
            minutes--
          } else {
            minutes = 59
            if (hours > 0) {
              hours--
            } else {
              hours = 23
              if (days > 0) {
                days--
              }
            }
          }
        }

        return { days, hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(interval)
  }, [])

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="text-center">
      <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">{String(value).padStart(2, '0')}</div>
      <div className="text-[10px] md:text-xs text-muted-foreground uppercase mt-0.5">{label}</div>
    </div>
  )

  return (
    <section className="px-4 lg:px-6 mx-auto mb-12">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 bg-[#B8D8DF] backdrop-blur-sm rounded-xl p-6 lg:p-8 border border-border/50">
        <div className="text-center md:text-left">
          <h3 className="text-lg lg:text-xl font-bold">Summer Fishing Deals</h3>
        </div>

        <div className="flex items-center gap-2 md:gap-3">
          <TimeBlock value={time.days} label="Days" />
          <span className="text-xl md:text-2xl font-bold text-muted-foreground">:</span>
          <TimeBlock value={time.hours} label="Hours" />
          <span className="text-xl md:text-2xl font-bold text-muted-foreground">:</span>
          <TimeBlock value={time.minutes} label="Min" />
          <span className="text-xl md:text-2xl font-bold text-muted-foreground">:</span>
          <TimeBlock value={time.seconds} label="Sec" />
        </div>

        <div className="w-35.75">
            <p className="text-sm text-muted-foreground text-center md:text-right font-semibold">
            Save on fishing rods, best sellers + more
          </p>
        </div>

        <div className="">
          <Button className="min-w-38.75 py-6 bg-[#192F5D] text-background hover:bg-foreground/90 rounded-full cursor-pointer">
            View Details
          </Button>
        </div>
      </div>
    </section>
  )
}
