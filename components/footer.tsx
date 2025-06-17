export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Platform
              <span className="ml-2">→</span>
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  Agents
                  <span className="ml-2">→</span>
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>App Library</li>
                  <li>AI Studio</li>
                  <li>Integrations & Extensions</li>
                  <li>API</li>
                  <li>Jasper Browser Extensions</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  Canvas
                  <span className="ml-2">→</span>
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Marketing AI Editor</li>
                  <li>Jasper Chat</li>
                  <li>AI Image Suite</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  Jasper IQ
                  <span className="ml-2">→</span>
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Brand IQ</li>
                  <li>Brand Voice</li>
                  <li>Visual Guidelines</li>
                  <li>Style Guide</li>
                  <li>Marketing IQ</li>
                  <li>Knowledge Base</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  Trust Foundation
                  <span className="ml-2">→</span>
                </h4>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Solutions
              <span className="ml-2">→</span>
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  Solutions by Role
                  <span className="ml-2">→</span>
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Product Marketing</li>
                  <li>Content Marketing</li>
                  <li>Performance Marketing</li>
                  <li>Field & Events Marketing</li>
                  <li>Brand Marketing</li>
                  <li>PR & Communications</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3 flex items-center">
                  Solutions by Industry
                  <span className="ml-2">→</span>
                </h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Technology</li>
                  <li>eCommerce & Retail</li>
                  <li>Insurance</li>
                  <li>Media & Publishing</li>
                </ul>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Resources
              <span className="ml-2">→</span>
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Discover</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Blog</li>
                  <li>Customer Stories</li>
                  <li>Events & Webinars</li>
                  <li>Prompt Library</li>
                  <li>The State of AI in Marketing Report</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Learn</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Courses</li>
                  <li>The Jasper Community</li>
                  <li>Jasper Foundations</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Get Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Contact Support</li>
                  <li>FAQs & Help Center</li>
                  <li>Customer Success</li>
                  <li>Hire a Professional Partner</li>
                </ul>
              </div>

            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-6 flex items-center">
              Company
              <span className="ml-2">→</span>
            </h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">Information</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>About Jasper</li>
                  <li>Newsroom</li>
                  <li>Careers at Jasper</li>
                  <li>Legal Information</li>
                  <li>Company Logos</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium mb-3">Become a Partner</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Become a Solutions Partner</li>
                  <li>Become a Tech Partner</li>
                </ul>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-3 flex items-center">
                    Pricing
                    <span className="ml-2">→</span>
                  </h4>
                </div>
                <div>
                  <h4 className="font-medium mb-3 flex items-center">
                    Enterprise
                    <span className="ml-2">→</span>
                  </h4>
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
      </div>
    </footer>
  )
}
