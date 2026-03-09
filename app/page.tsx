import Link from 'next/link';
import NewsFeed from './components/NewsFeed';
import ScrollToNews from './components/ScrollToNews';
import { getNews } from './lib/news';
import { CATEGORY_CONFIG } from './constants/constants';
import { Metadata } from 'next';

type Props = {
  searchParams: Promise<{ category?: string }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const { category = 'all' } = await searchParams;
  const config = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG] || CATEGORY_CONFIG.all;

  return {
    title: config.title,
    description: config.subtitle,
  };
}

export default async function Home({ searchParams }: Props) {
  const { category = 'all' } = await searchParams;
  const news = await getNews(category);

  const config = CATEGORY_CONFIG[category as keyof typeof CATEGORY_CONFIG] || CATEGORY_CONFIG.all;

  return (
    <>
      <header>
        <div className="header-container">
          <div className="site-title">WT</div>
        </div>
      </header>

      <div className="nav-sticky-wrapper">
        <nav className="nav-links">
          {Object.entries(CATEGORY_CONFIG).map(([key, cat]) => (
            <Link
              key={key}
              href={`?category=${key}`}
              className={category === key ? 'active' : ''}
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>

      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h1 className="hero-title">THE WORLD AND ITS TECHNOLOGY</h1>
            <p className="hero-subtitle">{config.subtitle}</p>
            <ScrollToNews />
          </div>
        </section>

        <section id="news" className="news-section">
          <NewsFeed news={news} />
        </section>
      </main>

      <footer>
        <div className="footer-container">
          <div className="social-icons">
            <a href="https://x.com/WorldAndTech" target="_blank" rel="noopener noreferrer">𝕏</a>
            <a href="#" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
          <div className="copyright">
            © {new Date().getFullYear()} WillamTwinkles. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}