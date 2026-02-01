import { NextRequest, NextResponse } from "next/server"

// Email template for the contact form submission
function generateEmailHTML(data: {
  fullName: string
  email: string
  phone: string
  subject: string
  message: string
}) {
  const subjectLabels: Record<string, string> = {
    "general": "General Inquiry",
    "life-insurance": "Life Insurance",
    "health-insurance": "Health Insurance",
    "vehicle-insurance": "Vehicle Insurance",
    "business-insurance": "Business Insurance",
    "travel-insurance": "Travel Insurance",
    "claim-support": "Claim Support",
    "other": "Other",
  }

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry from ProCare Website</title>
</head>
<body style="margin: 0; padding: 0; font-family: Arial, Helvetica, sans-serif; background-color: #f5f5f5;">
  <table role="presentation" style="width: 100%; border-collapse: collapse;">
    <tr>
      <td style="padding: 40px 20px;">
        <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
          <!-- Header -->
          <tr>
            <td style="background-color: #263238; padding: 30px 40px; text-align: center;">
              <table role="presentation" style="margin: 0 auto;">
                <tr>
                  <td style="vertical-align: middle; padding-right: 12px;">
                    <div style="width: 40px; height: 40px; background-color: #c62828; border-radius: 50%; display: inline-block;"></div>
                  </td>
                  <td style="vertical-align: middle;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: bold;">ProCare</h1>
                    <p style="margin: 0; color: rgba(255,255,255,0.7); font-size: 12px;">Insurance Brokers</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Title -->
          <tr>
            <td style="padding: 30px 40px 20px;">
              <h2 style="margin: 0; color: #263238; font-size: 20px; font-weight: bold; border-bottom: 3px solid #c62828; padding-bottom: 10px; display: inline-block;">
                New Inquiry Received
              </h2>
            </td>
          </tr>
          
          <!-- Content -->
          <tr>
            <td style="padding: 0 40px 30px;">
              <table role="presentation" style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0 0 5px; color: #757575; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Full Name</p>
                    <p style="margin: 0; color: #263238; font-size: 16px; font-weight: 500;">${data.fullName}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0 0 5px; color: #757575; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email Address</p>
                    <p style="margin: 0; color: #263238; font-size: 16px;">
                      <a href="mailto:${data.email}" style="color: #c62828; text-decoration: none;">${data.email}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0 0 5px; color: #757575; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone Number</p>
                    <p style="margin: 0; color: #263238; font-size: 16px;">
                      <a href="tel:${data.phone}" style="color: #c62828; text-decoration: none;">${data.phone}</a>
                    </p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0; border-bottom: 1px solid #e0e0e0;">
                    <p style="margin: 0 0 5px; color: #757575; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                    <p style="margin: 0; color: #263238; font-size: 16px;">${subjectLabels[data.subject] || data.subject || "Not specified"}</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 15px 0;">
                    <p style="margin: 0 0 5px; color: #757575; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                    <div style="margin: 10px 0 0; padding: 15px; background-color: #f5f5f5; border-radius: 6px; border-left: 4px solid #2e7d32;">
                      <p style="margin: 0; color: #263238; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          
          <!-- Footer -->
          <tr>
            <td style="background-color: #f5f5f5; padding: 20px 40px; text-align: center;">
              <p style="margin: 0 0 10px; color: #757575; font-size: 13px;">
                This email was sent from the ProCare Insurance website contact form.
              </p>
              <p style="margin: 0; color: #757575; font-size: 12px;">
                ${new Date().toLocaleString("en-US", { dateStyle: "full", timeStyle: "short" })}
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, email, phone, subject, message } = body

    // Validate required fields
    if (!fullName || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Please fill in all required fields." },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, message: "Please provide a valid email address." },
        { status: 400 }
      )
    }

    // Generate email HTML
    const emailHTML = generateEmailHTML({ fullName, email, phone, subject, message })

    // For production, you would integrate with an email service like:
    // - Resend (recommended for Vercel)
    // - SendGrid
    // - AWS SES
    // - Nodemailer with SMTP
    
    // Example with Resend (uncomment and add RESEND_API_KEY to env):
    /*
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'ProCare Website <noreply@procareinsurance.lk>',
      to: ['info@procareinsurance.lk'],
      subject: 'New Inquiry Received from ProCare Website',
      html: emailHTML,
      replyTo: email,
    })
    */

    // For demo purposes, we'll log the submission and return success
    console.log("Contact form submission:", {
      fullName,
      email,
      phone,
      subject,
      message,
      timestamp: new Date().toISOString(),
    })

    // Simulate a small delay for realistic UX
    await new Promise((resolve) => setTimeout(resolve, 1000))

    return NextResponse.json({
      success: true,
      message: "Your message has been sent successfully. We will contact you soon.",
    })
  } catch (error) {
    console.error("Contact form error:", error)
    return NextResponse.json(
      { success: false, message: "An unexpected error occurred. Please try again later." },
      { status: 500 }
    )
  }
}
