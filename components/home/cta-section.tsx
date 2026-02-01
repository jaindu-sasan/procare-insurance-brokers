import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone, MessageSquare } from "lucide-react"

export default function CTASection() {
  return (
    <section className="py-16 lg:py-24 bg-foreground text-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-balance">
            Ready to Protect What Matters Most?
          </h2>
          <p className="text-lg text-background/80 mb-8 leading-relaxed">
            Get in touch with our insurance experts today for a free consultation. We&apos;ll help you find the perfect coverage for your needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button size="lg" asChild className="w-full sm:w-auto">
              <Link href="/contact" className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Get a Free Quote
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              asChild 
              className="w-full sm:w-auto border-background/30 text-background hover:bg-background hover:text-foreground bg-transparent"
            >
              <Link href="tel:+94112345678" className="flex items-center gap-2">
                <Phone className="h-5 w-5" />
                Call +94 11 234 5678
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
