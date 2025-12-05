'use client'

import { Brain, Heart, Activity, Shield, Zap, Users } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Brain,
      title: 'AI Diagnostics',
      description: 'Advanced AI-powered health analysis for accurate and instant diagnostics.',
      gradient: 'from-purple-500 to-[#7F75FF]'
    },
    {
      icon: Heart,
      title: 'Personalized Care',
      description: 'Tailored treatment plans designed specifically for your unique health profile.',
      gradient: 'from-[#7F75FF] to-blue-500'
    },
    {
      icon: Activity,
      title: 'Real-time Monitoring',
      description: 'Continuous health tracking with smart wearables and IoT integration.',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Data Security',
      description: 'Military-grade encryption ensuring your health data stays private and secure.',
      gradient: 'from-cyan-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Instant Results',
      description: 'Get lab results and consultations in minutes, not days.',
      gradient: 'from-teal-500 to-green-500'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with top specialists worldwide through our global healthcare network.',
      gradient: 'from-green-500 to-emerald-500'
    }
  ]

  return (
    <section id="services" className="relative py-24 bg-gradient-to-b from-white via-gray-50/50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(127,117,255,0.05),transparent_70%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#7F75FF]/10 border border-[#7F75FF]/20 mb-4">
            <span className="text-sm font-semibold text-[#7F75FF]">OUR SERVICES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-[#7F75FF] bg-clip-text text-transparent">
            Next-Gen Healthcare Solutions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology meets compassionate care to deliver exceptional health outcomes
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-white border border-gray-200/50 hover:border-[#7F75FF]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7F75FF]/10 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-full h-full text-white" />
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#7F75FF] transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>

                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7F75FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
