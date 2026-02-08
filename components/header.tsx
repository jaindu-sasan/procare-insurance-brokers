"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone } from "lucide-react"

const navigation = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="ProCare Insurance Brokers"
            width={160}
            height={60}
            className="h-12 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navigation.map((item) => {
            const isActive = pathname === item.href

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-sm font-medium transition-colors
                  ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
                `}
              >
                {item.name}

                {/* ONE gradient underline */}
                {isActive && (
                  <span
                    className="absolute -bottom-2 left-0 h-[3px] w-full rounded-full"
                    style={{
                      background:
                        "linear-gradient(to right, #dc2626 0%, #dc2626 50%, #16a34a 50%, #16a34a 100%)",
                    }}
                  />
                )}
              </Link>
            )
          })}
        </nav>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="tel:+94112345678"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
          >
            <Phone className="h-4 w-4" />
            <span>+94 11 234 5678</span>
          </Link>

          {/* Desktop Button with heartbeat effect using arbitrary animation */}
          <Button asChild className="animate-[heartbeat_2s_ease-in-out_infinite] hover:animate-none hover:scale-105 transition-transform duration-200">
            <Link href="/contact">Get a Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4 mt-8">
              {navigation.map((item) => {
                const isActive = pathname === item.href

                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`relative text-lg font-medium py-2
                      ${isActive ? "text-primary" : "text-foreground hover:text-primary"}
                    `}
                  >
                    {item.name}

                    {/* Mobile gradient underline */}
                    {isActive && (
                      <span
                        className="absolute left-0 -bottom-1 h-[3px] w-12 rounded-full"
                        style={{
                          background:
                            "linear-gradient(to right, #dc2626 0%, #dc2626 50%, #16a34a 50%, #16a34a 100%)",
                        }}
                      />
                    )}
                  </Link>
                )
              })}

              <hr className="my-4" />

              <Link
                href="tel:+94112345678"
                className="flex items-center gap-2 text-muted-foreground"
              >
                <Phone className="h-4 w-4" />
                <span>+94 11 234 5678</span>
              </Link>

              {/* Mobile Button with heartbeat effect using arbitrary animation */}
              <Button asChild className="mt-4 animate-[heartbeat_2s_ease-in-out_infinite] hover:animate-none hover:scale-105 transition-transform duration-200">
                <Link href="/contact" onClick={() => setIsOpen(false)}>
                  Get a Quote
                </Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>

      </div>
    </header>
  )
}