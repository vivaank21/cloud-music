import { ExternalLink, Music2, Pause, Play } from 'lucide-react';
import { usePlayer } from './PlayerContext';
import type { Track } from '../../services/music';

export function TrackCard({ track }: { track: Track }) {
  const { track: currentTrack, isPlaying, playTrack, togglePlayback } = usePlayer();
  const isCurrentTrack = currentTrack?.id === track.id;

  return (
    <article className={`music-card track-card ${isCurrentTrack ? 'is-current' : ''}`}>
      <div className="track-cover-wrap">
        {track.artwork ? (
          <img className="music-card-image" src={track.artwork} alt={`${track.album || track.title} artwork`} loading="lazy" />
        ) : (
          <div className="cover-placeholder" aria-hidden="true"><Music2 size={32} /></div>
        )}
        {track.isPlayable && (
          <button
            className="cover-play"
            type="button"
            onClick={() => isCurrentTrack ? togglePlayback() : playTrack(track)}
            aria-label={`${isCurrentTrack && isPlaying ? 'Pause' : 'Play'} ${track.title}`}
          >
            {isCurrentTrack && isPlaying ? <Pause size={18} /> : <Play size={18} fill="currentColor" />}
          </button>
        )}
      </div>
      <div className="music-card-body">
        <p className="music-card-title">{track.title}</p>
        <div className="music-card-artist">{track.artist}{track.album ? ` · ${track.album}` : ''}</div>
        <div className="track-meta">
          <span className="availability-badge">{track.isPlayable ? 'Preview available' : 'Unavailable'}</span>
          <div className="track-actions">
            {track.externalUrl && (
              <a className="track-link" href={track.externalUrl} target="_blank" rel="noreferrer" aria-label={`Open ${track.title} at the music provider`} title="Open at provider">
                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
