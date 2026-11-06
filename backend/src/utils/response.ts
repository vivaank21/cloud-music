export const ok = <T>(data: T, meta?: Record<string, unknown>) => ({
  success: true,
  data,
  meta: meta ?? {}
});

export const fail = (message: string, statusCode = 400) => ({
  success: false,
  error: message,
  statusCode
});

export const buildPagination = (page: number, limit: number, total: number) => ({
  page,
  limit,
  total,
  pages: Math.ceil(total / limit) || 1
});
