import Link from 'next/link'

export default function Writing() {
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
    }
  ]

  return (
    <section>
      <h2 className="text-sm font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-4">
        Fragments
      </h2>
      <div className="space-y-4">
        {articles.map((article) => (
          <div key={article.id} className="group cursor-pointer">
            <Link href={`/writing/${article.slug}`}>
              <div className="flex items-center justify-start gap-4">
                <h3 className="text-gray-900 dark:text-white font-medium group-hover:text-blue-600 transition-colors flex-1">
                  {article.title}
                </h3>
                <span className="text-xs text-gray-400 dark:text-gray-500 flex-shrink-0">{article.tag}</span>
              </div>
            </Link>
          </div>
        ))}
        
        <div className="group cursor-pointer pt-2">
          <div className="flex items-center justify-between">
            <Link href="/writing" className="text-xs text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
              show more ↗
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
} 