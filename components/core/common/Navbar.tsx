'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Sparkles } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = ['Home', 'Services', 'Blog', 'Contact Us']

  return (
    <>
      <nav 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-lg shadow-[#7F75FF]/5 border-b border-gray-200/50' 
            : 'bg-white/60 backdrop-blur-md'
        }`}
      >
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left */}
            <div className="shrink-0 group cursor-pointer">
              <div className="flex items-center gap-2">
                <div className="relative">
                  
                </div>
                <h1 className="text-4xl font-bold bg-[#7F75FF] bg-clip-text text-transparent">
                  cure<span className='font-normal'>him</span>
                </h1>
              </div>
            </div>

            {/* Navigation Links - Center (Desktop) */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center gap-1 px-2 py-2 rounded-full bg-gray-100/80 backdrop-blur-sm">
                {navLinks.map((link, index) => (
                  <a
                    key={link}
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="relative px-6 py-2.5 text-sm font-medium text-gray-700 hover:text-[#7F75FF] transition-all duration-300 rounded-full group"
                  >
                    <span className="relative z-10">{link}</span>
                    <div className="absolute inset-0 bg-white rounded-full opacity-0 group-hover:opacity-100 shadow-md transition-all duration-300 scale-95 group-hover:scale-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Buttons - Right (Desktop) */}
            <div className="hidden md:flex items-center gap-3">
              <Button 
                variant="outline" 
                className="border-2 border-gray-200 text-gray-700 hover:border-[#7F75FF] hover:text-[#7F75FF] hover:bg-[#7F75FF]/5 rounded-full px-6 transition-all duration-300"
              >
                Login
              </Button>
              <Button 
                className="bg-[#7F75FF] text-white rounded-full px-6 shadow-lg shadow-[#7F75FF]/30 hover:shadow-xl hover:shadow-[#7F75FF]/40 transition-all duration-300 hover:scale-105"
              >
                Connect Now
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-[#7F75FF]/10 to-purple-600/10 hover:from-[#7F75FF]/20 hover:to-purple-600/20 flex items-center justify-center transition-all duration-300 hover:scale-110"
              >
                {isMenuOpen ? (
                  <X size={20} className="text-[#7F75FF]" />
                ) : (
                  <Menu size={20} className="text-[#7F75FF]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${
            isMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-200/50">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="block px-4 py-3 text-gray-700 hover:text-[#7F75FF] hover:bg-[#7F75FF]/5 rounded-xl font-medium transition-all duration-300 transform hover:translate-x-2"
                  onClick={() => setIsMenuOpen(false)}
                  style={{ 
                    animationDelay: `${index * 50}ms`,
                    animation: isMenuOpen ? 'slideIn 0.3s ease-out forwards' : 'none'
                  }}
                >
                  {link}
                </a>
              ))}
              <div className="pt-4 space-y-3">
                <Button 
                  variant="outline" 
                  className="w-full border-2 border-gray-200 text-gray-700 hover:border-[#7F75FF] hover:text-[#7F75FF] hover:bg-[#7F75FF]/5 rounded-xl py-6"
                >
                  Login
                </Button>
                <Button 
                  className="w-full bg-gradient-to-r from-[#7F75FF] to-purple-600 hover:from-[#6B5FE8] hover:to-purple-700 text-white rounded-xl py-6 shadow-lg shadow-[#7F75FF]/30"
                >
                  Connect Now
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
      
      {/* Spacer to prevent content from going under fixed navbar */}
      <div className="h-20" />

      <style jsx>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes gradient {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient {
          background-size: 200% auto;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </>
  )
}

export default Navbar
