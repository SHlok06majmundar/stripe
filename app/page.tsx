import Navigation from "@/components/layout/navigation"
import HeroSection from "@/components/sections/hero-section"
import CompanyLogos from "@/components/sections/company-logos"
import ModularSolutions from "@/components/sections/modular-solutions"
import PaymentsSection from "@/components/sections/payments-section"
import EnterpriseSection from "@/components/sections/enterprise-section"
import GeometricSection from "@/components/sections/geometric-section"
import Footer from "@/components/layout/footer"
//
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <CompanyLogos />
      <ModularSolutions />
      <PaymentsSection />
      <EnterpriseSection />
      <GeometricSection />
      <Footer />
    </main>
  )
}
