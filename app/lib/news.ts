import { NewsArticle } from "../types/NewsArticle";
import { CATEGORY_CONFIG } from "../constants/constants";

const API_KEY = process.env.NEWSDATA_API_KEY;
const BASE_URL = "https://newsdata.io/api/1/latest";

async function fetchByQuery(query: string, size: number = 9): Promise<NewsArticle[]> {
  if (!API_KEY) return [];

  try {
    const url = `${BASE_URL}?apikey=${API_KEY}&country=za&language=en&q=${encodeURIComponent(
      query
    )}&size=${size}`;

    const res = await fetch(url, { next: { revalidate: 1800 } });
    if (!res.ok) return [];
    const data = await res.json();
    return data.results || [];
  } catch (error) {
    console.error("News fetch error:", error);
    return [];
  }
}

export async function getNews(category: string = "all"): Promise<NewsArticle[]> {
  if (category === "all") {
    const [agri, fintech, healthtech] = await Promise.all([
      fetchByQuery(CATEGORY_CONFIG.agri.query!, 4),
      fetchByQuery(CATEGORY_CONFIG.fin.query!, 3),
      fetchByQuery(CATEGORY_CONFIG.health.query!, 3),
    ]);

    const allArticles = [...agri, ...fintech, ...healthtech];
    const uniqueMap = new Map<string, NewsArticle>();
    allArticles.forEach(article => {
      if (article.link && !uniqueMap.has(article.link)) {
        uniqueMap.set(article.link, article);
      }
    });

    return Array.from(uniqueMap.values())
      .sort((a, b) => {
        const dateA = a.pubDate ? new Date(a.pubDate).getTime() : 0;
        const dateB = b.pubDate ? new Date(b.pubDate).getTime() : 0;
        return dateB - dateA;
      })
      .slice(0, 9);
  }

  const config = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG];
  if (config && 'query' in config && typeof config.query === 'string') {
    return fetchByQuery(config.query, 9);
  }

  return [];
}