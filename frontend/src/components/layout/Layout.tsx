import { Home, Compass, Search, Pause, Play, Volume2, ExternalLink, Sparkles } from 'lucide-react';
import { useState } from 'react';
import type { FormEvent } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { usePlayer } from '../music/PlayerContext';

const navItems = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/discover', label: 'Discover', icon: Compass },
  { to: '/search', label: 'Search', icon: Search }
];

export function Layout({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const { track, isPlaying, currentTime, duration, volume, error, togglePlayback, seek, setVolume } = usePlayer();
  const submitSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const query = search.trim();
    if (query) navigate(`/search?q=${encodeURIComponent(query)}`);
  };

  const formatTime = (time: number) => `${Math.floor(time / 60)}:${String(Math.floor(time % 60)).padStart(2, '0')}`;

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-mark">C</div>
          CLOUD MUSIC
        </div>

        <div className="nav-caption">Your space</div>
        <div className="nav-group">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </div>

        <div className="sidebar-note">
          <strong><Sparkles size={14} /> Preview listening</strong>
          <span>Play official track previews and open the provider for full releases.</span>
        </div>
      </aside>

      <main className="main-panel">
        <div className="topbar">
          <form className="search-bar" onSubmit={submitSearch}>
            <Search size={18} color="#A1A1B2" />
            <input aria-label="Search music" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search songs, artists, albums" />
          </form>

        </div>

        {children}
      </main>

      <aside className="right-panel">
        <div className="now-playing">
          {track ? (
            <>
              {track.artwork && <div className="now-playing-art"><img src={track.artwork} alt={`${track.album || track.title} artwork`} /></div>}
              <div>
                <div className="now-playing-label"><span className="playing-indicator" /> Now playing</div>
                <div className="now-playing-title">{track.title}</div>
                <div className="now-playing-artist">{track.artist}</div>
              </div>
              <div className="now-playing-note">
                You’re listening to an official preview.
                {track.externalUrl && <div style={{ marginTop: 12 }}><a className="provider-link" href={track.externalUrl} target="_blank" rel="noreferrer">Open full track <ExternalLink size={14} /></a></div>}
              </div>
            </>
          ) : (
            <div className="empty-player">
              <Sparkles size={34} />
              <strong>Nothing playing yet</strong>
              <span>Pick a track to start listening.</span>
            </div>
          )}
        </div>
      </aside>

      <div className="player-bar">
        <div className="player-track">
          {track?.artwork && <img className="player-cover" src={track.artwork} alt="" />}
          <div className="player-track-copy">
            <div className="player-title">{track?.title ?? 'Choose a track'}</div>
            <div className="player-subtitle">{track?.artist ?? 'Cloud Music previews'}</div>
          </div>
        </div>

        <div>
          <div className="player-controls">
            <button className="round-button primary" aria-label={isPlaying ? 'Pause' : 'Play'} type="button" onClick={togglePlayback} disabled={!track?.isPlayable}>
              {isPlaying ? <Pause size={19} /> : <Play size={19} fill="currentColor" />}
            </button>
          </div>
          <div className="progress-wrap">
            <span className="time-label">{formatTime(currentTime)}</span>
            <input
              className="timeline-input"
              type="range"
              min="0"
              max={duration || 0}
              step="0.1"
              value={Math.min(currentTime, duration || 0)}
              onChange={(event) => seek(Number(event.target.value))}
              aria-label="Playback position"
              disabled={!duration}
            />
            <span className="time-label">{formatTime(duration)}</span>
          </div>
          {error && <div className="player-error" role="status">{error}</div>}
        </div>

        <div className="volume-panel">
          <Volume2 size={18} aria-hidden="true" />
          <input className="volume-input" type="range" min="0" max="1" step="0.01" value={volume} onChange={(event) => setVolume(Number(event.target.value))} aria-label="Volume" />
        </div>
      </div>
      <nav className="mobile-nav" aria-label="Main navigation">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `mobile-nav-item ${isActive ? 'active' : ''}`}>
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
