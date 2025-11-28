'use server'

import nodemailer from 'nodemailer'

export async function sendContactEmail(data) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    })

    const mailOptions = {
      from: `"${data.name}" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `${data.subject}`,
      text: `
Nom : ${data.name}
Prénom : ${data.firstname}
Email : ${data.email}

Message :
${data.message}
      `,
    }

    await transporter.sendMail(mailOptions)

    return { success: true }
  } catch (error) {
    console.error('❌ Erreur email:', error)
    return { success: false }
  }
}
