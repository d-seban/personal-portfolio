export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors">
      <main className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          Dawn Seban - Portfolio
        </h1>
        <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
          Generalist: vibe coder, functional designer, good marketer → strong at building things people love
        </p>
        
        <div className="space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">About</h2>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>• 26 years old, based in India</li>
              <li>• Currently building cool things at <strong>KaizenX</strong> & <strong>Bonzai Studio</strong></li>
              <li>• Previously crunched numbers as a Financial Advisor at <strong>Deloitte</strong></li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Email: <a href="mailto:dawn@kaizenxlabs.com" className="text-blue-600 hover:underline">dawn@kaizenxlabs.com</a>
            </p>
          </section>
        </div>
      </main>
    </div>
  )
} 