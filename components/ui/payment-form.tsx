export default function PaymentForm() {
  return (
    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm mx-auto relative z-20">
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-purple-400 to-purple-500 rounded-xl"></div>
        </div>
        <h3 className="font-semibold text-gray-900 text-base">Abstraction Magazine</h3>
        <p className="text-sm text-gray-600 mt-1">₹19 per month</p>
      </div>

      <button className="w-full bg-black text-white py-3 rounded-lg mb-3 flex items-center justify-center font-medium text-sm">
        <span className="mr-2">🍎</span>
        Pay
      </button>

      <div className="text-center text-sm text-gray-500 mb-4">Or pay with card</div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm text-gray-700 mb-1">Email</label>
          <input
            type="email"
            className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            defaultValue="jane.diaz@example.com"
          />
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Card information</label>
          <div className="border border-gray-300 rounded-lg overflow-hidden">
            <div className="flex items-center px-3 py-2 border-b border-gray-300">
              <input type="text" className="flex-1 text-sm outline-none" defaultValue="4242 4242 4242 4242" />
              <div className="flex space-x-1 ml-2">
                <div className="w-6 h-4 bg-blue-600 rounded-sm"></div>
                <div className="w-6 h-4 bg-red-500 rounded-sm"></div>
                <div className="w-6 h-4 bg-yellow-400 rounded-sm"></div>
              </div>
            </div>
            <div className="flex">
              <input
                type="text"
                className="flex-1 px-3 py-2 text-sm border-r border-gray-300 outline-none"
                defaultValue="MM / YY"
              />
              <input type="text" className="flex-1 px-3 py-2 text-sm outline-none" defaultValue="CVC" />
            </div>
          </div>
        </div>

        <div>
          <label className="block text-sm text-gray-700 mb-1">Country or region</label>
          <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none">
            <option>United States</option>
          </select>
        </div>

        <input
          type="text"
          className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          defaultValue="ZIP"
        />

        <button className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 rounded-lg font-medium transition-colors text-sm">
          Pay
        </button>
      </div>
    </div>
  )
}
