# 🎧 Cloud Music

A database-free music discovery app. Search a JioSaavn-compatible catalog, browse by genre, and play official track previews through a shared player, all backed by a small Express API that acts as a server-side proxy.

![Node](https://img.shields.io/badge/Node.js-20%2B-339933?logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-6-646CFF?logo=vite&logoColor=white)
![Express](https://img.shields.io/badge/Express-4-000000?logo=express&logoColor=white)

---

## ✨ Features

- **Catalog search**: find songs by title, artist, or album
- **Home feed**: "Popular right now" tracks and a hero banner driven by track artwork
- **Browse by genre**: Electronic, Hip-Hop, Bollywood, Gujarati, Punjabi, Classical, Lo-Fi, Pop
- **Shared player**: play/pause, seek bar, and volume control that persist across pages
- **Preview playback**: plays only the previews exposed by the catalog API; full releases open at the provider
- **Secure API layer**: Helmet, CORS allow-list, rate limiting, and Zod input validation
- **No database, no accounts**: nothing to migrate or configure

## 🧱 Tech Stack

| Layer    | Technology                                                        |
| -------- | ----------------------------------------------------------------- |
| Frontend | React 19, TypeScript, Vite, React Router 7, Tailwind CSS, Lucide  |
| Backend  | Node.js, Express 4, TypeScript, Zod, Helmet, Morgan, express-rate-limit |
| Tooling  | npm workspaces (monorepo), `concurrently`, `tsx`                  |

## 📁 Project Structure

```text
.
├── frontend/                 # React + Vite client
│   └── src/
│       ├── pages/            # HomePage, DiscoverPage, SearchPage
│       ├── components/
│       │   ├── layout/       # App shell: sidebar, search bar, player bar
│       │   └── music/        # PlayerContext, TrackCard, MusicPreloader
│       ├── services/         # API client (music.ts)
│       └── styles/
├── backend/                  # Express API
│   └── src/
│       ├── config/           # Environment loading
│       ├── controllers/      # Route handlers
│       ├── middleware/       # Error handling, async wrapper
│       ├── routes/           # /api/music routes
│       ├── services/music/   # Catalog provider + track normalization
│       ├── types/ & utils/
│       ├── app.ts            # Middleware + route mounting
│       └── server.ts         # Entry point
├── .env.example              # Environment template
└── package.json              # Workspace root
```

## 🚀 Getting Started

### Prerequisites

- **Node.js 20+** and **npm 10+**

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/<vivaank21>/<spotify>.git
cd <your-repo>

# 2. Install dependencies for both workspaces
npm install

# 3. Create your environment file
cp .env.example .env          # Windows PowerShell: Copy-Item .env.example .env

# 4. Start the frontend and backend together
npm run dev
```

| Service  | URL                     |
| -------- | ----------------------- |
| Frontend | http://localhost:5173   |
| API      | http://localhost:4000   |

## ⚙️ Environment Variables

All variables live in a single `.env` file at the repository root and are shared by both workspaces.

| Variable             | Default                              | Description                                         |
| -------------------- | ------------------------------------ | --------------------------------------------------- |
| `VITE_API_BASE_URL`  | `http://localhost:4000/api`          | API URL used by the frontend                        |
| `VITE_APP_NAME`      | `Cloud Music`                        | App display name                                    |
| `PORT`               | `4000`                               | Backend port                                        |
| `NODE_ENV`           | `development`                        | Runtime environment                                 |
| `CORS_ORIGIN`        | `http://localhost:5173`              | Allowed origin(s); separate multiple with commas    |
| `MUSIC_API_BASE_URL` | `https://saavnapi-nine.vercel.app`   | JioSaavn-compatible catalog API the backend proxies |

> ⚠️ Never commit your real `.env`. It is already listed in `.gitignore`; only `.env.example` should be tracked.

## 📜 Scripts

Run from the repository root:

| Command         | What it does                                      |
| --------------- | ------------------------------------------------- |
| `npm run dev`   | Runs the frontend (Vite) and backend (tsx watch)  |
| `npm run build` | Type-checks and builds the frontend, then the backend |

Run a single workspace with `--workspace`:

```bash
npm run dev --workspace frontend
npm run dev --workspace backend
npm run start --workspace backend      # run the compiled API (after build)
npm run preview --workspace frontend   # preview the production frontend build
```

## 🔌 API Reference

Base URL: `http://localhost:4000/api`

| Method | Endpoint                   | Description                          |
| ------ | -------------------------- | ------------------------------------ |
| `GET`  | `/health`                  | Service health check                 |
| `GET`  | `/music/search?q=<query>`  | Search tracks (`q` required, max 120 characters) |
| `GET`  | `/music/trending`          | Popular tracks                       |
| `GET`  | `/music/recommendations`   | New-music recommendations            |

**Response envelope**

```json
{
  "success": true,
  "data": {
    "tracks": [
      {
        "id": "jiosaavn-abc123",
        "provider": "jiosaavn",
        "title": "Song title",
        "artist": "Artist name",
        "album": "Album name",
        "artwork": "https://…",
        "duration": 215,
        "previewUrl": "https://…",
        "isPlayable": true,
        "availabilityType": "preview"
      }
    ]
  }
}
```

Errors return `{ "success": false, "error": "…" }` with an appropriate status code. The API is rate limited to 200 requests per 15 minutes per client.

## ⚠️ Notes

- Cloud Music plays **previews only**. There is no download feature and no full-track streaming.
- Track data comes from a third-party, JioSaavn-compatible API. Availability and uptime depend on that service, so point `MUSIC_API_BASE_URL` to your own compatible endpoint for production use.
- This project is for learning and demonstration. Check the catalog provider's terms before deploying it publicly.

## 🗺️ Roadmap

- [ ] Artist and album detail pages
- [ ] Queue, next/previous, shuffle, and repeat controls
- [ ] Response caching for the catalog proxy
- [ ] Docker setup and CI workflow

## 🤝 Contributing

Contributions, issues, and feature requests are welcome. Fork the repo, create a feature branch, and open a pull request.

## 👤 Author

**Vishu**: [GitHub](https://github.com/<vivaank21>)
