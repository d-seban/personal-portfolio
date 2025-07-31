import Image from 'next/image'
import { Mail, Instagram, Github } from 'lucide-react'
import PrinciplesBox from './PrinciplesBox'

export default function Hero() {
  const clientLogos = [
    { name: "SBI Growth", logo: "/logos/SBI Growth.png" },
    { name: "Technori", logo: "/logos/Technori.jpeg" },
    { name: "Salesflow", logo: "/logos/Salesflow.jpeg" },
    { name: "Exposure Ninja", logo: "/logos/Exposure Ninja.jpeg" },
    { name: "Pok Pok", logo: "/logos/Pok Pok.jpg" },
    { name: "DreamWalk", logo: "/logos/DreamWalk.jpeg" },
    { name: "RIO", logo: "/logos/RIO.jpg" },
    { name: "AtlasFX", logo: "/logos/AtlasFX.jpg" },
    { name: "SRG", logo: "/logos/SRG.png" }
  ]

  return (
    <section className="py-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
        {/* Left side - Description + Summary */}
        <div className="space-y-6 max-w-none">
          {/* Description */}
          <div className="space-y-3">
            <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="text-gray-900 dark:text-white font-bold">Generalist:</span> vibe coder, functional designer, good marketer → strong at building things people love
            </p>
          </div>
          
          {/* Summary */}
          <div className="space-y-4">
            <div>
              <h2 className="text-base font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider mb-3">
                Summary
              </h2>
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  <span className="text-base text-gray-700 dark:text-gray-300">26 years old, based in India</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  <span className="text-base text-gray-700 dark:text-gray-300">
                    Currently building cool things at <span className="text-gray-900 dark:text-white font-bold">KaizenX</span> & <span className="text-gray-900 dark:text-white font-bold">Bonzai Studio</span>
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  <span className="text-base text-gray-700 dark:text-gray-300">
                    Previously crunched numbers as a Financial Advisor at <span className="inline-block align-middle mx-0.5">
                      <div className="w-5 h-5 bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-[#303030] rounded-full flex items-center justify-center overflow-hidden">
                        <img 
                          src="/logos/Deloitte.jpeg" 
                          alt="Deloitte" 
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </span> <span className="text-gray-900 dark:text-white font-bold">Deloitte</span>
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  <span className="text-base text-gray-700 dark:text-gray-300">
                    Collaborated with over 100 companies since 2018 <span className="inline-flex items-center ml-0.5">
                      {clientLogos.map((client, index) => (
                        <div 
                          key={index} 
                          className="relative group"
                          style={{ marginLeft: index > 0 ? '-6px' : '0' }}
                        >
                          <div className="w-5 h-5 bg-white dark:bg-[#1C1C1C] border border-gray-200 dark:border-[#303030] rounded-full flex items-center justify-center cursor-pointer hover:border-gray-300 dark:hover:border-gray-500 transition-all hover:z-10 relative shadow-sm overflow-hidden">
                            <img 
                              src={client.logo} 
                              alt={client.name} 
                              className="w-full h-full object-cover rounded-full"
                            />
                          </div>
                          <div className="absolute bottom-7 left-1/2 transform -translate-x-1/2 bg-gray-800 dark:bg-[#161616] text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-20">
                            {client.name}
                          </div>
                        </div>
                      ))}
                      <span className="text-gray-500 dark:text-gray-400 text-xs ml-1 font-medium">+</span>
                    </span>
                  </span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  <span className="text-base text-gray-700 dark:text-gray-300">I work end-to-end across product, design, marketing & strategy — whatever drives impact.</span>
                </div>
                <div className="flex items-start space-x-2">
                  <span className="w-1 h-1 bg-gray-400 dark:bg-gray-600 rounded-full flex-shrink-0 mt-2"></span>
                  <span className="text-base text-gray-700 dark:text-gray-300">Constantly reverse-engineering what makes people click, share, and care online</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Social Links - Left Section Only */}
          <div className="pt-4 border-t border-gray-100 dark:border-[#303030]">
            <div className="flex items-center space-x-4">
              <a href="mailto:dawn@kaizenxlabs.com" className="group">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#1C1C1C] rounded-full flex items-center justify-center group-hover:bg-gray-100 dark:group-hover:bg-[#1C1C1C] transition-colors">
                  <Mail className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-gray-800 dark:group-hover:text-gray-200 dark:group-hover:drop-shadow-[0_0_8px_rgba(156,163,175,0.6)] transition-all" />
                </div>
              </a>
              <a href="https://x.com/theonlyseban" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#1C1C1C] rounded-full flex items-center justify-center group-hover:bg-gray-900 dark:group-hover:bg-[#1C1C1C] transition-colors">
                  <svg className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-white dark:group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)] transition-all" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </div>
              </a>
              <a href="https://instagram.com/theonlyseban" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#1C1C1C] rounded-full flex items-center justify-center group-hover:bg-pink-50 dark:group-hover:bg-[#1C1C1C] transition-colors">
                  <Instagram className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-pink-600 dark:group-hover:drop-shadow-[0_0_8px_rgba(236,72,153,0.6)] transition-all" />
                </div>
              </a>
              <a href="https://github.com/d-seban" target="_blank" rel="noopener noreferrer" className="group">
                <div className="w-12 h-12 bg-gray-50 dark:bg-[#1C1C1C] rounded-full flex items-center justify-center group-hover:bg-orange-50 dark:group-hover:bg-[#1C1C1C] transition-colors">
                  <Github className="w-6 h-6 text-gray-600 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:drop-shadow-[0_0_8px_rgba(234,88,12,0.6)] transition-all" />
                </div>
              </a>
            </div>
          </div>
        </div>
        
        {/* Right side - Profile Photo + Principles Box (Compressed) */}
        <div className="flex flex-col items-center lg:items-start space-y-3 max-w-xs lg:ml-auto">
          {/* Profile Photo - Smaller */}
          <div className="relative w-full">
            <img
              src="/profile-photo.jpg"
              alt="Profile photo"
              className="rounded-xl shadow-lg object-cover aspect-square w-full"
            />
          </div>
          
          {/* Principles Box - Compressed */}
          <div className="w-full">
            <PrinciplesBox />
          </div>
        </div>
      </div>
    </section>
  )
} 