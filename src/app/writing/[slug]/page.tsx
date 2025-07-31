import Link from 'next/link'
import Header from '@/components/Header'

// This would typically come from a CMS or database
const getArticleBySlug = (slug: string) => {
  const articles = {
    'prompting-is-the-new-programming': {
      title: "Prompting is the New Programming",
      tag: "AI",
      content: `We used to write code to make machines do what we wanted. Now we write prompts to make them think like we do.

The skill isn't in knowing the right syntax. It's in knowing the right question.

I've seen this shift firsthand. Tools like GPT and Claude reward precision and context — not complexity. You can build landing pages, generate marketing angles, or draft product specs with a single line. But only if that line is intentional.

Prompting well means thinking clearly. It means:

• Knowing the outcome you want
• Giving the AI just enough to work with
• Iterating rapidly based on outputs

The best builders today aren't asking "What can AI do?" They're asking "What am I trying to prove?"

Use AI to:

• Think in public
• Test ideas before you build
• Ship faster than your second-guessing

Prompting isn't a hack. It's a new way to externalize thought.`
    },
    'design-for-flow-not-just-looks': {
      title: "Design for Flow, Not Just Looks",
      tag: "Design",
      content: `Bad design is loud. Great design is silent — like a waiter who refills your water before you even ask.

Too often, design is mistaken for decoration. Aesthetic polish. A pretty UI. But real design isn't about impressing — it's about removing resistance.

Great design reduces decision fatigue. It guides users through a journey so smooth they don't realize they're being guided. Every element has a reason to exist.

I once worked on a feature that looked elegant in Figma but confused 80% of first-time users. Why? Because we prioritized style over sequence. We were designing for ourselves, not for flow.

Flow means:

• One clear action per screen
• Visual hierarchy that reflects real intent
• No extra clicks, no dead ends

Useful design compounds. Every second you save the user adds up to trust.

Make it pretty — sure. But first, make it obvious.`
    },
    'the-3-30-300-rule-of-attention': {
      title: "The 3-30-300 Rule of Attention",
      tag: "Mental Model",
      content: `You don't get minutes. You get seconds.

3 to stop scrolling. 30 to decide if it's worth it. 300 if they're hooked.

This mental model works for:

• Landing pages
• Product onboarding
• Social content
• Sales decks

Everyone's designing for the 300. But most never earn the 3.

I've launched products that had strong value props — but buried them in paragraph three. Users bounced. Not because the product was wrong, but because the signal was too slow.

Think of it like dating: first impressions matter. People decide in a blink whether to give you more time.

So structure for layers:

• The hook (3 seconds): headline, visual, or first interaction
• The scan (30 seconds): bullets, benefits, demo gif
• The deep dive (300 seconds): case studies, walkthroughs, trials

Attention isn't given. It's earned in stages.`
    },
    'speed-isnt-the-goal-velocity-is': {
      title: "Speed Isn't the Goal. Velocity Is.",
      tag: "Philosophy",
      content: `Speed is motion. Velocity is motion with direction.

In the early days of building, I obsessed over pace. Ship fast. Fix later. Move.

But speed without a compass just leads to burnouts and backtracks. I've launched features that hit deadlines and missed the mark. Not because they were late — but because they weren't aligned.

Now I care more about why something is moving than how fast.

Before I greenlight anything, I ask:

• Is this moving us toward something meaningful?
• Will this compound?
• Are we solving a real problem, or chasing a distraction?

Velocity means:

• Directional clarity
• Strategic restraint
• Measurable progress

You can ship fast and still go in circles. True momentum comes from velocity.`
    },
    'people-dont-buy-products-they-join-stories': {
      title: "People Don't Buy Products. They Join Stories.",
      tag: "Growth",
      content: `People don't share your tool. They share what using it says about them.

I learned this while testing a product launch that had great utility but zero emotional pull. It worked — but no one talked about it. Why? It didn't give people a story to step into.

Every breakout product is a mirror:

• Duolingo = "I'm consistent. I'm learning."
• Figma = "I collaborate. I think in systems."
• Notion = "I'm organized and aesthetic."

Your growth engine is emotional resonance. Features just enable it.

If your user can't finish this sentence — "I use this because I'm the kind of person who ___" — then you're missing the story.

People don't adopt tools. They adopt identities.`
    },
    'build-the-smallest-thing-that-solves-the-deepest-pain': {
      title: "Build the Smallest Thing That Solves the Deepest Pain",
      tag: "Product",
      content: `Most MVPs are either too shallow to matter or too bloated to teach you anything.

The best ones do one thing: they solve something painful right now.

Your goal isn't to impress. It's to deliver relief.

Start with:

• What are people already trying to hack together?
• What's annoying enough to pay for?
• What's a moment that causes users to say: "I wish something just did this..."

I've seen tiny scripts turn into entire startups because they addressed one unmet moment with clarity.

Keep it brutal:

• No extra features
• No onboarding tour
• Just one click to value

Solve one thing so clearly it feels like magic. That's what spreads.

That's your real MVP.`
    }
  }
  return articles[slug as keyof typeof articles]
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug)
  
  if (!article) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors">
        <Header />
        <main className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center py-16">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article Not Found</h1>
            <Link href="/writing" className="text-blue-600 hover:text-blue-700 transition-colors">
              ← Back to fragments
            </Link>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <div className="mb-8">
          <Link href="/writing" className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-600 transition-colors">
            ← Back to fragments
          </Link>
        </div>
        
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{article.title}</h1>
          </header>
          
          <div className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
            {article.content}
          </div>
        </article>
      </main>
    </div>
  )
} 