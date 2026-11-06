import { Link } from 'react-router-dom';

const genres = ['Electronic', 'Hip-Hop', 'Bollywood', 'Gujarati', 'Punjabi', 'Classical', 'Lo-Fi', 'Pop', 'Rock', 'Jazz', 'R&B', 'Indie'];

export function DiscoverPage() {
  return (
    <div>
      <h1 className="page-title">Discover</h1>
      <p className="home-intro">Explore a style and find tracks from the music catalog.</p>
      <div className="grid-cards">
        {genres.map((genre, index) => (
          <Link key={genre} to={`/search?q=${encodeURIComponent(genre)}`} className="music-card genre-card">
            <div className="genre-tile" style={{ background: `linear-gradient(135deg, hsl(${(index * 43 + 258) % 360} 45% 44%), hsl(${(index * 43 + 298) % 360} 42% 28%))` }}><span>{genre}</span></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
