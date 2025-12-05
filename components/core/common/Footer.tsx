'use client'

import { Heart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Partners', href: '#' }
    ],
    services: [
      { name: 'Telemedicine', href: '#' },
      { name: 'Lab Tests', href: '#' },
      { name: 'Prescriptions', href: '#' },
      { name: 'Health Records', href: '#' }
    ],
    resources: [
      { name: 'Blog', href: '#blog' },
      { name: 'Help Center', href: '#' },
      { name: 'Privacy Policy', href: '#' },
      { name: 'Terms of Service', href: '#' }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]

  return (
    <footer className="relative bg-gradient-to-b from-gray-50 to-white border-t border-gray-200/50 overflow-hidden">
      {/* Shadow effect from bottom to top */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#7F75FF]/10 via-[#7F75FF]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-purple-600/8 to-transparent pointer-events-none blur-xl" />
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(127,117,255,0.05),transparent_50%)]" />
      
      <div className="relative max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
            
              <h3 className="text-4xl font-bold text-[#7F75FF]">cure<span className='font-normal'>him</span></h3>
            </div>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Pioneering the future of healthcare with AI-driven solutions and compassionate care. 
              Your health, our priority.
            </p>
            <div className="space-y-3">
              <a href="mailto:hello@curehim.com" className="flex items-center gap-3 text-gray-600 hover:text-[#7F75FF] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-[#7F75FF]/10 flex items-center justify-center group-hover:bg-[#7F75FF]/20 transition-colors">
                  <Mail className="w-4 h-4 text-[#7F75FF]" />
                </div>
                <span className="text-sm">contact@curehim.fit</span>
              </a>
              <a href="tel:+15551234567" className="flex items-center gap-3 text-gray-600 hover:text-[#7F75FF] transition-colors group">
                <div className="w-8 h-8 rounded-lg bg-[#7F75FF]/10 flex items-center justify-center group-hover:bg-[#7F75FF]/20 transition-colors">
                  <Phone className="w-4 h-4 text-[#7F75FF]" />
                </div>
                <span className="text-sm">+91 9096020595</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <div className="w-8 h-8 rounded-lg bg-[#7F75FF]/10 flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#7F75FF]" />
                </div>
                <span className="text-sm">Ganesh Nagar Borgaon Meghe, Wardha - 442001</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-[#7F75FF] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-[#7F75FF] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-gray-900 uppercase tracking-wider mb-4">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-gray-600 hover:text-[#7F75FF] transition-colors text-sm">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <span>© {currentYear} curehim. Made with</span>
              <Heart className="w-4 h-4 text-[#7F75FF]" fill="#7F75FF" />
              <span>for better health</span>
            </div>

            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-gray-100 hover:bg-[#7F75FF] flex items-center justify-center transition-all duration-300 group hover:scale-110"
                  >
                    <Icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
