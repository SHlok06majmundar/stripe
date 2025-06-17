"use client"

import { useEffect, useRef } from "react"

interface NavigationDropdownProps {
  type: "products" | "solutions" | "developers" | "resources"
  onClose: () => void
}

export default function NavigationDropdown({ type, onClose }: NavigationDropdownProps) {
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [onClose])

  const getDropdownContent = () => {
    switch (type) {
      case "products":
        return {
          title: "Products",
          sections: [
            {
              title: "Payments",
              items: [
                { name: "Payments", description: "Online payments", icon: "💳" },
                { name: "Checkout", description: "Prebuilt payment form", icon: "🛒" },
                { name: "Elements", description: "Customizable payments UIs", icon: "🧩" },
                { name: "Payment Links", description: "No-code payments", icon: "🔗" },
                { name: "Payment Methods", description: "120+ payment methods", icon: "💰" },
              ],
            },
            {
              title: "Financial Services",
              items: [
                { name: "Connect", description: "Payments for platforms", icon: "🔗" },
                { name: "Billing", description: "Subscription management", icon: "📊" },
                { name: "Invoicing", description: "Online invoices", icon: "📄" },
                { name: "Terminal", description: "In-person payments", icon: "💻" },
                { name: "Financial Connections", description: "Linked financial account data", icon: "🏦" },
              ],
            },
            {
              title: "Business Operations",
              items: [
                { name: "Radar", description: "Fraud & risk management", icon: "🛡️" },
                { name: "Sigma", description: "Custom reports", icon: "📈" },
                { name: "Atlas", description: "Startup incorporation", icon: "🌍" },
                { name: "Climate", description: "Carbon removal", icon: "🌱" },
              ],
            },
          ],
        }

      case "solutions":
        return {
          title: "Solutions",
          sections: [
            {
              title: "By Business Type",
              items: [
                { name: "Startups", description: "Get started quickly", icon: "🚀" },
                { name: "Enterprises", description: "Advanced features", icon: "🏢" },
                { name: "SaaS", description: "Subscription businesses", icon: "💻" },
                { name: "Platforms", description: "Facilitate payments", icon: "🔗" },
                { name: "Ecommerce", description: "Online stores", icon: "🛍️" },
              ],
            },
            {
              title: "By Use Case",
              items: [
                { name: "Online payments", description: "Accept payments online", icon: "💳" },
                { name: "In-person payments", description: "Point of sale", icon: "🏪" },
                { name: "Global businesses", description: "International expansion", icon: "🌍" },
                { name: "Subscription businesses", description: "Recurring revenue", icon: "🔄" },
                { name: "Marketplaces", description: "Multi-party payments", icon: "🏪" },
              ],
            },
          ],
        }

      case "developers":
        return {
          title: "Developers",
          sections: [
            {
              title: "Documentation",
              items: [
                { name: "API Reference", description: "Complete API documentation", icon: "📚" },
                { name: "Quickstart", description: "Get up and running", icon: "⚡" },
                { name: "Webhooks", description: "Event notifications", icon: "🔔" },
                { name: "Libraries", description: "Client libraries", icon: "📦" },
                { name: "Plugins", description: "Pre-built integrations", icon: "🔌" },
              ],
            },
            {
              title: "Tools",
              items: [
                { name: "Dashboard", description: "Manage your account", icon: "📊" },
                { name: "CLI", description: "Command line interface", icon: "⌨️" },
                { name: "VS Code", description: "Editor extension", icon: "💻" },
                { name: "Postman", description: "API testing", icon: "📮" },
              ],
            },
          ],
        }

      case "resources":
        return {
          title: "Resources",
          sections: [
            {
              title: "Support",
              items: [
                { name: "Support Center", description: "Get help", icon: "❓" },
                { name: "Contact Support", description: "Reach our team", icon: "💬" },
                { name: "Status", description: "System status", icon: "🟢" },
                { name: "Community", description: "Developer community", icon: "👥" },
              ],
            },
            {
              title: "Resources",
              items: [
                { name: "Guides", description: "Best practices", icon: "📖" },
                { name: "Blog", description: "Latest updates", icon: "📝" },
                { name: "Sessions", description: "Live discussions", icon: "🎥" },
                { name: "Events", description: "Upcoming events", icon: "📅" },
              ],
            },
          ],
        }

      default:
        return { title: "", sections: [] }
    }
  }

  const content = getDropdownContent()

  return (
    <div
      ref={dropdownRef}
      className="absolute top-full left-0 mt-2 w-screen max-w-4xl bg-white rounded-lg shadow-2xl border border-gray-200 z-50 animate-fade-in-up"
    >
      <div className="p-8">
        <h3 className="text-2xl font-bold text-gray-900 mb-6">{content.title}</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {content.sections.map((section, sectionIndex) => (
            <div key={sectionIndex}>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">{section.title}</h4>
              <div className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="text-xl">{item.icon}</div>
                    <div>
                      <div className="font-medium text-gray-900">{item.name}</div>
                      <div className="text-sm text-gray-600">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
