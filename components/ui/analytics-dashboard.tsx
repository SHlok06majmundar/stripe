export default function AnalyticsDashboard() {
  return (
    <div className="absolute -top-8 -right-8 bg-white rounded-xl shadow-lg p-4 w-80 z-10">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold text-gray-900">Today</h4>
        <div className="text-sm text-gray-500">14:00</div>
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-sm text-gray-600">Net volume</div>
          <div className="text-2xl font-bold text-gray-900">₹35,28,198.72</div>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-600">Yesterday</div>
          <div className="text-lg text-gray-900">₹29,31,556.34</div>
        </div>
      </div>
      <div className="space-y-2 mb-4">
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Net volume from sales</span>
          <span className="text-sm text-green-600 font-medium">+32.8%</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">₹39,274.29</span>
          <span className="text-sm text-gray-500">₹29,573.54</span>
        </div>
      </div>
      <div className="h-16 bg-gradient-to-r from-purple-100 to-blue-100 rounded-lg relative overflow-hidden">
        <svg className="w-full h-full" viewBox="0 0 320 64">
          <path
            d="M0,50 Q80,30 160,35 T320,25"
            stroke="#8B5CF6"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,45 Q80,25 160,30 T320,20"
            stroke="#06B6D4"
            strokeWidth="2"
            fill="none"
            className="animate-pulse"
          />
        </svg>
      </div>
    </div>
  )
}
