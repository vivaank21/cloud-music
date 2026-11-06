import type { Request, Response } from 'express';
import { z } from 'zod';
import { MusicApiService } from '../services/music/providers/musicApiService.js';
import { MusicProviderService } from '../services/music/providers/musicProvider.js';
import { ok } from '../utils/response.js';

const searchQuerySchema = z.object({
  q: z.string().min(1).max(120)
});

export const searchMusic = async (req: Request, res: Response) => {
  const parsed = searchQuerySchema.safeParse(req.query);

  if (!parsed.success) {
    return res.status(400).json({ success: false, error: 'Search query is required.' });
  }

  const providerResults = await MusicApiService.search(parsed.data.q);
  const normalizedTracks = providerResults.tracks.map(MusicProviderService.normalizeTrack);

  return res.json(ok({
    tracks: normalizedTracks,
    artists: providerResults.artists,
    albums: providerResults.albums,
    videos: providerResults.videos
  }));
};

export const getTrending = async (_req: Request, res: Response) => {
  const { tracks } = await MusicApiService.search('top songs');
  return res.json(ok({ tracks: tracks.map(MusicProviderService.normalizeTrack) }));
};

export const getRecommendations = async (_req: Request, res: Response) => {
  const { tracks } = await MusicApiService.search('new music');
  return res.json(ok({ tracks: tracks.map(MusicProviderService.normalizeTrack) }));
};
