import { Router } from 'express';
import { getRecommendations, getTrending, searchMusic } from '../controllers/musicController.js';
import { asyncHandler } from '../middleware/asyncHandler.js';

const router = Router();

router.get('/search', asyncHandler(searchMusic));
router.get('/trending', asyncHandler(getTrending));
router.get('/recommendations', asyncHandler(getRecommendations));

export default router;
