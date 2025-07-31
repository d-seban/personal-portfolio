export default function Photos() {
  return (
    <section>
      <h2 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
        Photos
      </h2>
      <div className="space-y-4">
        <div className="group cursor-pointer">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-[#1C1C1C] rounded-lg flex items-center justify-center">
              <span className="text-sm">📸</span>
            </div>
            <div className="flex-1 min-w-0">
              <a href="/photos" className="block">
                <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 transition-colors">
                  Gallery ↗
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  capturing moments through my lens
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 