"use client"

import { useEffect, useState } from "react"
import ProductGrid from "@/components/ui/product-grid"

export default function ModularSolutions() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className={`space-y-8 ${mounted ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="text-purple-600 text-sm font-medium uppercase tracking-wide">Modular solutions</div>

            <h2 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              A fully integrated suite of financial and payments products
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered
              platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch
              (or invent) new business models.
            </p>
          </div>

          <div className={`relative ${mounted ? "animate-fade-in-right" : "opacity-0"}`}>
            <ProductGrid />
          </div>
        </div>
      </div>
    </section>
  )
}
