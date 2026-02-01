import type { Metadata } from "next"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react"
import ContactForm from "@/components/contact/contact-form"

export const metadata: Metadata = {
  title: "Contact Us | ProCare Insurance Brokers",
  description: "Get in touch with ProCare Insurance Brokers. Contact us for a free quote, insurance advice, or any inquiries. We're here to help protect what matters most.",
}

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    description: "Call us for immediate assistance",
    value: "+94 11 234 5678",
    href: "tel:+94112345678",
  },
  {
    icon: Mail,
    title: "Email",
    description: "Send us an email anytime",
    value: "info@procareinsurance.lk",
    href: "mailto:info@procareinsurance.lk",
  },
  {
    icon: MapPin,
    title: "Office",
    description: "Visit us in person",
    value: "123 Insurance Tower, Galle Road, Colombo 03, Sri Lanka",
    href: "https://maps.google.com",
  },
  {
    icon: Clock,
    title: "Business Hours",
    description: "We're open to serve you",
    value: "Mon - Fri: 9:00 AM - 6:00 PM",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-foreground text-background py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-primary font-medium text-sm uppercase tracking-wider">Contact Us</span>
            <h1 className="text-4xl md:text-5xl font-bold mt-3 mb-6 leading-tight text-balance">
              Get in Touch With Our Team
            </h1>
            <p className="text-lg text-background/80 leading-relaxed">
              Have questions about insurance or need a quote? Our team of experts is here to help. Fill out the form below or contact us directly through any of our channels.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((item, index) => {
              const Icon = item.icon
              const content = (
                <Card className="h-full border-0 shadow-md hover:shadow-lg transition-shadow text-center">
                  <CardContent className="p-6">
                    <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{item.description}</p>
                    <p className="text-sm font-medium text-foreground">{item.value}</p>
                  </CardContent>
                </Card>
              )

              if (item.href) {
                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {content}
                  </a>
                )
              }

              return <div key={index}>{content}</div>
            })}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <MessageSquare className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <CardTitle>Send Us a Message</CardTitle>
                      <CardDescription>Fill out the form and we&apos;ll get back to you within 24 hours.</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ContactForm />
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2 space-y-6">
              {/* Why Contact Us */}
              <Card className="border-0 shadow-md">
                <CardHeader>
                  <CardTitle className="text-lg">Why Contact ProCare?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {[
                    "Free insurance consultation and quotes",
                    "Expert advice from licensed professionals",
                    "Comparison of multiple insurance options",
                    "Dedicated claims assistance support",
                    "Personalized coverage recommendations",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-secondary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-xs font-bold text-secondary">{index + 1}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Quick Connect */}
              <Card className="border-0 shadow-md bg-foreground text-background">
                <CardHeader>
                  <CardTitle className="text-lg">Quick Connect</CardTitle>
                  <CardDescription className="text-background/60">
                    Prefer to reach us directly? Use the options below.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <a
                    href="https://wa.me/94112345678"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-secondary hover:bg-secondary/90 transition-colors"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    <div>
                      <div className="font-medium text-sm">WhatsApp</div>
                      <div className="text-xs text-secondary-foreground/70">Chat with us instantly</div>
                    </div>
                  </a>
                  <a
                    href="tel:+94112345678"
                    className="flex items-center gap-3 p-3 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    <div>
                      <div className="font-medium text-sm">Call Us</div>
                      <div className="text-xs text-background/60">+94 11 234 5678</div>
                    </div>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Office Image & Map Section */}
      <section className="bg-muted">
        <div className="container mx-auto px-4 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">Visit Our Office</h2>
            <p className="text-muted-foreground">123 Insurance Tower, Galle Road, Colombo 03, Sri Lanka</p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="relative rounded-lg overflow-hidden shadow-lg aspect-video">
              <Image
                src="/images/contact-office.jpg"
                alt="ProCare Insurance Brokers Office"
                fill
                className="object-cover"
              />
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.9029610619817!2d79.8493!3d6.9147!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTQnNTMuMCJOIDc5wrA1MCc1Ny41IkU!5e0!3m2!1sen!2slk!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ProCare Insurance Brokers Location"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
