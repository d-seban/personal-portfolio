export default function Projects() {
  return (
    <section>
      <h2 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
        Projects
      </h2>
      <div className="space-y-4">
        <div className="group cursor-pointer">
          <div className="flex items-start space-x-3">
            <div className="flex-shrink-0 w-8 h-8 bg-gray-100 dark:bg-[#1C1C1C] rounded-lg flex items-center justify-center">
              <span className="text-sm">🚀</span>
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 transition-colors">
                Stealth
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                building a portfolio of small bets on the internet, one app at a time
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 