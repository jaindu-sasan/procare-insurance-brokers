"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Heart, Car, Building2 } from "lucide-react"

const slides = [
  {
    id: 1,
    title: "Protecting What Matters Most",
    subtitle: "Your Trusted Insurance Partner",
    description: "Comprehensive insurance solutions tailored to your needs. We help you safeguard your future with expert advice and personalized coverage.",
    icon: Shield,
    image: "/images/hero-insurance-consultation.jpg",
  },
  {
    id: 2,
    title: "Life Insurance for Peace of Mind",
    subtitle: "Secure Your Family's Future",
    description: "Ensure your loved ones are protected with our comprehensive life insurance plans. Coverage that adapts to your life stages.",
    icon: Heart,
    image: "/images/hero-family-protection.jpg",
  },
  {
    id: 3,
    title: "Health Insurance That Cares",
    subtitle: "Because Your Health Comes First",
    description: "Access quality healthcare without financial stress. Our health plans cover you and your family when it matters most.",
    icon: Heart,
    image: "/images/hero-healthcare.jpg",
  },
  {
    id: 4,
    title: "Drive with Confidence",
    subtitle: "Complete Vehicle Protection",
    description: "From comprehensive coverage to third-party liability, we have the right vehicle insurance for every driver on the road.",
    icon: Car,
    image: "/images/hero-vehicle-protection.jpg",
  },
  {
    id: 5,
    title: "Business Insurance Solutions",
    subtitle: "Protect Your Enterprise",
    description: "Safeguard your business assets, employees, and operations with tailored commercial insurance packages.",
    icon: Building2,
    image: "/images/hero-business-office.jpg",
  },
]

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(nextSlide, 5000)
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current)
      }
    }
  }, [nextSlide, isPaused])

  return (
    <section 
      className="relative h-[600px] lg:h-[700px] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with Images */}
      {slides.map((slide, index) => {
        const Icon = slide.icon
        return (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            {/* Background Image */}
            <Image
              src={slide.image || "/placeholder.svg"}
              alt={slide.title}
              fill
              className="object-cover"
              priority={index === 0}
              sizes="100vw"
            />
            
            {/* Dark Overlay for Text Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#263238]/85 via-[#263238]/70 to-[#263238]/50" />
            
            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container mx-auto px-4 lg:px-8">
                <div className="max-w-2xl">
                  {/* Icon Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="text-white/70 text-sm font-medium uppercase tracking-widest">
                      {slide.subtitle}
                    </span>
                  </div>
                  
                  {/* Headline */}
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight text-balance">
                    {slide.title}
                  </h1>
                  
                  {/* Description */}
                  <p className="text-lg md:text-xl text-white/80 mb-10 max-w-xl leading-relaxed">
                    {slide.description}
                  </p>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row items-start gap-4">
                    <Button 
                      size="lg" 
                      asChild 
                      className="text-base px-8 bg-primary hover:bg-primary/90 text-white"
                    >
                      <Link href="/contact">Get a Free Quote</Link>
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      asChild 
                      className="text-base px-8 border-white/30 text-white hover:bg-white/10 hover:text-white bg-transparent"
                    >
                      <Link href="/services">Our Services</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      })}

      {/* Pagination Dots - Centered at Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? "w-3 h-3 bg-primary" 
                : "w-2.5 h-2.5 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
