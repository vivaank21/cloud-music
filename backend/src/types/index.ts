export type AppError = {
  message: string;
  statusCode?: number;
};

export type MusicProvider = 'deezer' | 'itunes' | 'youtube' | 'spotify' | 'jiosaavn';

export type AvailabilityType = 'playable' | 'preview' | 'unavailable';

export type NormalizedTrack = {
  id: string;
  provider: MusicProvider;
  providerTrackId: string;
  title: string;
  artist: string;
  album: string;
  artwork: string;
  duration: number;
  previewUrl?: string;
  playbackUrl?: string;
  externalUrl?: string;
  genre?: string;
  releaseDate?: string;
  isPlayable: boolean;
  availabilityType: AvailabilityType;
};
