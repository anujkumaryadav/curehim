'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Home, ArrowLeft, Search, Sparkles } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-purple-50/30 to-blue-50/30 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(127,117,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(127,117,255,0.08),transparent_50%)]" />
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-20 h-20 rounded-full bg-[#7F75FF]/10 blur-xl animate-pulse" />
      <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-purple-600/10 blur-2xl animate-pulse delay-700" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    

        {/* 404 Number */}
        <div className="mb-8">
          <h2 className="text-[150px] md:text-[200px] font-bold leading-none bg-gradient-to-r from-[#7F75FF] via-purple-600 to-[#7F75FF] bg-clip-text text-transparent opacity-20">
            404
          </h2>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h3 className="text-3xl md:text-5xl font-bold mb-4 text-gray-900">
            Page Not Found
          </h3>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Oops! The page you're looking for seems to have taken a detour. 
            Don't worry, we'll help you get back on track to better health.
          </p>
        </div>


        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link href="/">
            <Button 
              size="lg" 
              className="bg-[#7F75FF] text-white px-8 py-6 text-lg rounded-full shadow-lg shadow-[#7F75FF]/30 hover:shadow-xl hover:shadow-[#7F75FF]/40 transition-all duration-300 group"
            >
              <Home className="mr-2 w-5 h-5" />
              Back to Home
            </Button>
          </Link>
          <Button 
            size="lg" 
            variant="outline" 
            onClick={() => window.history.back()}
            className="border-2 border-[#7F75FF] text-[#7F75FF] hover:bg-[#7F75FF]/5 px-8 py-6 text-lg rounded-full group"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </Button>
        </div>

        {/* Help text */}
        <p className="mt-12 text-sm text-gray-500">
          Need assistance? <Link href="#contact-us" className="text-[#7F75FF] hover:underline font-medium">Contact our support team</Link>
        </p>
      </div>
    </div>
  )
}
