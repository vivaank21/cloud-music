import { z } from 'zod';
import type { MusicSearchResponse } from './provider.types.js';
import { env } from '../../../config/env.js';

const saavnResponseSchema = z.array(z.object({
  id: z.string().optional(),
  songid: z.string().optional(),
  song: z.string().optional(),
  title: z.string().optional(),
  primary_artists: z.string().optional(),
  singers: z.string().optional(),
  album: z.string().optional(),
  image: z.string().url().optional(),
  duration: z.union([z.string(), z.number()]).optional(),
  vlink: z.string().url().optional(),
  media_preview_url: z.string().url().optional(),
  perma_url: z.string().url().optional()
}));

export class MusicApiService {
  static async search(query: string): Promise<MusicSearchResponse> {
    const url = new URL(env.musicApiBaseUrl);
    if (!url.pathname.endsWith('/result') && !url.pathname.endsWith('/result/')) {
      url.pathname = `${url.pathname.replace(/\/+$/, '')}/result/`;
    }
    url.search = '';
    url.searchParams.set('query', query.trim());

    const response = await fetch(url, { signal: AbortSignal.timeout(10000) });
    if (!response.ok) {
      throw new Error(`Music catalog request failed with status ${response.status}.`);
    }

    const results = saavnResponseSchema.parse(await response.json());
    return {
      tracks: results.map((track, index) => {
        const previewUrl = track.vlink ?? track.media_preview_url;
        const duration = Number(track.duration ?? 0);
        return {
          id: `jiosaavn-${track.id ?? track.songid ?? `${query}-${index}`}`,
          provider: 'jiosaavn',
          title: track.song ?? track.title ?? 'Untitled track',
          artist: track.primary_artists ?? track.singers ?? 'Unknown artist',
          album: track.album ?? '',
          artwork: track.image ?? '',
          duration: Number.isFinite(duration) ? duration : 0,
          previewUrl,
          playbackUrl: previewUrl,
          externalUrl: track.perma_url,
          isPlayable: Boolean(previewUrl),
          availabilityType: previewUrl ? 'preview' : 'unavailable'
        };
      }),
      artists: [],
      albums: [],
      videos: []
    };
  }
}
