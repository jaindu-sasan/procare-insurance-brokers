import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ShieldCheck, Users, Building2, ArrowRight, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | ProCare Insurance Brokers",
  description: "Choose Personal or Corporate insurance services and request a quote.",
}

const categories = [
  {
    id: "personal",
    title: "Personal Insurance",
    desc: "Life, Health, Vehicle, Travel and more — for individuals and families.",
    href: "/services/personal",
    icon: Users,
    image: "/images/personal.png", // change to your image
    points: ["Life & Health cover", "Motor protection", "Travel cover", "Family-friendly plans"],
    accent: "from-secondary/25 to-transparent",
    buttonVariant: "default" as const,
  },
  {
    id: "corporate",
    title: "Corporate Insurance",
    desc: "Business protection, employee benefits, liability, property and operational risks.",
    href: "/services/corporate",
    icon: Building2,
    image: "/images/corporate.png", // change to your image
    points: ["Business & property risk", "Employee benefits", "Liability solutions", "Tailored packages"],
    accent: "from-primary/20 to-transparent",
    buttonVariant: "outline" as const,
  },
]

export default function ServicesMainPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* HERO */}
      <section className="relative overflow-hidden bg-[#263238] text-white">
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-service_page.png"
            alt="Hero background"
            fill
            className="object-cover object-center opacity-20"
            priority
          />
        </div>
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute -top-32 -left-32 h-80 w-80 rounded-full bg-secondary blur-3xl" />
          <div className="absolute -bottom-40 -right-40 h-96 w-96 rounded-full bg-primary blur-3xl" />
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-20 lg:py-28 relative">
          <div className="max-w-3xl">
            <span className="text-secondary font-medium text-sm uppercase tracking-widest">
              Our Services
            </span>

            <h1 className="text-4xl lg:text-5xl font-bold mt-4 mb-6 text-balance leading-tight">
              Choose the right insurance — for you or your business
            </h1>

            <p className="text-lg lg:text-xl text-white/80 leading-relaxed">
              Compare options in seconds. Get expert guidance. Request a quote with confidence.
            </p>

            {/* Trust row */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Independent advice",
                "Multiple insurers",
                "Claims support",
                "Tailored recommendations",
              ].map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/85"
                >
                  <ShieldCheck className="h-4 w-4 text-secondary" />
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="/contact">Request a Quote</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-white/25 text-white hover:bg-white/10"
              >
                <Link href="/contact">
                  Talk to an Expert <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY CARDS */}
      <section className="py-14 lg:py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {categories.map((c) => {
              const Icon = c.icon
              return (
                <div
                  key={c.id}
                  className="group relative overflow-hidden rounded-2xl border bg-card shadow-sm hover:shadow-xl transition-shadow"
                >
                  {/* image header */}
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={c.image || "/placeholder.svg"}
                      alt={c.title}
                      fill
                       className="object-cover object-top"
                      priority={false}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${c.accent}`} />
                    <div className="absolute inset-0 bg-black/15" />
                  </div>

                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h2 className="text-2xl font-bold">{c.title}</h2>
                        <p className="mt-2 text-muted-foreground">{c.desc}</p>
                      </div>

                      <div className="shrink-0 h-12 w-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-secondary" />
                      </div>
                    </div>

                    <div className="mt-6 grid sm:grid-cols-2 gap-3">
                      {c.points.map((p) => (
                        <div key={p} className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5" />
                          <p className="text-sm text-muted-foreground">{p}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                       <Button
                        asChild
                        size="lg"
                        className="bg-primary hover:bg-primary/90 text-primary-foreground"
                       >
                        <Link href={c.href}>
                          View {c.title}
                        </Link>
                      </Button>


                      <Button asChild size="lg" variant="outline" className="bg-transparent">
                        <Link href={`/contact?category=${c.id}`}>Request Quote</Link>
                      </Button>
                    </div>
                  </div>

                  {/* subtle hover ring */}
                  <div className="pointer-events-none absolute inset-0 ring-1 ring-transparent group-hover:ring-secondary/25 transition" />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* SMALL CTA */}
      <section className="pb-16 lg:pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="rounded-2xl border bg-muted/40 p-8 lg:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground">Not sure which category to choose?</h3>
              <p className="mt-2 text-muted-foreground">
                Tell us your situation and we’ll recommend the best options for your needs.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/contact">Get a Free Consultation</Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="tel:+94112345678">Call +94 11 234 5678</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
