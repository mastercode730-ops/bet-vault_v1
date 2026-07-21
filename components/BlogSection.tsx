import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/blog-posts';

export default function BlogSection() {
  return (
    <section className="py-14 sm:py-20 bg-black" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section Header ── */}
        <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 bg-yellow-600/10 border border-yellow-600/30 rounded-full px-4 py-2 mb-4">
            <span className="text-yellow-400 text-xs font-semibold uppercase tracking-wider">
              From the Blog
            </span>
          </div>
          <h2
            className="font-black text-white mb-3 w-full"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.4rem, 4vw, 2.4rem)', lineHeight: 1.2 }}
          >
            Tips, Guides &amp;{' '}
            <span className="gold-text">Insights</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-xl">
            Stay sharp with strategies, platform updates, and betting guides from the Bet Vault team.
          </p>
        </div>

        {/* ── Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              target="_blank"
              rel="noopener noreferrer"
              className="card-glow rounded-2xl overflow-hidden flex flex-col"
            >
              <div className="relative w-full" style={{ aspectRatio: '16 / 9' }}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                <div className="flex items-center justify-between">
                  <span className="text-2xl">{post.icon}</span>
                  <span className="text-xs bg-yellow-600/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-600/20 whitespace-nowrap">
                    {post.category}
                  </span>
                </div>

                <h3 className="text-white font-bold text-base sm:text-lg leading-snug">
                  {post.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed flex-1">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1.5 text-yellow-400 hover:text-yellow-300 font-bold text-sm pt-2 border-t border-yellow-600/10 transition-colors">
                  Read More
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
