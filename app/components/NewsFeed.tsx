'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import NewsCard from './NewsCard';
import { NewsArticle } from '../types/NewsArticle';

type Props = {
  news: NewsArticle[];
};

export default function NewsFeed({ news }: Props) {
  const searchParams = useSearchParams();
  const currentCategory = searchParams.get('category') || 'all';

  useEffect(() => {
    const timer = setTimeout(() => {
      document.getElementById('news')?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }, 100);
    return () => clearTimeout(timer);
  }, [currentCategory]);

  return (
    <div className="news-grid">
      {news.length > 0 ? (
        news.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))
      ) : (
        <div className="no-news">
          No news found right now. Please check your API key or try again later.
        </div>
      )}
    </div>
  );
}