import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { TrackCard } from '../components/music/TrackCard';
import { MusicPreloader } from '../components/music/MusicPreloader';
import { searchMusic } from '../services/music';
import type { Track } from '../services/music';

export function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q')?.trim() ?? '';
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    if (!query) {
      setTracks([]);
      setError(null);
      setLoading(false);
      return () => { active = false; };
    }

    setLoading(true);
    setError(null);
    void searchMusic(query)
      .then((results) => {
        if (active) setTracks(results);
      })
      .catch((cause: unknown) => {
        if (active) setError(cause instanceof Error ? cause.message : 'Music search failed.');
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => { active = false; };
  }, [query]);

  return (
    <div>
      {loading && <MusicPreloader />}
      <h1 className="page-title">Search</h1>
      <form
        className="page-search-form"
        onSubmit={(event) => {
          event.preventDefault();
          const value = new FormData(event.currentTarget).get('q')?.toString().trim() ?? '';
          setSearchParams(value ? { q: value } : {});
        }}
      >
        <input aria-label="Search songs and artists" name="q" key={query} defaultValue={query} placeholder="Search songs or artists" />
        <button className="pill-button" type="submit">Search</button>
      </form>

      {query && <h2 className="search-heading">Results for “{query}”</h2>}
      {error && <p className="status-message error-message" role="alert">{error}</p>}
      {!loading && !error && query && tracks.length === 0 && <p className="status-message">No matching tracks found. Try another search.</p>}
      {!query && <div className="search-empty"><strong>Find your next favorite</strong><span>Search for a song, artist, or album to explore available tracks.</span></div>}

      {tracks.length > 0 && (
        <div className="grid-cards">
          {tracks.map((track) => <TrackCard key={track.id} track={track} />)}
        </div>
      )}
    </div>
  );
}
