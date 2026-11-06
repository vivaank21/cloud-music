import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Headphones, Search } from 'lucide-react';
import type { CSSProperties } from 'react';
import { TrackCard } from '../components/music/TrackCard';
import { MusicPreloader } from '../components/music/MusicPreloader';
import { searchMusic } from '../services/music';
import type { Track } from '../services/music';

const genres = ['Electronic', 'Hip-Hop', 'Bollywood', 'Gujarati', 'Punjabi', 'Classical', 'Lo-Fi', 'Pop'];

export function HomePage() {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    void searchMusic('top songs')
      .then((results) => {
        if (active) setTracks(results.slice(0, 8));
      })
      .catch((cause: unknown) => {
        if (active) setError(cause instanceof Error ? cause.message : 'Music catalog is unavailable.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });
    return () => { active = false; };
  }, []);

  return (
    <div>
      {loading && <MusicPreloader />}
      <section className="hero-banner" style={tracks[0]?.artwork ? { '--hero-art': `linear-gradient(90deg, rgba(15, 16, 23, 0.97) 0%, rgba(20, 17, 30, 0.88) 45%, rgba(17, 17, 24, 0.24) 100%), url("${tracks[0].artwork}")` } as CSSProperties : undefined}>
        <div className="hero-copy">
          <div className="eyebrow"><Headphones size={14} /> Your music, your mood</div>
          <h1>A little more music in your day.</h1>
          <p>Discover tracks, listen to official previews, and find your next favorite sound.</p>
          <Link className="hero-cta" to="/search"><Search size={16} /> Explore music <ArrowRight size={16} /></Link>
        </div>
      </section>

      <section>
        <div className="section-header">
          <h2>Popular right now</h2>
          <Link to="/search?q=top%20songs">See all</Link>
        </div>
        <p className="section-description">A fresh mix selected from the music catalog.</p>
        {error && <p className="status-message error-message" role="alert">{error}</p>}
        {!loading && !error && tracks.length === 0 && <p className="status-message">No popular tracks are available right now.</p>}
        {tracks.length > 0 && <div className="grid-cards">{tracks.map((track) => <TrackCard key={track.id} track={track} />)}</div>}
      </section>

      <section>
        <div className="section-header">
          <h2>Browse by genre</h2>
          <Link to="/discover">Explore</Link>
        </div>
        <div className="grid-cards">
          {genres.map((genre) => (
            <Link key={genre} to={`/search?q=${encodeURIComponent(genre)}`} className="music-card genre-card">
              <div className="genre-tile" style={{ background: `linear-gradient(135deg, ${genreColors[genre][0]}, ${genreColors[genre][1]})` }}><span>{genre}</span></div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

const genreColors: Record<string, [string, string]> = {
  Electronic: ['#6142a1', '#245e74'],
  'Hip-Hop': ['#a14b32', '#542a6e'],
  Bollywood: ['#bd5c3c', '#9d3674'],
  Gujarati: ['#328271', '#4454a0'],
  Punjabi: ['#b77826', '#a34351'],
  Classical: ['#5b6497', '#75549e'],
  'Lo-Fi': ['#496e7a', '#73508e'],
  Pop: ['#a84f75', '#514a96']
};
