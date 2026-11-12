# 🎧 Cloud Music

### Discover. Explore. Feel the Music.

**Your music discovery space.** Explore trending tracks, search your favourite songs, browse different genres, and discover music from around the world — all in one place.

\<p align="center">
&#x20; \<img src="[https://img.shields.io/badge/Status-Active-success?style=for-the-badge](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)" />
&#x20; \<img src="[https://img.shields.io/badge/Music-Discovery-8B5CF6?style=for-the-badge](https://img.shields.io/badge/Music-Discovery-8B5CF6?style=for-the-badge)" />
&#x20; \<img src="[https://img.shields.io/badge/Playback-Preview%20Only-EC4899?style=for-the-badge](https://img.shields.io/badge/Playback-Preview%20Only-EC4899?style=for-the-badge)" />
\</p>

\<p align="center">
&#x20; \<img src="[https://img.shields.io/badge/Node.js-20%2B-339933?style=flat-square&logo=node.js&logoColor=white](https://img.shields.io/badge/Node.js-20%2B-339933?style=flat-square\&logo=node.js\&logoColor=white)" />
&#x20; \<img src="[https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black](https://img.shields.io/badge/React-19-61DAFB?style=flat-square\&logo=react\&logoColor=black)" />
&#x20; \<img src="[https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript&logoColor=white](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square\&logo=typescript\&logoColor=white)" />
&#x20; \<img src="[https://img.shields.io/badge/Vite-6-646CFF?style=flat-square&logo=vite&logoColor=white](https://img.shields.io/badge/Vite-6-646CFF?style=flat-square\&logo=vite\&logoColor=white)" />
&#x20; \<img src="[https://img.shields.io/badge/Express-4-000000?style=flat-square&logo=express&logoColor=white](https://img.shields.io/badge/Express-4-000000?style=flat-square\&logo=express\&logoColor=white)" />
\</p>

---

## ✨ Experience Cloud Music

Cloud Music brings music discovery into one immersive experience. Whether you're looking for your favourite Bollywood songs, exploring Gujarati music, or discovering something completely new, there's always something to explore.

### 🌟 What You Can Do

| Feature               | Description                                                                          |
| --------------------- | ------------------------------------------------------------------------------------ |
| 🔍 Smart Search       | Find songs by title, artist, or album.                                               |
| 🔥 Trending Music     | Explore popular tracks and discover what's trending.                                 |
| 🎼 Genre Explorer     | Browse Bollywood, Gujarati, Punjabi, Hip-Hop, Electronic, Classical, Lo-Fi, and Pop. |
| 🎧 Music Player       | Enjoy a shared player with playback, seeking, and volume controls.                   |
| 🎨 Track Artwork      | Discover music through its album artwork and visual presentation.                    |
| ▶️ Preview Playback   | Listen to available official track previews.                                         |
| 🌐 External Listening | Open full releases through the original music provider.                              |

### 🎵 Music Discovery, Made Simple

- No account registration required.
- No complicated setup for listeners.
- No personal music library required.
- No database dependency.
- Discover music from a JioSaavn-compatible catalog.

---

## 🖥️ Explore the Experience

Cloud Music is designed around a modern music discovery experience:

- **Home:** A curated landing experience featuring popular music.
- **Discover:** Explore music across different genres.
- **Search:** Find tracks, artists, and albums.
- **Player:** Enjoy a consistent playback experience while navigating the application.

---

## 🧱 Under the Hood

| Layer              | Technology                       |
| ------------------ | -------------------------------- |
| Frontend           | React 19, TypeScript, Vite       |
| Navigation         | React Router 7                   |
| Styling            | Tailwind CSS                     |
| Icons              | Lucide                           |
| Backend            | Node.js, Express 4               |
| Validation         | Zod                              |
| Security           | Helmet, CORS, express-rate-limit |
| Logging            | Morgan                           |
| Package Management | npm Workspaces                   |

---

## 📂 Project Structure

```text
Cloud-Music/
│
├── frontend/
│   └── src/
│       ├── pages/
│       │   ├── HomePage
│       │   ├── DiscoverPage
│       │   └── SearchPage
│       │
│       ├── components/
│       │   ├── layout/
│       │   └── music/
│       │
│       ├── services/
│       └── styles/
│
├── backend/
│   └── src/
│       ├── config/
│       ├── controllers/
│       ├── middleware/
│       ├── routes/
│       ├── services/
│       ├── types/
│       ├── utils/
│       ├── app.ts
│       └── server.ts
│
├── .env.example
├── .gitignore
└── package.json
```

---

## 🚀 Run Cloud Music Locally

### Requirements

- Node.js 20 or newer
- npm 10 or newer
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/vivaank21/spotify.git
```

```bash
cd spotify
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the project root.

```env
VITE_API_BASE_URL=http://localhost:4000/api
VITE_APP_NAME=Cloud Music

PORT=4000
NODE_ENV=development

CORS_ORIGIN=http://localhost:5173

MUSIC_API_BASE_URL=https://saavnapi-nine.vercel.app
```

### 4. Start the Application

```bash
npm run dev
```

### 5. Open Cloud Music

| Service         | Local URL                                                            |
| --------------- | -------------------------------------------------------------------- |
| 🎧 Frontend     | [http://localhost:5173](http://localhost:5173)                       |
| ⚙️ Backend      | [http://localhost:4000](http://localhost:4000)                       |
| ❤️ Health Check | [http://localhost:4000/api/health](http://localhost:4000/api/health) |

---

## ⚙️ Environment Configuration

| Variable             | Default                            | Purpose                 |
| -------------------- | ---------------------------------- | ----------------------- |
| `VITE_API_BASE_URL`  | `http://localhost:4000/api`        | Backend API address     |
| `VITE_APP_NAME`      | `Cloud Music`                      | Application name        |
| `PORT`               | `4000`                             | Backend server port     |
| `NODE_ENV`           | `development`                      | Runtime environment     |
| `CORS_ORIGIN`        | `http://localhost:5173`            | Allowed frontend origin |
| `MUSIC_API_BASE_URL` | `https://saavnapi-nine.vercel.app` | Music catalog provider  |

> 🔐 **Security Reminder:** Never commit your real `.env` file. Keep sensitive configuration out of your public repository.

---

## 🔌 API Reference

The Express backend acts as a server-side proxy between Cloud Music and the external music catalog provider.

**Base URL**

```text
http://localhost:4000/api
```

| Method | Endpoint                     | Description                                |
| ------ | ---------------------------- | ------------------------------------------ |
| GET    | `/health`                    | Not used; see actual health endpoint below |
| GET    | `/api/health`                | Backend health check                       |
| GET    | `/api/music/search?q=query`  | Search music                               |
| GET    | `/api/music/trending`        | Retrieve trending tracks                   |
| GET    | `/api/music/recommendations` | Discover recommended music                 |

The paths above are relative to the backend host. For example, the health endpoint is:

```text
GET /api/health
```

### Example Response

```json
{
  "success": true,
  "data": {
    "status": "ok",
    "service": "cloud-music-backend"
  }
}
```

### Track Data

Music results are normalized into a consistent structure:

```json
{
  "id": "jiosaavn-abc123",
  "provider": "jiosaavn",
  "title": "Song Title",
  "artist": "Artist Name",
  "album": "Album Name",
  "artwork": "https://example.com/artwork.jpg",
  "duration": 215,
  "previewUrl": "https://example.com/preview",
  "isPlayable": true,
  "availabilityType": "preview"
}
```

---

## 🛡️ Security & Reliability

Cloud Music includes several backend protections:

- **Helmet:** Adds security-related HTTP headers.
- **CORS:** Restricts browser access to configured frontend origins.
- **Rate Limiting:** Limits API requests to 200 per 15 minutes per client.
- **Zod Validation:** Validates incoming request data.
- **Error Handling:** Provides consistent API error responses.

---

## ☁️ Deployment

Cloud Music uses separate hosting for its frontend and backend.

| Component     | Hosting                          |
| ------------- | -------------------------------- |
| Frontend      | Vercel                           |
| Backend API   | Render                           |
| Music Catalog | JioSaavn-compatible external API |

The frontend connects to the backend through `VITE_API_BASE_URL`.

The backend communicates with the external catalog provider through `MUSIC_API_BASE_URL`.

---

## ⚠️ Important Information

- Cloud Music currently supports **preview playback only**.
- Full-track streaming and music downloads are not provided.
- Track availability depends on the third-party catalog provider.
- External provider availability and uptime are not guaranteed.
- This project is intended for learning and demonstration purposes. Follow the catalog provider's terms and applicable music licensing requirements.

---

## 🗺️ Future Improvements

- [ ] Artist profile pages
- [ ] Album detail pages
- [ ] Music queue management
- [ ] Next and previous track controls
- [ ] Shuffle and repeat playback
- [ ] Improved music recommendations
- [ ] Catalog response caching
- [ ] Docker support
- [ ] Automated CI/CD workflow

---

## 🤝 Contributing

Have an idea to improve Cloud Music?

Contributions, bug reports, and feature requests are welcome.

1. Fork the repository.
2. Create a new feature branch.
3. Make your changes.
4. Submit a pull request.

---

## 👨‍💻 Author

**Vishu**

GitHub: [@vivaank21](https://github.com/vivaank21)

---

\<p align="center">
&#x20; \<strong>🎧 Made for music lovers.\</strong>
&#x20; \<br />
&#x20; Discover something new. Every day.
\</p>
