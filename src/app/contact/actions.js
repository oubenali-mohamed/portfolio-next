'use server'

import { contactSchema } from './contact-schema'

export async function sendContact(formData) {
  const data = Object.fromEntries(formData.entries())

  // Validation côté serveur
  const parsed = contactSchema.safeParse(data)

  if (!parsed.success) {
    const errors = parsed.error.flatten().fieldErrors
    return { success: false, errors }
  }

  console.log("📩 Données reçues côté serveur :", data)

  return { success: true }
}


