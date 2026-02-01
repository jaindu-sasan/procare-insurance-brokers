import { Card, CardContent } from "@/components/ui/card"
import { Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Samantha Perera",
    role: "Business Owner",
    content: "ProCare helped me find the perfect business insurance package. Their team took the time to understand my needs and provided excellent coverage at a competitive rate. Highly recommended!",
    rating: 5,
  },
  {
    name: "Amal Fernando",
    role: "Software Engineer",
    content: "I've been a client for over 5 years now. Their health insurance saved me during a medical emergency. The claim process was smooth and the support team was incredibly helpful throughout.",
    rating: 5,
  },
  {
    name: "Priya Jayawardena",
    role: "Marketing Director",
    content: "Switching to ProCare was the best decision for my family. They offer comprehensive life insurance plans that give me peace of mind knowing my loved ones are protected.",
    rating: 5,
  },
  {
    name: "Kasun Silva",
    role: "Fleet Manager",
    content: "Managing vehicle insurance for our company fleet was a headache until we partnered with ProCare. Their dedicated account manager makes everything so much easier.",
    rating: 5,
  },
]

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Don&apos;t just take our word for it. Here&apos;s what our valued clients have to say about their experience with ProCare Insurance Brokers.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md bg-muted">
              <CardContent className="p-6 lg:p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-lg font-bold text-primary">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 ml-auto" />
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  &quot;{testimonial.content}&quot;
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
