"use client"

import { useState } from "react"
import { ChevronDown, Search } from "lucide-react"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <div className="text-2xl font-bold text-purple-600">stripe</div>

            <div className="hidden md:flex items-center space-x-6">
              <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-600">
                <span>Products</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-600">
                <span>Solutions</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-600">
                <span>Developers</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-1 cursor-pointer hover:text-purple-600">
                <span>Resources</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <span className="cursor-pointer hover:text-purple-600">Pricing</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-4">
              <div className="flex items-center bg-orange-100 rounded-full px-3 py-1">
                <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                <span className="text-sm">ROCKET RIDES</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </div>
              <div className="flex items-center space-x-2 bg-gray-100 rounded-md px-3 py-2">
                <Search className="w-4 h-4 text-gray-500" />
                <input type="text" placeholder="Search" className="bg-transparent outline-none text-sm w-32" />
              </div>
            </div>
            <button className="text-purple-600 hover:text-purple-700">Sign in</button>
            <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-full text-sm font-medium">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
