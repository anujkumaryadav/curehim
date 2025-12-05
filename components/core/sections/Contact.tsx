'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact-us" className="relative py-24 bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(127,117,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#7F75FF]/10 border border-[#7F75FF]/20 mb-4">
            <span className="text-sm font-semibold text-[#7F75FF]">GET IN TOUCH</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-[#7F75FF] bg-clip-text text-transparent">
            Let's Start Your Health Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? We're here to help you every step of the way
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Contact Information</h3>
              
              <div className="space-y-6">
                {[
                  { icon: Mail, label: 'Email', value: 'contact@curehim.fit' },
                  { icon: Phone, label: 'Phone', value: '+91 90960 20595' },
                  { icon: MapPin, label: 'Address', value: 'Ganesh Nagar Borgaon Meghe, Wardha - 442001' }
                ].map((item, index) => {
                  const Icon = item.icon
                  return (
                    <div key={index} className="flex items-start gap-4 group">
                      <div className="w-12 h-12 rounded-xl bg-[#7F75FF] p-3 group-hover:scale-110 transition-transform">
                        <Icon className="w-full h-full text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500 mb-1">{item.label}</div>
                        <div className="text-gray-900 font-medium">{item.value}</div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="bg-[#7F75FF] rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">24/7 Emergency Support</h3>
              <p className="mb-6 text-white/90">
                Our dedicated team is available round the clock for urgent medical consultations and support.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-[#7F75FF] hover:bg-gray-100 rounded-full w-full"
              >
                Emergency Contact
              </Button>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 border border-gray-200/50 space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#7F75FF] focus:ring-2 focus:ring-[#7F75FF]/20 outline-none transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#7F75FF] focus:ring-2 focus:ring-[#7F75FF]/20 outline-none transition-all"
                placeholder="john@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#7F75FF] focus:ring-2 focus:ring-[#7F75FF]/20 outline-none transition-all"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-[#7F75FF] focus:ring-2 focus:ring-[#7F75FF]/20 outline-none transition-all resize-none"
                placeholder="Tell us how we can help you..."
                required
              />
            </div>

            <Button 
              type="submit"
              size="lg" 
              className="w-full bg-[#7F75FF] hover:bg-[#6B5FE8] text-white py-6 text-lg rounded-full shadow-lg shadow-[#7F75FF]/30 hover:shadow-xl hover:shadow-[#7F75FF]/40 transition-all duration-300 group"
            >
              Send Message
              <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
