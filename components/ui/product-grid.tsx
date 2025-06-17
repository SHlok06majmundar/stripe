"use client"

import { useState, useEffect } from "react"

interface Product {
  id: string
  name: string
  icon: string
  position: { row: number; col: number }
  isHighlighted: boolean
  color: string
}

const products: Product[] = [
  {
    id: "billing",
    name: "Billing",
    icon: "📊",
    position: { row: 0, col: 0 },
    isHighlighted: false,
    color: "bg-blue-100",
  },
  {
    id: "treasury",
    name: "Treasury",
    icon: "🏦",
    position: { row: 0, col: 1 },
    isHighlighted: false,
    color: "bg-green-100",
  },
  {
    id: "capital",
    name: "Capital",
    icon: "💰",
    position: { row: 0, col: 2 },
    isHighlighted: true,
    color: "bg-yellow-100",
  },
  { id: "tax", name: "Tax", icon: "⚖️", position: { row: 1, col: 0 }, isHighlighted: false, color: "bg-purple-100" },
  {
    id: "payments",
    name: "Payments",
    icon: "💳",
    position: { row: 1, col: 1 },
    isHighlighted: true,
    color: "bg-blue-100",
  },
  { id: "radar", name: "Radar", icon: "🛡️", position: { row: 1, col: 2 }, isHighlighted: false, color: "bg-red-100" },
  {
    id: "connect",
    name: "Connect",
    icon: "🔗",
    position: { row: 2, col: 0 },
    isHighlighted: true,
    color: "bg-cyan-100",
  },
  {
    id: "data",
    name: "Data Pipeline",
    icon: "📈",
    position: { row: 2, col: 1 },
    isHighlighted: false,
    color: "bg-pink-100",
  },
  { id: "apps", name: "Apps", icon: "🔧", position: { row: 2, col: 2 }, isHighlighted: false, color: "bg-orange-100" },
  {
    id: "elements",
    name: "Elements",
    icon: "🌐",
    position: { row: 3, col: 0 },
    isHighlighted: false,
    color: "bg-indigo-100",
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: "💻",
    position: { row: 3, col: 1 },
    isHighlighted: true,
    color: "bg-purple-100",
  },
  {
    id: "climate",
    name: "Climate",
    icon: "🌱",
    position: { row: 3, col: 2 },
    isHighlighted: false,
    color: "bg-green-100",
  },
]

export default function ProductGrid() {
  const [activeProducts, setActiveProducts] = useState<string[]>(["payments", "connect", "terminal", "capital"])
  const [mounted, setMounted] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 4)
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative max-w-lg mx-auto">
      <div className="grid grid-cols-3 gap-4">
        {products.map((product, index) => {
          const isActive = activeProducts.includes(product.id)
          const isHighlighted = product.isHighlighted
          const shouldPulse = isActive && (index + animationPhase) % 4 === 0

          return (
            <div
              key={product.id}
              className={`relative w-24 h-24 rounded-xl cursor-pointer transition-all duration-1000 ease-out border-2 ${
                isHighlighted && isActive
                  ? `bg-white border-purple-300 shadow-xl transform scale-105 z-10 ${product.color}`
                  : "bg-gray-50 border-gray-200 hover:border-gray-300 hover:scale-102"
              }`}
              style={{
                transformOrigin: "center",
                animation: shouldPulse ? "productPulse 2s ease-in-out infinite" : "none",
              }}
              onClick={() => {
                if (activeProducts.includes(product.id)) {
                  setActiveProducts(activeProducts.filter((id) => id !== product.id))
                } else {
                  setActiveProducts([...activeProducts, product.id])
                }
              }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center p-2">
                <div className={`text-lg mb-1 transition-all duration-500 ${isActive ? "scale-110" : ""}`}>
                  {product.icon}
                </div>
                {isHighlighted && (
                  <div
                    className={`text-xs font-medium text-center leading-tight transition-all duration-500 ${
                      isActive ? "text-gray-900 opacity-100" : "text-gray-600 opacity-80"
                    }`}
                  >
                    {product.name}
                  </div>
                )}
              </div>

              {/* Animated connection dots */}
              {isActive && isHighlighted && (
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full flex items-center justify-center animate-ping">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              )}

              {/* Ripple effect for active products */}
              {shouldPulse && (
                <div className="absolute inset-0 rounded-xl border-2 border-purple-400 animate-ping opacity-75"></div>
              )}
            </div>
          )
        })}
      </div>

      {/* Animated connection lines */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible" style={{ zIndex: 5 }}>
        <defs>
          <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#06B6D4" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#10B981" stopOpacity="0.8" />
          </linearGradient>
          <filter id="connectionGlow">
            <feGaussianBlur stdDeviation="2" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Dynamic connection lines between active products */}
        {activeProducts.includes("payments") && activeProducts.includes("connect") && (
          <g>
            <path
              d="M 60 60 Q 45 75 30 90"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#connectionGlow)"
              strokeDasharray="6,6"
              className="animate-pulse"
              style={{
                animation: `dashMove 3s linear infinite, fadeInOut ${2 + animationPhase * 0.5}s ease-in-out infinite`,
              }}
            />
            <circle cx="60" cy="60" r="3" fill="#8B5CF6" className="animate-pulse" />
            <circle cx="30" cy="90" r="3" fill="#06B6D4" className="animate-pulse" />
          </g>
        )}

        {activeProducts.includes("connect") && activeProducts.includes("terminal") && (
          <g>
            <path
              d="M 30 90 Q 45 105 60 120"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#connectionGlow)"
              strokeDasharray="6,6"
              className="animate-pulse"
              style={{
                animation: `dashMove 3s linear infinite, fadeInOut ${2.5 + animationPhase * 0.5}s ease-in-out infinite`,
              }}
            />
            <circle cx="30" cy="90" r="3" fill="#06B6D4" className="animate-pulse" />
            <circle cx="60" cy="120" r="3" fill="#8B5CF6" className="animate-pulse" />
          </g>
        )}

        {activeProducts.includes("payments") && activeProducts.includes("capital") && (
          <g>
            <path
              d="M 60 60 Q 75 45 90 30"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#connectionGlow)"
              strokeDasharray="6,6"
              className="animate-pulse"
              style={{
                animation: `dashMove 3s linear infinite, fadeInOut ${3 + animationPhase * 0.5}s ease-in-out infinite`,
              }}
            />
            <circle cx="60" cy="60" r="3" fill="#8B5CF6" className="animate-pulse" />
            <circle cx="90" cy="30" r="3" fill="#10B981" className="animate-pulse" />
          </g>
        )}

        {activeProducts.includes("terminal") && activeProducts.includes("capital") && (
          <g>
            <path
              d="M 60 120 Q 75 75 90 30"
              stroke="url(#connectionGradient)"
              strokeWidth="2"
              fill="none"
              filter="url(#connectionGlow)"
              strokeDasharray="6,6"
              className="animate-pulse"
              style={{
                animation: `dashMove 3s linear infinite, fadeInOut ${3.5 + animationPhase * 0.5}s ease-in-out infinite`,
              }}
            />
            <circle cx="60" cy="120" r="3" fill="#8B5CF6" className="animate-pulse" />
            <circle cx="90" cy="30" r="3" fill="#10B981" className="animate-pulse" />
          </g>
        )}
      </svg>

      {/* Data flow visualization bars */}
      <div className="absolute -bottom-20 left-0 right-0 grid grid-cols-4 gap-3 opacity-70">
        {[0, 1, 2, 3].map((index) => (
          <div
            key={index}
            className={`h-2 rounded-full transition-all duration-1000 ${
              index === animationPhase
                ? "bg-gradient-to-r from-purple-400 to-blue-400 scale-110"
                : "bg-gradient-to-r from-gray-200 to-gray-300"
            }`}
            style={{
              animation: index === animationPhase ? "barPulse 2s ease-in-out infinite" : "none",
            }}
          />
        ))}
      </div>

      {/* Secondary data flow bars */}
      <div className="absolute -bottom-24 left-6 right-6 grid grid-cols-3 gap-4 opacity-50">
        {[0, 1, 2].map((index) => (
          <div
            key={index}
            className={`h-1 rounded-full transition-all duration-1000 ${
              (index + 1) % 3 === animationPhase % 3
                ? "bg-gradient-to-r from-cyan-300 to-green-300"
                : "bg-gradient-to-r from-gray-300 to-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
