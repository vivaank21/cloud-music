export type Track = {
  id: string;
  provider: string;
  providerTrackId: string;
  title: string;
  artist: string;
  album: string;
  artwork: string;
  duration: number;
  previewUrl?: string;
  playbackUrl?: string;
  externalUrl?: string;
  isPlayable: boolean;
  availabilityType: 'playable' | 'preview' | 'unavailable';
};

const apiBaseUrl = (import.meta.env.VITE_API_BASE_URL ?? 'http://localhost:4000/api').replace(/\/+$/, '');

export async function searchMusic(query: string): Promise<Track[]> {
  const response = await fetch(`${apiBaseUrl}/music/search?q=${encodeURIComponent(query)}`);
  const result = await response.json() as {
    success: boolean;
    data?: { tracks: Track[] };
    error?: string;
  };

  if (!response.ok || !result.success || !result.data) {
    throw new Error(result.error ?? 'Music search is unavailable. Check that the backend is running.');
  }

  return result.data.tracks;
}
