import { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';
import type { Track } from '../../services/music';

type PlayerContextValue = {
  track: Track | null;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  volume: number;
  error: string | null;
  playTrack: (track: Track) => void;
  togglePlayback: () => void;
  seek: (time: number) => void;
  setVolume: (volume: number) => void;
};

const PlayerContext = createContext<PlayerContextValue | null>(null);

export function PlayerProvider({ children }: { children: ReactNode }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [track, setTrack] = useState<Track | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolumeState] = useState(0.8);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (audioRef.current) audioRef.current.volume = volume;
  }, [volume]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio || !track) return;
    audio.pause();
    if (!track.previewUrl) {
      setIsPlaying(false);
      setError('No playable preview is available for this track.');
      return;
    }

    setError(null);
    setCurrentTime(0);
    audio.src = track.previewUrl;
    void audio.play().catch(() => {
      setIsPlaying(false);
      setError('Playback could not start. Try pressing play again.');
    });
  }, [track]);

  const togglePlayback = useCallback(() => {
    const audio = audioRef.current;
    if (!audio || !track?.previewUrl) {
      setError('Choose a track with an available preview to play.');
      return;
    }
    if (audio.paused) {
      void audio.play().catch(() => {
        setError('Playback could not start. Try another track.');
      });
    } else {
      audio.pause();
    }
  }, [track]);

  const seek = useCallback((time: number) => {
    if (audioRef.current) audioRef.current.currentTime = time;
    setCurrentTime(time);
  }, []);

  const setVolume = useCallback((nextVolume: number) => {
    const normalizedVolume = Math.min(1, Math.max(0, nextVolume));
    if (audioRef.current) audioRef.current.volume = normalizedVolume;
    setVolumeState(normalizedVolume);
  }, []);

  return (
    <PlayerContext.Provider value={{
      track,
      isPlaying,
      currentTime,
      duration,
      volume,
      error,
      playTrack: setTrack,
      togglePlayback,
      seek,
      setVolume
    }}>
      {children}
      <audio
        ref={audioRef}
        preload="none"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setIsPlaying(false);
          setError('This preview could not be played. Try another track.');
        }}
      />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const player = useContext(PlayerContext);
  if (!player) throw new Error('usePlayer must be used within a PlayerProvider.');
  return player;
}
