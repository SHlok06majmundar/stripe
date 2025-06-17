"use client"

import { useEffect, useState } from "react"
import PaymentForm from "@/components/ui/payment-form"
import AnalyticsDashboard from "@/components/ui/analytics-dashboard"
import { ChevronDown, Search } from "lucide-react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500 via-purple-600 to-blue-500"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-red-400/80 via-purple-500/80 to-transparent"></div>

      <div className="absolute top-20 right-8">
        <div className="flex items-center bg-orange-100/20 backdrop-blur-sm rounded-full px-3 py-1.5 border border-white/20">
          <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
          <span className="text-sm font-medium text-white">ROCKET RIDES</span>
          <ChevronDown className="w-4 h-4 ml-1 text-white" />
        </div>
      </div>

      <div className="absolute top-20 right-48">
        <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
          <Search className="w-4 h-4 text-white/70" />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent outline-none text-sm w-32 text-white placeholder-white/70"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[80vh]">
          <div className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 inline-block border border-white/20">
              <span className="text-white/90 text-sm font-medium">Preview</span>
            </div>

            <h1 className="text-6xl lg:text-7xl font-bold text-white leading-tight">
              Financial
              <br />
              <span className="text-blue-900">infrastructure</span>
              <br />
              to grow <span className="text-blue-900">your</span>
              <br />
              <span className="text-blue-900">revenue</span>
            </h1>

            <p className="text-xl text-white/90 max-w-lg leading-relaxed font-normal">
              Join the millions of companies that use Stripe to accept payments online and in person, embed financial
              services, power custom revenue models, and build a more profitable business.
            </p>

            <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Request an invite →
            </button>
          </div>

          <div className={`relative ${mounted ? "animate-fade-in-right" : "opacity-0"}`}>
            <PaymentForm />
            <AnalyticsDashboard />
          </div>
        </div>
      </div>
    </section>
  )
}
