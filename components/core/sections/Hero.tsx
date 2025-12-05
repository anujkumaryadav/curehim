'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Sparkles } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(127,117,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(127,117,255,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#7F75FF]/10 border border-[#7F75FF]/20 mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-[#7F75FF]" />
          <span className="text-sm font-medium text-[#7F75FF]">Welcome to the Future of Healthcare</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-[#7F75FF] to-gray-900 bg-clip-text text-transparent leading-tight">
          Transform Your Health
          <br />
          <span className="text-[#7F75FF]">Journey Today</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Experience next-generation healthcare solutions powered by AI and innovation. 
          Your wellness, reimagined for tomorrow.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            size="lg" 
            className="bg-[#7F75FF] hover:bg-[#6B5FE8] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#7F75FF]/30 hover:shadow-xl hover:shadow-[#7F75FF]/40 transition-all duration-300 group"
          >
            Get Started
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-[#7F75FF] text-[#7F75FF] hover:bg-[#7F75FF]/5 px-8 py-6 text-lg rounded-full"
          >
            Learn More
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          {[
            { value: '50K+', label: 'Patients Served' },
            { value: '98%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Support Available' },
            { value: '100+', label: 'Expert Doctors' }
          ].map((stat, index) => (
            <div key={index} className="p-6 rounded-2xl bg-white/60 backdrop-blur-sm border border-gray-200/50 hover:border-[#7F75FF]/30 transition-all duration-300 hover:shadow-lg">
              <div className="text-3xl md:text-4xl font-bold text-[#7F75FF] mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Hero
