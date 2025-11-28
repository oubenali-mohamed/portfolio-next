'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema } from './contact-schema'
import { sendContactEmail  } from './sendContactEmail'
export default function Contact() {
  const [success, setSuccess] = useState(false)
  const [serverErrors, setServerErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data) {
    setIsSubmitting(true)
    setSuccess(false)

    const response = await sendContactEmail(data)

    if (!response.success) {
      alert('Erreur lors de l’envoi du message.')
      setIsSubmitting(false)
      return
    }

    setSuccess(true)
    reset()
    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen flex justify-center pt-24 px-6 pb-20 bg-zinc-50 dark:bg-black">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="
          w-full max-w-xl 
          bg-white dark:bg-zinc-900 
          p-8 rounded-2xl shadow-lg 
          border border-transparent dark:border-zinc-800
        "
      >
        <h1 className="text-3xl font-bold text-center dark:text-white pb-4 relative">
          Me Contacter
          <span className="absolute left-1/2 bottom-0 h-[3px] w-24 bg-cyan-500 -translate-x-1/2 rounded-full"></span>
        </h1>

        <p className="mt-4 text-gray-600 dark:text-gray-300 text-center mb-10">
          Un projet ? Une question ? Je vous réponds rapidement.
        </p>

        <div className="flex flex-col gap-6">
          {/* NOM */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Nom *
            </label>
            <input
              {...register('name')}
              placeholder="Nom"
              className="
                w-full px-4 py-3 rounded-xl 
                bg-zinc-100 dark:bg-zinc-800 
                text-gray-800 dark:text-gray-200
                border border-zinc-300 dark:border-zinc-700
                focus:ring-2 focus:ring-cyan-500 focus:outline-none
              "
            />
            {(errors.name || serverErrors.name) && (
              <p className="text-red-500 mt-2 font-semibold  text-sm error-animate">
                {errors.name?.message || serverErrors.name}
              </p>
            )}
          </div>

          {/* PRÉNOM */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Prénom *
            </label>
            <input
              {...register('firstname')}
              placeholder="Prénom"
              className="
                w-full px-4 py-3 rounded-xl 
                bg-zinc-100 dark:bg-zinc-800 
                text-gray-800 dark:text-gray-200
                border border-zinc-300 dark:border-zinc-700
                focus:ring-2 focus:ring-cyan-500 focus:outline-none
              "
            />
            {(errors.firstname || serverErrors.firstname) && (
              <p className="text-red-500 mt-2 font-semibold  text-sm error-animate">
                {errors.firstname?.message || serverErrors.firstname}
              </p>
            )}
          </div>

          {/* EMAIL */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Email *
            </label>
            <input
              {...register('email')}
              type="email"
              placeholder="email@email.com"
              className="
                w-full px-4 py-3 rounded-xl 
                bg-zinc-100 dark:bg-zinc-800 
                text-gray-800 dark:text-gray-200
                border border-zinc-300 dark:border-zinc-700
                focus:ring-2 focus:ring-cyan-500 focus:outline-none
              "
            />
            {(errors.email || serverErrors.email) && (
              <p className="text-red-500 mt-2 font-semibold  text-sm error-animate">
                {errors.email?.message || serverErrors.email}
              </p>
            )}
          </div>

          {/* SUJET */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Sujet *
            </label>
            <input
              {...register('subject')}
              placeholder="Sujet de votre message"
              className="
                w-full px-4 py-3 rounded-xl 
                bg-zinc-100 dark:bg-zinc-800 
                text-gray-800 dark:text-gray-200
                border border-zinc-300 dark:border-zinc-700
                focus:ring-2 focus:ring-cyan-500 focus:outline-none
              "
            />
            {(errors.subject || serverErrors.subject) && (
              <p className="text-red-500 mt-2 font-semibold  text-sm error-animate">
                {errors.subject?.message || serverErrors.subject}
              </p>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="block mb-2 text-sm font-semibold text-gray-700 dark:text-gray-300">
              Votre message *
            </label>
            <textarea
              {...register('message')}
              placeholder="Expliquez votre besoin..."
              rows={6}
              className="
                w-full px-4 py-3 rounded-xl 
                bg-zinc-100 dark:bg-zinc-800 
                text-gray-800 dark:text-gray-200
                border border-zinc-300 dark:border-zinc-700
                focus:ring-2 focus:ring-cyan-500 focus:outline-none
              "
            />
            {(errors.message || serverErrors.message) && (
              <p className="text-red-500 mt-2 font-semibold  text-sm error-animate">
                {errors.message?.message || serverErrors.message}
              </p>
            )}
          </div>

          {/* BOUTON */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`
              mt-4 w-full py-3 flex justify-center items-center gap-2
              bg-cyan-500 hover:bg-cyan-600 
              text-white font-semibold 
              rounded-xl shadow-lg transition
              ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}
            `}
          >
            {isSubmitting && (
              <svg
                className="animate-spin h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4l3-3-3-3v4a8 8 0 018 8h-4l3 3-3 3h4a8 8 0 01-8 8v-4l-3 3 3 3v-4a8 8 0 01-8-8z"
                ></path>
              </svg>
            )}
            {isSubmitting ? 'Envoi...' : 'Envoyer le message'}
          </button>
        </div>

        {/* SUCCESS */}
        {success && (
          <div className="mb-6 mt-6 p-4 rounded-xl bg-green-900 text-green-400 font-semibold text-center border border-green-500/40">
            ✅ Message envoyé avec succès !
          </div>
        )}
      </form>
    </div>
  )
}
