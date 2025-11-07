import { EmailTemplate } from "@/components/email-template"
import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend("re_34HYgCBd_HBXTLjnkhqqvftGiRxG9m6yh")

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, subject, message } = body

    // Validar que todos los campos estén presentes
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      )
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: ["luciano.mastran@gmail.com", "elpatrondeltruck@gmail.com"],
      subject: `Contacto Web: ${subject}`,
      react: EmailTemplate({ name, email, subject, message }),
      reply_to: email,
    })

    return NextResponse.json({ success: true, data })
  } catch (error) {
    console.error("Error enviando email:", error)
    return NextResponse.json(
      { error: "Error al enviar el mensaje" },
      { status: 500 }
    )
  }
}

