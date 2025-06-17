"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

interface Company {
  id: string
  name: string
  logo: string
  stats: {
    primary: string
    primaryDesc: string
    secondary: string
    secondaryDesc: string
  }
  products: string[]
  caseStudy: {
    title: string
    image: string
    gradient: string
    textColor: string
  }
  underlineColor: string
}

const companies: Company[] = [
  {
    id: "bmw",
    name: "BMW",
    logo: "🚗",
    stats: {
      primary: "Millions",
      primaryDesc: "BMW owners using ConnectedDrive Store",
      secondary: "350+",
      secondaryDesc: "US dealerships",
    },
    products: ["Payments", "Connect"],
    caseStudy: {
      title: "Learn why BMW chose Stripe to power e-commerce and payments",
      image: "/images/bmw-car.png",
      gradient: "from-blue-600 to-blue-800",
      textColor: "text-white",
    },
    underlineColor: "bg-blue-500",
  },
  {
    id: "amazon",
    name: "Amazon",
    logo: "amazon",
    stats: {
      primary: "5+",
      primaryDesc: "Amazon businesses on Stripe including Prime, Audible, and Amazon Pay.",
      secondary: "50+",
      secondaryDesc: "Payment methods available on Stripe",
    },
    products: ["Payments", "Connect"],
    caseStudy: {
      title: "See how Amazon simplified cross-border payments with Stripe",
      image: "/images/amazon-boxes.png",
      gradient: "from-orange-400 to-yellow-500",
      textColor: "text-white",
    },
    underlineColor: "bg-yellow-500",
  },
  {
    id: "maersk",
    name: "Maersk",
    logo: "MAERSK",
    stats: {
      primary: "40+",
      primaryDesc: "Countries where Maersk processes payments with Stripe.",
      secondary: "99.9%",
      secondaryDesc: "Uptime for Maersk's payment infrastructure",
    },
    products: ["Payments", "Billing"],
    caseStudy: {
      title: "How Maersk streamlined global logistics payments",
      image: "/images/maersk-ship.png",
      gradient: "from-blue-600 to-cyan-500",
      textColor: "text-white",
    },
    underlineColor: "bg-red-500",
  },
  {
    id: "twilio",
    name: "Twilio",
    logo: "twilio",
    stats: {
      primary: "150+",
      primaryDesc: "Countries supported by Twilio's payment system.",
      secondary: "24/7",
      secondaryDesc: "Support coverage for enterprise customers",
    },
    products: ["Payments", "Connect", "Billing"],
    caseStudy: {
      title: "Twilio's journey to global payment optimization",
      image: "/images/twilio-tech.png",
      gradient: "from-red-500 to-pink-500",
      textColor: "text-white",
    },
    underlineColor: "bg-gray-400",
  },
]

export default function EnterpriseSection() {
  const [mounted, setMounted] = useState(false)
  const [activeCompany, setActiveCompany] = useState(0)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCompany((prev) => (prev + 1) % companies.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  if (!mounted) return null

  const currentCompany = companies[activeCompany]

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          <div className="space-y-8">
            <div className="text-purple-600 text-sm font-medium uppercase tracking-wide">Enterprise reinvention</div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">Bring agility to your enterprise</h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Quickly build great payments experiences, improve performance, expand into new markets, and engage
              customers with subscriptions and marketplaces. Get expert integration guidance from our{" "}
              <span className="text-purple-600 cursor-pointer hover:underline">professional services</span> team and{" "}
              <span className="text-purple-600 cursor-pointer hover:underline">certified partners</span>, and connect
              Stripe to Salesforce, SAP, and more through the{" "}
              <span className="text-purple-600 cursor-pointer hover:underline">Stripe App Marketplace</span>.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors">
              Explore Stripe for enterprises →
            </button>

            <div className="space-y-8 pt-8 border-l-4 border-gray-200 pl-6">
              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900">{currentCompany.stats.primary}</div>
                <div className="text-gray-600 leading-relaxed">{currentCompany.stats.primaryDesc}</div>
              </div>

              <div className="space-y-2">
                <div className="text-4xl font-bold text-gray-900">{currentCompany.stats.secondary}</div>
                <div className="text-gray-600 leading-relaxed">{currentCompany.stats.secondaryDesc}</div>
              </div>

              <div className="space-y-4">
                <div className="text-gray-900 font-semibold">Products used</div>
                <div className="flex items-center space-x-6">
                  {currentCompany.products.map((product, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded flex items-center justify-center ${
                          product === "Payments"
                            ? "bg-gradient-to-r from-purple-500 to-blue-500"
                            : product === "Connect"
                              ? "bg-blue-500"
                              : product === "Terminal"
                                ? "bg-purple-600"
                                : "bg-green-500"
                        }`}
                      >
                        <div className="w-4 h-4 bg-white rounded-sm"></div>
                      </div>
                      <span className="text-gray-700 font-medium">{product}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div
              className={`bg-gradient-to-br ${currentCompany.caseStudy.gradient} rounded-2xl p-8 ${currentCompany.caseStudy.textColor} relative overflow-hidden transition-all duration-1000 ease-in-out transform min-h-[500px] flex flex-col justify-between`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-transparent z-10"></div>

              <div className="absolute inset-0 z-0">
                <Image
                  src={currentCompany.caseStudy.image || "/placeholder.svg"}
                  alt={currentCompany.name}
                  fill
                  className="object-cover opacity-40"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="absolute top-6 right-6 w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm z-20">
                <div className="w-5 h-5 bg-white rounded-sm"></div>
              </div>

              <div className="relative z-20">
                <div className="text-4xl font-bold mb-4">
                  {currentCompany.id === "bmw" ? (
                    <div className="flex items-center space-x-2">
                      <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-bold text-xs">BMW</span>
                        </div>
                      </div>
                    </div>
                  ) : (
                    currentCompany.logo
                  )}
                </div>
              </div>

              <div className="relative z-20 mt-auto">
                <h3 className="text-3xl font-bold leading-tight pr-16">{currentCompany.caseStudy.title}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-6">
          <div className="flex justify-center items-center space-x-16">
            {companies.map((company, index) => (
              <button
                key={company.id}
                onClick={() => setActiveCompany(index)}
                className={`text-2xl font-bold transition-all duration-500 relative ${
                  index === activeCompany
                    ? "text-gray-900 scale-110"
                    : "text-gray-400 hover:text-gray-600 hover:scale-105"
                }`}
              >
                {company.id === "bmw" ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-gray-400 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
                        <span className="text-gray-600 font-bold text-xs">BMW</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  company.logo
                )}
              </button>
            ))}
          </div>

          <div className="flex justify-center items-center space-x-16">
            {companies.map((company, index) => (
              <div
                key={`underline-${company.id}`}
                className={`h-1 w-16 rounded-full transition-all duration-500 ${
                  index === activeCompany ? company.underlineColor : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
