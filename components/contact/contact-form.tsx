"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

export default function ContactForm() {
  const [status, setStatus] = useState<FormStatus>("idle")
  const [errorMessage, setErrorMessage] = useState("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    const formData = new FormData(e.currentTarget)
    const data = {
      fullName: formData.get("fullName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      subject: formData.get("subject") as string,
      message: formData.get("message") as string,
    }

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.message || "Failed to send message")
      }

      setStatus("success")
        ; (e.target as HTMLFormElement).reset()
    } catch (error) {
      setStatus("error")
      setErrorMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.")
    }
  }

  if (status === "success") {
    return (
      <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-8 text-center">
        <div className="h-16 w-16 rounded-full bg-secondary/20 flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-secondary" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Message Sent Successfully!</h3>
        <p className="text-muted-foreground mb-6">
          Thank you for contacting ProCare Insurance Brokers. Our team will get back to you within 24 hours.
        </p>
        <Button onClick={() => setStatus("idle")}>Send Another Message</Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status === "error" && (
        <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="h-5 w-5 text-destructive shrink-0 mt-0.5" />
          <div>
            <p className="font-medium text-destructive">Failed to send message</p>
            <p className="text-sm text-muted-foreground">{errorMessage}</p>
          </div>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name <span className="text-destructive">*</span></Label>
          <Input
            id="fullName"
            name="fullName"
            placeholder="Enter your full name"
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email Address <span className="text-destructive">*</span></Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter your email"
            required
            disabled={status === "loading"}
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number <span className="text-destructive">*</span></Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+94 XX XXX XXXX"
            required
            disabled={status === "loading"}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="subject">Subject</Label>
          <Select name="subject" disabled={status === "loading"}>
            <SelectTrigger id="subject">
              <SelectValue placeholder="Select a subject" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="general">General Inquiry</SelectItem>
              <SelectItem value="life-insurance">Life Insurance</SelectItem>
              <SelectItem value="health-insurance">Health Insurance</SelectItem>
              <SelectItem value="vehicle-insurance">Vehicle Insurance</SelectItem>
              <SelectItem value="business-insurance">Business Insurance</SelectItem>
              <SelectItem value="travel-insurance">Travel Insurance</SelectItem>
              <SelectItem value="claim-support">Claim Support</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message <span className="text-destructive">*</span></Label>
        <Textarea
          id="message"
          name="message"
          placeholder="How can we help you?"
          rows={5}
          required
          disabled={status === "loading"}
        />
      </div>

      <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "loading"}>
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 mr-2 animate-spin" />
            Sending...
          </>
        ) : (
          "Send Message"
        )}
      </Button>
    </form>
  )
}
