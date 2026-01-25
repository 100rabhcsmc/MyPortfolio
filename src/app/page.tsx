import Link from "next/link";
import Footer from "@/components/Footer";
import { getDevToArticles, formatDate, getCoverImage } from "@/lib/devto";

export default async function Home() {
  const articles = await getDevToArticles();
  const recentArticles = articles.slice(0, 6); // Show first 6 articles on home page

  return (
    <div className="min-h-screen bg-[#0a050d]">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Main Heading */}

       <h1 className="text-3xl md:text-5xl font-bold text-[#4ade80] mb-16">
        <span>Saurabh Chavan</span>
        <span className="text-2xl md:text-3xl font-semibold ml-2">/ Mobile App Developer</span>
      </h1>

      {/* Welcome Section */}
        <section className="mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">
            Welcome.
          </h2>

          <p className="text-gray-400 mb-6">
            I design and build production-ready mobile applications.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            Hi, I&apos;m <strong className="text-white">Saurabh Chavan</strong>, a React
            Native Developer with 4+ years of experience building scalable Android and
            iOS applications. I currently work as a Consultant at  <Link
      href="https://www.deloitte.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-[#f472b6] hover:underline"
    >
      Deloitte
    </Link>, where I focus
            on delivering reliable, high-performance mobile solutions.
          </p>

          <p className="text-gray-300 leading-relaxed mb-4">
            My work spans end-to-end mobile development—from architecture and state
            management to secure authentication, offline-first experiences, and
            performance optimization in real-world production apps.
          </p>

          <p className="text-gray-300 leading-relaxed">
            I care about clean code, thoughtful UX, and solving practical engineering
            problems. You can explore my work below or learn more{" "}
            <Link
              href="/about"
              className="text-[#4ade80] underline hover:text-[#22c55e] transition-colors"
            >
              about my background and experience
            </Link>
            .
          </p>
        </section>

        {/* Writing Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Writing.
            </h2>
            <Link
              href="/blog"
              className="text-sm text-[#4ade80] hover:underline"
            >
              View all posts →
            </Link>
          </div>
          <p className="text-gray-400 mb-8">Blog posts about coding & tech.</p>

          {/* Blog Post Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-fr">
            {recentArticles.map((article) => (
              <Link
                href={`/blog/${article.id}`}
                key={article.id}
                className="group"
              >
                <article className="relative rounded-2xl overflow-hidden bg-gray-900/50 border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 h-full flex flex-col">
                  <div className="aspect-[4/3] relative flex-shrink-0">
                    <img
                      src={getCoverImage(article.cover_image)}
                      alt={article.title}
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a050d] via-transparent to-transparent" />
                  </div>
                  <div className="p-6 pt-0 -mt-16 relative flex-grow flex flex-col">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-[#f472b6] bg-[#0a050d] rounded w-fit">
                        {formatDate(article.published_at)}
                      </span>
                      <span className="text-xs text-gray-500">
                        {article.reading_time_minutes} min read
                      </span>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-[#4ade80] transition-colors duration-300 line-clamp-2 mb-2">
                      {article.title}
                    </h3>
                    {article.tag_list && article.tag_list.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-auto">
                        {article.tag_list.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 text-xs text-gray-400 bg-gray-800/80 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
}
