'use client';

export default function ScrollToNews() {
  const scrollToNews = () => {
    const newsSection = document.getElementById('news');
    if (!newsSection) return;

    const offset = 25;
    const y = newsSection.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <button onClick={scrollToNews} className="hero-btn">
      Latest News
    </button>
  );
}