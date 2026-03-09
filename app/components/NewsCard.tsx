import Image from 'next/image';
import { NewsArticle } from '../types/NewsArticle';

type Props = {
  article: NewsArticle;
};

export default function NewsCard({ article }: Props) {
  return (
    <article className="card news-card">
      <div className="card-img-wrapper">
        {article.image_url ? (
          <Image
            src={article.image_url}
            alt={article.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            style={{ objectFit: 'cover' }}
            quality={75}
          />
        ) : (
          <div className="card-img placeholder" />
        )}
      </div>

      <div className="card-content">
        <div className="news-meta">
          <div className="news-source">
            {article.source_id?.toUpperCase() || 'News'}
          </div>
          {article.pubDate && (
            <div className="news-date">
              {new Date(article.pubDate).toLocaleDateString('en-ZA')}
            </div>
          )}
        </div>

        <h3 className="card-title">{article.title}</h3>
        {article.description && (
          <p className="card-text">
            {article.description.length > 85
              ? article.description.slice(0, 85) + '...'
              : article.description}
          </p>
        )}

        <a
          href={article.link}
          target="_blank"
          rel="noopener noreferrer"
          className="read-more"
        >
          Read full article →
        </a>
      </div>
    </article>
  );
}