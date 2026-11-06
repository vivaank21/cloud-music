import type { NormalizedTrack, MusicProvider } from '../../../types/index.js';
import type { ProviderTrackResult } from './provider.types.js';

export class MusicProviderService {
  static normalizeTrack(track: ProviderTrackResult): NormalizedTrack {
    return {
      id: track.id,
      provider: track.provider as MusicProvider,
      providerTrackId: track.id,
      title: track.title,
      artist: track.artist,
      album: track.album,
      artwork: track.artwork,
      duration: track.duration,
      previewUrl: track.previewUrl,
      playbackUrl: track.playbackUrl,
      externalUrl: track.externalUrl,
      genre: track.genre,
      releaseDate: track.releaseDate,
      isPlayable: track.isPlayable,
      availabilityType: track.availabilityType
    };
  }
}
