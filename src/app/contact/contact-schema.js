import { z } from 'zod'

export const contactSchema = z.object({
  name: z
    .string()
    .min(1, 'Le nom est obligatoire.')
    .min(3, 'le nom doit contenir au minimum 3 caractéres'),
  firstname: z
    .string()
    .min(1, 'Le prénom est obligatoire.')
    .min(3, 'Le prénom doit contenir au moins 3 caractères.'),
  email: z.string().email('Email invalide.'),
  subject: z
    .string()
    .min(1, 'Le sujet est obligatoire.')
    .min(10, 'Le sujet doit contenir au moins 10 caractères.'),
  message: z
    .string()
    .min(1, 'Le message est obligatoire.')
    .min(100, 'Le message doit contenir au moins 100 caractères.'),
})
