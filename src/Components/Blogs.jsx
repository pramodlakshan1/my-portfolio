import React from 'react';

const BLOG_DATA = [
  {
    id: 'blog-1',
    date: 'Jan 15, 2026',
    readTime: '5 min read',
    title: 'Mastering the Singleton Design Pattern in Java and Spring Boot',
    excerpt: 'Deep dive into standard thread-safe execution patterns, double-checked locking mechanisms, and how Spring manages Singletons natively within its IoC Container.',
    tags: ['Java', 'Design Patterns', 'Spring Boot'],
    slug: '#',
  },
  {
    id: 'blog-2',
    date: 'Feb 02, 2026',
    readTime: '4 min read',
    title: 'Building Microservices Ecosystems Using the MERN Stack Architecture',
    excerpt: 'An architectural breakdown of decoupled state processing across cluster networks using Node.js, Express gateways, and secure MongoDB clustering.',
    tags: ['MERN Stack', 'Microservices', 'Node.js'],
    slug: '#',
  }
];

const Blogs = () => {
  return (
    <section id="blogs" className="py-24 px-4 sm:px-6 bg-black text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-[0.2em] text-gray-500 uppercase mb-3 block">
            Publications & Insights
          </span>
          <h2 className="text-4xl md:text-6xl font-black tracking-tight">
            Technical 
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Writing</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mt-4" />
        </div>

        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {BLOG_DATA.map((post) => (
            <article 
              key={post.id}
              className="group relative bg-gradient-to-b from-gray-900/40 to-gray-950/70 border border-gray-900 rounded-3xl p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:border-gray-800/80 hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            >
              <div>
                {/* Meta Row */}
                <div className="flex items-center gap-4 text-xs font-mono text-gray-500 mb-6">
                  <time>{post.date}</time>
                  <span className="w-1 h-1 bg-gray-700 rounded-full" />
                  <span>{post.readTime}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold tracking-tight mb-4 text-white/90 group-hover:text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-all duration-300">
                  <a href={post.slug}>{post.title}</a>
                </h3>

                {/* Excerpt Summary */}
                <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
              </div>

              <div>
                {/* Tag Pill Clouds */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {post.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono bg-gray-900 text-gray-400 px-2.5 py-1 rounded-md border border-gray-800/60">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Interactive Base Action Link */}
                <div className="pt-4 border-t border-gray-950">
                  <a href={post.slug} className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors group/link">
                    Read Article 
                    <span className="transform transition-transform duration-300 group-hover/link:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>

            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Blogs;