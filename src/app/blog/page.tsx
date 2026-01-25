import Link from "next/link";
import Footer from "@/components/Footer";
import { getDevToArticles, formatDate, getCoverImage } from "@/lib/devto";

export default async function Blog() {
  const articles = await getDevToArticles();

  return (
    <div className="min-h-screen bg-[#0a050d]">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold text-[#4ade80] mb-3">
          Writing.
        </h1>
        <p className="text-gray-400 mb-8">
          Blog posts about coding & tech. 
        </p>

        {/* Blog Post Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 auto-rows-fr">
          {articles.map((article) => (
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
                  {article.description && (
                    <p className="text-gray-400 text-sm line-clamp-2 mb-3">
                      {article.description}
                    </p>
                  )}
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

        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400">No articles found.</p>
          </div>
        )}

        <Footer />
      </main>
    </div>
  );
}
