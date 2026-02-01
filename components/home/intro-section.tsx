import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Users, Award, Clock } from "lucide-react"

const stats = [
  { icon: Users, value: "10,000+", label: "Happy Clients" },
  { icon: Shield, value: "15+", label: "Years Experience" },
  { icon: Award, value: "50+", label: "Insurance Partners" },
  { icon: Clock, value: "24/7", label: "Support Available" },
]

export default function IntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About ProCare</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6 leading-tight text-balance">
              Your Trusted Partner for Comprehensive Insurance Solutions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              ProCare Insurance Brokers has been serving Sri Lanka since 2010, providing expert insurance advice and comprehensive coverage options for individuals and businesses. We believe in building lasting relationships based on trust, transparency, and exceptional service.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of experienced insurance professionals works tirelessly to understand your unique needs and match you with the perfect coverage at competitive rates. Whether you&apos;re looking to protect your family, your health, your vehicle, or your business, we have the expertise to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <div
                  key={index}
                  className="bg-muted rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-secondary" />
                  </div>
                  <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
