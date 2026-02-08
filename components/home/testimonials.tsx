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
    rating: 4,
  },
  {
    name: "Priya Jayawardena",
    role: "Marketing Director",
    content: "Switching to ProCare was the best decision for my family. They offer comprehensive life insurance plans that give me peace of mind knowing my loved ones are protected.",
    rating: 4,
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
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 relative">
          {/* Animated background glow effect */}
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <div
              className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-[shimmer_8s_ease-in-out_infinite] opacity-5"
              style={{
                background: 'radial-gradient(circle at 30% 50%, rgba(59, 130, 246, 0.4) 0%, transparent 50%), radial-gradient(circle at 70% 20%, rgba(59, 130, 246, 0.3) 0%, transparent 50%)',
              }}
            />
          </div>

          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="border-0 shadow-md bg-muted/50 backdrop-blur-sm relative overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              style={{
                animation: `gentle-wave ${5 + index}s ease-in-out infinite`,
                animationDelay: `${index * 0.2}s`
              }}
            >
              {/* Shimmer border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />

              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div
                  className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-[pulse_4s_ease-in-out_infinite]"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              </div>

              <CardContent className="p-6 lg:p-8 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                    <span className="text-lg font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                      {testimonial.name.split(" ").map(n => n[0]).join("")}
                    </span>
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                  <Quote className="h-8 w-8 text-primary/20 ml-auto group-hover:text-primary/40 transition-colors duration-300" />
                </div>

                {/* Stars with sparkle effect */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <div key={i} className="relative">
                      <Star
                        className="h-4 w-4 fill-amber-400 text-amber-400 group-hover:scale-110 transition-transform duration-300"
                        style={{ animationDelay: `${i * 0.1}s` }}
                      />
                      <div
                        className="absolute inset-0 animate-[sparkle_2s_ease-in-out_infinite] opacity-0 group-hover:opacity-100"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-amber-300 rounded-full blur-sm" />
                      </div>
                    </div>
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  &quot;{testimonial.content}&quot;
                </p>

                {/* Bottom glow effect */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent group-hover:via-primary/40 transition-all duration-300" />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}