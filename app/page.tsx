import Link from 'next/link';
import ScrollToNews from './components/ScrollToNews';
import { CATEGORY_CONFIG } from './constants/constants';

export default function Home() {
  return (
    <>
      {/* HEADER */}
      <header>
        <div className="header-container">
          <div className="site-title">WT</div>
        </div>
      </header>

      {/* STICKY NAVIGATION */}
      <div className="nav-sticky-wrapper">
        <nav className="nav-links">
          {Object.entries(CATEGORY_CONFIG).map(([key, cat]) => (
            <Link
              key={key}
              href={`?category=${key}`}
              className={key === 'all' ? 'active' : ''}
            >
              {cat.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* HERO SECTION */}
      <main>
        <section className="hero" id="home">
          <div className="hero-content">
            <h1 className="hero-title">THE WORLD AND ITS TECHNOLOGY</h1>
            <p className="hero-subtitle">
              Real-time African news on AgriTech • FinTech • MineTech — built in ZA
            </p>
            <ScrollToNews />
          </div>
        </section>

        {/* News section*/}
        <section id="news" className="news-section">
          <div className="news-grid">
            <div className="no-news">
              News feed..
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-container">
          <div className="social-icons">
            <a href="https://x.com/WorldAndTech" target="_blank" rel="noopener noreferrer">𝕏</a>
          </div>
          <div className="copyright">© {new Date().getFullYear()} WillamTwinkles</div>
        </div>
      </footer>
    </>
  );
}