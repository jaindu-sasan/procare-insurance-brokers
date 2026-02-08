import Link from "next/link"
import { Button } from "@/components/ui/button"
import CountUp from "@/components/ui/count-up"
import { Shield, Users, Award, Clock } from "lucide-react"

const stats = [
  { icon: Users, value: 10000, suffix: "+", label: "Happy Clients" },
  { icon: Shield, value: 15, suffix: "+", label: "Years Experience" },
  { icon: Award, value: 50, suffix: "+", label: "Insurance Partners" },
  { icon: Clock, value: 24, suffix: "/7", label: "Support Available" },
]

export default function IntroSection() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About ProCare
            </span>

            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-6">
              Your Trusted Partner for Comprehensive Insurance Solutions
            </h2>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              ProCare Insurance Brokers has been serving Sri Lanka since 2010,
              providing expert insurance advice and comprehensive coverage for
              individuals and businesses.
            </p>

            <Link href="/contact">
              <Button size="lg">Get Started</Button>
            </Link>
          </div>

          {/* RIGHT STATS */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon

              return (
                <div
                  key={index}
                  className="rounded-xl bg-muted p-6 text-center shadow-sm"
                >
                  <div className="flex items-center justify-center h-12 w-12 mx-auto mb-4 rounded-full bg-success/15">
                    <Icon className="h-6 w-6 text-success" />
                  </div>

                  <div className="text-3xl font-bold text-foreground">
                    <CountUp end={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </div>
              )
            })}
          </div>

        </div>
      </div>
    </section>
  )
}
