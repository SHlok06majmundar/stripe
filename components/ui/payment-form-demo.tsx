export default function PaymentFormDemo() {
  return (
    <div className="relative">
      <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm mx-auto border border-gray-100">
        <div className="text-center mb-6">
          <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-orange-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-orange-500 rounded-xl"></div>
          </div>
          <h3 className="font-semibold text-gray-900 text-lg">Wood Chair 001</h3>
          <p className="text-2xl font-bold text-gray-900 mt-1">US$149</p>
        </div>

        <button className="w-full bg-black text-white py-3.5 rounded-xl mb-3 flex items-center justify-center font-medium">
          <span className="mr-2">🍎</span>
          Pay
        </button>

        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3.5 rounded-xl mb-4 flex items-center justify-center font-medium transition-colors">
          <span className="mr-2">Pay with</span>
          <span className="font-bold">🔗link</span>
        </button>

        <div className="text-center text-sm text-gray-500 mb-4">Or pay another way</div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              placeholder="jane.diaz@example.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Card information</label>
            <div className="border border-gray-300 rounded-lg overflow-hidden">
              <div className="flex items-center px-4 py-3 border-b border-gray-300">
                <input type="text" className="flex-1 text-sm outline-none" placeholder="4242 4242 4242 4242" />
                <div className="flex space-x-1 ml-2">
                  <div className="w-8 h-5 bg-blue-600 rounded-sm flex items-center justify-center">
                    <span className="text-white text-xs font-bold">VISA</span>
                  </div>
                </div>
              </div>
              <div className="flex">
                <input
                  type="text"
                  className="flex-1 px-4 py-3 text-sm border-r border-gray-300 outline-none"
                  placeholder="05/26"
                />
                <input type="text" className="flex-1 px-4 py-3 text-sm outline-none" placeholder="123" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Country or region</label>
            <select className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
              <option>United States</option>
            </select>
          </div>

          <input
            type="text"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="97712"
          />

          <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3.5 rounded-lg font-medium transition-colors">
            Pay US$149
          </button>
        </div>
      </div>

      <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-cyan-200 to-blue-300 rounded-full opacity-40 animate-pulse"></div>
      <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-br from-purple-200 to-pink-300 rounded-full opacity-40 animate-pulse"></div>
    </div>
  )
}
