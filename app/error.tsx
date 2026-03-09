'use client';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="news-section" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
      <h2 style={{ marginBottom: '1rem' }}>Something went wrong!</h2>
      <p style={{ marginBottom: '2rem', color: '#666' }}>
        {error.message || 'Failed to load news. Please check your API key.'}
      </p>
      <button 
        onClick={reset} 
        className="hero-btn"
        style={{ padding: '0.8rem 2rem' }}
      >
        Try again
      </button>
    </div>
  );
}