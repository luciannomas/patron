import * as React from "react"

interface EmailTemplateProps {
  name: string
  email: string
  subject: string
  message: string
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({ name, email, subject, message }) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f4f4f4" }}>
    <div style={{ maxWidth: "600px", margin: "0 auto", backgroundColor: "#ffffff", padding: "20px", borderRadius: "8px" }}>
      <h1 style={{ color: "#ff8c00", fontSize: "28px", fontWeight: "bold", marginBottom: "20px" }}>
        🍔 Nuevo Mensaje de Contacto - El Patrón del Truck
      </h1>

      <div style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "5px" }}>
        <h2 style={{ color: "#2d5016", fontSize: "18px", marginBottom: "10px" }}>Datos del Cliente:</h2>
        <p style={{ margin: "5px 0", color: "#333" }}>
          <strong>Nombre:</strong> {name}
        </p>
        <p style={{ margin: "5px 0", color: "#333" }}>
          <strong>Email:</strong> {email}
        </p>
        <p style={{ margin: "5px 0", color: "#333" }}>
          <strong>Asunto:</strong> {subject}
        </p>
      </div>

      <div style={{ marginBottom: "20px", padding: "15px", backgroundColor: "#fff8f0", borderRadius: "5px" }}>
        <h2 style={{ color: "#2d5016", fontSize: "18px", marginBottom: "10px" }}>Mensaje:</h2>
        <p style={{ color: "#333", lineHeight: "1.6", whiteSpace: "pre-wrap" }}>{message}</p>
      </div>

      <div style={{ padding: "15px", backgroundColor: "#ff8c00", borderRadius: "5px", textAlign: "center" }}>
        <p style={{ margin: "0", color: "#000", fontWeight: "bold" }}>
          Responder a: <a href={`mailto:${email}`} style={{ color: "#000", textDecoration: "underline" }}>{email}</a>
        </p>
      </div>
    </div>
  </div>
)

