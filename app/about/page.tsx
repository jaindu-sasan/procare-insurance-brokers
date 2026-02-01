import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Target, Eye, Heart, Users, Award, Clock, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | ProCare Insurance Brokers",
  description: "Learn about ProCare Insurance Brokers - your trusted insurance partner in Sri Lanka since 2010. Discover our mission, vision, and the team dedicated to protecting what matters most.",
}

const values = [
  {
    icon: Heart,
    title: "Client-Centric Approach",
    description: "We put our clients first, understanding their unique needs and providing personalized insurance solutions.",
  },
  {
    icon: Shield,
    title: "Integrity & Transparency",
    description: "We operate with complete honesty and transparency, ensuring our clients always know exactly what they're getting.",
  },
  {
    icon: Award,
    title: "Excellence in Service",
    description: "We strive for excellence in everything we do, from policy selection to claims assistance and ongoing support.",
  },
  {
    icon: Users,
    title: "Building Relationships",
    description: "We believe in building long-term relationships based on trust, not just completing transactions.",
  },
]

const team = [
  {
    name: "Rajitha Wickramasinghe",
    role: "Founder & CEO",
    bio: "With over 25 years in the insurance industry, Rajitha founded ProCare with a vision to make quality insurance accessible to all Sri Lankans.",
  },
  {
    name: "Dilini Amarasinghe",
    role: "Head of Operations",
    bio: "Dilini oversees daily operations and ensures every client receives exceptional service and support throughout their insurance journey.",
  },
  {
    name: "Nuwan Jayasuriya",
    role: "Senior Insurance Advisor",
    bio: "Nuwan specializes in business and commercial insurance, helping enterprises of all sizes protect their assets and operations.",
  },
  {
    name: "Kavitha Ratnayake",
    role: "Claims Manager",
    bio: "Kavitha leads our claims team, ensuring that every claim is processed efficiently and fairly for our valued clients.",
  },
]

const milestones = [
  { year: "2010", title: "Company Founded", description: "ProCare Insurance Brokers was established in Colombo." },
  { year: "2013", title: "1000+ Clients", description: "Reached our first major milestone of serving 1000 clients." },
  { year: "2016", title: "Business Insurance Launch", description: "Expanded services to include comprehensive business insurance." },
  { year: "2019", title: "Digital Transformation", description: "Launched online services for easier policy management." },
  { year: "2023", title: "10,000+ Clients", description: "Celebrating a decade of trust with over 10,000 satisfied clients." },
]

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-foreground text-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">About Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight text-balance">
              Your Trusted Insurance Partner Since 2010
            </h1>
            <p className="text-lg text-background/80 leading-relaxed">
              ProCare Insurance Brokers has been serving Sri Lanka for over 15 years, providing expert insurance advice and comprehensive coverage options for individuals and businesses across the nation.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-balance">
                Who We Are
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                ProCare Insurance Brokers is a licensed insurance brokerage firm based in Colombo, Sri Lanka. We act as intermediaries between our clients and insurance companies, ensuring you get the best coverage at the most competitive rates.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Unlike insurance agents who represent specific insurance companies, we work for you. Our team of experienced professionals evaluates options from multiple top-rated insurers to find the perfect match for your unique needs and budget.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                From life and health insurance to vehicle, business, and travel coverage, we offer a complete range of insurance products backed by exceptional customer service and claims support.
              </p>
              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground font-medium">Licensed & Regulated</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground font-medium">50+ Insurance Partners</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary" />
                  <span className="text-foreground font-medium">24/7 Claims Support</span>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative rounded-lg overflow-hidden shadow-xl">
                <Image
                  src="/images/about-team.jpg"
                  alt="ProCare Insurance Brokers Team"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="bg-muted rounded-lg p-6 lg:p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">15+</div>
                    <div className="text-sm text-muted-foreground">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">10K+</div>
                    <div className="text-sm text-muted-foreground">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">50+</div>
                    <div className="text-sm text-muted-foreground">Insurance Partners</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">98%</div>
                    <div className="text-sm text-muted-foreground">Claim Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 lg:p-10">
                <div className="h-14 w-14 rounded-lg bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To provide accessible, affordable, and comprehensive insurance solutions that protect Sri Lankan families and businesses. We are committed to delivering exceptional service, expert advice, and unwavering support at every stage of our clients&apos; insurance journey.
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 lg:p-10">
                <div className="h-14 w-14 rounded-lg bg-secondary/10 flex items-center justify-center mb-6">
                  <Eye className="h-7 w-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To become Sri Lanka&apos;s most trusted insurance brokerage, recognized for our integrity, innovation, and commitment to client satisfaction. We envision a future where every individual and business has access to the protection they need to thrive with confidence.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Values</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              What Drives Us
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our core values guide everything we do, from how we serve our clients to how we conduct our business.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <div key={index} className="text-center">
                  <div className="h-14 w-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-7 w-7 text-secondary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 lg:py-24 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Journey</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              Milestones Along the Way
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-translate-x-0.5" />
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-start gap-6 mb-8 last:mb-0 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <div className="text-sm text-primary font-semibold mb-1">{milestone.year}</div>
                    <div className="text-lg font-semibold text-foreground mb-1">{milestone.title}</div>
                    <div className="text-sm text-muted-foreground">{milestone.description}</div>
                  </div>
                  <div className="relative z-10 h-8 w-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-primary-foreground" />
                  </div>
                  <div className="md:hidden flex-1">
                    <div className="text-sm text-primary font-semibold mb-1">{milestone.year}</div>
                    <div className="text-lg font-semibold text-foreground mb-1">{milestone.title}</div>
                    <div className="text-sm text-muted-foreground">{milestone.description}</div>
                  </div>
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Our Team</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              Meet the Experts
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Our team of experienced insurance professionals is dedicated to helping you find the perfect coverage.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {team.map((member, index) => (
              <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <div className="h-20 w-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-primary">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <div className="text-sm text-primary font-medium mb-3">{member.role}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-foreground text-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-background/80 mb-8 leading-relaxed">
              Let our experienced team help you find the perfect insurance coverage. Contact us today for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <Link href="/contact">Get a Free Quote</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                asChild
                className="border-background/30 text-background hover:bg-background hover:text-foreground bg-transparent"
              >
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
