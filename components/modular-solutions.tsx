"use client"

import { useEffect, useState } from "react"

export default function ModularSolutions() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const products = [
    { icon: "💳", name: "Payments" },
    { icon: "🔗", name: "Connect" },
    { icon: "💻", name: "Terminal" },
    { icon: "📊", name: "Billing" },
    { icon: "🏦", name: "Treasury" },
    { icon: "⚖️", name: "Tax" },
    { icon: "🛡️", name: "Radar" },
    { icon: "📈", name: "Data Pipeline" },
    { icon: "🔧", name: "Apps" },
    { icon: "🌐", name: "Elements" },
    { icon: "📱", name: "Climate" },
    { icon: "🎯", name: "Identity" },
  ]

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${mounted ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="text-purple-600 text-sm font-medium uppercase tracking-wide">Modular solutions</div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">
              A fully integrated suite of financial and payments products
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Reduce costs, grow revenue, and run your business more efficiently on a fully integrated, AI-powered
              platform. Use Stripe to handle all of your payments-related needs, manage revenue operations, and launch
              (or invent) new business models.
            </p>
          </div>

          <div className={`relative ${mounted ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="grid grid-cols-4 gap-4">
              {products.map((product, index) => (
                <div
                  key={product.name}
                  className="bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 group cursor-pointer"
                  style={{
                    animationDelay: `${index * 100}ms`,
                  }}
                >
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {product.icon}
                  </div>
                  <div className="text-xs text-gray-600 font-medium">{product.name}</div>
                </div>
              ))}
            </div>

            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-20"></div>
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
