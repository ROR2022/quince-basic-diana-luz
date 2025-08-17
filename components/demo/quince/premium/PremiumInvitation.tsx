"use client"

import { useRef } from "react"
import { useInView } from "framer-motion"
import { premiumDemoData } from "./data/premium-demo-data"

export function PremiumInvitation() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-pink-50">
      <div
        ref={ref}
        className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
          isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        {/* Badge premium */}
        <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-lg">
          ✨ Invitación Premium
        </div>

        <h2 className="text-2xl md:text-3xl mb-8 leading-relaxed text-gray-800">
          {premiumDemoData.invitation.message}
          <br />
          <span className="text-3xl md:text-4xl font-medium text-purple-600">
            {premiumDemoData.invitation.subtitle}
          </span>
          <br />
          {premiumDemoData.invitation.blessing}
        </h2>

        {/* Información de padres - Premium */}
        <div className="my-12 bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
          <div className="space-y-4">
            <p className="text-primary text-2xl font-medium">
              {premiumDemoData.invitation.parents.father}
            </p>
            <div className="flex items-center justify-center">
              <div className="w-8 h-px bg-gradient-to-r from-purple-400 to-pink-400"></div>
              <p className="mx-4 text-gray-600 font-light text-lg">&</p>
              <div className="w-8 h-px bg-gradient-to-r from-purple-400 to-pink-400"></div>
            </div>
            <p className="text-primary text-2xl font-medium">
              {premiumDemoData.invitation.parents.mother}
            </p>
          </div>
        </div>

        {/* Mensaje decorativo premium */}
        <div className="mt-8 p-6 bg-gradient-to-r from-purple-100 to-pink-100 rounded-xl border border-purple-200">
          <p className="text-lg text-purple-800 italic">
            {premiumDemoData.invitation.decorativeMessage}
          </p>
        </div>

        {/* Divider decorativo premium */}
        <div className="divider mt-12">
          <div className="divider-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-purple-500"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          </div>
        </div>

        {/* Nota del premium */}
        <div className="mt-8 p-3 bg-purple-50 rounded-lg border border-purple-200">
          <p className="text-xs text-purple-700">
            💎 <strong>Premium:</strong> Invitación completa con información detallada de los padres y diseño personalizado.
          </p>
        </div>
      </div>
    </section>
  )
} 