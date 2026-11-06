export type ProviderTrackResult = {
  id: string;
  provider: 'deezer' | 'itunes' | 'youtube' | 'spotify' | 'jiosaavn';
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
  availabilityType: 'playable' | 'preview' | 'unavailable';
};

export type MusicSearchResponse = {
  tracks: ProviderTrackResult[];
  artists: ProviderTrackResult[];
  albums: ProviderTrackResult[];
  videos: ProviderTrackResult[];
};
