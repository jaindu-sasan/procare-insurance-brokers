"use client"

import { useEffect, useState } from "react"

interface CountUpProps {
  end: number
  duration?: number
  suffix?: string
}

export default function CountUp({
  end,
  duration = 2000,
  suffix = "",
}: CountUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime: number | null = null

    const animate = (time: number) => {
      if (!startTime) startTime = time
      const progress = Math.min((time - startTime) / duration, 1)
      const value = Math.floor(progress * end)
      setCount(value)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <>
      {count.toLocaleString()}
      {suffix}
    </>
  )
}
