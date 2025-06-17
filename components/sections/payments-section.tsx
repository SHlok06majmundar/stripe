"use client"

import { useEffect, useState } from "react"
import PaymentFormDemo from "@/components/ui/payment-form-demo"

export default function PaymentsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-8 ${mounted ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="text-gray-900 font-semibold text-lg">Payments</span>
            </div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Accept and optimise payments, globally
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-full font-medium transition-colors duration-200 flex items-center space-x-2 text-lg">
              <span>Start with Payments</span>
              <span>→</span>
            </button>

            <div className="space-y-6 pt-8">
              <div className="text-gray-900 font-semibold text-lg">See also</div>
              <div className="space-y-3">
                <div className="text-purple-600 hover:text-purple-700 cursor-pointer transition-colors text-lg">
                  <span className="font-semibold">Tax</span> for automating tax registration, collection, and filing
                </div>
                <div className="text-purple-600 hover:text-purple-700 cursor-pointer transition-colors text-lg">
                  <span className="font-semibold">Radar</span> for AI-powered fraud protection
                </div>
                <div className="text-purple-600 hover:text-purple-700 cursor-pointer transition-colors text-lg">
                  <span className="font-semibold">Terminal</span> for custom in-person payments
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${mounted ? "animate-fade-in-right" : "opacity-0"}`}>
            <PaymentFormDemo />
          </div>
        </div>
      </div>
    </section>
  )
}
