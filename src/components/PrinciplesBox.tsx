'use client'

import { useState, useEffect } from 'react'

export default function PrinciplesBox() {
  const principles = [
    {
      title: "Obsession beats inspiration.",
      subtitle: "Show up, even when it's boring."
    },
    {
      title: "Copy what works, remix what matters.",
      subtitle: "Originality is overrated. Taste isn't."
    },
    {
      title: "People remember utility, not effort.",
      subtitle: "No one cares how hard you worked — only what they got."
    },
    {
      title: "Great product. Greater distribution.",
      subtitle: "Treat all three like co-founders."
    },
    {
      title: "Simplicity Scales.",
      subtitle: "The most elegant solutions are usually the least visible."
    },
    {
      title: "Learn fast. Ship faster.",
      subtitle: "Momentum builds clarity."
    }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % principles.length)
    }, 4000) // Change every 4 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="border border-gray-200 dark:border-[#303030] dark:bg-[#121212] rounded-xl p-3 transition-colors">
      <div className="text-center">
        <p className="text-gray-400 dark:text-gray-500 text-xs uppercase tracking-wider mb-2">
          PRINCIPLES I TRULY BELIEVE IN
        </p>
        
        <div className="min-h-[45px] flex flex-col justify-center">
          <h3 className="text-gray-700 dark:text-gray-300 text-base font-medium leading-tight">
            {principles[currentIndex].title}
          </h3>
        </div>
        
        <div className="flex justify-center space-x-1.5 mt-2">
          {principles.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                index === currentIndex 
                  ? 'bg-gray-600 dark:bg-gray-400' 
                  : 'bg-gray-300 dark:bg-gray-600'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  )
} 