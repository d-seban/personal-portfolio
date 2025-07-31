import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Photos from '@/components/Photos'
import Writing from '@/components/Writing'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors">
      <Header />
      <main className="max-w-4xl mx-auto px-6 py-8">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="space-y-8">
            <Projects />
            <Photos />
          </div>
          <div className="md:ml-4">
            <Writing />
          </div>
        </div>
      </main>
    </div>
  )
} 