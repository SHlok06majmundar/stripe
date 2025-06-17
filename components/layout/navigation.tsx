"use client"

import { ChevronDown } from "lucide-react"
import { useState } from "react"
import NavigationDropdown from "@/components/ui/navigation-dropdown"

export default function Navigation() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const handleDropdownToggle = (dropdown: string) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown)
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-10">
            <div className="text-2xl font-normal text-white">stripe</div>

            <div className="hidden md:flex items-center space-x-8">
              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("products")}
                  className="flex items-center space-x-1 cursor-pointer text-white/90 hover:text-white transition-colors"
                >
                  <span className="font-normal">Products</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "products" && (
                  <NavigationDropdown type="products" onClose={() => setActiveDropdown(null)} />
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("solutions")}
                  className="flex items-center space-x-1 cursor-pointer text-white/90 hover:text-white transition-colors"
                >
                  <span className="font-normal">Solutions</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "solutions" && (
                  <NavigationDropdown type="solutions" onClose={() => setActiveDropdown(null)} />
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("developers")}
                  className="flex items-center space-x-1 cursor-pointer text-white/90 hover:text-white transition-colors"
                >
                  <span className="font-normal">Developers</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "developers" && (
                  <NavigationDropdown type="developers" onClose={() => setActiveDropdown(null)} />
                )}
              </div>

              <div className="relative">
                <button
                  onClick={() => handleDropdownToggle("resources")}
                  className="flex items-center space-x-1 cursor-pointer text-white/90 hover:text-white transition-colors"
                >
                  <span className="font-normal">Resources</span>
                  <ChevronDown className="w-4 h-4" />
                </button>
                {activeDropdown === "resources" && (
                  <NavigationDropdown type="resources" onClose={() => setActiveDropdown(null)} />
                )}
              </div>

              <span className="cursor-pointer text-white/90 hover:text-white transition-colors font-normal">
                Pricing
              </span>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-white/90 hover:text-white transition-colors font-normal">Sign in</button>
            <button className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-colors border border-white/20">
              Contact sales
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
