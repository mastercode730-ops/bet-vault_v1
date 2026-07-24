import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { blogPosts, getBlogPost } from '@/lib/blog-posts';

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Bet Vault Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3);
  const whatsappUrl = `https://wa.me/918764465110?text=${encodeURIComponent(`Hi Bet Vault! I just read "${post.title}" and would like more info.`)}`;

  return (
    <main>
      <Navbar />

      <article className="pt-24 sm:pt-28 pb-14 sm:pb-20 bg-black">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Back link */}
          <Link
            href="/#blog"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-yellow-400 text-sm font-medium mb-6 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Blog
          </Link>

          {/* Category + read time */}
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs bg-yellow-600/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-600/20">
              {post.icon} {post.category}
            </span>
            <span className="text-gray-500 text-xs">{post.readTime}</span>
          </div>

          {/* Title */}
          <h1
            className="font-black text-white mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.6rem, 5vw, 3rem)', lineHeight: 1.2 }}
          >
            {post.title}
          </h1>

          {/* Hero image */}
          <div className="relative w-full rounded-2xl overflow-hidden border border-yellow-600/20 mb-10" style={{ aspectRatio: '16 / 9' }}>
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>

          {/* Content */}
          <div className="flex flex-col gap-6">
            {post.sections.map((section, idx) => (
              <div key={idx}>
                {section.heading && (
                  <h2
                    className="text-white font-bold mb-2"
                    style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}
                  >
                    {section.heading}
                  </h2>
                )}
                <p className="text-gray-400 leading-relaxed text-sm sm:text-base">{section.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div
            className="mt-12 rounded-2xl border border-yellow-600/20 p-6 sm:p-8 flex flex-col items-center text-center gap-4"
            style={{ background: 'linear-gradient(135deg, #111111 0%, #1A1200 50%, #111111 100%)' }}
          >
            <h3 className="text-white font-black text-lg sm:text-xl" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Ready to get started?
            </h3>
            <p className="text-gray-400 text-sm max-w-md">
              Get your Bet Vault ID set up in minutes and put these tips to use today.
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 gold-btn px-6 py-3 rounded-full font-bold text-sm"
            >
              Get Your ID Now
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* More posts */}
          {otherPosts.length > 0 && (
            <div className="mt-14">
              <h3
                className="text-white font-black mb-6"
                style={{ fontFamily: 'Montserrat, sans-serif', fontSize: 'clamp(1.2rem, 3vw, 1.6rem)' }}
              >
                More from the <span className="gold-text">Blog</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {otherPosts.map((p) => (
                  <Link
                    key={p.slug}
                    href={`/blog/${p.slug}`}
                    className="card-glow rounded-xl p-4 flex flex-col gap-2"
                  >
                    <span className="text-2xl">{p.icon}</span>
                    <span className="text-white font-bold text-sm leading-snug">{p.title}</span>
                    <span className="text-yellow-400 text-xs font-bold">Read More →</span>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </article>

      <Footer />
    </main>
  );
}
