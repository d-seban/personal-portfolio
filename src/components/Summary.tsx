import { Mail, Instagram, Github, Music } from 'lucide-react'

export default function Summary() {
  return (
    <section className="py-8">
      <div className="space-y-6">
        <div>
          <h2 className="text-sm font-medium text-gray-400 uppercase tracking-wider mb-4">
            Summary
          </h2>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">📍</span>
              <span className="text-gray-700">Currently I'm moving rectangles at</span>
              <span className="text-blue-600 font-medium">Solana ↗</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-green-500">🎨</span>
              <span className="text-gray-700">Previously I was designing for</span>
              <span className="text-blue-600 font-medium">Balaji ↗</span>
              <span className="text-gray-700">&</span>
              <span className="text-blue-600 font-medium">Network State ↗</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-red-500">🏢</span>
              <span className="text-gray-700">I've worked for 220 companies since 2016</span>
              <span className="text-yellow-500">🏆</span>
              <span className="text-blue-500">🚀</span>
              <span className="text-green-500">✨</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">25 years old, based in Bombay</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-blue-500">✅</span>
              <span className="text-gray-700">I built the first meme page network in India to 16M followers</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-orange-500">🔮</span>
              <span className="text-gray-700">I write a pretty smart newsletter called</span>
              <span className="text-blue-600 font-medium">Product Hacks ↗</span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center space-x-4 pt-4">
          <Mail className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <svg className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
          </svg>
          <Instagram className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <Github className="w-5 h-5 text-gray-400 hover:text-gray-600 cursor-pointer" />
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <Music className="w-4 h-4" />
            <span>Listening to Dissolve by Absafacto ↗</span>
          </div>
        </div>
      </div>
    </section>
  )
} 