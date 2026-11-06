import type { NextFunction, Request, Response } from 'express';

export const notFound = (req: Request, res: Response) => {
  res.status(404).json({ success: false, error: `Route not found: ${req.originalUrl}` });
};

export const errorHandler = (err: Error, _req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  if (res.headersSent) {
    return next(err);
  }

  const message = process.env.NODE_ENV === 'production'
    ? 'Internal server error.'
    : err.message || 'Internal server error.';
  res.status(500).json({ success: false, error: message });
};
