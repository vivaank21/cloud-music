import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import morgan from 'morgan';
import musicRoutes from './routes/musicRoutes.js';
import { errorHandler, notFound } from './middleware/error.js';
import { env } from './config/env.js';

const app = express();

app.use(helmet({ crossOriginResourcePolicy: false }));
app.use(cors({ origin: env.corsOrigin }));
app.use(express.json({ limit: '1mb' }));
app.use(morgan('dev'));
app.use(rateLimit({ windowMs: 15 * 60 * 1000, max: 200, standardHeaders: true, legacyHeaders: false }));

app.get('/api/health', (_req, res) => {
  res.json({ success: true, data: { status: 'ok', service: 'cloud-music-backend' } });
});

app.use('/api/music', musicRoutes);

app.use(notFound);
app.use(errorHandler);

export default app;
