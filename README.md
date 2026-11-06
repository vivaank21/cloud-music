# Cloud Music

Cloud Music is a database-free music discovery app. The React/Vite frontend searches a JioSaavn-compatible catalog, plays available track previews, and uses a small Express API as a server-side proxy.

## Requirements

- Node.js 20+ and npm 10+
- No database or account setup

## Setup

From the repository root:

```powershell
npm install
Copy-Item .env.example .env
npm run dev
```

The frontend is served at `http://localhost:5173` and the API at `http://localhost:4000`. Configure `MUSIC_API_BASE_URL` and `CORS_ORIGIN` in the root `.env` if needed.

## Build

```powershell
npm run build
```

## Features

- Responsive React interface with a cinematic, artwork-led hero
- Catalog search, discovery categories, and official audio previews
- Shared player with seek and volume controls
- No database, migrations, user accounts, playlist creation, liked songs, or download feature
- Full releases open at the provider; Cloud Music only plays previews exposed by the catalog API

## Project layout

- `frontend/src` — React pages, player, Three.js visual, and styles
- `backend/src` — Express API and music catalog integration

## API

- `GET /api/health`
- `GET /api/music/search?q=...`
- `GET /api/music/trending`
- `GET /api/music/recommendations`
