import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Activity, Car, Building2, Plane, Umbrella, ArrowRight } from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Life Insurance",
    description: "Secure your family's financial future with comprehensive life coverage that adapts to your needs.",
    href: "/services#life",
  },
  {
    icon: Activity,
    title: "Health Insurance",
    description: "Access quality healthcare without financial burden. Coverage for you and your entire family.",
    href: "/services#health",
  },
  {
    icon: Car,
    title: "Vehicle Insurance",
    description: "Complete protection for your vehicles with comprehensive and third-party liability options.",
    href: "/services#vehicle",
  },
  {
    icon: Building2,
    title: "Business Insurance",
    description: "Protect your business assets, employees, and operations with tailored commercial coverage.",
    href: "/services#business",
  },
  {
    icon: Plane,
    title: "Travel Insurance",
    description: "Travel with peace of mind. Coverage for medical emergencies, trip cancellation, and more.",
    href: "/services#travel",
  },
  {
    icon: Umbrella,
    title: "General Insurance",
    description: "Comprehensive coverage for property, liability, and other specialized insurance needs.",
    href: "/services#general",
  },
]

export default function ServicesPreview() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Services</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            Comprehensive Insurance Solutions
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            We offer a wide range of insurance products to protect every aspect of your life and business. Explore our services and find the coverage that&apos;s right for you.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-shadow border-0 bg-background">
                <CardHeader>
                  <div className="h-12 w-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground leading-relaxed mb-4">
                    {service.description}
                  </CardDescription>
                  <Link 
                    href={service.href}
                    className="inline-flex items-center text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
