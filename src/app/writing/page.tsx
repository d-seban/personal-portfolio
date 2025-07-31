import Link from 'next/link'
import Header from '@/components/Header'

export default function WritingPage() {
  const articles = [
    {
      id: 1,
      title: "Prompting is the New Programming",
      tag: "AI",
      slug: "prompting-is-the-new-programming"
    },
    {
      id: 2,
      title: "Design for Flow, Not Just Looks",
      tag: "Design",
      slug: "design-for-flow-not-just-looks"
    },
    {
      id: 3,
      title: "The 3-30-300 Rule of Attention",
      tag: "Mental Model",
      slug: "the-3-30-300-rule-of-attention"
    },
    {
      id: 4,
      title: "Speed Isn't the Goal. Velocity Is.",
      tag: "Philosophy",
      slug: "speed-isnt-the-goal-velocity-is"
    },
    {
      id: 5,
      title: "People Don't Buy Products. They Join Stories.",
      tag: "Growth",
      slug: "people-dont-buy-products-they-join-stories"
    },
    {
      id: 6,
      title: "Build the Smallest Thing That Solves the Deepest Pain",
      tag: "Product",
      slug: "build-the-smallest-thing-that-solves-the-deepest-pain"
    }
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
            ← Back to home
          </Link>
        </div>
        
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Fragments</h1>
            <p className="text-gray-600 dark:text-gray-400">Pieces of thought that might grow into something bigger</p>
          </div>
          
          <div className="space-y-6">
            {articles.map((article) => (
              <div key={article.id} className="group cursor-pointer">
                <Link href={`/writing/${article.slug}`}>
                  <div className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-[#1C1C1C] transition-colors">
                    <h3 className="text-lg font-medium text-gray-900 dark:text-white group-hover:text-blue-600 transition-colors">
                      {article.title}
                    </h3>
                    <span className="text-sm text-gray-400 dark:text-gray-500">{article.tag}</span>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 