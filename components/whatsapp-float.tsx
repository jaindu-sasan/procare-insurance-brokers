"use client"

import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"

export default function WhatsAppFloat() {
  const [mounted, setMounted] = useState(false)

  // CORRECTED: For Sri Lanka, use country code 94 + number without leading 0
  const phoneNumber = "94713430456"

  // Default message (optional)
  const defaultMessage = "Hello! I'm interested in your insurance services. Can you provide more information?"

  // Encode the message for URL
  const encodedMessage = encodeURIComponent(defaultMessage)

  // Create the WhatsApp link
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`

  useEffect(() => {
    setMounted(true)
    // Debug: Check the link
    console.log("WhatsApp link:", whatsappLink)
  }, [])

  if (!mounted) return null

  return (
    <>
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-[#128C7E] hover:shadow-xl md:bottom-8 md:right-8 md:h-16 md:w-16"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="h-7 w-7 md:h-8 md:w-8" />
        {/* Optional notification badge */}
        <span className="absolute -top-1 -right-1 flex h-5 w-5 animate-pulse items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
          1
        </span>
      </a>

      {/* Optional pulse animation */}
      <style jsx>{`
        @keyframes pulse-ring {
          0% {
            transform: scale(0.8);
            opacity: 0.8;
          }
          80% {
            transform: scale(1.2);
            opacity: 0;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        .pulse-ring {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid #25D366;
          animation: pulse-ring 2s infinite;
          pointer-events: none;
        }
      `}</style>

      {/* Uncomment for pulse animation */}
      {/* <div className="pulse-ring"></div> */}
    </>
  )
}