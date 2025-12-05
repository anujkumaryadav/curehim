'use client'

import { Calendar, Clock, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Blog = () => {
  const posts = [
    {
      category: 'AI & Technology',
      title: 'The Future of AI in Preventive Healthcare',
      excerpt: 'Discover how artificial intelligence is revolutionizing early disease detection and personalized prevention strategies.',
      date: 'Dec 3, 2025',
      readTime: '5 min read',
      image: 'bg-gray-100'
    },
    {
      category: 'Wellness',
      title: 'Holistic Approaches to Mental Health',
      excerpt: 'Exploring the integration of traditional and modern techniques for comprehensive mental wellness.',
      date: 'Dec 1, 2025',
      readTime: '7 min read',
      image: 'bg-gray-100'
    },
    {
      category: 'Innovation',
      title: 'Wearable Tech: Your Personal Health Guardian',
      excerpt: 'How smart devices are transforming continuous health monitoring and early warning systems.',
      date: 'Nov 28, 2025',
      readTime: '6 min read',
      image: 'bg-grey-100'
    }
  ]

  return (
    <section id="blog" className="relative py-24 bg-gradient-to-b from-white via-purple-50/20 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(127,117,255,0.08),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 rounded-full bg-[#7F75FF]/10 border border-[#7F75FF]/20 mb-4">
            <span className="text-sm font-semibold text-[#7F75FF]">INSIGHTS & UPDATES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-[#7F75FF] bg-clip-text text-transparent">
            Latest from Our Blog
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with the latest trends, research, and innovations in healthcare
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-200/50 hover:border-[#7F75FF]/30 transition-all duration-500 hover:shadow-2xl hover:shadow-[#7F75FF]/10 hover:-translate-y-2"
            >
              <div className={`h-48 ${post.image} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm text-xs font-semibold text-[#7F75FF]">
                    {post.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-[#7F75FF] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <button className="flex items-center gap-2 text-[#7F75FF] font-semibold group-hover:gap-3 transition-all">
                  Read More
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-[#7F75FF] text-[#7F75FF] hover:bg-[#7F75FF] hover:text-white px-8 py-6 text-lg rounded-full transition-all duration-300"
          >
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Blog
