'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import NewsCard from './NewsCard';
import { NewsArticle } from '../types/NewsArticle';

type Props = {
  news: NewsArticle[];
  isLoading?: boolean;
};

export default function NewsFeed({ news, isLoading = false }: Props) {
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

  if (isLoading) {
    return (
      <div className="news-grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card news-card" style={{ opacity: 0.7 }}>
            <div style={{ height: '200px', background: '#e5e7eb', animation: 'pulse 1.5s infinite' }} />
            <div className="card-content">
              <div style={{ height: '20px', background: '#e5e7eb', marginBottom: '12px', borderRadius: '4px' }} />
              <div style={{ height: '80px', background: '#e5e7eb', borderRadius: '4px' }} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="news-grid">
      {news.length > 0 ? (
        news.map((article, index) => (
          <NewsCard 
            key={index} 
            article={article} 
            priority={index < 3}        // First 3 cards load faster
          />
        ))
      ) : (
        <div className="no-news">
          No news found right now.<br />
          Please check your API key or try again later.
        </div>
      )}
    </div>
  );
}