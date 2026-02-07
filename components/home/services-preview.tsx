import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Users, Building2, ArrowRight } from "lucide-react"

const categories = [
  {
    id: "personal",
    title: "Personal Insurance",
    description: "Life, Health, Vehicle, Travel and more — for individuals and families.",
    icon: Users,
    image: "/images/personal.png", // same image used in /services
    points: ["Life & Health cover", "Motor protection", "Travel cover", "Family-friendly plans"],
    href: "/services/personal",
  },
  {
    id: "corporate",
    title: "Corporate Insurance",
    description: "Business protection, employee benefits, liability, property and operational risks.",
    icon: Building2,
    image: "/images/corporate.png", // same image used in /services
    points: ["Business & property risk", "Employee benefits", "Liability solutions", "Tailored packages"],
    href: "/services/corporate",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Choose Your Insurance Category
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Explore Personal and Corporate insurance solutions. View coverage options and request a quote with expert guidance.
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid lg:grid-cols-2 gap-8">
          {categories.map((c) => {
            const Icon = c.icon
            return (
              <div
                key={c.id}
                className="group relative overflow-hidden rounded-2xl border bg-background shadow-sm hover:shadow-xl transition-shadow"
              >
                {/* Image header */}
                <div className="relative h-56 w-full">
                  <Image
                    src={c.image || "/placeholder.svg"}
                    alt={c.title}
                    fill
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
                  />
                  {/* soft overlay */}
                  <div className="absolute inset-0 bg-gradient-to-b from-foreground/30 via-transparent to-transparent" />
                </div>

                <div className="p-7">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{c.title}</h3>
                      <p className="mt-2 text-muted-foreground">{c.description}</p>
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
                    {/* Make both "View" buttons same primary color */}
                    <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      <Link href={c.href}>
                        View {c.title} <ArrowRight className="ml-2 h-4 w-4" />
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

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild className="bg-primary hover:bg-primary/90">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
