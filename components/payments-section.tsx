"use client"

import { useEffect, useState } from "react"

export default function PaymentsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className={`space-y-8 ${mounted ? "animate-fade-in-left" : "opacity-0"}`}>
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
              <span className="text-gray-900 font-medium">Payments</span>
            </div>

            <h2 className="text-5xl font-bold text-gray-900 leading-tight">Accept and optimise payments, globally</h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              Increase authorisation rates, offer local payment methods to boost conversion, and reduce fraud using AI.
            </p>

            <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-full font-medium transition-colors duration-200">
              Start with Payments →
            </button>

            <div className="space-y-4 pt-8">
              <div className="text-gray-900 font-medium">See also</div>
              <div className="space-y-2">
                <div className="text-purple-600 hover:text-purple-700 cursor-pointer">
                  Tax for automating tax registration, collection, and filing
                </div>
                <div className="text-purple-600 hover:text-purple-700 cursor-pointer">
                  Radar for AI-powered fraud protection
                </div>
                <div className="text-purple-600 hover:text-purple-700 cursor-pointer">
                  Terminal for custom in-person payments
                </div>
              </div>
            </div>
          </div>

          <div className={`relative ${mounted ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto border">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center">
                    <div className="w-8 h-8 bg-orange-400 rounded"></div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Wood Chair 001</h3>
                    <p className="text-2xl font-bold">US$149</p>
                  </div>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg mb-2 flex items-center justify-center">
                <span className="mr-2">🍎</span>
                Pay
              </button>

              <button className="w-full bg-green-500 text-white py-3 rounded-lg mb-4 flex items-center justify-center">
                Pay with 🔗link
              </button>

              <div className="text-center text-sm text-gray-500 mb-4">Or pay another way</div>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-600 mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                    placeholder="jane.diaz@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Card information</label>
                  <div className="border border-gray-300 rounded-lg">
                    <div className="flex items-center px-3 py-2 border-b border-gray-300">
                      <input type="text" className="flex-1 text-sm outline-none" placeholder="4242 4242 4242 4242" />
                      <div className="flex space-x-1">
                        <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                        <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                        <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 text-sm border-r border-gray-300 outline-none"
                        placeholder="05/26"
                      />
                      <input type="text" className="flex-1 px-3 py-2 text-sm outline-none" placeholder="123" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Country or region</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none">
                    <option>United States</option>
                  </select>
                </div>

                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm outline-none"
                  placeholder="97712"
                />

                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium hover:bg-blue-800 transition-colors">
                  Pay US$149
                </button>
              </div>
            </div>

            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-30"></div>
            <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
