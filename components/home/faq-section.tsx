import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const faqs = [
  {
    question: "What types of insurance does ProCare offer?",
    answer: "ProCare Insurance Brokers offers a comprehensive range of insurance products including Life Insurance, Health Insurance, Vehicle Insurance, Business Insurance, Travel Insurance, and General Insurance. We work with multiple top-rated insurance providers to offer you the best coverage options at competitive rates.",
  },
  {
    question: "How do I get a quote for insurance?",
    answer: "Getting a quote is easy! You can either fill out our online inquiry form on the Contact page, call us directly at +94 11 234 5678, or visit our office in Colombo. Our team will assess your needs and provide you with personalized quotes from multiple insurance providers.",
  },
  {
    question: "What documents do I need to purchase insurance?",
    answer: "Required documents vary by insurance type. Generally, you'll need a valid ID (NIC or Passport), proof of address, and specific documents related to the insurance type (e.g., vehicle registration for motor insurance, medical reports for health insurance). Our team will guide you through the exact requirements.",
  },
  {
    question: "How long does the claim process take?",
    answer: "Claim processing times vary depending on the insurance type and complexity. Simple claims can be processed within 5-7 working days, while more complex claims may take 2-4 weeks. ProCare provides dedicated claim assistance to help expedite the process and keep you informed every step of the way.",
  },
  {
    question: "Can I customize my insurance coverage?",
    answer: "Absolutely! We understand that every individual and business has unique needs. Our insurance advisors work with you to create customized coverage packages that match your specific requirements and budget. We can add or modify coverage options to ensure you have the protection you need.",
  },
]

export default function FAQSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Header */}
          <div className="lg:sticky lg:top-24">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">FAQ</span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-3 mb-4 text-balance">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Have questions? We&apos;ve got answers. If you can&apos;t find what you&apos;re looking for, feel free to contact us directly.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Accordion */}
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-primary py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
