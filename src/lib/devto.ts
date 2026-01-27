const DEV_TO_USERNAME = "100rabhcsmc";

export interface DevToArticle {
  id: number;
  title: string;
  description: string;
  published_at: string;
  url: string;
  cover_image: string | null;
  tag_list: string[];
  reading_time_minutes: number;
}

export interface DevToArticleFull extends DevToArticle {
  body_html: string;
  body_markdown: string;
  tags: string[];
  user: {
    name: string;
    username: string;
    profile_image: string;
  };
}

export async function getDevToArticles(): Promise<DevToArticle[]> {
  try {
    const response = await fetch(
      `https://dev.to/api/articles?username=${DEV_TO_USERNAME}`,
      { next: { revalidate: 60 } } // Revalidate every minute
    );

    if (!response.ok) {
      throw new Error("Failed to fetch articles");
    }

    const articles: DevToArticle[] = await response.json();

    // Only show articles that have the "portfolio" tag
    const portfolioArticles = articles.filter((article) =>
      article.tag_list?.some((tag) => tag.toLowerCase() === "portfolio")
    );

    return portfolioArticles;
  } catch (error) {
    console.error("Error fetching dev.to articles:", error);
    return [];
  }
}

export async function getDevToArticleById(
  id: string
): Promise<DevToArticleFull | null> {
  try {
    const response = await fetch(`https://dev.to/api/articles/${id}`, {
      next: { revalidate: 60 }, // Revalidate every hour
    });

    if (!response.ok) {
      return null;
    }

    const article: DevToArticleFull = await response.json();
    return article;
  } catch (error) {
    console.error("Error fetching dev.to article:", error);
    return null;
  }
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

// Default cover image for articles without one
export function getCoverImage(coverImage: string | null): string {
  return (
    coverImage ||
    "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
  );
}
