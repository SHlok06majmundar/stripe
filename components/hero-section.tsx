"use client"

import { useEffect, useState } from "react"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-600 via-blue-500 to-cyan-400"></div>

      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-cyan-300 to-blue-500 rounded-full opacity-60 -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-purple-400 to-pink-400 rounded-full opacity-60 translate-x-48 translate-y-48"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className={`space-y-8 ${mounted ? "animate-fade-in-up" : "opacity-0"}`}>
            <div className="bg-gray-800/20 backdrop-blur-sm rounded-full px-4 py-2 inline-block">
              <span className="text-white/90 text-sm">Preview</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Financial
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                infrastructure
              </span>
              <br />
              to grow your
              <br />
              <span className="text-gray-900">revenue</span>
            </h1>

            <p className="text-xl text-white/80 max-w-lg leading-relaxed">
              Join the millions of companies that use Stripe to accept payments online and in person, embed financial
              services, power custom revenue models, and build a more profitable business.
            </p>
          </div>

          <div className={`relative ${mounted ? "animate-fade-in-right" : "opacity-0"}`}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md mx-auto">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-2">
                    <div className="w-6 h-6 bg-orange-500 rounded"></div>
                  </div>
                  <h3 className="font-semibold text-gray-900">Abstraction Magazine</h3>
                  <p className="text-sm text-gray-600">₹19 per month</p>
                </div>
              </div>

              <button className="w-full bg-black text-white py-3 rounded-lg mb-4 flex items-center justify-center">
                <span className="mr-2">🍎</span>
                Pay
              </button>

              <div className="text-center text-sm text-gray-500 mb-4">Or pay with card</div>

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
                    <input
                      type="text"
                      className="w-full px-3 py-2 text-sm border-b border-gray-300"
                      placeholder="4242 4242 4242 4242"
                    />
                    <div className="flex">
                      <input
                        type="text"
                        className="flex-1 px-3 py-2 text-sm border-r border-gray-300"
                        placeholder="05/26"
                      />
                      <input type="text" className="flex-1 px-3 py-2 text-sm" placeholder="123" />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm text-gray-600 mb-1">Country or region</label>
                  <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm">
                    <option>United States</option>
                  </select>
                </div>

                <input
                  type="text"
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
                  placeholder="97712"
                />

                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-medium">Pay ₹19</button>
              </div>
            </div>

            <div className="absolute -top-10 -right-10 bg-white rounded-xl shadow-lg p-4 w-80">
              <div className="flex justify-between items-center mb-2">
                <h4 className="font-semibold">Today</h4>
                <div className="text-sm text-gray-500">14:00</div>
              </div>
              <div className="flex justify-between items-center mb-4">
                <div>
                  <div className="text-sm text-gray-600">Net volume</div>
                  <div className="text-2xl font-bold">₹35,28,198.72</div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-600">Yesterday</div>
                  <div className="text-lg">₹29,31,556.34</div>
                </div>
              </div>
              <div className="h-20 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
