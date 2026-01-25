import Link from "next/link";
import { notFound } from "next/navigation";
import Footer from "@/components/Footer";
import CodeHighlighter from "@/components/CodeHighlighter";
import {
  getDevToArticleById,
  formatDate,
  getCoverImage,
} from "@/lib/devto";

// Allow dynamic params - pages will be generated on demand
export const dynamicParams = true;

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const article = await getDevToArticleById(id);

  if (!article) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#0a050d]">
      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20">
        {/* Back Link */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-400 hover:text-[#4ade80] transition-colors mb-8"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          Back to Blog
        </Link>

        {/* Header */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#4ade80] mb-4 leading-tight">
          {article.title}
        </h1>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-8">
          <span className="text-gray-400">{formatDate(article.published_at)}</span>
          <span className="text-gray-600">·</span>
          <span className="text-gray-400">
            {article.reading_time_minutes} min read
          </span>
          <span className="text-gray-600">·</span>
          <div className="flex flex-wrap gap-2">
            {(article.tags || article.tag_list || []).map((tag, index) => (
              <span
                key={index}
                className="px-2 py-1 text-xs font-medium text-[#f472b6] bg-[#f472b6]/10 rounded"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>

        {/* Featured Image */}
        {article.cover_image && (
          <div className="rounded-2xl overflow-hidden mb-12">
            <img
              src={getCoverImage(article.cover_image)}
              alt={article.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {/* Content */}
        <CodeHighlighter html={article.body_html} />

        {/* Author & Original Link */}
        <div className="border-t border-gray-800 pt-8 mt-12 mb-8">
          <p className="text-gray-400 mb-4">
            Originally published on{" "}
            <Link
              href={article.url}
              target="_blank"
              className="text-[#4ade80] hover:underline"
            >
              dev.to
            </Link>
          </p>
          <p className="text-gray-400">
            Follow me on{" "}
            <Link
              href="https://x.com/100rabhcsmc"
              target="_blank"
              className="text-[#4ade80] hover:underline"
            >
              X
            </Link>{" "}
            for more content.
          </p>
        </div>

        <Footer />
      </main>
    </div>
  );
}
