export default function CompanyLogos() {
  const companies = [
    { name: "OpenAI", logo: "OpenAI" },
    { name: "Amazon", logo: "amazon" },
    { name: "Google", logo: "Google" },
    { name: "Anthropic", logo: "ANTHROPIC" },
    { name: "Marriott", logo: "Marriott" },
    { name: "Shopify", logo: "shopify" },
    { name: "Airbnb", logo: "airbnb" },
    { name: "Urban", logo: "URBN" },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {companies.map((company, index) => (
            <div key={index} className="flex items-center justify-center">
              <div className="text-gray-400 font-semibold text-lg">{company.logo}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
