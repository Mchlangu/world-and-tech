export default function Loading() {
  return (
    <div className="news-section">
      <div className="news-grid">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="card news-card" style={{ opacity: 0.6 }}>
            <div style={{ height: '200px', background: '#e5e7eb', animation: 'pulse 1.5s infinite' }} />
            <div className="card-content">
              <div style={{ height: '20px', background: '#e5e7eb', marginBottom: '12px', borderRadius: '4px' }} />
              <div style={{ height: '80px', background: '#e5e7eb', borderRadius: '4px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}