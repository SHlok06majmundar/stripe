"use client"

import { useState } from "react"

export default function Footer() {
  const [expandedSections, setExpandedSections] = useState<string[]>([])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => (prev.includes(section) ? prev.filter((s) => s !== section) : [...prev, section]))
  }

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <button
              onClick={() => toggleSection("platform")}
              className="text-lg font-semibold mb-6 flex items-center text-white w-full text-left hover:text-gray-300 transition-colors"
            >
              Platform
              <span className="ml-2">→</span>
            </button>
            <div className={`space-y-6 ${expandedSections.includes("platform") ? "block" : "hidden lg:block"}`}>
              <div>
                <button
                  onClick={() => toggleSection("agents")}
                  className="font-medium mb-3 flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  Agents
                  <span className="ml-2">→</span>
                </button>
                <ul
                  className={`space-y-2 text-gray-400 ${expandedSections.includes("agents") ? "block" : "hidden lg:block"}`}
                >
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      App Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      AI Studio
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Integrations & Extensions
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      API
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Jasper Browser Extensions
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => toggleSection("canvas")}
                  className="font-medium mb-3 flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  Canvas
                  <span className="ml-2">→</span>
                </button>
                <ul
                  className={`space-y-2 text-gray-400 ${expandedSections.includes("canvas") ? "block" : "hidden lg:block"}`}
                >
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Marketing AI Editor
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Jasper Chat
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      AI Image Suite
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => toggleSection("jasperiq")}
                  className="font-medium mb-3 flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  Jasper IQ
                  <span className="ml-2">→</span>
                </button>
                <ul
                  className={`space-y-2 text-gray-400 ${expandedSections.includes("jasperiq") ? "block" : "hidden lg:block"}`}
                >
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Brand IQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Brand Voice
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Visual Guidelines
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Style Guide
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Marketing IQ
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Knowledge Base
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => toggleSection("trust")}
                  className="font-medium mb-3 flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  Trust Foundation
                  <span className="ml-2">→</span>
                </button>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => toggleSection("solutions")}
              className="text-lg font-semibold mb-6 flex items-center text-white w-full text-left hover:text-gray-300 transition-colors"
            >
              Solutions
              <span className="ml-2">→</span>
            </button>
            <div className={`space-y-6 ${expandedSections.includes("solutions") ? "block" : "hidden lg:block"}`}>
              <div>
                <button
                  onClick={() => toggleSection("solutionsByRole")}
                  className="font-medium mb-3 flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  Solutions by Role
                  <span className="ml-2">→</span>
                </button>
                <ul
                  className={`space-y-2 text-gray-400 ${expandedSections.includes("solutionsByRole") ? "block" : "hidden lg:block"}`}
                >
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Product Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Content Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Performance Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Field & Events Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Brand Marketing
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      PR & Communications
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <button
                  onClick={() => toggleSection("solutionsByIndustry")}
                  className="font-medium mb-3 flex items-center text-white hover:text-gray-300 transition-colors"
                >
                  Solutions by Industry
                  <span className="ml-2">→</span>
                </button>
                <ul
                  className={`space-y-2 text-gray-400 ${expandedSections.includes("solutionsByIndustry") ? "block" : "hidden lg:block"}`}
                >
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Technology
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      eCommerce & Retail
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Insurance
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Media & Publishing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => toggleSection("resources")}
              className="text-lg font-semibold mb-6 flex items-center text-white w-full text-left hover:text-gray-300 transition-colors"
            >
              Resources
              <span className="ml-2">→</span>
            </button>
            <div className={`space-y-6 ${expandedSections.includes("resources") ? "block" : "hidden lg:block"}`}>
              <div>
                <h4 className="font-medium mb-3 text-white">Discover</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Blog
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Customer Stories
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Events & Webinars
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Prompt Library
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      The State of AI in Marketing Report
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-white">Learn</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Courses
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      The Jasper Community
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Jasper Foundations
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-white">Get Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Contact Support
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      FAQs & Help Center
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Customer Success
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Hire a Professional Partner
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={() => toggleSection("company")}
              className="text-lg font-semibold mb-6 flex items-center text-white w-full text-left hover:text-gray-300 transition-colors"
            >
              Company
              <span className="ml-2">→</span>
            </button>
            <div className={`space-y-6 ${expandedSections.includes("company") ? "block" : "hidden lg:block"}`}>
              <div>
                <h4 className="font-medium mb-3 text-white">Information</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      About Jasper
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Newsroom
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Careers at Jasper
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Legal Information
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Company Logos
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 text-white">Become a Partner</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Become a Solutions Partner
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-white cursor-pointer transition-colors">
                      Become a Tech Partner
                    </a>
                  </li>
                </ul>
              </div>
              <div className="space-y-4">
                <div>
                  <button
                    onClick={() => toggleSection("pricing")}
                    className="font-medium mb-3 flex items-center text-white hover:text-gray-300 transition-colors"
                  >
                    Pricing
                    <span className="ml-2">→</span>
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => toggleSection("enterprise")}
                    className="font-medium mb-3 flex items-center text-white hover:text-gray-300 transition-colors"
                  >
                    Enterprise
                    <span className="ml-2">→</span>
                  </button>
                </div>
              </div>
              <div className="space-y-3">
                <button className="w-full bg-red-500 hover:bg-red-600 text-white py-3 px-6 rounded-lg font-medium transition-colors">
                  Get A Demo
                </button>
                <button className="w-full border border-white text-white hover:bg-white hover:text-gray-900 py-3 px-6 rounded-lg font-medium transition-colors">
                  Start Free Trial
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-red-500 text-2xl font-bold">jasper</div>
            <div className="flex space-x-6 text-gray-400">
              <a href="#" className="hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
            <div className="text-gray-400 text-sm">© 2024 Jasper AI, Inc. All rights reserved.</div>
          </div>
        </div>
      </div>
    </footer>
  )
}
